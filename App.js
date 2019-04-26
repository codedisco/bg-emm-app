import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { ScreenOrientation } from 'expo';

import Admin_Homescreen from './components/admin_homescreen.js';
import Admin_One_Vehicle from './components/admin_one_vehicle.js';
import Admin_Two_Vehicle from './components/admin_two_vehicle.js';
import Home_View_1 from './components/home_view_1.js';
import Home_View_2 from './components/home_view_2.js';
import Home_View_All from './components/home_view_all.js';
import Car_Main from './components/car_main.js';
import Story from './components/car_story.js';
import Gallery from './components/car_gallery.js';

import {carList} from './ListOfCars.js'

export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      pwd:"645mar",//password for the admin_Login component's input
      userEnterPassword:"",//used to clear the user incorrectly enter password by first saving it
      openAdminLogin:false,//When true, show the login screen
      openAdminHomescreen:true, //When true, show the admin home screen
      openAdminOneVehicle:false, //When true, show the admin one vehicle screen
      oneVehicleSelection:[],//vehicle chosen by by the user in the car selection components
      twoVehicleSelection:[],//vehicle chosen by by the user in the car selection components
      openAdminTwoVehicle:false, //When true, show the admin two vehicle screen
      openHomeOneVehicle:false, //When true, show single car and its details for the user
      openHomeTwoVehicle:false, //When true, show two cars and their details for the user
      openHomeCarMain1: false, //When true, show the first clickable car in home_main_2 details similar to home_view_1
      openHomeCar2:false, //When true, show the second clickable car in home_main_2 details similar to home_view_1 
      openHomeAllCarMain:false, //When true, show selected car in a Car Main with onevehicleselected object    
      openHomeAll:false, //When true, show all the cars and their details for the user    
      topdisplayOfCars:[], //list of car with a even index displayed in the all cars home selection on top row. Create with the getDisplayOfCars()
      bottomdisplayOfCars:[], //list of car with a even index displayed in the all cars home selection on bottom row. Create with the getDisplayOfCars()
      isReady: false,   //use to link in fonts require by NativeBase and call in componentWillMount()
      openStory:false, //When true, show story component for to the first selected vehicle in home_view_1
      openStoryCarMain1: false,//When true, show story component for to the selected vehicle from car_main 1
      openStoryCar2:false, //When true, show story component for to the selected vehicle from car_main 2
      openStoryHomeAll: false, //When true show the story of the Home All's Car Main
      openGallery: false, //When true, show the gallery for the home view 1 selected car
      openGalleryCarMain1: false, //When true, show the gallery for the home view 2 selected car from car_main 1
      openGalleryCarMain2: false, //When true, show the gallery for the home view 2 selected car from car_main 2
      adminSecurity:false, //used to deter guests from loggin off by show and hide modal inside hidden button on Home views.
    }
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    'Inter-Black':require('./assets/fonts/Inter-Black.ttf'),
    'Inter-ExtraBold':require('./assets/fonts/Inter-ExtraBold.ttf'),
    'Inter-LightItalic-BETA':require('./assets/fonts/Inter-LightItalic-BETA.ttf'),
    'Inter-SemiBold':require('./assets/fonts/Inter-SemiBold.ttf'),      
  });
  this.setState({isReady:true})
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
        { topdisplayOfCars:bottomList }
      ))
      
    //save the bottom index of the car list to the state  
    this.setState(previousState => (
        { bottomdisplayOfCars:topList }
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
      
    let selection = this.getCar(id); //method to get the photo of the selected car  
    this.setState(previousState => (
        { twoVehicleSelection:selection }
      ))
  }
  
  //method used in the car selection process to save car one's id of the selected car    
  saveOneVehicle = (id) => {
    let selection = this.getCar(id); //method to get the photo of the selected car
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
    if(userPwd.length == 6){
        this.passwordChecker(userPwd);
    }      
  }
  
  //Used in the playerLogin() to check the password. If correct continue to the Admin_homescreen, hide the security modal, and clear previous selected car data. If incorrect, clear the input in the Admin_login to start over
  passwordChecker = (userPwd) => {
    if(userPwd == this.state.pwd){
        this.openHomescreen();
        this.showHideSecurityModal();
        
    this.setState(previousState => (
        { oneVehicleSelection:[] }
      ))
        
    this.setState(previousState => (
        { twoVehicleSelection:[] }
      ))        
    }
      
    this.setState(previousState => (
        { userEnterPassword:"" }
      ))        
          
  }
  
  //Used in the passwordChecker() to change screen to the Admin_Homescreen view
  openHomescreen = () => {
    //Hide this component
    this.setState(previousState => (
        { openHomeOneVehicle:false}
      ))
      
    this.setState(previousState => (
        { openHomeTwoVehicle:false}
      ))
      
    this.setState(previousState => (
        { openHomeCar2:false}
      ))       
      
    this.setState(previousState => (
        { openHomeAll:false}
      ))   
    
    //Show this component
    this.setState(previousState => (
        { openAdminHomescreen:!previousState.openAdminHomescreen }
      ))      
  }
  
  //Used in the Admin_homescreen component to switch to the one vehicle selection screen or back
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
  
/* ################# Start of Home_All to Car Main ############################ */   
  
  //Used in the Home_All screen to navigate user to and from a selected's car Car Main page
  openCarMainforHomeAll = () => {
    //Hide this component
    this.setState(previousState => (
        { openHomeAll:!previousState.openHomeAll }
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeAllCarMain:!previousState.openHomeAllCarMain }
      ))        
  }
  
  //saves the selected car from Home_view_all and open a car main when the user click on a car in home_view_all    
  homeAllVehicleChoice = (id) => {
    let selection = this.getCar(id); //method to get the photo of the selected car  
    this.setState(previousState => (
        { oneVehicleSelection:selection }
      )) 
      
    this.openCarMainforHomeAll();
  }
  
  //Navigate to and from the Home All's Car Main and its Story
  openStoryForHomeAllCarMain = () => {    
    //Hide this component      
    this.setState(previousState => (
        { openHomeAllCarMain:!previousState.openHomeAllCarMain }
      ))      
      
    //Show this component
    this.setState(previousState => (
        { openStoryHomeAll:!previousState.openStoryHomeAll }
      ))       
  }     
  
/* ################# End of Home_All to Car Main ################################### */ 
  
  //Used in the Home Views to show and hide the hidden exit Modal
  showHideSecurityModal = () =>{
    this.setState(previousState => (
        { adminSecurity:!previousState.adminSecurity }
    )) 
  }  
  
  //Used in the Home View 1 to open a Story component for a selected car
  openOneVehicleStory = () => {    
    //Hide this component      
    this.setState(previousState => (
        { openHomeOneVehicle:!previousState.openHomeOneVehicle }
      ))      
      
    //Show this component
    this.setState(previousState => (
        { openStory:!previousState.openStory }
      ))       
  }
  
  //Used in the Home View Car 2 to open a Story component for the selected car
  openTwoVehicleStory = () => {    
    //Hide this component      
    this.setState(previousState => (
        { openHomeCar2:!previousState.openHomeCar2 }
      ))      
      
    //Show this component
    this.setState(previousState => (
        { openStoryCar2:!previousState.openStoryCar2 }
      ))       
  }  
  
  //Used in the Story component to switch to the home one vehicle presentation screen.
  goBackHomeOneVehicle = () => {
    //Hide this component
    this.setState(previousState => (
        { openStory:!previousState.openStory }
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeOneVehicle:!previousState.openHomeOneVehicle }
      ))      
  }
  
  //Used in the story component inside the car_main_1 to navigate back to it
  goBackFromStoryToCarMain1 = () => {
    //Hide this component
    this.setState(previousState => (
        { openStoryCarMain1:!previousState.openStoryCarMain1}
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeCarMain1:!previousState.openHomeCarMain1 }
      ))      
  }  
  
  //Used in the Story component to switch to the home two car 2 vehicle presentation screen.
  goBackHomeTwoCar2 = () => {
    //Hide this component
    this.setState(previousState => (
        { openStoryCar2:!previousState.openStoryCar2 }
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeCar2:!previousState.openHomeCar2 }
      ))      
  } 
  
  
  /* ################# Start of Car Main Navigation to/from Home View 2 ############################ */  
  
  //Used in the Home_View_2 component to switch to the car main 1 presentation screen. 
  viewCar1 = () => {
    //Hide this component
    this.setState(previousState => (
        { openHomeTwoVehicle:!previousState.openHomeTwoVehicle }
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeCarMain1:!previousState.openHomeCarMain1 }
      ))      
  }
  
  //Used in the Home_View_2 component to switch to the car main 2 vehicle presentation screen. 
  viewCar2 = () => {
    //Hide this component
    this.setState(previousState => (
        { openHomeTwoVehicle:!previousState.openHomeTwoVehicle }
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openHomeCar2:!previousState.openHomeCar2 }
      ))      
  }   
  
/* ################# End of Car Main Navigation to/from Home View 2 ############################ */  
  
  
/* ################# Start of Gallery Navigation ############################################### */
  
  //Used in the Home_View_1 to navigate to and from the Gallery with the oneVehicleselection car object
  openGalleryForHomeOne = () => {
    //Hide this component
    this.setState(previousState => (
        { openHomeOneVehicle:!previousState.openHomeOneVehicle}
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openGallery:!previousState.openGallery }
      ))      
  }
  
  //Used in the Home_View_1's Story to navigate to and from the Gallery with the oneVehicleselection car object
  openGalleryForHomeOneStory = () => {
    //Hide this component
    this.setState(previousState => (
        { openStory:!previousState.openStory}
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openGallery:!previousState.openGallery }
      ))      
  }  
  
  //Used in the Car Main 1 to navigate to and from the Gallery with the oneVehicleselection car object
  openGalleryForCarMain1 = () => {
    //Hide this component
    this.setState(previousState => (
        { openHomeCarMain1:!previousState.openHomeCarMain1}
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openGalleryCarMain1:!previousState.openGalleryCarMain1 }
      ))      
  }
  
  //Used in the Car Main 1's Story to navigate to and from the Gallery with the oneVehicleselection car object
  openGalleryForCarMain1Story = () => {
    //Hide this component
    this.setState(previousState => (
        { openStoryCarMain1:!previousState.openStoryCarMain1}
      )) 
    
    //Show this component      
    this.setState(previousState => (
        { openGalleryCarMain1:!previousState.openGalleryCarMain1 }
      ))      
  }  
  
  //Used in the Car Main 2 to navigate to and from the Gallery with the twoVehicleselection car object
  openGalleryForCarMain2 = () => {
    //Hide this component state
    this.setState(previousState => (
        { openHomeCar2:!previousState.openHomeCar2}
      )) 
    
    //Show this component state     
    this.setState(previousState => (
        { openGalleryCarMain2:!previousState.openGalleryCarMain2 }
      ))      
  }
  
  //Used in the Car Main 2's story to navigate to and from the Gallery with the twoVehicleselection car object
  openGalleryForCarMain2Story = () => {
    //Hide this component state
    this.setState(previousState => (
        { openStoryCar2:!previousState.openStoryCar2}
      )) 
    
    //Show this component state     
    this.setState(previousState => (
        { openGalleryCarMain2:!previousState.openGalleryCarMain2 }
      ))      
  }
  
  //Navigate between Home_All's Car Main and its Gallery
  openGalleryForHomeAllCarMain = () => {
    //Hide this component state
    this.setState(previousState => (
        { openHomeAllCarMain:!previousState.openHomeAllCarMain}
      )) 
    
    //Show this component state     
    this.setState(previousState => (
        { openGalleryHomeAll:!previousState.openGalleryHomeAll }
      ))      
  }
  
  //Navigate between Home_All's Car Main Story to its Gallery
  openGalleryForHomeAllStory = () => {
    //Hide this component state
    this.setState(previousState => (
        { openStoryHomeAll:!previousState.openStoryHomeAll}
      )) 
    
    //Show this component state     
    this.setState(previousState => (
        { openGalleryHomeAll:!previousState.openGalleryHomeAll }
      ))      
  }    
/* ################# End of Gallery Navigation ############################ */  
  
render() {
    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE);
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.LANDSCAPE_LEFT);
    return (

      <Container>
        <StatusBar hidden/>
        {/*First page of the app, allow the user to choose how many cars to be displayed*/}
        {this.state.openAdminHomescreen &&
            <Admin_Homescreen
                userEnterPwd = {this.state.userEnterPassword}
                login={this.playerLogin}        
                openCloseSecurityModal ={this.showHideSecurityModal}
                isVisibleModal = {this.state.adminSecurity}
                openAll = {this.openShowAll}
                openOne = {this.openOneVehicle}
                openTwo = {this.openTwoVehicle}/>
        }
        {/*allow the user to choose one car to be displayed. The "goBack" prop navigate the user to the admin_homescreen. The cars prop gives the component the array of cars to be use. The oneCarChoice prop saves the user car selection to the state(oneVehicleSelection)*/}
        {this.state.openAdminOneVehicle &&
            <Admin_One_Vehicle
                goBack = {this.openOneVehicle}
                cars = {carList}
                oneCarChoice = {this.oneVehicleChoice}/>
        }
        {/*allow the user to choose two car to be displayed. The "goBack" prop navigate the user back to the admin_homescreen page. The cars prop gives the component the array of cars to be use. The oneCarChoice and twoCarChoice prop saves the user car selections to the state(oneVehicleSelection). The one and two selectedCar props allows the user to see what they choose.*/}
        {this.state.openAdminTwoVehicle &&
            <Admin_Two_Vehicle
                goBack = {this.openTwoVehicle}
                cars = {carList}
                selectedCar2 = {this.state.twoVehicleSelection}
                selectedCar1 = {this.state.oneVehicleSelection}
                submit = {this.openHomeTwoVehicle}
                twoCarChoice = {this.saveTwoVehicle}
                oneCarChoice = {this.saveOneVehicle}/>
        }
        {/*allow the user to view one car and its details*/}
        {this.state.openHomeOneVehicle &&
            <Home_View_1
                goToStory = {this.openOneVehicleStory}
                goToGallery = {this.openGalleryForHomeOne}
                userEnterPwd = {this.state.userEnterPassword}
                login={this.playerLogin}        
                openCloseSecurityModal ={this.showHideSecurityModal}
                isVisibleModal = {this.state.adminSecurity}        
                selectedCar1 = {this.state.oneVehicleSelection}/>
        }  
        {/*allow the user to view two cars and their details. The viewCar 1 and 2 functions allow the user to click the clickable photos to navigate to the the selected car_main components.*/}
        {this.state.openHomeTwoVehicle &&
            <Home_View_2 
                viewCar1 = {this.viewCar1}
                viewCar2 = {this.viewCar2}
                userEnterPwd = {this.state.userEnterPassword}
                login={this.playerLogin}        
                openCloseSecurityModal ={this.showHideSecurityModal}
                isVisibleModal = {this.state.adminSecurity}         
                selectedCar2 = {this.state.twoVehicleSelection}
                selectedCar1 = {this.state.oneVehicleSelection}/>
        }
        {/*allow the user to view all cars and their details*/}
        {this.state.openHomeAll &&
            <Home_View_All 
                userEnterPwd = {this.state.userEnterPassword}
                login={this.playerLogin}        
                openCloseSecurityModal ={this.showHideSecurityModal}
                isVisibleModal = {this.state.adminSecurity}
                displaySelectedCar = {this.homeAllVehicleChoice}
                topDisplayOfCars = {this.state.topdisplayOfCars}
                bottomDisplayOfCars = {this.state.bottomdisplayOfCars}/>
        }
        {/*allow the user to view one car and its details*/}
        {this.state.openHomeCar2 &&
            <Car_Main
                goBack = {this.viewCar2}
                goToStory = {this.openTwoVehicleStory}
                goToGallery = {this.openGalleryForCarMain2}
                selectedCar1 = {this.state.twoVehicleSelection}/>
        }
        {/*allow the user to view the first selected car in home_view_2 and its details*/}
        {this.state.openHomeCarMain1 &&
            <Car_Main
                goBack = {this.viewCar1}
                goToStory = {this.goBackFromStoryToCarMain1}
                goToGallery = {this.openGalleryForCarMain1}
                selectedCar1 = {this.state.oneVehicleSelection}/>
        }
        {/*allow the user to view the selected car in home_view_all and its details*/}
        {/*############### WIP WIP WIP WIP WIP WIP ############################*/}
        {this.state.openHomeAllCarMain &&
            <Car_Main
                goBack = {this.openCarMainforHomeAll}
                goToStory = {this.openStoryForHomeAllCarMain}
                goToGallery = {this.openGalleryForHomeAllCarMain}
                selectedCar1 = {this.state.oneVehicleSelection}/>
        }          
        {/*allow the user to view details of a selected car from home_view_1*/}
        {this.state.openStory &&
            <Story
                goBack = {this.goBackHomeOneVehicle}
                goToGallery = {this.openGalleryForHomeOneStory}
                selectedCar={this.state.oneVehicleSelection} />
        }
        {/*allow the user to view the story of the first car in home_view_2 from Car Main*/}
        {this.state.openStoryCarMain1 &&
            <Story
                goBack = {this.goBackFromStoryToCarMain1}
                goToGallery = {this.openGalleryForCarMain1Story}
                selectedCar={this.state.oneVehicleSelection} />
        }         
        {/*allow the user to view the story of the second car in home_view_2 from Car Main*/}
        {this.state.openStoryCar2 &&
            <Story
                goBack = {this.goBackHomeTwoCar2}
                goToGallery = {this.openGalleryForCarMain2Story}
                selectedCar={this.state.twoVehicleSelection} />
        }
        
        {this.state.openStoryHomeAll &&
            <Story
                goBack = {this.openStoryForHomeAllCarMain}
                goToGallery = {this.openGalleryForHomeAllStory}
                selectedCar={this.state.oneVehicleSelection} />
        }
        
        {/*allow the user to view the gallery of the selected car in Home_view_1*/}
        {this.state.openGallery &&
            <Gallery
                goBack = {this.openGalleryForHomeOne}
                selectedCar={this.state.oneVehicleSelection} />
        }
        {/*allow the user to view the gallery of the selected car in Car_Main 1*/}
        {this.state.openGalleryCarMain1 &&
            <Gallery
                goBack = {this.openGalleryForCarMain1}
                selectedCar={this.state.oneVehicleSelection} />
        }
        {/*allow the user to view the gallery of the selected car in Car_Main 2*/}
        {this.state.openGalleryCarMain2 &&
            <Gallery
                goBack = {this.openGalleryForCarMain2}
                selectedCar={this.state.twoVehicleSelection} />
        }
        {/*allow the user to view the gallery of the selected car in Home All*/}
        {this.state.openGalleryHomeAll &&
            <Gallery
                goBack = {this.openGalleryForHomeAllCarMain}
                selectedCar={this.state.oneVehicleSelection} />
        }         
      </Container>
    );
  }
}
