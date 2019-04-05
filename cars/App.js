import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import Admin_Login from './components/admin_login.js';
import Admin_Homescreen from './components/admin_homescreen.js';
import Admin_One_Vehicle from './components/admin_one_vehicle.js';
import Admin_Two_Vehicle from './components/admin_two_vehicle.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Admin_Two_Vehicle />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
