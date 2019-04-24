import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageBackground, Modal, TextInput } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default function Home_View_Car2(props) {
  return(
  <Container>
    <ImageBackground source={require('../assets/page-bg/single-car.png')} style={{flex: 1}}>
      <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
        <Left>
          <TouchableOpacity onPress = {() =>{props.goBack()}} style={{backgroundColor: '#E5C035', margin: 0}}>
            <Image
              style={{width: 40, height: 40, margin: 20, resizeMode: 'contain',}}
              source={require('../assets/arrow-left.png')}
            />
          </TouchableOpacity>
        </Left>
        <Right>
          <Image
            style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
            source={require('../assets/emm-logo-large.png')}
          />
        </Right>
      </Header>
      <Content>
        <Grid>
          <Col style={{paddingLeft: 60}}>
            <Row style={{height: 35, marginTop: 100, alignContent: 'center', marginBottom: 10,}}>
              <Text style={styles.trapezoidInner}>{props.selectedCar1.year}</Text>
            </Row>
            <Row style={{height: 55, marginBottom: 5}}>
              <Text style={styles.titlePage}>{props.selectedCar1.make}</Text>
            </Row>
            <Row style={{height: 65, marginBottom: 100}}>
              <Text style={styles.titlePage}>{props.selectedCar1.model}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Year: {props.selectedCar1.year}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Make: {props.selectedCar1.make}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Model: {props.selectedCar1.model}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Engine: {props.selectedCar1.engine}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Horsepower: {props.selectedCar1.horsepower}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Fuel Delivery: {props.selectedCar1.fuelDelivery}</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Transmission: {props.selectedCar1.transmission}</Text>
            </Row>
          </Col>
          <Col style={{paddingRight: 80}}>
            <Row style={{marginTop: 180, marginBottom: 5, justifyContent: 'center'}}>
              <Image
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
              <TouchableOpacity>
                <Text style={styles.btnLg}>
                  G A L L E R Y
                </Text>
              </TouchableOpacity>
            </Row>
          </Col>           
        </Grid>
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
  },

  titlePage: {
    fontSize: 50,
    color: '#A4ADB7',
  },

  rowDetail: {
    height: 35,
  },

  textDetail: {
    fontSize: 15, 
    color: '#ffffff',
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
