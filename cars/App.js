import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';

import Admin_Login from './components/admin_login.js';
import Admin_Homescreen from './components/admin_homescreen.js';
import Admin_One_Vehicle from './components/admin_one_vehicle.js';
import Admin_Two_Vehicle from './components/admin_two_vehicle.js';

export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      pwd:"1111",//password for the admin_Login component's input
      userEnterPassword:"",
      }
  }

  //check if the player entered a password correctly after four digits. This method is passed as a prop into the Admin_login component and used in its input button
  playerLogin = (userPwd) => {
    //add each number entered by the user into the userEnterPassword state. For some reason the first entered charter isn't saved. This is mainly use to clear the login input after a failed attempt.
    this.setState(previousState => (
        { userEnterPassword:userPwd }
      )) 
    
    //if four numbers is entered, check if the password is correct with passwordChecker()
    if(userPwd.length == 4){
        this.passwordChecker(userPwd);
    }     
  }
  
  //Used in the playerLogin() to check the password. If correct continue to the Admin_homescreen. If incorrect, clear the input in the Admin_login to start over
  passwordChecker = (userPwd) => {
    if(userPwd == this.state.pwd){
        //if correct, move to the Admin_homescreen component
console.log("Password Passes");
    }else {
    //clears the userEnterPassword state, therefore clearing the value of the input box in the Admin_login component
    this.setState(previousState => (
        { userEnterPassword:"" }
      ))
    }
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Admin_Login 
            userEnterPwd = {this.state.userEnterPassword}
            login={this.playerLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
