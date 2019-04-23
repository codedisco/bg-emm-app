import React, { Component } from 'react';
import { TouchableOpacity, Image, Modal } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Admin_Nav from './admin_nav.js';

export default function Admin_Homescreen(props) {
  return(
    <Container>
        <Header noShadow style={{height: 100, backgroundColor: '#505050', paddingLeft: 0}}>
            <Left>
                <TouchableOpacity 
                    onPress = {() =>{props.openCloseSecurityModal()}} 
                    style={{backgroundColor: '#E5C035', margin: 0}}>
                    <Image
                        style={{width: 60, height: 60, margin: 20, resizeMode: 'contain',}}
                        source={require('../assets/arrow-left.png')}
                    />
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
                                        Would you like to exit the app?
                                    </Text>
                                </Col>
                            </Row>
                            <Row style={{marginTop: 40}}>
                                <Col style={{alignItems: 'flex-end', marginRight: 40}}>
                                    <TouchableOpacity 
                                        onPress = {() =>{props.openCloseSecurityModal()}} 
                                        style={{backgroundColor: '#4F5961', margin: 0, width:200, alignItems: 'center'}}>
                                        <Text style={{color: '#ffffff', paddingHorizontal: 40, paddingVertical: 20}}>B A C K</Text>
                                    </TouchableOpacity>                                    
                                </Col>
                                <Col style={{marginleft: 40}}>
                                    <TouchableOpacity 
                                        onPress = {() =>{props.openCloseSecurityModal()}} 
                                        style={{backgroundColor: '#E61E1E', margin: 0, width:200, alignItems: 'center'}}>
                                        <Text style={{color: '#ffffff', paddingHorizontal: 40, paddingVertical: 20}}>E X I T</Text>
                                    </TouchableOpacity>                                    
                                </Col>
                            </Row>
                        </Grid>
                    </Container>
                </Modal>    
            </Left>
            <Body>
                <Title>Header</Title>
            </Body>
            <Right>
                <Image
                    style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
                    source={require('../assets/emm-logo-large.png')}
                />
            </Right>
        </Header>
        <Grid>
            <Row><Text>SELECT ONE STYLE</Text></Row>                    
            <Row>
                <Col>
                    <Button onPress={props.openOne}>
                        <Text>1 Vehicle</Text>
                    </Button>
                </Col>
                <Col>
                    <Button onPress={props.openTwo}>
                        <Text>2 Vehicle</Text>
                    </Button>
                </Col>
                <Col>
                    <Button onPress={props.openAll}>
                        <Text>All Vehicle</Text>
                    </Button>
                </Col>
            </Row>
        </Grid>
    </Container>
  );
}

