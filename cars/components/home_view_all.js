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

//Show one car and its details 
function Car(props) {
  return(
    <View style={styles.row}>
        <View>
            <View><Image style={styles.imageStyle} source={props.photo} /></View>
        </View>
        <View>
            <Text style={styles.details}>Year </Text>
            <Text style={styles.details}>Make </Text>
            <Text style={styles.details}>Modal </Text>      
        </View>
    </View>
  );    
}

//show a list of cars in a horizontal plane
function Car_show(props){
  return(
    <View style={styles.row}>
        <FlatList
                horizontal={true}
                data={props.displayOfCars}
                renderItem={({item}) =>
                    <Car photo = {item.photo} />
                }
                keyExtractor={item => item.id}
            />  
    </View>
  );
}

//Show all the cars to the guests in a horizontal swiping view. Two lists of cars based on the even or odd index is used.
export default function Home_View_All(props) {
  return(
    <View style={styles.container}>
      {/*Nav component*/}
      <Admin_Nav navTitle = "" />
      
      {/*Body of the page*/}
      <View style={styles.homeViewContainer}>
        <ScrollView horizontal= {true}>
            <View style={styles.twoRows}>
                <View>
                    <Car_show displayOfCars={props.topDisplayOfCars}/>
                </View>
                <View style={styles.yellowLine}></View>
                <View style={styles.yellowLine}></View>
                <View style={styles.row}>
                    <Car_show displayOfCars={props.bottomDisplayOfCars}/>
                </View>
            </View>
        </ScrollView>
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
  details: {
      color: "lightgrey",
      fontSize: 30,
      fontWeight: 'bold'
  },
  twoRows: {
      display: "flex",
      flexDirection:"column",
  },
  yellowLine:{
      borderBottomColor: 'gold',
      borderBottomWidth: 5,
      width: "100%",
      marginTop:5,
      marginBottom: 5,
  },
  imageStyle: {
      width: 150,
      height: 150,
  }
});