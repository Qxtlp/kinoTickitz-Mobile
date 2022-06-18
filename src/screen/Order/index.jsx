import React, {useEffect, useState} from 'react';
import Layout from '../../components/layout/main';
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
import {useDispatch} from 'react-redux';
import {getSeats} from '../../stores/action/schedule';

function Order(props) {
  const dispatch = useDispatch();
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);

  const orderData = props.route.params;
  useEffect(() => {
    dispatch(
      getSeats(orderData.id, orderData.bookingTime, orderData.dateBooking),
    )
      .then(res => {
        setReservedSeat(
          res.value.data.data.map(item => item.seat.split(',')).flat(),
        );
      })
      .catch(err => console.log(err));
  }, []);

  const handleSelectSeat = seat => {
    if (selectedSeat.includes(seat)) {
      const deleteSeat = selectedSeat.filter(i => i !== seat);
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, seat]);
    }
  };

  const dataPayment = {
    date: orderData.dateBooking,
    time: orderData.bookingTime,
    movie: orderData.name,
    cinemaName: orderData.premiere,
    seat: selectedSeat,
    total: selectedSeat.length * orderData.price,
    schedule: orderData.scheduleId,
  };

  return (
    <Layout>
      <View bg={'custom.2'} px="4" py={5}>
        <Text fontSize={'lg'}>Choose Your Seat</Text>
        <Box bg="white" mt={5} py={10} rounded="lg">
          <View px={3}>
            <Divider
              w={'full'}
              h={'1.5'}
              borderRadius={'full'}
              bg={'indigo.500'}
            />
          </View>
          <Flex direction="row" mt={3} mx="auto">
            <Divider
              bg="emerald.500"
              thickness="1.5"
              mx="1"
              h={140}
              orientation="vertical"
            />
            {[1, 2, 3, 4, 5, 6, 7].map(num => {
              return (
                <Flex key={num}>
                  {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(v => {
                    console.log(selectedSeat.includes(`${num}${v}`));
                    return (
                      <Pressable
                        key={v}
                        p={'2'}
                        m={0.5}
                        disabled={reservedSeat.includes(v + num)}
                        bg={
                          reservedSeat.includes(v + num)
                            ? 'gray.400'
                            : selectedSeat.includes(v + num)
                            ? 'indigo.500'
                            : 'blueGray.200'
                        }
                        rounded={'sm'}
                        onPress={() => handleSelectSeat(v + num)}>
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
                  <Flex key={num}>
                    {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map(v => {
                      return (
                        <Pressable
                          key={v}
                          p={2}
                          m={0.5}
                          bg={
                            selectedSeat.includes(v + num)
                              ? 'indigo.500'
                              : 'blueGray.200'
                          }
                          rounded={'sm'}
                          onPress={() => handleSelectSeat(v + num)}>
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
                {orderData.name}
              </Text>
            </Center>
            <View px={5}>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                mt="3">
                <Text color={'gray.400'}>
                  {new Date(orderData.dateBooking).toDateString()}
                </Text>
                <Text>{orderData.bookingTime}</Text>
              </View>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                mt="3">
                <Text color={'gray.400'}>One ticket price</Text>
                <Text>
                  Rp.
                  {orderData.price
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                </Text>
              </View>
              <View
                flexDirection={'row'}
                justifyContent={'space-between'}
                mt="3">
                <Text color={'gray.400'}>Seat choosen</Text>
                <Text>{selectedSeat.join(',') || '{none}'}</Text>
              </View>
            </View>
            <Divider mt={10} />
            <View
              flexDirection={'row'}
              justifyContent={'space-between'}
              mt="5"
              px={5}>
              <Text>Price</Text>
              <Text color={'indigo.600'} bold="true">
                Rp.
                {(orderData.price * selectedSeat.length)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
              </Text>
            </View>
          </Box>

          <Button
            w={'full'}
            mt={10}
            colorScheme="indigo"
            shadow={5}
            disabled={selectedSeat.length ? false : true}
            onPress={() => props.navigation.navigate('Payment', dataPayment)}>
            Checkout now
          </Button>
        </Center>
      </View>
    </Layout>
  );
}

export default Order;
