import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import { Text, View, ImageBackground, Image } from 'react-native';

export default class App extends React.Component {
    
  _renderItem ({item, index}) {
    return (
      <View >
          <Image
            style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
            source={item.photo}
          />
      </View>
  );}  
    
  

  render () {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.props.cars}
        renderItem={this._renderItem}
        sliderWidth={150}
        itemWidth={100}
      />
 ); 
}}