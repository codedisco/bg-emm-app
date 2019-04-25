import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback, TouchableOpacity, Image, StyleSheet, ImageBackground, Modal, TextInput } from 'react-native';
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
        duration: 300,              // Make it take a while
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
    

export default function Home_View_2(props) {


  return(
  <Container style={{backgroundColor: '#4F5961'}}>
    <ImageBackground fadeDuration={0} source={require('../assets/page-bg/double-car.png')} style={{flex: 1}}>
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
      <Content style={{paddingTop: 175}}>
        <FadeInView>
        <Grid>
          <Col>
            <Row style={{alignItems: 'center'}}>
              <Col style={{width: '20%',}}>
                <TouchableWithoutFeedback onPress = {() =>{props.viewCar1()}}>
                  <View>
                    <Image fadeDuration={0}
                      style={{width: 100, height: 70, resizeMode: 'contain'}}
                      source={require('../assets/arrow-left-yellow.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </Col>
              <Col style={{width: '80%',}}>
                <TouchableWithoutFeedback onPress = {() =>{props.viewCar1()}}>
                  <View>
                    <Text style={styles.titleLeft}>
                      {props.selectedCar1.year}
                    </Text>
                    <Text style={styles.titleLeft}>
                      {props.selectedCar1.make}
                    </Text>
                    <Text style={styles.titleLeft}>
                      {props.selectedCar1.model}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </Col> 
            </Row>
            <Row style={styles.carRow}>
              <TouchableWithoutFeedback onPress = {() =>{props.viewCar1()}}>
                <View>
                  <Image fadeDuration={0}
                    style={{width: 450, height: 225, resizeMode: 'contain'}}
                    source={props.selectedCar1.photo}
                  />
                </View>
              </TouchableWithoutFeedback>
            </Row>
          </Col>
          <Col>
            <Row style={{alignItems: 'center'}}>
              <Col style={{width: '80%',}}>
                <TouchableWithoutFeedback onPress = {() =>{props.viewCar2()}}>
                  <View>
                    <Text style={styles.titleRight}>
                      {props.selectedCar2.year}
                    </Text>
                    <Text style={styles.titleRight}>
                      {props.selectedCar2.make}
                    </Text>
                    <Text style={styles.titleRight}>
                      {props.selectedCar2.model}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              </Col>
              <Col style={{width: '20%',}}>
                <TouchableWithoutFeedback onPress = {() =>{props.viewCar2()}}>
                  <View>
                    <Image fadeDuration={0}
                      style={{width: 100, height: 70, resizeMode: 'contain'}}
                      source={require('../assets/arrow-right-yellow.png')}
                    />
                  </View>
                </TouchableWithoutFeedback>
              </Col>
            </Row>
            <Row style={styles.carRow}>
              <TouchableWithoutFeedback onPress = {() =>{props.viewCar2()}}>
                <View>
                  <Image fadeDuration={0}
                    style={{width: 450, height: 225, resizeMode: 'contain'}}
                    source={props.selectedCar2.photo}
                  />
                </View>
              </TouchableWithoutFeedback>
            </Row>
          </Col>           
        </Grid>
        </FadeInView>
      </Content>
    </ImageBackground>
  </Container>

  );
}

const styles = StyleSheet.create({
  
  carRow: {
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 45,

  },

  titleLeft: {
    fontSize: 35,
    color: '#A4ADB7',
    textAlign: 'right',
    paddingRight: 45,
    lineHeight: 40,
    fontFamily: 'Inter-Black',
  },

  titleRight: {
    fontSize: 35,
    color: '#A4ADB7',
    textAlign: 'left',
    paddingLeft: 45,
    lineHeight: 40,
    fontFamily: 'Inter-Black',
  },
  
});
