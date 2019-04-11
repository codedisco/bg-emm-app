import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

import Admin_Nav from './admin_nav.js';

export default class Admin_Login extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     playerInput: ''
   };
 }
    
 checkPassword = (text) =>{
    this.setState(previousState => (
        { playerInput: text}
      ))
     
     this.props.login(text);
 }
  render(){
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
                <TextInput
                    value={this.state.playerInput}
                    maxLength={4}
                    autofocus = {true}
                    secureTextEntry={true}      
                    style={styles.inputStyle}
                    onChangeText={(text) => {this.checkPassword(text)}}
                /> 
            </View>    
          </View>
        </View>
      );      
  }
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