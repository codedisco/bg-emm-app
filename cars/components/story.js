import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';

import Admin_Nav from './admin_nav.js';

//
export default function Story(props) {
  return(
    <View style={styles.container}>
      {/*Nav component*/}
      <Admin_Nav navTitle = "" goBack = {props.goBack} />
      
      {/*Body of the page*/}
      <View style={styles.homeViewContainer}>
        <View style={styles.row}>
            <ScrollView>
                <FlatList
                data={props.selectedCar.story}
                renderItem={({item, index}) =>
                    <Text>{item.para}</Text>
                }
                keyExtractor={item => item.para_id}
            /> 
            </ScrollView>
            <View>
                <Text style={styles.specDetails}>Year:{props.selectedCar.year}</Text>
                <Text style={styles.specDetails}>Make:{props.selectedCar.make}</Text>
                <Text style={styles.specDetails}>Engine:{props.selectedCar.model}</Text>
                <Text style={styles.specDetails}>Horsepower:</Text>
                <Text style={styles.specDetails}>Fuel Delivery:</Text>
                <Text style={styles.specDetails}>Transmission:</Text>
                <Text style={styles.specDetails}>Brakes:</Text>
                <Text style={styles.specDetails}>Color:</Text>
                <Text style={styles.specDetails}>Interior:</Text>
                <Text style={styles.specDetails}>Options:</Text>
                <Text style={styles.specDetails}>Production:</Text>
                <Text style={styles.specDetails}>Price New:</Text>
                <Text style={styles.specDetails}>Owner:</Text>
      
                {/*Gallery Button*/}
                <TouchableOpacity
                    style={styles.buttonStyle}>
                    <Text style={styles.buttonText}>GALLERY</Text>      
                </TouchableOpacity>  
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
  homeViewContainer: {
      flex: 7,    
      display: "flex",
      backgroundColor:"#505050", //similar to the black color
      color: "lightgrey",      
  }, 
  row: {
      display: "flex",
      flexDirection:"row",
      justifyContent: "space-around",
      
  },
  buttonStyle: {
    backgroundColor: '#505050',
    padding: 10, //white-space between the border and the button's text
    borderColor:'lightgrey',
    borderStyle: 'solid',
    borderWidth: 5,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 30, //white-space between buttons
  },
  buttonText: {
    color: 'lightgrey',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  specDetails: {
      color: "lightgrey",
      fontSize: 14,
      fontWeight: 'bold'
  }  
});