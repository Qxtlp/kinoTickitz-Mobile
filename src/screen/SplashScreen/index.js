/* eslint-disable react-native/no-inline-styles */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('token');
      console.log(token);

      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    })();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#5F2EEA',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: 50,
        }}>
        kinoTickitz
      </Text>
    </View>
  );
}

export default SplashScreen;
