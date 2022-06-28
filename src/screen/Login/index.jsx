import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Pressable,
  BackHandler,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/auth';
import Layout from '../../components/layout/auth';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen(props) {
  const [form, setForm] = useState({email: '', password: ''});
  const [isSecure, setIsSecure] = useState(true);
  const [isError, setIsError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want exit app?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const result = await axios.post('auth/login', form);
      await AsyncStorage.setItem('id', result.data.data.id);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);

      setIsLoading(false);

      props.navigation.navigate('AppScreen', {
        screen: 'Home',
      });
    } catch (error) {
      setIsError(error.response.data.msg);
      setIsLoading(false);
    }
  };

  const handleChange = (value, name) => {
    setForm({...form, [name]: value});
    setIsError('');
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
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={value => handleChange(value, 'email')}
        autoFocus
      />
      <Text style={{marginTop: 20}}>Password</Text>
      <View style={{flexDirection: 'row', ...Styles.input, padding: 7}}>
        <TextInput
          style={{flex: 2}}
          placeholder="Write your password"
          textContentType="password"
          secureTextEntry={isSecure}
          onChangeText={value => handleChange(value, 'password')}
        />
        <View style={{paddingTop: 10, paddingHorizontal: 5}}>
          <Icon
            name={isSecure ? 'eye' : 'eye-off'}
            backgroundColor={'hsla(210, 50%, 99%, 1)'}
            color="grey"
            size={25}
            style={{flex: 1, paddingHorizontal: 0}}
            onPress={() => setIsSecure(!isSecure)}></Icon>
        </View>
      </View>

      {isError ? (
        <View
          style={{
            backgroundColor: 'red',
            borderRadius: 5,
            marginTop: 30,
            padding: 10,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>{isError}</Text>
        </View>
      ) : (
        <></>
      )}

      <TouchableOpacity
        style={{
          backgroundColor:
            form.email && form.password
              ? 'hsla(256, 82%, 55%, 1)'
              : 'hsla(256, 82%, 55%, 0.5)',
          borderRadius: 10,
          marginTop: 30,
          padding: 20,
          color: 'white',
        }}
        onPress={handleLogin}
        disabled={isLoading || !(form.email && form.password)}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            'Sign In'
          )}
        </Text>
      </TouchableOpacity>

      <View style={{marginTop: 10}}>
        <Text style={{marginTop: 10, textAlign: 'center'}}>
          Forgot your password?{' '}
          <Pressable onPress={() => props.navigation.navigate('Reset')}>
            <Text style={{...Styles.textMain, textDecorationLine: 'underline'}}>
              Reset now
            </Text>
          </Pressable>
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
