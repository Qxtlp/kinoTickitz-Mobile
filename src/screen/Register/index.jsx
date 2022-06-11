import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/auth';
import Layout from '../../components/layout/auth';

function RegisterScreen(props) {
  const handleRegister = () => {
    props.navigation.navigate('Login');
  };
  return (
    <Layout
      title="Sign Up"
      subTitle="Sign in with your data that you entered during your registration"
      forgotPass={true}>
      <Text style={{marginTop: 20}}>First Name</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your First Name"
        // onChangeText={onChangeText}
        // value={text}
        autoFocus
      />
      <Text style={{marginTop: 20}}>Last Name</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your Last Name"
        // onChangeText={onChangeText}
        // value={text}
      />
      <Text style={{marginTop: 20}}>Phone Number</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your Phone Number"
        textContentType="telephoneNumber"
        keyboardType="number-pad"
        // onChangeText={onChangeText}
        // value={text}
      />
      <Text style={{marginTop: 20}}>Email</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your Email"
        textContentType="emailAddress"
        // onChangeText={onChangeText}
        // value={text}
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
        onPress={handleRegister}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
          Sign Up
        </Text>
      </TouchableOpacity>

      <View style={{marginTop: 10, marginBottom: 30}}>
        <Text style={{marginTop: 10, textAlign: 'center'}}>
          Already have account ?{' '}
          <Text
            style={{...Styles.textMain, textDecorationLine: 'underline'}}
            onPress={() => {
              props.navigation.navigate('Login');
            }}>
            Sign in
          </Text>
        </Text>
      </View>
    </Layout>
  );
}

export default RegisterScreen;
