import React, { Component } from 'react';
import { Animated, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
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
        duration: 275,              // Make it take a while
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

export default function Admin_Homescreen(props) {
  return(
  <Container style={{backgroundColor: '#4F5961'}}>
      <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
        <Left>
          <TouchableOpacity onPress = {() =>{props.goBack()}} style={{backgroundColor: '#E5C035', margin: 0}}>
            <Image fadeDuration={0}
              style={{width: 40, height: 40, margin: 20, resizeMode: 'contain',}}
              source={require('../assets/arrow-left.png')}
            />
          </TouchableOpacity>
        </Left>
        <Body>
            <View style={{width: 150, height: 40, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 55}}>
              <Image fadeDuration={0} source={require('../assets/section-shape.png')} style={{width: 150, height: 40, resizeMode: 'stretch'}}/>
              <Text style={{position: 'absolute', fontFamily: 'Inter-Black', color: '#4F5961', fontSize: 20}}>S T O R Y</Text>
            </View>
          <Text style={styles.titlePage}>{props.selectedCar.year + " " + props.selectedCar.make + " " + props.selectedCar.model} </Text>
        </Body>
        <Right>
          <Image fadeDuration={0}
            style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
            source={require('../assets/emm-logo-large.png')}
          />
        </Right>
      </Header>
      <FadeInView>
        <Grid>
          <Col style={{paddingLeft: 150, paddingRight: 75, paddingTop: 50}}>
              <Text style={styles.textStory}>{props.selectedCar.story[0].para}</Text>
              <Text style={styles.textStory}>{props.selectedCar.story[1].para}</Text>
              <Text style={styles.textStory}>{props.selectedCar.story[2].para}</Text>
              <Text style={styles.textStoryCredit}>{props.selectedCar.story[3].para}</Text>
          </Col>
          <Col style={{width: '25%', paddingTop: 50}}>
              <Row style={{height: 50}}>
                <Text style={styles.colTitle}>Full Specs</Text>
              </Row>
              <Row style={styles.rowDetail}>
                <Text style={styles.textDetail}>
                  Year: {props.selectedCar.year}{"\n"}
                  Make: {props.selectedCar.make}{"\n"}
                  Model: {props.selectedCar.model}{"\n"}
                  Engine: {props.selectedCar.engine}{"\n"}
                  Horsepower: {props.selectedCar.horsepower}{"\n"}
                  Fuel Delivery: {props.selectedCar.fuelDelivery}{"\n"}
                  Transmission: {props.selectedCar.transmission}{"\n"}
                  Brakes: {props.selectedCar.brakes}{"\n"}
                  Color: {props.selectedCar.color}{"\n"}
                  Interior: {props.selectedCar.interior}{"\n"}
                  Options: {props.selectedCar.options}{"\n"}
                  Production: {props.selectedCar.production}{"\n"}
                  Price New: {props.selectedCar.price}{"\n"}
                  Owner: {props.selectedCar.owner}{"\n"}
                </Text>
              </Row>
              <Row style={{height: 160}}>
                <TouchableOpacity onPress={props.goToGallery} style={{alignItems: "flex-start", marginTop: 30}}>
                  <Text style={styles.btnLg}>
                    G A L L E R Y
                  </Text>
                </TouchableOpacity>
              </Row>
          </Col>                     
        </Grid>          
      </FadeInView>
  </Container>

  );
}

const styles = StyleSheet.create({
  
  trapezoidInner: {
    
    fontSize: 25, 
    color: '#4F5961',
    backgroundColor: '#A4ADB7',
    paddingHorizontal: 5,
    paddingVertical: 3.5,
    width: 75,
    height: 40,
  },

  titlePage: {
    paddingLeft: 240,
    fontSize: 25,
    color: '#A4ADB7',
    fontFamily: 'Inter-SemiBold'
  },

  textStory: {
    color: '#ffffff', 
    fontSize: 17,
    lineHeight: 27,
    paddingBottom: 25,
    fontFamily: 'Inter-SemiBold'
  },

  textStoryCredit: {
    color: '#ffffff', 
    fontSize: 17,
    fontFamily: 'Inter-SemiBold'
  },

  colTitle: {
    fontSize: 22.5,
    color: '#A4ADB7',
    paddingBottom: 10,
    paddingRight: 141.5,
    borderBottomWidth: 5,
    borderBottomColor: '#E5C035',
    fontFamily: 'Inter-ExtraBold',
  },

  textDetail: {
    fontSize: 13, 
    color: '#ffffff',
    marginRight: 20,
    paddingTop: 15,
    lineHeight: 22.5,
    fontFamily: 'Inter-SemiBold',
  },

  btnLg: {
    fontSize: 20,
    color: '#A4ADB7',
    borderColor: "#A4ADB7",
    borderWidth: 4,
    paddingHorizontal: 30,
    paddingTop: 15,
    paddingBottom: 10,
    fontFamily: 'Inter-Black',
    textAlign: 'center'  
  },
  
});
