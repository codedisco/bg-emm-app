import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Admin_Nav from './admin_nav.js';

export default function Admin_Homescreen(props) {
  return(
    <Container>
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

