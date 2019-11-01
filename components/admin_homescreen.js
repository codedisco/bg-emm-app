import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet, Modal, TextInput, BackHandler } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Col, Row, Grid } from 'native-base';

export default function Admin_Homescreen(props) {
  return(
    <Container style={{backgroundColor: '#4F5961'}}>
        <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
            <Left>
                <TouchableOpacity 
                    onPress = {() =>{props.openCloseSecurityModal()}} 
                    style={{backgroundColor: '#E5C035'}}>
                    <Text style={{fontSize: 20, color: '#4F5961', paddingHorizontal: 40, paddingVertical: 26, fontFamily: 'Inter-Black'}}>
                        E X I T
                    </Text>
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
                                    <Text style={{fontSize: 25, color: '#4F5961', fontFamily: 'Inter-Black'}}>
                                        Would you like to exit the app?
                                    </Text>
                                </Col>
                            </Row>
                            <Row style={{marginTop: 40}}>
                                <Col style={{alignItems: 'flex-end', marginRight: 40}}>
                                    <TouchableOpacity 
                                        onPress = {() =>{props.openCloseSecurityModal()}} 
                                        style={{backgroundColor: '#4F5961', margin: 0, width:200, alignItems: 'center'}}>
                                        <Text style={{color: '#ffffff', paddingHorizontal: 40, paddingVertical: 20, fontFamily: 'Inter-Black'}}>B A C K</Text>
                                    </TouchableOpacity>                                    
                                </Col>
                                <Col style={{marginleft: 40}}>
                                    <TouchableOpacity 
                                        onPress = {() =>{BackHandler.exitApp()}} 
                                        style={{backgroundColor: '#E61E1E', margin: 0, width:200, alignItems: 'center'}}>
                                        <Text style={{color: '#ffffff', paddingHorizontal: 40, paddingVertical: 20, fontFamily: 'Inter-Black'}}>E X I T</Text>
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
        <Grid>                    
            <Row style={{alignItems: 'center', justify: 'center'}}>
                <Col style={{alignItems: 'center', justify: 'center', marginHorizontal: 250}}>
                    <Text style={styles.detail}>S E L E C T    A    H O M E S C R E E N    S T Y L E</Text>
                    <Button light large block onPress={props.openOne} style={styles.option}>
                        <Text style={styles.textButton}>1 Vehicle</Text>
                    </Button>
                    <Button light large  block onPress={props.openTwo} style={styles.option}>
                        <Text style={styles.textButton}>2 Vehicle</Text>
                    </Button>
                    <Button light large block onPress={props.openAll} style={styles.option}>
                        <Text style={styles.textButton}>All Vehicles</Text>
                    </Button>
                </Col>
            </Row>
        </Grid>
    </Container>
  );
}

const styles = StyleSheet.create({
  
    detail: {
        color: '#ffffff',
        paddingBottom: 30, 
        fontSize: 20,
        fontFamily: 'Inter-Black'
    },

    textButton: {
        fontFamily: 'Inter-SemiBold'
    },
    
    option: {
        marginBottom: 15,
    },
    
  });

