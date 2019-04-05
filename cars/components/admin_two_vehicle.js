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

export default function Admin_Two_Vehicle(props) {
  return(
    <View style={styles.container}>
      <Admin_Nav navTitle = "Vehicle Choice" />
      <View style={styles.vehicleContainer}>
        <View style={styles.carOptionContainer}>
            <View style={styles.whiteSpaceBetweenSelections}>
                <Text style={styles.instructionStyle}>SELECT LEFT VEHICLE</Text>
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
            <View>
                <Text style={styles.instructionStyle}>SELECT RIGHT VEHICLE</Text>
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
  }
});