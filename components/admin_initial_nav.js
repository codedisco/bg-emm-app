import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import { Constants } from 'expo';
import {AntDesign } from '@expo/vector-icons';

//Nav component used in the admin pages
export default function Admin_Initial_Nav(props) {
  return(
    <View style={styles.container}>
      {/*Left side, Back button*/}
      <TouchableOpacity style={{backgroundColor: '#E5C035',}}>
        <Image
          style={{width: 60, height: 60, margin: 15, resizeMode: 'contain',}}
          source={require('../assets/arrow-left.png')}
        />
      </TouchableOpacity>
      
      {/*Center, Dynamic Instructions that change with each admin page*/}
      <View style={[styles.navItems, styles.centerAlignTitle]}>
          <Text style={styles.titleColor}>
            {props.navTitle}
          </Text>
      </View>
      
      {/*Right side, Brand logo*/}
      <Image
          style={{width: 120, height: 70, resizeMode: 'contain', marginRight: 20}}
          source={require('../assets/emm-logo-large.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    //alignItems: "stretch",
    alignItems: "center",
    paddingBottom: 30,
    width:"100%",
    backgroundColor:"#505050",
  },
  //evenly distribute items in the nav left, center, and right    
  navItems: {
    flex: 1,
  },
  //Move the Brand logo to the far right in the nav    
  rightAlignNavItem :{
    textAlign: "right",
  },
  //color of the title
  titleColor: {
    color: "lightgrey",
    fontSize: 24,
    fontWeight: 'bold',       
  },
    
  //center align title
  centerAlignTitle: {
    display: "flex",
    //justifyContent: "center",
    //alignItems: "center",
    textAlign: "left",
    marginLeft: 50,
  }
});