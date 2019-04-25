import React, { Component } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import ImageZoom from 'react-native-image-pan-zoom';
import {ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';

export default class Gallery extends React.Component {
    constructor(props){
        super();
        this.state = {
            activeSlide: 0,
        }
    }
    
  _renderItem ({item, index}) {
    return (
      <View >
        <ImageZoom 
            cropWidth={300}
            cropHeight={300}
            imageWidth={200}
            imageHeight={200}>
            <Image
                style={{width:200, height:200}}
                source={item.photo}
            />
        </ImageZoom>
      </View>
  );}  
    
    get pagination () {
        const { entries, activeSlide } = this.props.cars;
        return (
            <Pagination
              dotsLength={this.props.cars.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 8,
                  backgroundColor: 'rgba(255, 255, 255, 0.92)'
              }}
              inactiveDotStyle={{
                  // Define styles for inactive dots here
              }}
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
            />
        );
    }  

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
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        sliderWidth={600}
                        itemWidth={400}
                      /> 
                    { this.pagination }
                    </Col>
                </Grid>
            </Content>
        </Container>

 ); 
}}