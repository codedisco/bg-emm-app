import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Admin_Nav from './admin_nav.js';


//
export default function Home_View_1(props) {
  return(
    <View style={styles.container}>
      {/*Nav component*/}
      <Admin_Nav navTitle = "" goBack = {props.goBack} />
      
      {/*Body of the page*/}
      <View style={styles.homeViewContainer}>
        <View style={styles.row}>
            <View style={styles.carDetails}>
                <Text style={styles.details}>{props.onePhoto.year} </Text>
                <Text style={styles.details}>{props.onePhoto.make} </Text>
                <Text style={styles.details}>{props.onePhoto.model} </Text>      
            </View> 
            <View style={styles.carImage}>
                <Image source={props.onePhoto.photo} />
            </View>       
        </View>
        <View style={styles.row}>
            <View style={styles.carDetails}>
                <Text style={styles.dataDetails}>Detail: data </Text>
                <Text style={styles.dataDetails}>Detail: data  </Text>
                <Text style={styles.dataDetails}>Detail: data  </Text>
                <Text style={styles.dataDetails}>Detail: data </Text>
                <Text style={styles.dataDetails}>Detail: data  </Text>
                <Text style={styles.dataDetails}>Detail: data  </Text>
                <Text style={styles.dataDetails}>Detail: data </Text>
                <Text style={styles.dataDetails}>Detail: data  </Text>
                <Text style={styles.dataDetails}>Detail: data  </Text> 
            </View> 
            <View style={styles.carImage}>
                <TouchableOpacity
                    onPress={props.openOne}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>STORY</Text>      
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={props.openOne}
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>GALLERY</Text>      
                </TouchableOpacity>
            </View>       
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({      
  container: {
      flex: 1, 
  },
  //styles for the overall component    
  homeViewContainer: {
      flex: 7,    
      display: "flex",
      backgroundColor:"#505050", //similar to the black color
      color: "lightgrey",      
  }, 
  row: {
      display: "flex",
      flexDirection:"row",
      justifyContent: "space-around",
      
  },
  details: {
      color: "lightgrey",
      fontSize: 30,
      fontWeight: 'bold'
  },
  dataDetails: {
      color: "white",
  },    
  carImage: {
      display: "flex",
      flexDirection:"row",      
      justifyContent: "center", //Center the instructions and button in the middle of the page
      alignItems: "center", //Center the instructions and button in the middle of the page
  },
  buttonStyle: {
    backgroundColor: '#505050',
    padding: 10, //white-space between the border and the button's text
    borderColor:'lightgrey',
    borderStyle: 'solid',
    borderWidth: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 30, //white-space between buttons
  },
  buttonText: {
    color: 'lightgrey',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }   
});