import React, {useEffect, useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../styles/main';

export default function Header(props) {
  return (
    <View style={{backgroundColor: 'white', paddingHorizontal: 16}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => {
            props.navigation.navigate('Home');
          }}>
          <Text style={Styles.title}>kinoTickitz</Text>
        </Pressable>

        <TouchableWithoutFeedback onPress={() => props.navigation.openDrawer()}>
          <Icon
            backgroundColor={'white'}
            size={30}
            name="menu"
            color="black"
            style={{marginTop: 15}}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}
