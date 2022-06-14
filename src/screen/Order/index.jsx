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

function Order(props) {
  console.log(props.route.params?.id);

  return (
    <Layout>
      <View bg={'custom.2'} px="4" py={5}>
        <Text fontSize={'lg'}>Choose Your Seat</Text>
        <Box bg="white" mt={5} py={10} rounded="lg">
          <Divider
            w={300}
            h={'1.5'}
            mx="auto"
            borderRadius={'full'}
            bg={'indigo.400'}
          />
          <Flex direction="row" mt={3}>
            <Divider
              bg="emerald.500"
              thickness="2"
              mx="2"
              h={140}
              orientation="vertical"
            />
            {[1, 2, 3, 4, 5, 6, 7].map(num => {
              return (
                <Flex>
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(v => {
                    return (
                      <Pressable
                        p={2}
                        m={0.5}
                        bg="blueGray.200"
                        rounded={'sm'}
                        onPress={() => alert(v + num)}>
                        {/* <Text>{num + v}</Text> */}
                      </Pressable>
                    );
                  })}
                  <Divider bg={'danger.600'} mt={2} thickness={2} />
                </Flex>
              );
            })}

            <View flexDirection={'row'} ml={4}>
              {[8, 9, 10, 11, 12, 13, 14].map(num => {
                return (
                  <Flex>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(v => {
                      return (
                        <Pressable
                          p={2}
                          m={0.5}
                          bg="blueGray.200"
                          rounded={'sm'}
                          onPress={() => alert(v + num)}>
                          {/* <Text>{num + v}</Text> */}
                        </Pressable>
                      );
                    })}
                    <Divider bg={'danger.600'} mt={2} thickness={2} />
                  </Flex>
                );
              })}
            </View>
          </Flex>

          <View ml={3} mt={5}>
            <Text>Seating key</Text>
            <View
              w={'1/2'}
              flexDirection={'row'}
              justifyContent="space-between">
              <Text>
                <Icon name="arrow-down"></Icon> A - G
              </Text>

              <Text>
                <Icon name="arrow-right"></Icon> 1 - 14
              </Text>
            </View>

            <View
              w={'183'}
              mt={3}
              flexDirection={'row'}
              justifyContent="space-between"
              flexWrap={'wrap'}>
              <Text>
                <Icon name="square" size={15} color={'#e2e8f0'}></Icon> Availabe
              </Text>

              <Text>
                <Icon name="square" size={15} color={'#4f46e5'}></Icon> Selected
              </Text>

              <Text w={'full'}>
                <Icon name="square" size={15} color={'#a1a1aa'}></Icon> Sold
              </Text>
            </View>
          </View>
        </Box>

        <Center>
          <Box bg="white" py={5} mt={10} w={'full'} rounded="lg" shadow={4}>
            <Center>
              <Image
                source={require('../../images/hiflix.png')}
                width={80}
                height={30}
                resizeMode="contain"
                alt="sponsor"></Image>
              <Text
                color={'black'}
                mt={1}
                px="10"
                fontSize={'2xl'}
                textAlign={'center'}>
                Hiflix Cinema
              </Text>
              <Text color={'black'} mt={1} px="10" textAlign={'center'}>
                Hiflix Cinema
              </Text>
            </Center>
            <View px={5}>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                mt="3">
                <Text color={'gray.400'}>Price</Text>
                <Text>00.00/seat</Text>
              </View>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                mt="3">
                <Text color={'gray.400'}>Price</Text>
                <Text>00.00/seat</Text>
              </View>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                mt="3">
                <Text color={'gray.400'}>Price</Text>
                <Text>00.00/seat</Text>
              </View>
            </View>
            <Divider mt={10} />
            <View
              flexDirection={'row'}
              justifyContent={'space-between'}
              mt="5"
              px={5}>
              <Text>Price</Text>
              <Text>00.00/seat</Text>
            </View>
          </Box>

          <Button w={'full'} mt={10} colorScheme="indigo" shadow={5}>
            Checkout now
          </Button>
        </Center>
      </View>
    </Layout>
  );
}

export default Order;
