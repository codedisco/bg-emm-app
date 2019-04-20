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

//show a list of cars in a horizontal plane
function Car_show(props){
  return(
    <View style={styles.row}>
        <FlatList
                horizontal={true}
                data={props.displayOfCars}
                renderItem={({item}) =>
                    <Car
                        year = {item.year}
                        make = {item.make}
                        model = {item.model}    
                        photo = {item.photo} />
                }
                keyExtractor={item => item.id}
            />  
    </View>
  );
}

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
                <Text>Year:</Text>
                <Text>Make:</Text>
                <Text>Engine:</Text>                
            </ScrollView>
            <View>
                <Text>Year:</Text>
                <Text>Make:</Text>
                <Text>Engine:</Text>
                <Text>Horsepower:</Text>
                <Text>Fuel Delivery:</Text>
                <Text>Transmission:</Text>
                <Text>Brakes:</Text>
                <Text>Color:</Text>
                <Text>Interior:</Text>
                <Text>Options:</Text>
                <Text>Production:</Text>
                <Text>Price New:</Text>
                <Text>Owner:</Text>
      
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
    borderWidth: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginRight: 30, //white-space between buttons
  },
  buttonText: {
    color: 'lightgrey',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  }  
});