import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

//
export default function Home_View_1(props) {
  return(
    <Container style={{backgroundColor: '#505050'}}>
      <Header noShadow style={{height: 100, backgroundColor: '#505050', paddingLeft: 0}}>
        <Left>
          <TouchableOpacity style={{backgroundColor: '#E5C035', margin: 0}}>
            <Image
              style={{width: 60, height: 60, margin: 20, resizeMode: 'contain',}}
              source={require('../assets/arrow-left.png')}
            />
          </TouchableOpacity>
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
        <Row style={{height: '70%'}}>
          <Col style={{padding: 20}}>
            <Text>Hello</Text>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row style={{height: '30%'}}>
        </Row>
      </Grid>
    </Container>
  );
}