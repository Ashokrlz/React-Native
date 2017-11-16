import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen';

export default class App extends React.Component {
  render() {
    const MainNavigator = StackNavigator({
      Main: {screen : MainScreen}
    });
    return (
        <MainNavigator/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#97A7A7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
