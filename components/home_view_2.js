import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default function Admin_Homescreen(props) {
  return(
  <Container>
    <ImageBackground source={require('../assets/page-bg/double-car.png')} style={{flex: 1}}>
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
      <Content style={{paddingTop: 125}}>
        <Grid>
          <Col>
            <Row style={{alignItems: 'center'}}>
              <Col style={{width: '20%',}}>
                <TouchableOpacity>
                  <Image
                    style={{width: 100, height: 70, resizeMode: 'contain'}}
                    source={require('../assets/arrow-left-yellow.png')}
                  />
                </TouchableOpacity>
              </Col>
              <Col style={{width: '80%',}}>
                <Text style={styles.titleLeft}>
                  1965
                </Text>
                <Text style={styles.titleLeft}>
                  Chevrolet
                </Text>
                <Text style={styles.titleLeft}>
                  Corvette Stingray
                </Text>
              </Col> 
            </Row>
            <Row style={styles.carRow}>
              <TouchableOpacity>
                <Image
                  style={{width: 450, height: 225, resizeMode: 'contain'}}
                  source={require('../assets/cars-clipped/63-avanti.png')}
                />
              </TouchableOpacity>
            </Row>
          </Col>
          <Col>
            <Row style={{alignItems: 'center'}}>
              <Col style={{width: '80%',}}>
                <Text style={styles.titleRight}>
                  1965
                </Text>
                <Text style={styles.titleRight}>
                  Chevrolet
                </Text>
                <Text style={styles.titleRight}>
                  Corvette Stingray
                </Text>
              </Col>
              <Col style={{width: '20%',}}>
                <TouchableOpacity>
                  <Image
                    style={{width: 100, height: 70, resizeMode: 'contain'}}
                    source={require('../assets/arrow-right-yellow.png')}
                  />
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={styles.carRow}>
              <TouchableOpacity>
                <Image
                  style={{width: 450, height: 225, resizeMode: 'contain'}}
                  source={require('../assets/cars-clipped/69-corvette.png')}
                />
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
  
  carRow: {
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,

  },

  titleLeft: {

    fontSize: 40,
    color: '#A4ADB7',
    textAlign: 'right',
    paddingRight: 50,

  },

  titleRight: {

    fontSize: 40,
    color: '#A4ADB7',
    textAlign: 'left',
    paddingLeft: 50,

  },
  
});
