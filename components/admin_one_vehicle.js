import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Content, Picker, Form } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

//Display a list of vehicles, from carList, as radio options
export default function Admin_One_Vehicle(props) {

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
            <Col style={{marginHorizontal: 300, marginVertical: 300}}>
              <Button light large >
                <Picker
                  onValueChange={props.oneCarChoice}
                >
                  <Picker.Item label="SELECT A VEHICLE" value="100" />
                  <Picker.Item 
                    label={props.cars[0].year + " " + props.cars[0].make + " " + props.cars[0].model} 
                    value={props.cars[0].id} />
                  <Picker.Item 
                    label={props.cars[1].year + " " + props.cars[1].make + " " + props.cars[1].model} 
                    value={props.cars[1].id} />
                  <Picker.Item 
                    label={props.cars[2].year + " " + props.cars[2].make + " " + props.cars[2].model} 
                    value={props.cars[2].id} />
                  <Picker.Item 
                    label={props.cars[3].year + " " + props.cars[3].make + " " + props.cars[3].model} 
                    value={props.cars[3].id} />
                  <Picker.Item 
                    label={props.cars[4].year + " " + props.cars[4].make + " " + props.cars[4].model} 
                    value={props.cars[4].id} />
                  <Picker.Item 
                    label={props.cars[5].year + " " + props.cars[5].make + " " + props.cars[5].model} 
                    value={props.cars[5].id} />
                  <Picker.Item 
                    label={props.cars[6].year + " " + props.cars[6].make + " " + props.cars[6].model} 
                    value={props.cars[6].id} />
                  <Picker.Item 
                    label={props.cars[7].year + " " + props.cars[7].make + " " + props.cars[7].model} 
                    value={props.cars[7].id} />
                  <Picker.Item 
                    label={props.cars[8].year + " " + props.cars[8].make + " " + props.cars[8].model} 
                    value={props.cars[8].id} />
                  <Picker.Item 
                    label={props.cars[9].year + " " + props.cars[9].make + " " + props.cars[9].model} 
                    value={props.cars[9].id} />
                  <Picker.Item 
                    label={props.cars[10].year + " " + props.cars[10].make + " " + props.cars[10].model} 
                    value={props.cars[10].id} />
                  <Picker.Item 
                    label={props.cars[11].year + " " + props.cars[11].make + " " + props.cars[11].model} 
                    value={props.cars[11].id} />
                  <Picker.Item 
                    label={props.cars[12].year + " " + props.cars[12].make + " " + props.cars[12].model} 
                    value={props.cars[12].id} />
                  <Picker.Item 
                    label={props.cars[13].year + " " + props.cars[13].make + " " + props.cars[13].model} 
                    value={props.cars[13].id} />
                  <Picker.Item 
                    label={props.cars[14].year + " " + props.cars[14].make + " " + props.cars[14].model} 
                    value={props.cars[14].id} />
                  <Picker.Item 
                    label={props.cars[15].year + " " + props.cars[15].make + " " + props.cars[15].model} 
                    value={props.cars[15].id} />
                  <Picker.Item 
                    label={props.cars[16].year + " " + props.cars[16].make + " " + props.cars[16].model} 
                    value={props.cars[16].id} />
                  <Picker.Item 
                    label={props.cars[17].year + " " + props.cars[17].make + " " + props.cars[17].model} 
                    value={props.cars[17].id} />
                  <Picker.Item 
                    label={props.cars[18].year + " " + props.cars[17].make + " " + props.cars[17].model} 
                    value={props.cars[18].id} />
                </Picker>
              </Button>
            </Col>
          </Grid>
        </Content>
    </Container>
  );
}
