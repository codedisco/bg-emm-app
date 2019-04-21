import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

//
export default function Home_View_1(props) {
  return(
    <Container>
      <Header style={{height: 100, backgroundColor: '#505050', paddingLeft: 0}}>
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
          <Button transparent>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
      <Grid>
        <Col style={{ backgroundColor: 'blue', padding: 20}}>
          <Text>Hello</Text>
        </Col>
        <Col style={{ backgroundColor: 'green'}}>
        </Col>
      </Grid>
    </Container>
  );
}