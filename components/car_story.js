import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default function Admin_Homescreen(props) {
  return(
  <Container>
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
        <Col>
            <Text>{props.selectedCar.story[0].para}</Text>
            <Text>{props.selectedCar.story[1].para}</Text>
            <Text>{props.selectedCar.story[3].para}</Text>
        </Col>
        <Col>
            <Row style={{height: 65}}>
              <Text style={styles.titlePage}>Full Specs</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Year: {props.selectedCar.year}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Make: {props.selectedCar.make}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Model: {props.selectedCar.model}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Engine: {props.selectedCar.engine}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Horsepower: {props.selectedCar.horsepower}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Fuel Delivery: {props.selectedCar.fuelDelivery}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Transmission: {props.selectedCar.transmission}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Year: {props.selectedCar.brakes}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Make: {props.selectedCar.color}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Model: {props.selectedCar.interior}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Engine: {props.selectedCar.options}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Horsepower: {props.selectedCar.production}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Fuel Delivery: {props.selectedCar.price}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Transmission: {props.selectedCar.story[3].para}</Text>
            </Row>

            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Other Models Available: </Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Engine Lineup/Horsepower:</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Fuel Delivery:</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Colors:</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Interiors:</Text>
            </Row>
              <TouchableOpacity>
                <Text style={styles.btnLg}>
                  G A L L E R Y
                </Text>
              </TouchableOpacity>
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
    fontSize: 20,
    color: '#A4ADB7',
  },

  rowDetail: {
    height: 25,
  },

  textDetail: {
    fontSize: 10, 
    color: 'black',
  },

  btnLg: {
    fontSize: 25,
    color: '#A4ADB7',
    borderColor: "#A4ADB7",
    borderWidth: 4,
    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  
});
