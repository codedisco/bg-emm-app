import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Admin_Login from './components/admin_login.js';
import Admin_Homescreen from './components/admin_homescreen.js';
import Admin_One_Vehicle from './components/admin_one_vehicle.js';
import Admin_Two_Vehicle from './components/admin_two_vehicle.js';
import Home_View_1 from './components/home_view_1.js';
import Home_View_2 from './components/home_view_2.js';
import Home_View_All from './components/home_view_all.js';

carList = [{"id":"1","photo":require('./assets/chevy-avalanche.png'),"year":"2000", "make":"CHEVY", "model":"AVALANCHE"},
           {"id":"2","photo":require('./assets/chevy-impala.jpg'),"year":"2001", "make":"CHEVY", "model":"IMPALA"},
           {"id":"3","photo":require('./assets/ford-mustang.jpg'),"year":"2002", "make":"FORD", "model":"MUSTANG"},
           {"id":"4","photo":require('./assets/nissan-maxima.jpg'),"year":"2003", "make":"NISSAN", "model":"MAXIMA"},
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
      openHomeOneVehicle:false, //When true, show single car and its details for the user
      openHomeTwoVehicle:false, //When true, show two cars and their details for the user
      openHomeAll:false, //When true, show all the cars and their details for the user    
      topdisplayOfCars:[], //list of car with a even index displayed in the all cars home selection on top row. Create with the getDisplayOfCars()
      bottomdisplayOfCars:[], //list of car with a even index displayed in the all cars home selection on bottom row. Create with the getDisplayOfCars()
      }
  }
    
  //method to create two list of cars to be displayed in the Home_View_All component. This is called in when the user choose to present all cars in the admin_homescreen component    
  getDisplayOfCars = () => {
      let topList =[];
      let bottomList = [];
      carList.forEach(function (item,index){
          if(index%2 == 0){
            bottomList.push(item);//all odd index car objects is saved here
          }else {
            topList.push(item);//all even index car objects is saved here              
          }
      });
    
    //save the top list of the car list to the state  
    this.setState(previousState => (
        { topdisplayOfCars:topList }
      ))
      
    //save the bottom index of the car list to the state  
    this.setState(previousState => (
        { bottomdisplayOfCars:bottomList }
      ))       
  }
    
  //method to get selected car object
  getCar = (id) => {
    let carIndex = carList.findIndex(cars => cars.id == id);
    return carList[carIndex]
  }
     
  //method used in the car selection process to save car one's id of the selected car and switch to the user view of Home 1    
  oneVehicleChoice = (id) => {
      
    let selection = this.getCar(id); //method to get the photo of the selected car
    this.setState(previousState => (
        { oneVehicleSelection:selection }
      )) 
      
    this.openHomeOneVehicle();

  }
  
  //method used in the car selection process to save car two's id of the selected car 
  saveTwoVehicle = (id) => {
      
    let selection = this.getCarPhoto(id); //method to get the photo of the selected car  
    this.setState(previousState => (
        { twoVehicleSelection:selection }
      ))
  }
  
  //method used in the car selection process to save car one's id of the selected car    
  saveOneVehicle = (id) => {
    let selection = this.getCarPhoto(id); //method to get the photo of the selected car
    this.setState(previousState => (
        { oneVehicleSelection:selection }
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
  
  //Used in the Admin_homescreen component to switch to the show all car Home screen
  openShowAll = () => {
    //create to list of cars to be displayed  
    this.getDisplayOfCars();  
      
    //Hide this component
    this.setState(previousState => (
        { openAdminHomescreen:!previousState.openAdminHomescreen }
      )) 
    
  
    //Show this component
    this.setState(previousState => (
        { openHomeAll:!previousState.openHomeAll }
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
  
  //Used in the Admin_TwoVehicle component to switch to the home two vehicle presentation screen. Call in the twoVehicleChoice()
  openHomeTwoVehicle = () => {
    //Hide this component
    this.setState(previousState => (
        { openAdminTwoVehicle:!previousState.openAdminTwoVehicle }
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeTwoVehicle:!previousState.openHomeTwoVehicle }
      ))      
  }   
  
  
  render() {
    return (
      <View style={styles.container}>
        {/*First screen in the app, show the login page*/}
        { this.state.openAdminLogin &&
            <Admin_Login 
                userEnterPwd = {this.state.userEnterPassword}
                login={this.playerLogin} />      
        }
        {/*Second page of the app, allow the user to choose how many cars to be displayed*/}
        {this.state.openAdminHomescreen &&
            <Admin_Homescreen
                openAll = {this.openShowAll}
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
                submit = {this.openHomeTwoVehicle}
                twoCarChoice = {this.saveTwoVehicle}
                oneCarChoice = {this.saveOneVehicle}/>
        }
        {/*allow the user to view one car and its details*/}
        {this.state.openHomeOneVehicle &&
            <Home_View_1
                onePhoto = {this.state.oneVehicleSelection}/>
        }  
        {/*allow the user to view two car and their details*/}
        {this.state.openHomeTwoVehicle &&
            <Home_View_2 
                twoPhoto = {this.state.twoVehicleSelection}
                onePhoto = {this.state.oneVehicleSelection}/>
        }
        {/*allow the user to view all cars and their details*/}
        {this.state.openHomeAll &&
            <Home_View_All 
                topDisplayOfCars = {this.state.topdisplayOfCars}
                bottomDisplayOfCars = {this.state.bottomdisplayOfCars}/>
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
