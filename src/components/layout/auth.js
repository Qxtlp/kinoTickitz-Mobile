import React from 'react';
import {ScrollView, Text} from 'react-native';
import Styles from '../../styles/auth';

function AuthLayout(props) {
  return (
    <ScrollView style={Styles.container}>
      <Text style={Styles.title}>kinoTickitz</Text>
      <Text style={{fontWeight: 'bold', fontSize: 25, color: 'black'}}>
        {props.title}
      </Text>
      <Text style={{color: 'hsla(218, 15%, 59%, 1)', marginTop: 5}}>
        {props.subTitle}
      </Text>

      {props.children}
    </ScrollView>
  );
}

export default AuthLayout;
