import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/auth';
import Layout from '../../components/layout/auth';
import axios from '../../utils/axios';
import OTPInputView from '@twotalltotems/react-native-otp-input';

function VerifyOTP(props) {
  const [form, setForm] = useState({email: props.route.params.email, OTP: ''});
  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({isError: false, msg: ''});

  const verifyOTP = async () => {
    try {
      console.log(form);
      setIsLoading(true);
      const result = await axios.post('auth/verifyOTP', form);
      setIsLoading(false);
      props.navigation.navigate('SetPassword', props.route.params.email);
    } catch (error) {
      setMsg({isError: true, msg: error.response.data.msg});
      setIsLoading(false);
    }
  };

  const styles = StyleSheet.create({
    borderStyleBase: {
      width: 30,
      height: 45,
    },

    borderStyleHighLighted: {
      borderColor: '#03DAC6',
    },

    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
      color: 'black',
    },

    underlineStyleHighLighted: {
      borderColor: '#4f46e5',
    },
  });

  return (
    <Layout
      title="Verify OTP"
      subTitle="input OTP code that we send to your email below">
      <OTPInputView
        style={{height: 200}}
        pinCount={6}
        keyboardType={'phone-pad'}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeChanged={OTP => {
          setMsg({isError: false, msg: ''});
        }}
        onCodeFilled={OTP => {
          setForm({...form, OTP});
        }}
      />

      {msg.msg ? (
        <View
          style={{
            backgroundColor: msg.isError ? 'red' : 'green',
            borderRadius: 5,
            marginTop: 0,
            padding: 10,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>{msg.msg}</Text>
        </View>
      ) : (
        <></>
      )}

      <TouchableOpacity
        style={{
          backgroundColor:
            form.OTP.length == 6
              ? 'hsla(256, 82%, 55%, 1)'
              : 'hsla(256, 82%, 55%, 0.5)',
          borderRadius: 10,
          marginTop: 20,
          padding: 20,
          color: 'white',
        }}
        onPress={verifyOTP}
        disabled={isLoading || !form.OTP.length == 6}>
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

export default VerifyOTP;
