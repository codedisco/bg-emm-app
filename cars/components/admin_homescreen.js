import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import Admin_Nav from './admin_nav.js';

export default function Admin_Homescreen(props) {
  return(
    <View style={styles.container}>
      <Admin_Nav navTitle = "Home Screen" />
      <View style={styles.homesceenContainer}>
        <Text style={styles.instructionStyle}>
            SELECT ONE STYLE 
        </Text>
        <View style={styles.horizontalButtons}>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>1 VEHICLE</Text>      
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>2 VEHICLES</Text>      
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonStyle}>
              <Text style={styles.buttonText}>ALL VEHICLES</Text>      
            </TouchableOpacity>      
        </View>            
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
      
  container: {
    flex: 1,   
  },
  homesceenContainer: {
    flex: 7,    
    display: "flex",
    justifyContent: "center", //Center the instructions and button in the middle of the page
    alignItems: "center", //Center the instructions and button in the middle of the page
    backgroundColor:"#505050", //similar to the black color
    color: "lightgrey",      
  },
  instructionStyle: {
    color: "lightgrey",
    fontSize: 24,
    fontWeight: 'bold',      
  },
  horizontalButtons: {
    display:"flex",
    flexDirection: "row", //format the buttons to be side by side
    marginTop:10, //white-space between instructions and buttons
    
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