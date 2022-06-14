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

function Detail(props) {
  console.log(props.route.params.id);

  return (
    <Layout>
      <View bg="white" py={'5'}>
        <Center>
          <Container borderColor={'amber.100'} borderWidth={'1'}>
            <Card.MovieV1 />

            <Text mx={'auto'} mt={'5'} fontSize="lg">
              John Man
            </Text>
            <Text mx={'auto'} mt={'1'} fontSize="sm" color={'coolGray.500'}>
              Category
            </Text>
          </Container>
        </Center>

        <View flexDirection={'row'} flexWrap="wrap" px="4" mt={10}>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Release date</Text>
            <Text fontSize={'md'}>June 22.22.22</Text>
          </View>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Directed by</Text>
            <Text fontSize={'md'}>June 22.22.22</Text>
          </View>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Duration</Text>
            <Text fontSize={'md'}>June 22.22.22</Text>
          </View>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Casts</Text>
            <Text fontSize={'md'}>June 22.22.22</Text>
          </View>
        </View>

        <View px="4">
          <Divider bg={'gray.100'} my="3" px="3" />

          <Text>Synopsis</Text>
          <Text color={'muted.500'} mt="2" fontSize="xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum fugit
            quia, eos dolore quaerat ab sapiente iusto, voluptatem, nostrum
            laborum ullam optio ipsum nemo inventore assumenda corporis mollitia
            quam voluptates!
          </Text>
        </View>
      </View>

      <View bg={'custom.2'} px="4" py={10}>
        <Center>
          <Text fontSize={'lg'}>Showtimes and Tickets</Text>
          <Box w="3/4" maxW="300">
            <Pressable
              colorScheme={'blueGray'}
              bg="blueGray.200"
              variant="subtle"
              flexDirection={'row'}
              py={2}
              px={3}>
              <Icon name="calendar" size={20} style={{}} />
              <Text ml={4} flex={2}>
                Set a date
              </Text>
              <Icon name="angle-down" size={20} />
            </Pressable>
            <View
              flexDirection={'row'}
              mt={13}
              //   borderColor={'amber.100'}
              //   borderWidth={'1'}
            >
              <Icon
                name="map-marker"
                size={20}
                style={{
                  paddingTop: 10,
                  paddingStart: 12,
                  paddingEnd: 10,
                  //   paddingTop: 35,
                  backgroundColor: '#e2e8f0',
                }}
              />
              <Select
                //   selectedValue={service}
                minWidth="210"
                accessibilityLabel="Choose Service"
                placeholder="Choose Service"
                bg="blueGray.200"
                borderWidth={0}
                dropdownIcon={
                  <Icon
                    name="angle-down"
                    size={20}
                    style={{marginEnd: 10}}></Icon>
                }
                borderRadius={'none'}
                //   onValueChange={itemValue => setService(itemValue)}
              >
                <Select.Item label="UX Research" value="ux" />
                <Select.Item label="Web Development" value="web" />
                <Select.Item label="Cross Platform Development" value="cross" />
                <Select.Item label="UI Designing" value="ui" />
                <Select.Item label="Backend Development" value="backend" />
              </Select>
            </View>
          </Box>

          <Box bg="white" px="30" py={10} mt={10} w={'full'} rounded="lg">
            <Center>
              <Image
                source={require('../../images/hiflix.png')}
                width={80}
                height={30}
                resizeMode="contain"
                alt="sponsor"></Image>
              <Text color={'gray.400'} mt={5} px="10" textAlign={'center'}>
                Whatever street No.12, South Purwokerto
              </Text>
            </Center>
            <Divider mt={10} />
            <View
              flexDirection={'row'}
              flexWrap="wrap"
              justifyContent={'space-between'}>
              {['00:00', '00:00', '00:00', '00:00', '00:00'].map(v => {
                return (
                  <Text w={'1/4'} mt="2">
                    {v}
                  </Text>
                );
              })}
            </View>

            <View flexDirection={'row'} justifyContent={'space-between'} mt="5">
              <Text>Price</Text>
              <Text>00.00/seat</Text>
            </View>

            <Button
              mt={5}
              colorScheme="indigo"
              shadow={5}
              onPress={() => props.navigation.navigate('Order')}>
              Book now
            </Button>
          </Box>
        </Center>
      </View>
    </Layout>
  );
}

export default Detail;
