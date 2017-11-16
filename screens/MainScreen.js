import React, {Component} from 'react';
import {View, Platform, Image} from 'react-native';
import {STATUS_BAR_HEIGHT} from '../constants';
import icon from '../assets/app-icon.png';
import Expo from 'expo';
import { Alert, AppRegistry, Button, Text, StyleSheet } from 'react-native';

class MainScreen extends Component{
    static navigationOptions = () => ({
        title: 'Thaabet',
        headerStyle:{
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196F3'
        },
        headerTitleStyle: {
            marginTop: Platform.OS === 'android' ?  STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        headerLeft: (
            <Image
            source = {icon}
            style={styles.imageStyle}
            />
        )
    });
        

// render(){
//     return(
//         <View style={{ flex:1, backgroundColor: '#c0caca'}}>

//        </View>
//     );

// }


_handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.paragraph}>
          Hello
        </Text>
            <View style={{ width: 100, height: 50, backgroundColor: 'powderblue'}}>
                <Button
                  title="Press me"
                  onPress={this._handleButtonPress}
                />
            </View>
            <View style={{ width: 100, height: 50, backgroundColor: 'green'}}>
                <Button
                  title="Press me"
                  onPress={this._handleButtonPress}
                />
            </View>
            <View style={{ width: 100, height: 50, backgroundColor: 'yellow'}}>
                <Button
                  title="Press me"
                  onPress={this._handleButtonPress}
                />
            </View>
      </View>
    );
  }
}

const styles={
    imageStyle: {
      marginTop: 20,
      marginLeft: 30,
      width: 20,
      height: 20
    }
};

export default MainScreen;
