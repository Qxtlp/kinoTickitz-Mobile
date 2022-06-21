import React, {useState} from 'react';
import {View, TouchableOpacity, ActivityIndicator, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/auth';
import Layout from '../../components/layout/auth';
import axios from '../../utils/axios';
import {
  Box,
  Button,
  FormControl,
  Input,
  NativeBaseProvider,
  useToast,
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {setPassword} from '../../stores/action/auth';

function VerifyOTP(props) {
  const dispatch = useDispatch();
  const toast = useToast();
  const [msg, setMsg] = useState({isError: false, msg: ''});
  const [isInvalid, setIsInvalid] = useState(false);
  const [isSecure, setIsSecure] = useState({new: true, confirm: true});
  const [form, setForm] = useState({
    email: props.route.params,
    newPassword: '',
    confirmPassword: '',
  });
  console.log(form);

  const auth = useSelector(state => state.auth);

  const handlePassword = (value, name) => {
    setIsInvalid(false);
    setForm({...form, [name]: value});
  };

  return (
    <NativeBaseProvider>
      <Layout title="Set Password" subTitle="set your new password">
        <FormControl isInvalid={isInvalid} mt={5}>
          <FormControl.Label>
            <Text color={'gray.400'} fontSize="xs" mt={5}>
              New Password
            </Text>
          </FormControl.Label>
          <Input
            style={{flex: 2}}
            placeholder="Write your password"
            textContentType="password"
            secureTextEntry={isSecure.new}
            autoCapitalize="none"
            InputRightElement={
              <Icon
                name={isSecure.new ? 'eye' : 'eye-off'}
                backgroundColor={'hsla(210, 50%, 99%, 1)'}
                color="grey"
                size={25}
                style={{paddingHorizontal: 10}}
                onPress={() =>
                  setIsSecure({...isSecure, new: !isSecure.new})
                }></Icon>
            }
            onChangeText={value => handlePassword(value, 'newPassword')}
          />
          <FormControl.ErrorMessage>
            Password doesn't match
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isInvalid={isInvalid} mt={5}>
          <FormControl.Label>
            <Text color={'gray.400'} fontSize="xs">
              Confirm Password
            </Text>
          </FormControl.Label>

          <Input
            style={{flex: 2}}
            placeholder="Write your password"
            textContentType="password"
            secureTextEntry={isSecure.confirm}
            autoCapitalize="none"
            onChangeText={value => handlePassword(value, 'confirmPassword')}
            InputRightElement={
              <Icon
                name={isSecure.confirm ? 'eye' : 'eye-off'}
                backgroundColor={'hsla(210, 50%, 99%, 1)'}
                color="grey"
                size={25}
                style={{paddingHorizontal: 10}}
                onPress={() =>
                  setIsSecure({...isSecure, confirm: !isSecure.confirm})
                }></Icon>
            }
          />
          <FormControl.ErrorMessage>
            Password doesn't match
          </FormControl.ErrorMessage>
        </FormControl>

        <TouchableOpacity
          style={{
            backgroundColor:
              form.confirmPassword && form.newPassword
                ? 'hsla(256, 82%, 55%, 1)'
                : 'hsla(256, 82%, 55%, 0.5)',
            borderRadius: 10,
            marginTop: 30,
            padding: 20,
            color: 'white',
          }}
          onPress={() => {
            if (form.confirmPassword == form.newPassword) {
              dispatch(setPassword(form)).then(res => {
                toast.show({
                  render: () => {
                    return (
                      <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                        <Text color={'white'}>Password Updated!</Text>
                      </Box>
                    );
                  },
                });
                props.navigation.navigate('Login');
              });
            } else {
              setIsInvalid(true);
            }
          }}
          disabled={
            auth.isLoading || !(form.confirmPassword && form.newPassword)
          }>
          <Text style={{textAlign: 'center', color: 'white', fontSize: 16}}>
            {auth.isLoading ? (
              <ActivityIndicator size="small" color="white" />
            ) : (
              'Confirm'
            )}
          </Text>
        </TouchableOpacity>
      </Layout>
    </NativeBaseProvider>
  );
}

export default VerifyOTP;
