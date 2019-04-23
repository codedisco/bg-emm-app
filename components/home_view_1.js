import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default function Admin_Homescreen(props) {
  return(
  <Container>
    <ImageBackground source={require('../assets/page-bg/single-car.png')} style={{flex: 1}}>
      <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
        <Left>
          {/*This is the button that triggers the admin nav popup*/}
          <TouchableOpacity style={{backgroundColor: 'transparent', height: 80, width: 80,}}>
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
              <Text style={styles.trapezoidInner}>YEAR</Text>
            </Row>
            <Row style={{height: 55, marginBottom: 5}}>
              <Text style={styles.titlePage}>Chevrolet</Text>
            </Row>
            <Row style={{height: 65, marginBottom: 100}}>
              <Text style={styles.titlePage}>Corvette Stingray</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Year: Info</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Make: Info</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Model: Info</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Engine: Info</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Horsepower: Info</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Fuel Delivery: Info</Text>
            </Row>
            <Row style={styles.rowDetail}>
              <Text style={styles.textDetail}>Transmission: Info</Text>
            </Row>
          </Col>
          <Col style={{paddingRight: 80}}>
            <Row style={{marginTop: 180, marginBottom: 5, justifyContent: 'center'}}>
              <Image
              style={{width: 500, height: 300, resizeMode: 'contain'}}
              source={require('../assets/cars-clipped/70-mustang.png')}
            />
            </Row>
            <Row style={{justifyContent: 'center'}}>
              <TouchableOpacity style={{marginRight: 30}}>
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
