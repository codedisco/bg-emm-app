import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';

import Admin_Nav from './admin_nav.js';

carList = [{"id":"VEHICLE SELECTION 1"},
           {"id":"VEHICLE SELECTION 2"},
           {"id":"VEHICLE SELECTION 3"},
           {"id":"VEHICLE SELECTION 4"},
          ];

//Component shaped like a radio option that the user can select
function Car_option(props) {
  return(
    <View>
      <TouchableOpacity style={styles.carOptionContainer}>
          <View style={styles.radioButtonStyle}></View>
          <Text style={styles.instructionStyle}>{props.id}</Text>
      </TouchableOpacity>
    </View>
  );    
}

//Display a list of vehicles, from carList, as radio options
export default function Admin_One_Vehicle(props) {
  return(
    <View style={styles.container}>
      {/*Nav component*/}
      <Admin_Nav navTitle = "Vehicle Choice" />
      
      {/*Body of the page*/}
      <View style={styles.vehicleContainer}>
      
        {/*Instructions*/}
        <Text style={styles.instructionStyle}>
            SELECT A VEHICLE 
        </Text>
      
        {/*Show a list of radio options of Car_options*/}
        <View style={styles.selectionContainerStyle}>
            <FlatList
                data={carList}
                renderItem={({item}) =>
                    <Car_option 
                        id={item.id} />
                }
                keyExtractor={item => item.id}
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
  //styles for the overall component    
  vehicleContainer: {
    flex: 7,    
    display: "flex",
    justifyContent: "center", //Center the instructions and button in the middle of the page
    alignItems: "center", //Center the instructions and button in the middle of the page
    backgroundColor:"#505050", //similar to the black color
    color: "lightgrey",      
  },
  //style for the instructions    
  instructionStyle: {
    color: "lightgrey",
    fontSize: 24,
    fontWeight: 'bold',      
  },
  selectionContainerStyle: {
    backgroundColor: '#505050',
    padding: 10, //white-space between the border and the button's text
    borderColor:'lightgrey',
    borderStyle: 'solid',
    borderWidth: 10,
  },
  carOptionContainer: {
    display:"flex",
    flexDirection: "row", //format the elemecnts to be side by side  
    alignItems: "baseline",
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
  }
});