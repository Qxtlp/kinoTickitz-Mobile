import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  ToastAndroid,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/auth';
import Layout from '../../components/layout/auth';
import axios from '../../utils/axios';

function RegisterScreen(props) {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    noTelp: '',
    email: '',
    password: '',
  });
  const [isSecure, setIsSecure] = useState(true);
  const [isError, setIsError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    try {
      setIsLoading(true);
      console.log(form);
      const result = await axios.post('auth/register', form);
      console.log(result.data);
      ToastAndroid.showWithGravity(
        'Acount registered.Check your email to activate your account',
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
      );
      setIsLoading(false);
      props.navigation.navigate('Login');
    } catch (error) {
      console.log(error.desc);
      setIsError(error.response.data.msg);
      setIsLoading(false);
    }
  };

  console.log();

  const handleChange = (value, name) => {
    setForm({...form, [name]: value});
    setIsError('');
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
        onChangeText={value => handleChange(value, 'firstName')}
        autoFocus
      />
      <Text style={{marginTop: 20}}>Last Name</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your Last Name"
        onChangeText={value => handleChange(value, 'lastName')}
      />
      <Text style={{marginTop: 20}}>Phone Number</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your Phone Number"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
        onChangeText={value => handleChange(value, 'noTelp')}
      />
      <Text style={{marginTop: 20}}>Email</Text>
      <TextInput
        style={Styles.input}
        placeholder="Write your Email"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={value => handleChange(value, 'email')}
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
        <Icon.Button
          name={isSecure ? 'eye' : 'eye-off'}
          backgroundColor={'hsla(210, 50%, 99%, 1)'}
          color="grey"
          style={{flex: 1, paddingHorizontal: 0}}
          onPress={() => setIsSecure(!isSecure)}></Icon.Button>
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
          backgroundColor: Object.values(form).every(x => !!x)
            ? 'hsla(256, 82%, 55%, 1)'
            : 'hsla(256, 82%, 55%, 0.5)',
          borderRadius: 10,
          marginTop: 50,
          padding: 20,
          color: 'white',
        }}
        onPress={handleRegister}
        disabled={isLoading || Object.values(form).every(x => !x)}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            'Sign Up'
          )}
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
