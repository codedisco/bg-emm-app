import React, { Component } from 'react';
import { Animated, TouchableOpacity, Image, StyleSheet, ImageBackground, Modal, TextInput } from 'react-native';
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

export default function Home_View_1(props) {
  return(
  <Container style={{backgroundColor: '#4F5961',}}>
    <ImageBackground fadeDuration={0} source={require('../assets/page-bg/single-car.jpg')} style={{flex: 1}}>
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
      <Content>
        <FadeInView>
          <Grid>
            <Col style={{paddingLeft: 70}}>
              <Row style={{height: 35, marginTop: 92.5, alignContent: 'center', marginBottom: 10,}}>
                <View style={{width: 140, height: 40, justifyContent: 'center', alignItems: 'center'}}>
                  <Image fadeDuration={0} source={require('../assets/section-shape.png')} style={{width: 140, height: 40, resizeMode: 'stretch'}}/>
                  <Text style={{position: 'absolute', fontFamily: 'Inter-Black', color: '#4F5961', fontSize: 20, letterSpacing: 3}}>{props.selectedCar1.year}</Text>
                </View>
              </Row>
              <Row style={{height: 65}}>
                <Text style={styles.titlePage}>{props.selectedCar1.make}</Text>
              </Row>
              <Row style={{height: 65, marginBottom: 100}}>
                <Text style={styles.titlePage}>{props.selectedCar1.model}</Text>
              </Row>
              <Row style={styles.rowDetail}>
                <Text style={styles.textDetail}>
                  Year: {props.selectedCar1.year}{"\n"}
                  Make: {props.selectedCar1.make}{"\n"}
                  Model: {props.selectedCar1.model}{"\n"}
                  Engine: {props.selectedCar1.engine}{"\n"}
                  Horsepower: {props.selectedCar1.horsepower}{"\n"}
                  Fuel Delivery: {props.selectedCar1.fuelDelivery}{"\n"}
                  Transmission: {props.selectedCar1.transmission}{"\n"}
                </Text>
              </Row>
            </Col>
            <Col style={{paddingRight: 80}}>
              <Row style={{marginTop: 180, justifyContent: 'center'}}>
                <Image fadeDuration={0}
                style={{width: 500, height: 300, resizeMode: 'contain'}}
                source={props.selectedCar1.photo}
              />
              </Row>
              <Row style={{justifyContent: 'center'}}>
                <TouchableOpacity onPress={props.goToStory} style={{marginRight: 30}}>
                  <Text style={styles.btnLg}>
                    S T O R Y
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={props.goToGallery}>
                  <Text style={styles.btnLg}>
                    G A L L E R Y
                  </Text>
                </TouchableOpacity>
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
  
  /*This will be the shape that surrounds the year. This can also be reused for the the gallery and story pages.*/
  trapezoidInner: {
    
    fontSize: 25, 
    color: '#4F5961',
    backgroundColor: '#A4ADB7',
    paddingHorizontal: 5,
    paddingVertical: 3.5,
    width: 75,
    height: 40,
    fontFamily: 'Inter-Black',
  },

  titlePage: {
    fontSize: 50,
    color: '#A4ADB7',
    fontFamily: 'Inter-LightItalic-BETA',
  },

  rowDetail: {
    marginRight: 75,
  },

  textDetail: {
    fontSize: 15, 
    color: '#ffffff',
    lineHeight: 30,
    fontFamily: 'Inter-SemiBold'
  },

  btnLg: {
    fontSize: 20,
    color: '#A4ADB7',
    borderColor: "#A4ADB7",
    borderWidth: 4,
    paddingHorizontal: 50,
    paddingTop: 25,
    paddingBottom: 15,
    fontFamily: 'Inter-Black',
    textAlign: 'center'
  },
  
});
