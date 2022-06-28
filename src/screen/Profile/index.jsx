import React, {useEffect, useState} from 'react';
import Layout from '../../components/layout/main';
import {
  Actionsheet,
  Avatar,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  FormControl,
  Heading,
  Image,
  Input,
  Modal,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Select,
  Spinner,
  StatusBar,
  Text,
  useColorModeValue,
  useDisclose,
  useToast,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {NativeBaseConfigProvider} from 'native-base/lib/typescript/core/NativeBaseContext';
import {useDispatch, useSelector} from 'react-redux';
import Config from 'react-native-config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  changePassword,
  getUser,
  updateImage,
  updateProfile,
  deleteImage,
} from '../../stores/action/user';
import {getBookingUser, getBooking} from '../../stores/action/booking';
import QRCode from 'react-native-qrcode-svg';

const DetailsAccount = props => {
  const toast = useToast();
  const dispatch = useDispatch();
  const {isOpen, onOpen, onClose} = useDisclose();
  const [form, setForm] = useState({
    firstName: props.firstName,
    lastName: props.lastName,
    noTelp: props.noTelp,
  });
  const [isLoading, setIsLoading] = useState({
    image: false,
    profile: false,
    password: false,
  });
  const [isSecure, setIsSecure] = useState({new: true, confirm: true});
  const [isInvalid, setIsInvalid] = useState(false);
  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const getData = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      dispatch(getUser(id)).catch(err => Promise.reject(err));
    } catch (error) {
      console.log(error, error.response);
    }
  };

  const handleProfile = (value, name) => {
    setForm({...form, [name]: value});
  };

  const handlePassword = (value, name) => {
    setIsInvalid(false);
    setPassword({...password, [name]: value});
  };

  const handleUpdate = type => {
    console.log('type=' + type);
    if (type == 'profile') {
      dispatch(updateProfile(form)).then(res => {
        getData();
        toast.show({
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                <Text color={'white'}>Profile Updated!</Text>
              </Box>
            );
          },
        });
      });
    }
  };

  const handleImage = res => {
    const image = new FormData();
    image.append('image', {
      name: res.fileName,
      type: res.type,
      uri: res.uri,
    });

    dispatch(updateImage(image))
      .then(res => {
        getData();
      })
      .catch(err => console.log(err));
  };

  return (
    <Layout>
      <View px={4} py={5} mt={5}>
        <Box bg="white" py="4" rounded="2xl">
          <Text px={4}>Info</Text>
          <Center>
            <View my={5}>
              {isLoading.image ? (
                <Spinner size={120} color={'indigo.600'} />
              ) : (
                <Pressable onPress={onOpen}>
                  <Avatar
                    source={{uri: props.image}}
                    size={150}
                    alt="profile"></Avatar>
                </Pressable>
              )}
            </View>

            <Actionsheet isOpen={isOpen} onClose={onClose}>
              <Actionsheet.Content>
                <Actionsheet.Item
                  onPress={() =>
                    launchImageLibrary(
                      {mediaType: 'photo', maxHeight: 512, maxWidth: 512},
                      res => {
                        if (res.didCancel) return 0;
                        handleImage(res.assets[0]);
                      },
                    )
                  }>
                  Chose Image
                </Actionsheet.Item>
                <Actionsheet.Item
                  onPress={() =>
                    launchCamera(
                      {mediaType: 'photo', maxHeight: 512, maxWidth: 512},
                      res => {
                        if (res.didCancel) return 0;
                        handleImage(res.assets[0]);
                      },
                    )
                  }>
                  Launch Camera
                </Actionsheet.Item>
                <Actionsheet.Item
                  onPress={() =>
                    dispatch(deleteImage()).then(res => {
                      getData();
                      toast.show({
                        render: () => {
                          return (
                            <Box
                              bg="emerald.500"
                              px="2"
                              py="1"
                              rounded="sm"
                              mb={5}>
                              <Text color={'white'}>image deleted!</Text>
                            </Box>
                          );
                        },
                      });
                    })
                  }>
                  Delete
                </Actionsheet.Item>
                <Actionsheet.Item onPress={onClose}>Cancel</Actionsheet.Item>
              </Actionsheet.Content>
            </Actionsheet>

            <Text fontSize="lg">{props.firstName + ' ' + props.lastName}</Text>
            <Text mt={1} color="gray.400">
              MovieGoers
            </Text>
          </Center>
          <Divider mt={10} />
          <Button w={150} my={5} mx="auto" colorScheme={'indigo'} rounded="lg">
            Logout
          </Button>
        </Box>

        <Text my={5}>Account Settings</Text>
        <Box bg="white" px="4" py={10} rounded="2xl">
          Details Information
          <Divider mt={2} />
          <Text color={'gray.400'} fontSize="xs" mt={5}>
            Full Name
          </Text>
          <View flexDirection={'row'}>
            <Input
              mt={2}
              mr={3}
              placeholder="Input"
              w="47%"
              rounded="2xl"
              value={form.firstName}
              onChangeText={value => handleProfile(value, 'firstName')}
            />
            <Input
              mt={2}
              placeholder="Input"
              w="47%"
              rounded="2xl"
              value={form.lastName}
              onChangeText={value => handleProfile(value, 'lastName')}
            />
          </View>
          <Text color={'gray.400'} fontSize="xs" mt={5}>
            Email
          </Text>
          <Input
            mt={2}
            placeholder="Input"
            w="100%"
            rounded="2xl"
            isDisabled={true}
            value={props.email}
          />
          <Text color={'gray.400'} fontSize="xs" mt={5}>
            Phone Number
          </Text>
          <Input
            mt={2}
            placeholder="Input"
            w="100%"
            rounded="2xl"
            value={form.noTelp}
            onChangeText={value => handleProfile(value, 'noTelp')}
          />
        </Box>
        <Button
          onPress={() => {
            handleUpdate('profile');
          }}
          my={5}
          mx={5}
          borderRadius={10}
          shadow={2}
          colorScheme="indigo">
          {isLoading.profile ? (
            <Spinner size="lg" color={'white'} />
          ) : (
            'Update changes'
          )}
        </Button>

        <Box bg="white" px="4" py={10} rounded="2xl">
          Accound and Privacy
          <Divider mt={2} />
          <FormControl isInvalid={isInvalid}>
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
          <FormControl isInvalid={isInvalid}>
            <FormControl.Label>
              <Text color={'gray.400'} fontSize="xs" mt={5}>
                Confirm
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
        </Box>
        <Button
          onPress={() => {
            if (password.confirmPassword == password.newPassword) {
              dispatch(changePassword(password)).then(res => {
                getData();
                toast.show({
                  render: () => {
                    return (
                      <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                        <Text color={'white'}>Password Updated!</Text>
                      </Box>
                    );
                  },
                });
              });
            } else {
              setIsInvalid(true);
            }
          }}
          my={5}
          mx={5}
          borderRadius={10}
          shadow={2}
          opacity={
            password.confirmPassword == '' || password.newPassword == ''
              ? 70
              : 100
          }
          colorScheme="indigo">
          {isLoading.password ? (
            <Spinner size="lg" color={'white'} />
          ) : (
            'Update changes'
          )}
        </Button>
      </View>
    </Layout>
  );
};

const OrderHistory = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selected, setSelected] = useState({});

  return (
    <Layout>
      <View pb={5} px={4}>
        {props.map(v => {
          let premiere = '';
          switch (v.premiere) {
            case 'Ebu.Id':
              premiere = require('../../images/ebu.png');
              break;

            case 'CineOne21':
              premiere = require('../../images/cineone.png');
              break;

            case 'hiflix':
              premiere = require('../../images/hiflix.png');
              break;

            default:
              break;
          }

          return (
            <Box bg="white" mt={5} py="4" rounded="2xl" key={v.id}>
              <View px={4}>
                <Image
                  height={8}
                  width={'1/4'}
                  source={premiere}
                  resizeMode={'contain'}
                  alt="sponsor"></Image>
                <Text mt={3} color={'gray.400'} fontSize="xs">
                  {new Date(v.dateBooking).toDateString()} -{' '}
                  {v.timeBooking.slice(0, 5)}
                </Text>
                <Text fontSize={'md'} mt={1}>
                  {v.name}
                </Text>
              </View>
              <Divider my={5} />
              {v.statusUsed == 'active' ? (
                <Button
                  mx={4}
                  colorScheme={'emerald'}
                  onPress={() => {
                    setSelected(v);
                    setModalVisible(true);
                  }}>
                  Ticket is active
                </Button>
              ) : (
                <Button
                  mx={4}
                  colorScheme="gray"
                  onPress={() => {
                    setSelected(v);
                    setModalVisible(true);
                  }}>
                  Ticket is inactive
                </Button>
              )}
            </Box>
          );
        })}
      </View>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size={'full'}
        flex={0}>
        <View bg="custom.2" mb={'auto'}>
          <Modal.CloseButton />
          <Modal.Body flex={0}>
            <ScrollView>
              <View>
                <Box
                  bg="white"
                  rounded="lg"
                  mx={10}
                  justifyContent={'center'}
                  py={10}>
                  {/* {selected.statusUsed == 'active' ? (
                    <View mx={'auto'}>
                      <QRCode value={selected.id} />
                    </View>
                  ) : (
                    <Box
                      bg="primary.400"
                      w={'1/2'}
                      h={'1/2'}
                      mx={'auto'}
                      rounded="lg"></Box>
                  )} */}
                  <View mx={'auto'}>
                    <QRCode value={selected.id} />
                  </View>
                </Box>
                <View
                  rounded={'full'}
                  h={10}
                  w={10}
                  bg="custom.2"
                  position={'absolute'}
                  bottom={-20}
                  left={5}
                  zIndex={10}
                />

                <View
                  rounded={'full'}
                  h={10}
                  w={10}
                  bg="custom.2"
                  position={'absolute'}
                  bottom={-20}
                  right={5}
                  zIndex={10}
                />
              </View>
              <Box bg="white" mx={10} rounded="lg">
                <View
                  w={'full'}
                  borderColor="gray.300"
                  borderWidth={'1'}
                  borderStyle={'dashed'}
                />

                <View
                  px={5}
                  pt={5}
                  pb={10}
                  flexDirection="row"
                  flexWrap={'wrap'}>
                  <View width={'1/2'} mt={8} pr={5}>
                    <Text color={'gray.400'}>Movie</Text>
                    <Text fontSize={'md'} isTruncated>
                      {selected.name}
                    </Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Category</Text>
                    <Text fontSize={'md'} isTruncated>
                      {selected.category}
                    </Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Date</Text>
                    <Text fontSize={'md'} isTruncated>
                      {new Date(selected.dateBooking).toDateString()}
                    </Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Time</Text>
                    <Text fontSize={'md'}>
                      {selected.timeBooking?.slice(0, 5)}
                    </Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Count</Text>
                    <Text fontSize={'md'}>
                      {selected.seat?.split(',').length
                        ? selected.seat.split(',').length
                        : '0'}
                    </Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Seats</Text>
                    <Text fontSize={'md'} isTruncated>
                      {selected.seat}
                    </Text>
                  </View>

                  <View
                    flexDirection={'row'}
                    justifyContent="space-between"
                    borderWidth={1}
                    borderColor="gray.200"
                    py={2}
                    px={3}
                    mt={10}
                    w={'full'}>
                    <Text>Total</Text>
                    <Text>Rp.{selected.totalPayment}</Text>
                  </View>
                </View>
              </Box>
            </ScrollView>
          </Modal.Body>
        </View>
      </Modal>
    </Layout>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

function Profile(props) {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Details Account'},
    {key: 'second', title: 'Order History'},
  ]);
  const [orderHistory, setOrderHistory] = useState([]);

  const user = useSelector(state => state.user);

  let image = `${Config.IMG_URL}default-profile.png`;
  if (user.data.image) {
    image = `${Config.IMG_URL}${user.data.image}`;
  }

  useEffect(() => {
    getData();
  }, []);

  const renderScene = SceneMap({
    first: () => DetailsAccount({...user.data, image}),
    second: () => OrderHistory(orderHistory),
  });

  const getData = async () => {
    try {
      const id = await AsyncStorage.getItem('id');
      dispatch(getUser(id)).catch(err => Promise.reject(err));

      dispatch(getBookingUser(id))
        .then(res => {
          console.log('success get booking data ');
          setOrderHistory(res.value.data.data);
        })
        .catch(err => alert(err));
    } catch (error) {
      console.log(error, error.response);
    }
  };
  const renderTabBar = props => {
    return (
      <Box flexDirection="row" bg={'white'}>
        {props.navigationState.routes.map((route, i) => {
          const borderColor = index === i ? 'indigo.500' : 'white';
          return (
            <Box flex={1} alignItems="center" px="3" key={i}>
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}>
                <Text>{route.title}</Text>
              </Pressable>
              <Divider bg={borderColor} thickness={3} mt={3} mb={0} w="1/2" />
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <NativeBaseProvider>
      <TabView
        navigationState={{
          index,
          routes,
        }}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={{
          marginTop: StatusBar.currentHeight,
        }}
      />
    </NativeBaseProvider>
  );
}

export default Profile;
