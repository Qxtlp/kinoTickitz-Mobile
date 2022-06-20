import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/auth';
import Layout from '../../components/layout/auth';
import axios from '../../utils/axios';

function ResetScren(props) {
  const [form, setForm] = useState({email: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({isError: false, msg: ''});

  const sendEmail = async () => {
    try {
      setIsLoading(true);
      const result = await axios.post('auth/generateOTP', form);
      setIsLoading(false);
      console.log(result);

      props.navigation.navigate('VerifyOTP', form);
    } catch (error) {
      setMsg({isError: true, msg: error.response.data.msg});
      setIsLoading(false);
    }
  };

  const handleChange = (value, name) => {
    setForm({...form, [name]: value});
    setMsg({isError: false, msg: ''});
  };

  return (
    <Layout
      title="Forgot Password"
      subTitle="we'll send a link to your email shortly">
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

      {msg.msg ? (
        <View
          style={{
            backgroundColor: msg.isError ? 'red' : 'green',
            borderRadius: 5,
            marginTop: 30,
            padding: 10,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>{msg.msg}</Text>
        </View>
      ) : (
        <></>
      )}

      <TouchableOpacity
        style={{
          backgroundColor: form.email
            ? 'hsla(256, 82%, 55%, 1)'
            : 'hsla(256, 82%, 55%, 0.5)',
          borderRadius: 10,
          marginTop: 30,
          padding: 20,
          color: 'white',
        }}
        onPress={sendEmail}
        disabled={isLoading || !form.email}>
        <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
          {isLoading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            'Send'
          )}
        </Text>
      </TouchableOpacity>
    </Layout>
  );
}

export default ResetScren;
