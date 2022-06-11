import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/auth';
import Layout from '../../components/layout/auth';

function LoginScreen(props) {
  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
    });
  };

  const handleRegister = () => {
    console.log('object');
    props.navigation.navigate('Register');
  };
  return (
    <Layout
      title="Sign In"
      subTitle="Sign in with your data that you entered during your registration"
      forgotPass={true}
      link={() => props.navigation.navigate('Register')}>
      <Text style={{marginTop: 20}}>Email</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your Email"
        textContentType="emailAddress"
        // onChangeText={onChangeText}
        // value={text}
        autoFocus
      />
      <Text style={{marginTop: 20}}>Password</Text>
      <View style={{flexDirection: 'row', ...Styles.input, padding: 7}}>
        <TextInput
          style={{flex: 2}}
          placeholder="Write your password"
          textContentType="password"
          secureTextEntry={true}
          // onChangeText={onChangeText}
          // value={text}
        />
        <Icon.Button
          name="eye"
          backgroundColor={'hsla(210, 50%, 99%, 1)'}
          color="grey"
          style={{flex: 1, paddingHorizontal: 0}}></Icon.Button>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#5F2EEA',
          borderRadius: 10,
          marginTop: 50,
          padding: 20,
          color: 'white',
        }}
        onPress={handleLogin}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
          Sign In
        </Text>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
        <Text style={{marginTop: 10, textAlign: 'center'}}>
          Forgot your password?{' '}
          <Text style={{...Styles.textMain, textDecorationLine: 'underline'}}>
            Reset now
          </Text>
        </Text>

        <Text style={{marginTop: 10, textAlign: 'center'}}>
          Don't have an account?{' '}
          <Text
            style={{...Styles.textMain, textDecorationLine: 'underline'}}
            onPress={() => {
              props.navigation.navigate('Register');
            }}>
            Sign Up
          </Text>
        </Text>
      </View>
    </Layout>
  );
}

export default LoginScreen;
