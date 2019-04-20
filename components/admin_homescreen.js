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
      {/*Nav component*/}
      <Admin_Nav navTitle = "Home screen selection" />
      
      {/*The body of the screen showing the three choices for the user*/}
      <View style={styles.homesceenContainer}>
      
        {/*Instructions for the user*/}
        <Text style={styles.instructionStyle}>
            SELECT ONE STYLE 
        </Text>
      
        {/*Bottom view containing the three choices*/}
        <View style={styles.horizontalButtons}>
            {/*Choice leads to One vehicle selection screen*/}
            <TouchableOpacity
                onPress={props.openOne}
                style={styles.buttonStyle}>
                <Text style={styles.buttonText}>1 VEHICLE</Text>      
            </TouchableOpacity>
      
            {/*Choice leads to Two vehicle selection screen*/}
            <TouchableOpacity
                onPress={props.openTwo}
                style={styles.buttonStyle}>
                <Text style={styles.buttonText}>2 VEHICLES</Text>      
            </TouchableOpacity>
      
            {/*Choice leads to guest screen and showing all vehicle selections*/}
            <TouchableOpacity
                onPress={props.openAll}
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
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: 'bold',      
  },
  horizontalButtons: {
    display:"flex",
    flexDirection: "row", //format the buttons to be side by side
    marginTop: 15, //white-space between instructions and buttons
    
  },
  buttonStyle: {
    backgroundColor: '#505050',
    padding: 10, //white-space between the border and the button's text
    borderColor:'lightgrey',
    borderStyle: 'solid',
    borderWidth: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 30, //white-space between buttons
  },
  buttonText: {
    color: 'lightgrey',
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: 'bold',
    textAlign: 'center',
  }    
});