import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Picker, Form } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';



//Display a list of vehicles, from carList, as radio options
export default function Admin_Two_Vehicle(props) {

  return(
    <Container style={{backgroundColor: '#4F5961'}}>
        <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
            <Left>
                <TouchableOpacity 
                    onPress = {() =>{props.goBack()}}
                    style={{backgroundColor: '#E5C035', margin: 0}}>
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
                <Row style={{marginTop: 250, marginBottom: 30}}>                
                    <Col style={{marginLeft: 100, marginRight: 20}}>
                        <Button light large>
                            <Picker
                              onValueChange={props.oneCarChoice}
                            >
                                <Picker.Item label="SELECT LEFT VEHICLE" value="100" />
                                <Picker.Item label={props.cars[0].model} value={props.cars[0].id} />
                                <Picker.Item label={props.cars[1].model} value={props.cars[1].id} />
                                <Picker.Item label={props.cars[2].model} value={props.cars[2].id} />
                                <Picker.Item label={props.cars[3].model} value={props.cars[3].id} />
                            </Picker>
                        </Button>
                        <Text style={{textAlign: 'center', fontSize: 20, color: '#ffffff', marginTop: 20}}>{props.selectedCar1.model}</Text>
                    </Col>
                    <Col style={{marginRight: 100, marginLeft: 20}}>
                        <Button light large>
                            <Picker
                              onValueChange={props.twoCarChoice}
                            >
                                <Picker.Item label="SELECT RIGHT VEHICLE" value="100" />
                                <Picker.Item label={props.cars[0].model} value={props.cars[0].id} />
                                <Picker.Item label={props.cars[1].model} value={props.cars[1].id} />
                                <Picker.Item label={props.cars[2].model} value={props.cars[2].id} />
                                <Picker.Item label={props.cars[3].model} value={props.cars[3].id} />
                            </Picker>
                        </Button>
                        <Text style={{textAlign: 'center', fontSize: 20, color: '#ffffff', marginTop: 20}}>{props.selectedCar2.model}</Text>
                    </Col>
                </Row>
                <Row style={{alignItems: 'center', marginHorizontal: 400}}>
                    <Col>
                        <Button light large block 
                            onPress = {() =>{props.submit()}}>
                                <Text>Confirm</Text>
                        </Button>  
                    </Col> 
                </Row>
            </Grid>
        </Content>
    </Container>
  );
}
