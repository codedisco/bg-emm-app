import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
} from 'react-native';

import { Constants } from 'expo';
import {AntDesign } from '@expo/vector-icons';

//Nav component used in the admin pages
export default function Admin_Nav(props) {
  return(
    <View style={styles.container}>
      {/*Left side, Back button*/}
      <TouchableOpacity>
        <AntDesign name="" size={96} />
      </TouchableOpacity>
      
      {/*Center, Dynamic Instructions that change with each admin page*/}
      <View style={[styles.navItems, styles.centerAlignTitle]}>
          <Text style={styles.titleColor}>
            {props.navTitle}
          </Text>
      </View>
      
      {/*Right side, Brand logo*/}
      <Image
          style={{width: 100, height: 100}}
          source={require('../assets/randomface.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 15,
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