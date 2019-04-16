import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Admin_Login from './components/admin_login.js';
import Admin_Homescreen from './components/admin_homescreen.js';
import Admin_One_Vehicle from './components/admin_one_vehicle.js';
import Admin_Two_Vehicle from './components/admin_two_vehicle.js';
import Home_View_1 from './components/home_view_1.js';
import Home_View_2 from './components/home_view_2.js';

carList = [{"id":"VEHICLE SELECTION 1"},
           {"id":"VEHICLE SELECTION 2"},
           {"id":"VEHICLE SELECTION 3"},
           {"id":"VEHICLE SELECTION 4"},
          ];

export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      pwd:"1111",//password for the admin_Login component's input
      userEnterPassword:"",//used to clear the user incorrectly enter password by first saving it
      openAdminLogin:true,//When true, show the login screen
      openAdminHomescreen:false, //When true, show the admin home screen
      openAdminOneVehicle:false, //When true, show the admin one vehicle screen
      oneVehicleSelection:[],//vehicle chosen by by the user in the car selection components
      twoVehicleSelection:[],//vehicle chosen by by the user in the car selection components
      openAdminTwoVehicle:false, //When true, show the admin two vehicle screen
      openHomeOneVehicle:false, //When true, show the admin two vehicle screen 
      }
  }
     
  //method used in the car selection process to save car one's id of the selected car    
  oneVehicleChoice = (id) => {
    this.setState(previousState => (
        { oneVehicleSelection:id }
      )) 
      
    this.openHomeOneVehicle();  
  }
  
  //method used in the car selection process to save car two's id of the selected car 
  twoVehicleChoice = (id) => {
    this.setState(previousState => (
        { twoVehicleSelection:id }
      ))       
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
        this.openHomescreen();
    }else {
    this.setState(previousState => (
        { userEnterPassword:"" }
      ))        
    }      
  }
  
  //Used in the passwordChecker() to change screen to the Admin_Homescreen view
  openHomescreen = () => {
    //Hide this component
    this.setState(previousState => (
        { openAdminLogin:!previousState.openAdminLogin}
      ))
    
  
    //Show this component
    this.setState(previousState => (
        { openAdminHomescreen:!previousState.openAdminHomescreen }
      ))      
  }
  
  //Used in the Admin_homescreen component to switch to the one vehicle selection screen
  openOneVehicle = () => {
    //Hide this component
    this.setState(previousState => (
        { openAdminHomescreen:!previousState.openAdminHomescreen }
      )) 
    
  
    //Show this component
    this.setState(previousState => (
        { openAdminOneVehicle:!previousState.openAdminOneVehicle }
      ))      
  }
  
  //Used in the Admin_homescreen component to switch to the two vehicle selection screen
  openTwoVehicle = () => {
    //Hide this component
    this.setState(previousState => (
        { openAdminHomescreen:!previousState.openAdminHomescreen }
      )) 
    
  
    //Show this component
    this.setState(previousState => (
        { openAdminTwoVehicle:!previousState.openAdminTwoVehicle }
      ))      
  } 
  
  //Used in the Admin_OneVehicle component to switch to the home one vehicle presentation screen. Call in the oneVehicleChoice()
  openHomeOneVehicle = () => {
    //Hide this component
    this.setState(previousState => (
        { openAdminOneVehicle:!previousState.openAdminOneVehicle }
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeOneVehicle:!previousState.openHomeOneVehicle }
      ))      
  }  
  
  
  render() {
    return (
      <View style={styles.container}>
        {/*First screen in the app, show the login page*/}
        { this.state.openAdminLogin &&
            <Home_View_2 />      
        }
        {/*Second page of the app, allow the user to choose how many cars to be displayed*/}
        {this.state.openAdminHomescreen &&
            <Admin_Homescreen
                openOne = {this.openOneVehicle}
                openTwo = {this.openTwoVehicle}/>
        }
        {/*allow the user to choose one car to be displayed*/}
        {this.state.openAdminOneVehicle &&
            <Admin_One_Vehicle
                cars = {carList}
                oneCarChoice = {this.oneVehicleChoice}/>
        }
        {/*allow the user to choose two car to be displayed*/}
        {this.state.openAdminTwoVehicle &&
            <Admin_Two_Vehicle
                cars = {carList}
                twoCarChoice = {this.twoVehicleChoice}
                oneCarChoice = {this.oneVehicleChoice}/>
        }
        {/*allow the user to choose two car to be displayed*/}
        {this.state.openHomeOneVehicle &&
            <Home_View_1 />
        }         
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
