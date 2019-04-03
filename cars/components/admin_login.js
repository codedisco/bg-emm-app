import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import Admin_Nav from './admin_nav.js';

export default function Admin_Login(props) {
  return(
    <View style={styles.container}>
      <Admin_Nav navTitle = "Admin Setting" />
      <View style={styles.loginInputBox}>
        <View>
            <Text style={styles.textColor}>
                ENTER PASSWORD 
            </Text>
        </View>
        <View style={styles.inputBoxContainer}>
            <TextInput style={styles.inputStyle}
              //onChangeText={(text) => {this.updateFullName(text)}}
            /> 
        </View>    
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  },
  loginInputBox: {
    flex: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#505050",
    color: "lightgrey",      
  },
  textColor: {
    color: "lightgrey",
  },
  inputBoxContainer: {
    borderColor: "lightgrey",
    borderStyle: 'solid',
    borderWidth: 10,
    marginTop:15,
    width: 200,
  },
  inputStyle: {
    fontSize: 32,
  },    
});