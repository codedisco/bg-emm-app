import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, ImageBackground, Modal, TextInput } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default function Admin_Homescreen(props) {
  return(
  <Container>
    <ImageBackground source={require('../assets/page-bg/double-car.png')} style={{flex: 1}}>
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
                      <Text style={{fontSize: 30, color: '#4F5961'}}>
                        E N T E R  P A S S W O R D
                      </Text>
                      <TextInput
                        keyboardType ="numeric"
                        disableFullscreenUI={true}
                        value={props.userEnterPwd}
                        maxLength={4}
                        autoFocus = {true}
                        secureTextEntry={true}
                        style={{backgroundColor: '#ffffff', borderColor: '#4F5961', borderWidth: 2.5, padding: 20, marginTop: 20 , width:200, alignItems: 'center', color: '#4F5961'}}
                        onChangeText={(text) => {props.login(text)}}
                      />
                    </Col>
                  </Row>
                  <Row style={{marginTop: 40}}>
                    <Col style={{alignItems: 'center', textAlign:"center"}}>
                      <TouchableOpacity 
                        onPress = {() =>{props.openCloseSecurityModal()}} 
                        style={{backgroundColor: '#4F5961', margin: 0, width:200, alignItems: 'center'}}>
                        <Text style={{color: '#ffffff', paddingHorizontal: 40, paddingVertical: 20}}>B A C K</Text>
                      </TouchableOpacity>                                    
                    </Col>
                  </Row>
              </Grid>
            </Container>
          </Modal>
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
                  {props.selectedCar1.year}
                </Text>
                <Text style={styles.titleLeft}>
                  {props.selectedCar1.make}
                </Text>
                <Text style={styles.titleLeft}>
                  {props.selectedCar1.model}
                </Text>
              </Col> 
            </Row>
            <Row style={styles.carRow}>
              <TouchableOpacity onPress = {() =>{props.viewCar1()}}>
                <Image
                  style={{width: 450, height: 225, resizeMode: 'contain'}}
                  source={props.selectedCar1.photo}
                />
              </TouchableOpacity>
            </Row>
          </Col>
          <Col>
            <Row style={{alignItems: 'center'}}>
              <Col style={{width: '80%',}}>
                <Text style={styles.titleRight}>
                  {props.selectedCar2.year}
                </Text>
                <Text style={styles.titleRight}>
                  {props.selectedCar2.make}
                </Text>
                <Text style={styles.titleRight}>
                  {props.selectedCar2.model}
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
                  source={props.selectedCar2.photo}
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
