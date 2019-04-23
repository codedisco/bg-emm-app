import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import Admin_Login from './components/admin_login.js';
import Admin_Homescreen from './components/admin_homescreen.js';
import Admin_One_Vehicle from './components/admin_one_vehicle.js';
import Admin_Two_Vehicle from './components/admin_two_vehicle.js';
import Home_View_1 from './components/home_view_1.js';
import Home_View_2 from './components/home_view_2.js';
import Home_View_All from './components/home_view_all.js';

carList = [
    {"id":"1",
     "photo":require('./assets/cars-clipped/49-crosley.png'),
     "year":"1949", 
     "make":"Crosley", 
     "model":"Hot Shot",
     "engine":"44.2cu Inline 4 cylinder",
     "horsepower":"26",
     "fuelDelivery":"Single-barrel carburetor", 
     "transmission":"3 Speed-Manual", 
     "brakes":"Drum", 
     "color":"Jonquil Yellow", 
     "interior":"Red Leather", 
     "options":"Trimmed windshield",
     "production":"752", 
     "price":"$950", 
     "story":[
         {"para_id":"1", "para":"Among American sports cars, the Crosley Hot Shot can be considered the first. The engine was remarkable: a single overhead camshaft, a capacity of only 726cc, and a whopping 26 horsepower. It was originally developed as a small sedan, but its sporting capabilities won out by production in 1949 as a two-seat sports car. The Hot Shot wasn’t pretty — it was sometimes called a bathtub on wheels — but it could hit 75 MPH and was rather quick for its specs."}, 
         {"para_id":"2", "para":"The Hot Shot here is race-ready with a trimmed windshield, hand-painted numbers, and all badging removed for track safety. In 1950, this exact car in front of you won the prestigious Twelve Hours of Sebring race by the “index of performance,” achieved by averaging the best speed for its displacement. Hot Shots were raced all over the US until production ceased in 1952, just a few years after its release."}, 
         {"para_id":"3", "para":"On loan from William H. Cunningham, Jr."}]
    },
    {"id":"2",
     "photo":require('./assets/cars-clipped/50-mg.png'),
     "year":"1950", 
     "make":"MG", 
     "model":"TD",
     "engine":"1,250 cc (1.3 L) XPAG inline 4-cylinder",
     "horsepower":"57",
     "fuelDelivery":"SU Electric fuel pump", 
     "transmission":"4 Speed-Manual", 
     "brakes":"Drum", 
     "color":"Old English White (1 of 2)", 
     "interior":"Red Leather", 
     "options":"Wire wheels, Brooklands steering wheel, Arnolt heater",
     "production":"2,495 built in U.K. and exported to U.S", 
     "price":"$1850", 
     "story":[
         {"para_id":"1", "para":"This MG is the only non-American vehicle in our exhibit, but it’s just as influential on the American auto as any other car on display. By the late 1940s, Americans were catching sports car fever, and MG knew it. The British-built TD was designed to capture more of the American market as they made the car wider, longer, and heavier than its predecessor, the TC. They even offered a left-hand drive version specifically for the U.S., as seen here."}, 
         {"para_id":"2", "para":"This car, along with other European roadsters like the Jaguar XK120, heavily influenced early American-made sports cars. While stationed abroad during WWII, many Americans fell in love with the small, sleek roadsters built for winding European roads. Many foreign producers noticed the interest in their cars, and began exporting models for the American market. MG produced nearly 30,000 standard TD models, but the car in front of you is one of only about 2,500 TDs built for the U.S. in 1950."}, 
         {"para_id":"3", "para":"On loan from Hiram Shepard."}]
    },
    {"id":"3",
     "photo":require('./assets/cars-clipped/54-corvette.png'),
     "year":"1954", 
     "make":"Chevrolet", 
     "model":"Corvette",
     "engine":"236ci Inline “Blue-Flame Six",
     "horsepower":"270",
     "fuelDelivery":" 3 “Side-Draft” Carters", 
     "transmission":"2-Speed Automatic", 
     "brakes":"Drum", 
     "color":"Polo White", 
     "interior":"Red Leather", 
     "options":"None",
     "production":"318 of 3,640", 
     "price":"$3,072", 
     "story":[
         {"para_id":"1", "para":"As foriegn-made cars like the MG TD and the Jaguar XK120 crept into America’s field of view in the late 1940s, U.S. automakers decided to try their hand at building small, svelte roadsters that were as fun to drive as they were to look at. Chevrolet was the first major manufacturer to roll a sports car off the line, and it did so to great fanfare at the company’s 1953 Motorama showcase."}, 
         {"para_id":"2", "para":"Officially “released” in December of 1953, only 300 were initially made, distributed only to select, high-profile individuals. The car you’re looking at is the 318th Corvette built in its first full production year of 1954. Note the sleek fiberglass body with its toothy grille, “jet-pod” tail lamps, and lack of exterior door handles. The car’s design was stunning, but it masked some mechanical quirks and an underpowered engine. Because of this, Chevrolet only sold two-thirds of the initial batch of 1954 models. Later models would be faster and better-built, encouraged by some fierce competition from the Ford Thunderbird."}, 
         {"para_id":"3", "para":"On loan from Vining family."}]
    },
    {"id":"4",
     "photo":require('./assets/cars-clipped/57-thunderbird.png'),
     "year":"1957", 
     "make":"Ford", 
     "model":"Thunderbird",
     "engine":"312ci V-8",
     "horsepower":"245",
     "fuelDelivery":"Holley 4-barrel carburetor", 
     "transmission":"3-Speed Synchromesh - “Ford-O-Matic”", 
     "brakes":"Drum (modified to Disc)", 
     "color":"Raven Black", 
     "interior":"Black/White Leather", 
     "options":"Porthole Top",
     "production":"21,380", 
     "price":"$3,406", 
     "story":[
         {"para_id":"1", "para":"First introduced in 1955 as a response to Chevrolet’s new sporty offering, the Thunderbird was fast, well-built, and beautiful. It massively outsold the Corvette, as Ford had learned from some of Chevy’s mistakes. It had glass windows, a sturdy steel frame, and boasted a burly Mercury V8 engine that outpaced the ‘Vette’s sluggish inline 6-cylinder."}, 
         {"para_id":"2", "para":"While 1955 and 1956 models were fairly similar, Ford reimagined the Thunderbird for 1957, the model you see here. With a new grille, restyled bumpers, larger tail lights, and a redesigned dashboard, the ‘57 T-bird improved on an already staggering success of a car. Many regard the 1957 Thunderbird as the best version of the car Ford ever made. It’s also considered to be the last true Thunderbird, as the company only produced larger, four-seat versions of the car in 1958 and beyond. But Ford had proven that a two-seater could be a commercial success."}, 
         {"para_id":"3", "para":"On loan from Vining family."}]
    }
];

export default class App extends React.Component {
  constructor(props){
    super();
    this.state = {
      pwd:"1111",//password for the admin_Login component's input
      userEnterPassword:"",//used to clear the user incorrectly enter password by first saving it
      openAdminLogin:false,//When true, show the login screen
      openAdminHomescreen:true, //When true, show the admin home screen
      openAdminOneVehicle:false, //When true, show the admin one vehicle screen
      oneVehicleSelection:[],//vehicle chosen by by the user in the car selection components
      twoVehicleSelection:[],//vehicle chosen by by the user in the car selection components
      openAdminTwoVehicle:false, //When true, show the admin two vehicle screen
      openHomeOneVehicle:false, //When true, show single car and its details for the user
      openHomeTwoVehicle:false, //When true, show two cars and their details for the user
      openHomeAll:false, //When true, show all the cars and their details for the user    
      topdisplayOfCars:[], //list of car with a even index displayed in the all cars home selection on top row. Create with the getDisplayOfCars()
      bottomdisplayOfCars:[], //list of car with a even index displayed in the all cars home selection on bottom row. Create with the getDisplayOfCars()
      isReady: false,
      adminSecurity:false, //used to deter guests from loggin off by show and hide modal inside hidden button on Home views.
    }
  }

  async componentWillMount() {
  await Expo.Font.loadAsync({
    'Roboto': require('native-base/Fonts/Roboto.ttf'),
    'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
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
    if(userPwd.length == 4){
        this.passwordChecker(userPwd);
    }      
  }
  
  //Used in the playerLogin() to check the password. If correct continue to the Admin_homescreen. If incorrect, clear the input in the Admin_login to start over
  passwordChecker = (userPwd) => {
    if(userPwd == this.state.pwd){
        this.openHomescreen();
        this.showHideSecurityModal()
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
  
  //Used in the Home Views to show and hide the hidden exit Modal
  showHideSecurityModal = () =>{
    this.setState(previousState => (
        { adminSecurity:!previousState.adminSecurity }
    )) 
  }  
  
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }
    return (
      <Container>
        <StatusBar hidden/>
        {/*First page of the app, allow the user to choose how many cars to be displayed*/}
        {this.state.openAdminHomescreen &&
            <Admin_Homescreen
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
                userEnterPwd = {this.state.userEnterPassword}
                login={this.playerLogin}        
                openCloseSecurityModal ={this.showHideSecurityModal}
                isVisibleModal = {this.state.adminSecurity}        
                selectedCar1 = {this.state.oneVehicleSelection}/>
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
      </Container>
    );
  }
}
