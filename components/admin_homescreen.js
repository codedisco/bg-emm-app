import React, { Component } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Col, Row, Grid } from 'native-base';

import Admin_Nav from './admin_nav.js';

export default function Admin_Homescreen(props) {
  return(
    <Container style={{backgroundColor: '#4F5961'}}>
        <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}> 
            <Right>
                <Image
                    style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
                    source={require('../assets/emm-logo-large.png')}
                />
            </Right>
        </Header>
        <Grid>                    
            <Row style={{alignItems: 'center', justify: 'center'}}>
                <Col style={{alignItems: 'center', justify: 'center', marginHorizontal: 300}}>
                    <Text style={styles.detail}>SELECT A HOMESCREEN STYLE</Text>
                    <Button light large block onPress={props.openOne} style={styles.option}>
                        <Text>1 Vehicle</Text>
                    </Button>
                    <Button light large  block onPress={props.openTwo} style={styles.option}>
                        <Text>2 Vehicle</Text>
                    </Button>
                    <Button light large block onPress={props.openAll} style={styles.option}>
                        <Text>All Vehicle</Text>
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
        fontSize: 25,
    },
    
    option: {
        marginBottom: 15,
    },
    
  });

