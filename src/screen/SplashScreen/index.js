/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    const token = false;
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 1000);
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
