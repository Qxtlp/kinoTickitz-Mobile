import React, {useState} from 'react';
import Styles from '../../styles/main';
import Layout from '../../components/layout/main';
import Card from '../../components/card';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Input,
  Modal,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Select,
  StatusBar,
  Text,
  useColorModeValue,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabView, SceneMap} from 'react-native-tab-view';
import {Dimensions} from 'react-native';
import Animated from 'react-native-reanimated';
import {NativeBaseConfigProvider} from 'native-base/lib/typescript/core/NativeBaseContext';

const DetailsAccount = () => {
  return (
    <Layout>
      <View px={4} py={5} mt={5}>
        <Box bg="white" py="4" rounded="2xl">
          <Text px={4}>Info</Text>
          <Center>
            <Image
              source={require('../../images/show3.png')}
              size={150}
              my={5}
              borderRadius={100}
              alt="profile"></Image>
            <Text fontSize="lg">Jonas as sole</Text>
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
          <Input mt={2} placeholder="Input" w="100%" />
          <Text color={'gray.400'} fontSize="xs" mt={5}>
            Email
          </Text>
          <Input mt={2} placeholder="Input" w="100%" />
          <Text color={'gray.400'} fontSize="xs" mt={5}>
            Phone Number
          </Text>
          <Input mt={2} placeholder="Input" w="100%" />
        </Box>
        <Button
          onPress={() => console.log('hello world')}
          my={5}
          mx={5}
          borderRadius={10}
          shadow={2}
          colorScheme="indigo">
          Update changes
        </Button>

        <Box bg="white" px="4" py={10} rounded="2xl">
          Accound and Privacy
          <Divider mt={2} />
          <Text color={'gray.400'} fontSize="xs" mt={5}>
            New Password
          </Text>
          <Input
            style={{flex: 2}}
            placeholder="Write your password"
            textContentType="password"
            //   secureTextEntry={isSecure}
            onChangeText={value => handleChange(value, 'password')}
          />
          <Text color={'gray.400'} fontSize="xs" mt={5}>
            Confirm
          </Text>
          <Input
            style={{flex: 2}}
            placeholder="Write your password"
            textContentType="password"
            //   secureTextEntry={isSecure}
            onChangeText={value => handleChange(value, 'password')}
            InputRightElement={
              <Icon
                name={'eye' || 'eye-off'}
                backgroundColor={'hsla(210, 50%, 99%, 1)'}
                color="grey"
                size={25}
                style={{paddingHorizontal: 10}}
                onPress={() => setIsSecure(!isSecure)}></Icon>
            }
          />
        </Box>
        <Button
          onPress={() => console.log('hello world')}
          my={5}
          mx={5}
          borderRadius={10}
          shadow={2}
          colorScheme="indigo">
          Update changes
        </Button>
      </View>
    </Layout>
  );
};

const OrderHistory = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Layout>
      <View pb={5} px={4}>
        <Box bg="white" mt={5} py="4" rounded="2xl">
          <View px={4}>
            <Image
              height={8}
              width={'1/4'}
              source={require('../../images/cineone.png')}
              resizeMode={'contain'}
              alt="sponsor"></Image>
            <Text mt={3} color={'gray.400'} fontSize="xs">
              Doyoubi, 07 july 0000 - 00.00
            </Text>
            <Text fontSize={'md'} mt={1}>
              Spider-Girl: CantComing
            </Text>
          </View>
          <Divider my={5} />
          <Button mx={4}>Ticket is active</Button>
        </Box>

        <Box bg="white" mt={5} py="4" rounded="2xl">
          <View px={4}>
            <Image
              height={8}
              width={'1/4'}
              source={require('../../images/ebu.png')}
              resizeMode={'contain'}
              alt="sponsor"></Image>
            <Text mt={3} color={'gray.400'} fontSize="xs">
              Doyoubi, 07 july 0000 - 00.00
            </Text>
            <Text fontSize={'md'} mt={1}>
              Spider-Girl: CantComing
            </Text>
          </View>
          <Divider my={5} />
          <Button mx={4}>Ticket is active</Button>
        </Box>

        <Box bg="white" mt={5} py="4" rounded="2xl">
          <View px={4}>
            <Image
              height={8}
              width={'1/4'}
              source={require('../../images/hiflix.png')}
              resizeMode={'contain'}
              alt="sponsor"></Image>
            <Text mt={3} color={'gray.400'} fontSize="xs">
              Doyoubi, 07 july 0000 - 00.00
            </Text>
            <Text fontSize={'md'} mt={1}>
              Spider-Girl: CantComing
            </Text>
          </View>
          <Divider my={5} />
          <Button mx={4} onPress={() => setModalVisible(true)}>
            Ticket is active
          </Button>
        </Box>
      </View>

      <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        size={'full'}>
        <Modal.Content bg="custom.2">
          <Modal.CloseButton />
          <Modal.Body>
            <ScrollView>
              <View>
                <Box
                  bg="white"
                  rounded="lg"
                  mx={10}
                  h={200}
                  justifyContent={'center'}>
                  <Box
                    bg="primary.400"
                    w={'1/2'}
                    h={'1/2'}
                    mx={'auto'}
                    rounded="lg"></Box>
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
              <Box bg="white" mx={10} h={400} rounded="lg">
                <View
                  w={'full'}
                  borderColor="gray.300"
                  borderWidth={'1'}
                  borderStyle={'dashed'}
                />

                <View px={5} pt={10} flexDirection="row" flexWrap={'wrap'}>
                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Movie</Text>
                    <Text fontSize={'md'}>Spider-Man</Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Movie</Text>
                    <Text fontSize={'md'}>Spider-Man</Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Movie</Text>
                    <Text fontSize={'md'}>Spider-Man</Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Movie</Text>
                    <Text fontSize={'md'}>Spider-Man</Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Movie</Text>
                    <Text fontSize={'md'}>Spider-Man</Text>
                  </View>

                  <View width={'1/2'} mt={8}>
                    <Text color={'gray.400'}>Movie</Text>
                    <Text fontSize={'md'}>Spider-Man</Text>
                  </View>
                </View>
              </Box>
            </ScrollView>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Layout>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: DetailsAccount,
  second: OrderHistory,
});

function Profile(props) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Details Account'},
    {key: 'second', title: 'Order History'},
  ]);

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
  console.log(props.route.params?.id);

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
