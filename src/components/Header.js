import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../styles/main';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Header(props) {
  const [data, setData] = useState({});
  const result = AsyncStorage.multiGet(['id', 'token'], (err, stores) => {
    if (err) {
      console.log(err);
    }
    console.log(stores.map(result => result));
  });
  return (
    <View style={{backgroundColor: 'white', paddingHorizontal: 16}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={Styles.title}>kinoTickitz</Text>
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
