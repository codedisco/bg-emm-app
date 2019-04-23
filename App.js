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
      {"para_id":"3", "para":""},
      {"para_id":"4", "para":"On loan from William H. Cunningham, Jr."}]
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
      {"para_id":"3", "para":""},
      {"para_id":"4", "para":"On loan from Hiram Shepard."}]
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
      {"para_id":"3", "para":""},
      {"para_id":"4", "para":"On loan from Vining family."}]
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
      {"para_id":"3", "para":""},
      {"para_id":"4", "para":"On loan from Vining family."}]
  },
  {"id":"5",
  "photo":require('./assets/cars-clipped/59-corvette.png'),
  "year":"1959", 
  "make":"Chevrolet", 
  "model":"Corvette",
  "engine":"283ci V8",
  "horsepower":"270",
  "fuelDelivery":"Two Carter 4-barrel carburetors (“Dual-Quad”)", 
  "transmission":"4-Speed Manual with T-Shifter", 
  "brakes":"Drum", 
  "color":"Inca Silver with White Coves", 
  "interior":"Black Leather", 
  "options":"None",
  "production":"8,825 of 9,670", 
  "price":"$4,017", 
  "story":[
     {"para_id":"1", "para":"Though Ford had proven it had a stronger public appeal with the Thunderbird, by 1958 it strayed from its sports car roots and became more of a personal luxury vehicle. Chevrolet, on the other hand, only dug in deeper with third redesign of the Corvette. They were committed to building America’s only true sports car."}, 
     {"para_id":"2", "para":"Some claimed the 1958 Corvette was “over-designed” with too much chrome and exaggerated styling (possibly an overreaction to the Thunderbird). Chevrolet would address this issue in the 1959 model you see here by removing some of the excessive glitz like washboard ridges on the hood and chrome “tusks” that ran down the trunk. The car also now had a proper overhead V8 (introduced in 1956), giving it real race-ready power and a top speed of 128 MPH."}, 
     {"para_id":"3", "para":""},
     {"para_id":"4", "para":"On loan from the Vining family."}]
  },
  {"id":"6",
  "photo":require('./assets/cars-clipped/63-avanti.png'),
  "year":"1963", 
  "make":"Studebaker", 
  "model":"Avanti",
  "engine":"289ci V8",
  "horsepower":"240",
  "fuelDelivery":"4-barrel carburetor", 
  "transmission":"3-speed automatic", 
  "brakes":"Disc", 
  "color":"Avanti White", 
  "interior":"Black Leather", 
  "options":"None",
  "production":"4,643", 
  "price":"$4,445", 
  "story":[
     {"para_id":"1", "para":"The Avanti was supposed to save Studebaker. Unique styling, a powerful engine, and an aircraft-inspired interior aimed to reverse the company’s recent rapid decline in sales. They unveiled a prototype of the car in 1962, but stumbled over production problems for more than a year. The car was selected to pace the 1962 Indy 500, but it wasn’t ready in time, and Studebaker lost out on a major promotional push for the Avanti. The car’s eventual release in 1963 came too late to save the company. The plant that built the Avanti was closed in December of ‘63, and Studebaker would build its last car less than three years later."}, 
     {"para_id":"2", "para":"The Avanti was influential, nonetheless. Notice the seat belts, a novel addition at the time. Studebaker began installing seat belts on all their cars in March of 1963, and were one of the first American automakers to blend safety and style. Other companies began following suit, and seat belts were mandated by law in 1966."}, 
     {"para_id":"3", "para":""},
     {"para_id":"4", "para":"On loan from the Burgin and Ann Clairborne Collection"}]
  },
  {"id":"7",
  "photo":require('./assets/cars-clipped/64-dart.png'),
  "year":"1964", 
  "make":"Dodge", 
  "model":"Dart GT (coupe)",
  "engine":"273ci V8 Chrysler LA Series",
  "horsepower":"180",
  "fuelDelivery":"2-barrel carburetor", 
  "transmission":"3-speed TorqueFlite push-button automatic", 
  "brakes":"Drum", 
  "color":"Roman Dark Red", 
  "interior":"Black", 
  "options":"None",
  "production":"50,700", 
  "price":"$2,600", 
  "story":[
     {"para_id":"1", "para":"The Dart was a massively popular car for Dodge in the 1060s — almost too popular. At the beginning of the decade, Dart models made up 87% of the company’s sales. But that didn’t seem to phase Dodge. By 1964, the Dart was available in four different styles: convertible, sedan, station wagon, and hard-top coupe. While many were built with Chrysler’s standard Slant-Six engine, Dodge introduced a compact, lightweight 273ci V8 engine specifically for the GT coupe and convertible, with which the model you see here is equipped."}, 
     {"para_id":"2", "para":"A truly unique feature of the ‘64 Dart is its push-button automatic transmission (see image in gallery). To shift from park to drive, the driver plunges a cylindrical button into the dashboard to the left of the steering wheel, which would redirect the transmission’s fluid path. The system (which lacked a “Park” button), proved to be more of a hurdle than a convenience, and 1964 was the last year Dodge implemented push-button transmission."}, 
     {"para_id":"3", "para":""},
     {"para_id":"4", "para":"On loan from Rob Whitlow."}]
  },
  {"id":"8",
  "photo":require('./assets/cars-clipped/64.5-mustang.png'),
  "year":"1964.5", 
  "make":"Ford", 
  "model":"Mustang",
  "engine":"289ci V8",
  "horsepower":"225",
  "fuelDelivery":"4-barrel carburetor", 
  "transmission":"3-speed manual", 
  "brakes":"Drum", 
  "color":"Rangoon Red", 
  "interior":"Red parchment vinyl", 
  "options":"Power top",
  "production":"680,000", 
  "price":"$2,368", 
  "story":[
     {"para_id":"1", "para":"Introduced in the spring of 1964 (and subsequently dubbed the “1964.5”), the first-ever Ford Mustang broke records with more than 680,000 sold in its 18-month inaugural model year. The car was fast, fun, and affordable. Storied Ford executive Lee Iacocca had done his homework and hit the demographic nail on the head when he set out to build a “youthful” sports car."}, 
     {"para_id":"2", "para":"Since Ford was targeting a younger buyer with the Mustang, the car had to be relatively inexpensive. Developing it from scratch would have pushed the project beyond the desired profitability mark, so Iacocca repurposed the chassis and many parts from the existing (and dreary) Ford Falcon. (In fact, Car and Driver famously called the Falcon “a piece of machinery about as exciting as a dish of baby food.”) "}, 
     {"para_id":"3", "para":"Like Iacocca himself, the Mustang has since become an American automotive icon, and remains one of the best bang-for-your-buck sports cars on the market. It was so popular upon its release that it created a new sub-market of sports cars: the Pony Car."},
     {"para_id":"4", "para":"On loan from the Vining family."}]
  },
  {"id":"9",
  "photo":require('./assets/cars-clipped/67-corvette.png'),
  "year":"1967", 
  "make":"Chevrolet", 
  "model":"Corvette Stingray",
  "engine":"427ci V8",
  "horsepower":"435",
  "fuelDelivery":"Three Holley 2-barrel carburetors (“Tri-Power”)", 
  "transmission":"4-speed manual with T-Shifter", 
  "brakes":"Disc", 
  "color":"Rally Red", 
  "interior":"Black Leather", 
  "options":"Side exhaust",
  "production":"22,940 (8,504 coupes)", 
  "price":"$4,388", 
  "story":[
     {"para_id":"1", "para":"The 1967 Corvette Sting Ray was the last Corvette of the second generation (“C2”). Five years of refinements made it the best of the C2 line, and quite possibly the best Corvette ever built. The car was phenomenal, lauded for its handling, road adhesion, and sheer power. Dubbed the Sting Ray (and ever since 1968, “Stingray”), the name calls attention to the lines of the car that come to a point on both the hood and the trunk."}, 
     {"para_id":"2", "para":"Because Chevy would completely redesign the Corvette the following year, the changes to the ‘67 were minimal: restyled fender vents, less ornamentation, and a lower, less chunky appearance. There was also now a single backup light, mounted above the license plate. Even though these design updates made for a better car, many buyers knew a fully revamped Corvette was coming their way, and sales dipped in 1967 by nearly 20% — making this Corvette one of the rarer models of the era."}, 
     {"para_id":"3", "para":""},
     {"para_id":"4", "para":"On loan from the Vining family."}]
  },
  {"id":"10",
  "photo":require('./assets/cars-clipped/67-shelby.png'),
  "year":"1967", 
  "make":"Shelby American", 
  "model":"GT500",
  "engine":"427cu V8 “side oiler” (1 of only 6 built)",
  "horsepower":"485",
  "fuelDelivery":"Two Holley 4-barrel carburetors", 
  "transmission":"C6 “Police Special” automatic", 
  "brakes":"Power disc", 
  "color":"Brittany Blue Metallic", 
  "interior":"White", 
  "options":"Autographed by Carroll Shelby (glove box)",
  "production":"2,048", 
  "price":"$4,195", 
  "story":[
     {"para_id":"1", "para":"Carroll Shelby was a flight instructor in World War II before entering the world of car racing as a driver. After retiring from racing due to health problems, Shelby partnered with Ford to start creating performance versions of their cars through his company, Shelby American. The first Shelby-built vehicles appeared in 1965, but the Mustang variants really started to shine in 1967."}, 
     {"para_id":"2", "para":"Built with the same engine Shelby’s racing team used to claim the top three places in the 1966 24 Hours of Le Mans race, the ‘67 Shelby GT500 was the most powerful Mustang to-date. It blended sheer brute force with true racing-inspired design. The fiberglass hood sports a functional air scoop and the trunk lid joins seamlessly with the tailpiece to form a spoiler lip. When reflecting on the ‘67 GT500, Carroll Shelby said, “This is the first car I’m really proud of.” Coincidentally, it would be the last Shelby Mustang actually built at a Shelby American factory. Ford continued to work with Shelby, but they consolidated production in 1968 and beyond."}, 
     {"para_id":"3", "para":""},
     {"para_id":"4", "para":"On loan from Cofer’s Classics."}]
  },
  {"id":"11",
  "photo":require('./assets/cars-clipped/69-corvette.png'),
  "year":"1969", 
  "make":"Chevrolet", 
  "model":"Corvette Stingray",
  "engine":"427ci V8",
  "horsepower":"435",
  "fuelDelivery":"Three Holley 2-barrel carburetors (“Tri-Power”)", 
  "transmission":"4-speed manual with T-Shifter", 
  "brakes":"Drum", 
  "color":"Riverside Gold", 
  "interior":"Black Leather", 
  "options":"Side Mount Exhaust",
  "production":"38,762", 
  "price":"$6,189", 
  "story":[
     {"para_id":"1", "para":"By 1968, the Corvette had entered a new era, noted most by a dramatic change in styling. The “C3” generation cars had a lower stance, higher fenders, and an overall more extreme look. The “Stingray” designation had also returned after a year absent (and no longer “Sting Ray” as seen on the 1967 model)."}, 
     {"para_id":"2", "para":"Perhaps most notably, the hard-top coupes were also now equipped with a T-top, added in part for rigidity. Without it, and when equipped with the powerful 427ci V8 option, the car would twist its own chassis under strain from the massive amounts of torque the engine was capable of. About this C3 Corvettes, Car and Driver magazine wrote, “The small-engine Corvettes are marginally faster and extraordinarily civilized. The large-engine Corvettes are extraordinarily fast and marginally civilized.”"}, 
     {"para_id":"3", "para":""},
     {"para_id":"4", "para":"On loan from the Vining family."}]
  },
  {"id":"12",
  "photo":require('./assets/cars-clipped/70-mustang.png'),
  "year":"1970", 
  "make":"Ford", 
  "model":"Mustang BOSS 302",
  "engine":"302ci V8",
  "horsepower":"290",
  "fuelDelivery":"Two 4-barrel Holley carburetors", 
  "transmission":"Toploader 4-speed manual", 
  "brakes":"Front disc, rear drum", 
  "color":"Calypso Coral, Black Jade", 
  "interior":"Black", 
  "options":"“Drag Pack” package, shaker hood",
  "production":"198,239 (7,013 BOSS 302 models)", 
  "price":"$3,325", 
  "story":[
     {"para_id":"1", "para":"In early 1968, Semon “Bunkie” Knudsen, who had saved Pontiac with the Trans Am, defected from GM to become president of Ford. He brought with him stylist Larry Shinoda, who had lead the 1968 redesign of the Corvette. Together, they aimed to take the Mustang from Pony Car to muscle car, and they started with the BOSS 302."}, 
     {"para_id":"2", "para":"Like he had at Pontiac, Knudsen wanted to pack the Mustang full of as much power as possible. So Shinoda designed a 1969 Mustang variant around a lightweight 302 cubic-inch engine — because it’s what the boss wanted. Ford built 1,628 BOSS 302s in '69, and more than quadrupled production in 1970. Knudsen would last less than two years at Ford, and so would the BOSS 302. This 1970 was the last model produced of the performance-forward Mustang. The car in front of you sports a unique upgrade: a hood-mounted tachometer."}, 
     {"para_id":"3", "para":""},
     {"para_id":"4", "para":"On loan from Cofer’s Classics."}]
  },

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
                topDisplayOfCars = {this.state.topdisplayOfCars}
                bottomDisplayOfCars = {this.state.bottomdisplayOfCars}/>
        }         
      </Container>
    );
  }
}
