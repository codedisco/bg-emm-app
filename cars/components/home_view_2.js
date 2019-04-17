import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import Admin_Nav from './admin_nav.js';


//
export default function Home_View_2(props) {
  return(
    <View style={styles.container}>
      {/*Nav component*/}
      <Admin_Nav navTitle = "" />
      
      {/*Body of the page*/}
      <View style={styles.homeViewContainer}>
        <View style={styles.row}>
            <View styles={styles.leftDetail}>
                <Text style={styles.details}>Year </Text>
                <Text style={styles.details}>Make </Text>
                <Text style={styles.details}>Modal </Text>        
            </View>
            <View styles={styles.rightDetail}>
                <Text style={styles.details}>Year </Text>
                <Text style={styles.details}>Make </Text>
                <Text style={styles.details}>Modal </Text>        
            </View>             
        </View>
        <View style={styles.row}>
            <View><Image source={props.onePhoto} /></View>
            <View><Image source={props.twoPhoto} /></View>
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
  details: {
      color: "lightgrey",
      fontSize: 30,
      fontWeight: 'bold',
  },  
  leftDetail: {
      textAlign:"right",
      backgroundColor:"pink",     
  }, 
  rightDetail: {
      textAlign: "left",
      backgroundColor: "yellow",
  },     
});