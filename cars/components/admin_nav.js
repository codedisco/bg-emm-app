import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

import {AntDesign } from '@expo/vector-icons';

export default function Admin_Nav(props) {
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <AntDesign name="leftsquare" size={96} color="gold" />
      </TouchableOpacity>
      <View style={[styles.navItems, styles.centerAlignTitle]}>
          <Text style={styles.titleColor}>
            {props.navTitle}
          </Text>
      </View>
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
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
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
  },
    
  //center align title
  centerAlignTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
});