import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import {ImageBackground, Image, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default class Gallery extends React.Component {
    
  _renderItem ({item, index}) {
    return (
      <View >
          <Image
            style={{width: 300, height: 300, resizeMode: 'contain', marginRight: 20}}
            source={item.photo}
          />
      </View>
  );}  
    
  

  render () {
    return (
        <Container>
            <Header noShadow style={{height: 80, backgroundColor: '#4F5961', paddingLeft: 0}}>
                <Left>
                  <TouchableOpacity onPress = {() =>{props.goBack()}} style={{backgroundColor: '#E5C035', margin: 0}}>
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
                    <Col>
                      <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.cars}
                        renderItem={this._renderItem}
                        sliderWidth={600}
                        itemWidth={400}
                      />        
                    </Col>
                </Grid>
            </Content>
        </Container>

 ); 
}}