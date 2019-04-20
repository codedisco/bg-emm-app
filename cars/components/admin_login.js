import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import Admin_Nav from './admin_nav.js';

//first screen shown on the app. Use by the administrator to login
export default function Admin_Login(props) {
  return(
    <View style={styles.container}>
      {/*Nav component*/}
      <Admin_Nav navTitle = "Admin Setting" />
      
      {/*Body of the page*/}
      <View style={styles.loginInputBox}>
      
        {/*Instructions for the user*/}
        <View>
            <Text style={styles.textColor}>
                ENTER PASSWORD 
            </Text>
        </View>
      
        {/*Login input box for the password*/}
        <View style={styles.inputBoxContainer}>
            <TextInput
                value={props.userEnterPwd}
                maxLength={4}
                autoFocus = {true}
                secureTextEntry={true}
                style={styles.inputStyle}
                onChangeText={(text) => {props.login(text)}}
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
    fontSize: 24,
    fontWeight: 'bold',      
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