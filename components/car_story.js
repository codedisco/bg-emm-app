import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default function Admin_Homescreen(props) {
  return(
  <Container style={{backgroundColor: '#4F5961'}}>
      <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
        <Left>
          <TouchableOpacity onPress = {() =>{props.goBack()}} style={{backgroundColor: '#E5C035', margin: 0}}>
            <Image
              style={{width: 40, height: 40, margin: 20, resizeMode: 'contain',}}
              source={require('../assets/arrow-left.png')}
            />
          </TouchableOpacity>
        </Left>
        <Body>
          <Title>{props.selectedCar.year + " " + props.selectedCar.make + " " + props.selectedCar.model} </Title>
        </Body>
        <Right>
          <Image
            style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
            source={require('../assets/emm-logo-large.png')}
          />
        </Right>
      </Header>
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
                Owner: {props.selectedCar.story[3].para}{"\n"}
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
    fontSize: 25,
    color: '#A4ADB7',
  },

  textStory: {
    color: '#ffffff', 
    fontSize: 18,
    lineHeight: 30,
    paddingBottom: 25,
  },

  textStoryCredit: {
    color: '#ffffff', 
    fontSize: 20,
  },

  colTitle: {
    fontSize: 25,
    color: '#A4ADB7',
    paddingBottom: 10,
    paddingRight: 141.5,
    borderBottomWidth: 5,
    borderBottomColor: '#E5C035'
  },

  textDetail: {
    fontSize: 13, 
    color: '#ffffff',
    marginRight: 20,
    paddingTop: 15,
    lineHeight: 22.5,
  },

  btnLg: {
    fontSize: 20,
    color: '#A4ADB7',
    borderColor: "#A4ADB7",
    borderWidth: 4,
    paddingHorizontal: 30,
    paddingVertical: 15,
    textAlign: 'center'
  },
  
});
