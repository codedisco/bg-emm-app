import React, { Component } from 'react';
import { Animated, StyleSheet, TouchableOpacity, Image, ScrollView, FlatList, Modal, TextInput } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 200,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

//Show one car and its details 
function Car(props) {
  return(
    <View style={styles.row}>
        <View>
            <View><Image style={styles.imageStyle} source={props.photo} /></View>
        </View>
        <View>
            <Text style={styles.details}>{props.year} </Text>
            <Text style={styles.details}>{props.make} </Text>
            <Text style={styles.details}>{props.model} </Text>      
        </View>
    </View>
  );    
}

//show a list of cars in a horizontal plane
function Car_show(props){
  return(
    <View style={styles.row}>
      <FlatList
        horizontal={true}
        data={props.displayOfCars}
        renderItem={({item}) =>
          <Car
            year = {item.year}
            make = {item.make}
            model = {item.model}    
            photo = {item.photo}
          />
        }
        keyExtractor={item => item.id}
      />  
    </View>
  );
}

//Show all the cars to the guests in a horizontal swiping view. Two lists of cars based on the even or odd index is used.
export default function Home_View_All(props) {
  return(
    <View style={styles.container}>
      <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
        <Left>
          {/*This is the button that triggers the admin nav popup*/}
          <TouchableOpacity 
            onPress = {() =>{props.openCloseSecurityModal()}}
            style={{backgroundColor: 'transparent', height: 80, width: 80,}}>
          </TouchableOpacity>
            <Modal
              animationType="slide"
              transparent={false}
              visible={props.isVisibleModal}
              onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
              <Container style={{backgroundColor: 'lightgrey'}}>
                <Grid>
                  <Row>
                    <Col style={{alignItems: 'center', justifyContent: 'flex-end'}}>
                      <Text style={{fontSize: 20, color: '#4F5961', fontFamily: 'Inter-Black'}}>
                        E N T E R    P A S S W O R D
                      </Text>
                      <TextInput
                        keyboardType ="numeric"
                        disableFullscreenUI={true}
                        value={props.userEnterPwd}
                        maxLength={4}
                        autoFocus = {true}
                        secureTextEntry={true}
                        style={{fontSize: 25, backgroundColor: '#ffffff', borderColor: '#4F5961', borderWidth: 2.5, padding: 20, marginTop: 20 , width:300, alignItems: 'center', color: '#4F5961'}}
                        onChangeText={(text) => {props.login(text)}}
                      />
                    </Col>
                  </Row>
                  <Row style={{marginTop: 40}}>
                    <Col style={{alignItems: 'center', textAlign:"center"}}>
                      <TouchableOpacity 
                        onPress = {() =>{props.openCloseSecurityModal()}} 
                        style={{backgroundColor: '#4F5961', margin: 0, width:200, alignItems: 'center'}}>
                        <Text style={{color: '#ffffff', paddingHorizontal: 40, paddingVertical: 20, fontFamily: 'Inter-Black'}}>B A C K</Text>
                      </TouchableOpacity>                                    
                    </Col>
                  </Row>
              </Grid>
            </Container>
          </Modal>
        </Left>
        <Right>
          <Image fadeDuration={0}
            style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
            source={require('../assets/emm-logo-large.png')}
          />
        </Right>
      </Header>
      
      {/*Body of the page*/}
      <FadeInView style={styles.homeViewContainer}>
        <ScrollView horizontal= {true}>
          <View style={styles.twoRows}>
            <View>
              <Car_show displayOfCars={props.topDisplayOfCars}/>
            </View>
            <View style={styles.yellowLineTop}></View>
            <View style={styles.yellowLineBottom}></View>
            <View style={styles.row}>
              <Car_show displayOfCars={props.bottomDisplayOfCars}/>
            </View>
          </View>
        </ScrollView>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({      
  container: {
      flex: 1, 
      backgroundColor: '#4F5961',
  },
  //styles for the overall component    
  homeViewContainer: {
      paddingTop: 20,
      flex: 7,    
      display: "flex",
      backgroundColor:"#4F5961", //similar to the black color
  }, 
  row: {
      display: "flex",
      flexDirection:"row",
      justifyContent: "space-around",
      alignItems: 'center',
      backgroundColor: '#4F5961',
  },
  details: {
      color: "lightgrey",
      fontSize: 40,
      fontWeight: 'bold',
      lineHeight: 45,
      paddingLeft: 40,
      paddingRight: 150,
      fontFamily: 'Inter-Black'
  },
  twoRows: {
      display: "flex",
      flexDirection:"column",
  },
  yellowLineTop:{
      borderBottomColor: '#E5C035',
      borderBottomWidth: 5,
      width: "100%",
      marginTop: 25,
      marginBottom: 5,
  },
  yellowLineBottom:{
    borderBottomColor: '#E5C035',
    borderBottomWidth: 5,
    width: "100%",
    marginTop:5,
    marginBottom: 25,
  },
  imageStyle: {
      width: 400,
      height: 300,
      resizeMode: 'contain',
  }
});