import React, { Component } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { StyleSheet, ScrollView, Animated, ImageBackground, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Text, View, Col, Row, Grid } from 'native-base';
import Lightbox from 'react-native-lightbox';
import PhotoView from 'react-native-photo-view';

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 500,              // Make it take a while
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class Gallery extends React.Component {
    constructor(props){
        super();
        this.state = {
            activeSlide: 0,
        }
    }
    
  _renderItem ({item, index}) {
    return (
      <View style={{}}>
        <Lightbox
          springConfig={{tension: 15, friction: 7}}
          underlayColor="#4F5961"
          swipeToDismiss={false}
          renderHeader={close => (
            <TouchableOpacity onPress={close}>
              <Image
                style={{width: '100%', height:30, resizeMode: 'contain', left: 475, top: 15}}
                source={ require('../assets/exit.png')}
              />
            </TouchableOpacity>
          )}
        >
          <Image
            style={{width: '100%', height:600, resizeMode: 'contain'}}
            source={item}
          />
        </Lightbox>
      </View>
  );}  
    
    get pagination () {
        const { entries, activeSlide } = this.props.selectedCar.gallery;
        return (
            <Pagination
              dotsLength={this.props.selectedCar.gallery.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{ backgroundColor: 'rgba(79, 89, 97, 1)' }}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 2,
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
                  <TouchableOpacity onPress = {() =>{this.props.goBack()}} style={{backgroundColor: '#E5C035', margin: 0}}>
                    <Image
                      style={{width: 40, height: 40, margin: 20, resizeMode: 'contain',}}
                      source={require('../assets/arrow-left.png')}
                    />
                  </TouchableOpacity>
                </Left>
                <Body>
                  <View style={{width: 150, height: 40, justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 70}}>
                    <Image fadeDuration={0} source={require('../assets/section-shape.png')} style={{width: 200, height: 40, resizeMode: 'stretch'}}/>
                    <Text style={{position: 'absolute', fontFamily: 'Inter-Black', color: '#4F5961', fontSize: 20}}>G A L L E R Y</Text>
                  </View>
                  <Title style={styles.titlePage}>{this.props.selectedCar.year + " " + this.props.selectedCar.make + " " + this.props.selectedCar.model} </Title>
                </Body>                              
                <Right>
                  <Image
                    style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
                    source={require('../assets/emm-logo-large.png')}
                  />
                </Right>
            </Header>        
            <Content style={{backgroundColor: '#4F5961',}}>
              <FadeInView>
                <Grid>
                    <Col style={{height: 670}}>
                      <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.props.selectedCar.gallery}
                        renderItem={this._renderItem}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                        sliderWidth={1025}
                        sliderHeight={980}
                        itemWidth={400}
                      /> 
                    { this.pagination 
                      
                    }
                    </Col>
                </Grid>
              </FadeInView>
            </Content>
        </Container>

 ); 
}}

const styles = StyleSheet.create({

  titlePage: {
    paddingLeft: 260,
    fontSize: 25,
    color: '#A4ADB7',
    fontFamily: 'Inter-SemiBold'
  },
  
});
