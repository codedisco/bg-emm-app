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

  //check if the player enter password is correct after four digits. This method is passed as a prop into the Admin_login component and used in its input button
  playerLogin = (data) => {
    //add each number entered by the user into the userEnterPassword state
    let playerPwdLength = data.length;
    
    //if four numbers is entered, check if the password is correct with passwordChecker()
    if(playerPwdLength == 4){
        this.passwordChecker(data);
    }
      
    //If incorrect, clear the input and start over
      
    //if correct, move to the Admin_homescreen component
//console.log("It works " + playerPwdLength);      
  }
  
  passwordChecker = (pwd) => {
    if(pwd == this.state.pwd){
console.log("Password Passes");
    }else {
console.log("Password Fail");
    }
  }
  
  
  render() {
    return (
      <View style={styles.container}>
        <Admin_Login login={this.playerLogin} />
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
