import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Admin_Nav from './admin_nav.js';

//Component shaped like a radio option that the user can select
function Car_option(props) {
  return(
    <View>
      <TouchableOpacity
            onPress = {props.carChoice}
            style={styles.carOptionContainer}>
          <View style={styles.radioButtonStyle}></View>
          <Text style={styles.instructionStyle}>{props.make} {props.model}</Text>
      </TouchableOpacity>
    </View>
  );    
}

//Display two list of vehicles, from carList, as radio options
export default function Admin_Two_Vehicle(props) {
  return(
    <View style={styles.container}>
      {/*Nav component*/}
      <Admin_Nav navTitle = "Vehicle Choice" />
      
      {/*All main Views are vertically stacked and centerd while the selection container are horizontally aligned*/}
      <View style={styles.vehicleContainer}>
        {/*Left selection container*/}
        <View style={styles.carOptionContainer}>
            <View style={styles.whiteSpaceBetweenSelections}>
                <Text style={styles.instructionStyle}>SELECT LEFT VEHICLE</Text>
                <View style={styles.selectionContainerStyle}>
                    <FlatList
                        data={props.cars}
                        renderItem={({item}) =>
                            <Car_option
                                carChoice = {() =>{props.oneCarChoice(item.id)}}
                                make = {item.make}
                                model={item.model}
                                id={item.id} />
                        }
                        keyExtractor={item => item.id}
                    />      
                </View>
            </View>
            
            {/*Right selection container*/}
            <View>
                <Text style={styles.instructionStyle}>SELECT RIGHT VEHICLE</Text>
                <View style={styles.selectionContainerStyle}>
                    <FlatList
                        data={carList}
                        renderItem={({item}) =>
                            <Car_option
                                carChoice = {() =>{props.twoCarChoice(item.id)}}
                                make = {item.make}
                                model={item.model}
                                id={item.id} />
                        }
                        keyExtractor={item => item.id}
                    />      
                </View>
            </View>
        </View>

        {/*Submit Button*/}
        <View style={styles.submitButtonContainer}>
            <TouchableOpacity onPress = {props.submit}>
                <Text style={styles.buttonTextStyle}>Confirm</Text>
            </TouchableOpacity>        
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({      
  container: {
    flex: 1,   
  },
  //styles for the overall component    
  vehicleContainer: {
    flex: 7,    
    display: "flex",
    justifyContent: "center", //Center the instructions and button in the middle of the page
    alignItems: "center", //Center the instructions and button in the middle of the page
    backgroundColor:"#505050", //similar to the black color     
  },
  //style for the instructions    
  instructionStyle: {
    color: "lightgrey",
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 3, 
    textAlign:"center",
    paddingBottom: 20,
  },
  selectionContainerStyle: {
    backgroundColor: '#505050',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 30,
    borderColor:'lightgrey',
    borderStyle: 'solid',
    borderWidth: 5,
  },
  carOptionContainer: {
    display:"flex",
    flexDirection: "row", //format the elemecnts to be side by side
    paddingBottom: 30,  
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  radioButtonStyle: {
    height: 25,
    width: 25,
    borderColor:'lightgrey',
    borderStyle: 'solid',
    borderWidth: 5,
    borderRadius: 30,
    backgroundColor: '#505050',
    marginRight: 10,
  },
  whiteSpaceBetweenSelections: {
    marginRight: 20,
  },
  submitButtonContainer: {
    marginTop: 20,
    backgroundColor: '#E5C035',
    padding: 20, //white-space between the border and the button's text     
  }, 
  buttonTextStyle:{
    color:"#505050",
    fontSize: 20,
    letterSpacing: 3,
    fontWeight: 'bold',       
  }
    
});