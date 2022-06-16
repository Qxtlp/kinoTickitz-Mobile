import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

import DrawerContent from '../components/DrawerContent';
import Header from '../components/Header';

import Home from '../screen/Home';
import ViewAll from '../screen/ViewAll';
import Detail from '../screen/Detail';
import Order from '../screen/Order';
import Payment from '../screen/Payment';
import Profile from '../screen/Profile';

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Detail}
        name="Detail"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Order}
        name="Order"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        component={Payment}
        name="Payment"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function ViewAllNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={ViewAll}
        name="ViewAll"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Profile}
        name="Profile"
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        component={HomeNavigator}
        name="HomeNavigator"
        options={{
          title: 'Home',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="home" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        component={ViewAllNavigator}
        name="ViewAllNavigator"
        options={{
          title: 'View All',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="list" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        component={ProfileNavigator}
        name="ProfileNavigator"
        options={{
          title: 'Profile',
          header: props => <Header {...props} />,
          drawerIcon: ({size, color}) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
