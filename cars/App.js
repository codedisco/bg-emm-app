import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants } from 'expo';
import Admin_Login from './components/admin_login.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Admin_Login />
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
  },
});
