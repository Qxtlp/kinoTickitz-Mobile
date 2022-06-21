import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Feather';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../stores/action/user';
import {Image, NativeBaseProvider} from 'native-base';
import Config from 'react-native-config';

function DrawerContent(props) {
  const dispatch = useDispatch();
  let image = `${Config.IMG_URL}default-profile.png`;
  const user = useSelector(state => state.user);
  if (user.data.image) {
    image = `${Config.IMG_URL}${user.data.image}`;
  }
  useEffect(() => {
    (async () => {
      const id = await AsyncStorage.getItem('id');
      dispatch(getUser(id));
    })();
  }, []);

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <DrawerContentScrollView {...props}>
          <View style={styles.containerProfile}>
            <Image
              source={{uri: image}}
              size={'16'}
              my={5}
              borderRadius={100}
              alt="profile"
            />
            <View style={styles.biodata}>
              <Text
                style={
                  styles.title
                }>{`${user.data.firstName} ${user.data.lastName}`}</Text>
              <Text style={styles.caption}>{user.data.email}</Text>
            </View>
          </View>
          <DrawerItemList {...props} />
        </DrawerContentScrollView>
        <View style={styles.containerSection}>
          <DrawerItem
            label="Logout"
            icon={({color, size}) => (
              <Icon color={color} size={size} name="log-out" />
            )}
            onPress={handleLogout}
          />
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

export default DrawerContent;
