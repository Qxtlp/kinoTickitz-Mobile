import React from 'react';
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
  Pressable,
  ScrollView,
  Select,
  Text,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

function Payment(props) {
  console.log(props.route.params?.id);

  return (
    <Layout>
      <View bg={'custom.2'}>
        <View
          bg={'white'}
          flexDirection="row"
          justifyContent="space-between"
          p={4}
          borderBottomRadius={20}>
          <Text color={'gray.500'} fontSize="md">
            Total Payment
          </Text>
          <Text fontSize="lg">00.00</Text>
        </View>
        <View px={4} py={5}>
          <Text>Payment Method</Text>
          <Box bg="white" p="4" mt="4" rounded="lg">
            <View
              flexDirection="row"
              flexWrap={'wrap'}
              justifyContent="space-evenly">
              <View w={'1/3'}>
                <View
                  mx={'auto'}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius={'lg'}
                  px={4}
                  mt={2}
                  w={'80px'}
                  h={10}>
                  <Image
                    source={require('../../images/logos_google-pay.png')}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode="contain"
                    w={10}
                    h={10}
                  />
                </View>
              </View>

              <View w={'1/3'}>
                <View
                  mx={'auto'}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius={'lg'}
                  px={4}
                  mt={2}
                  w={'80px'}
                  h={10}>
                  <Image
                    source={require('../../images/logos_visa.png')}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode="contain"
                    w={10}
                    h={10}
                  />
                </View>
              </View>

              <View w={'1/3'}>
                <View
                  mx={'auto'}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius={'lg'}
                  px={4}
                  mt={2}
                  w={'80px'}
                  h={10}>
                  <Image
                    source={require('../../images/GoPay.png')}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode="contain"
                    w={10}
                    h={10}
                  />
                </View>
              </View>

              <View w={'1/3'}>
                <View
                  mx={'auto'}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius={'lg'}
                  px={4}
                  mt={2}
                  w={'80px'}
                  h={10}>
                  <Image
                    source={require('../../images/logos_paypal.png')}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode="contain"
                    w={5}
                    h={5}
                    mx="auto"
                    mt="2"
                  />
                </View>
              </View>

              <View w={'1/3'}>
                <View
                  mx={'auto'}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius={'lg'}
                  px={4}
                  mt={2}
                  w={'80px'}
                  h={10}>
                  <Image
                    source={require('../../images/ovo.png')}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode="contain"
                    w={10}
                    h={10}
                  />
                </View>
              </View>

              <View w={'1/3'}>
                <View
                  mx={'auto'}
                  borderWidth={1}
                  borderColor="gray.200"
                  borderRadius={'lg'}
                  px={4}
                  mt={2}
                  w={'80px'}
                  h={10}>
                  <Image
                    source={require('../../images/DANA.png')}
                    alt="Alternate Text"
                    size="sm"
                    resizeMode="contain"
                    w={10}
                    h={10}
                  />
                </View>
              </View>
            </View>
            <View style={{flexDirection: 'row'}} my={5}>
              <View
                style={{
                  backgroundColor: 'hsla(0, 0%, 87%, 1)',
                  height: 1,
                  flex: 1,
                  alignSelf: 'center',
                }}
              />
              <Text
                style={{
                  alignSelf: 'center',
                  paddingHorizontal: 25,
                  fontSize: 14,
                }}
                color={'gray.400'}>
                or
              </Text>
              <View
                style={{
                  backgroundColor: 'hsla(0, 0%, 87%, 1)',
                  height: 1,
                  flex: 1,
                  alignSelf: 'center',
                }}
              />
            </View>
            <Text textAlign={'center'} mb="5" color={'gray.400'}>
              Pay via cash. See how it work
            </Text>
          </Box>

          <Text mt={10} mb={5}>
            Personal Info
          </Text>
          <Box bg="white" p="4" rounded="lg">
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
            my={10}
            borderRadius={10}
            shadow={2}
            colorScheme="indigo">
            Pay your order
          </Button>
        </View>
      </View>
    </Layout>
  );
}

export default Payment;
