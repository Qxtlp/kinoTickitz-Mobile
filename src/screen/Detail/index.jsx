import React, {useEffect, useState} from 'react';
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
import {getDataId} from '../../stores/action/movie';
import {getSchedule} from '../../stores/action/schedule';
import {useDispatch, useSelector} from 'react-redux';

function Detail(props) {
  const dispatch = useDispatch();
  const [dataOrder, setDataOrder] = useState({
    movieId: props.route.params.id,
    dateBooking: new Date().toISOString().split('T')[0],
  });
  const [location, setLocation] = useState('');
  const [locationList, setLocationList] = useState([]);

  const {data} = useSelector(state => state.movie);
  const schedule = useSelector(state => state.schedule);
  console.log(dataOrder);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      dispatch(getDataId(props.route.params.id)).catch(err => {
        Promise.reject(err);
      });
      dispatch(getSchedule(1, 3, '', '', props.route.params.id))
        .then(res => {
          console.log();
          setLocationList(res.value.data.data.map(v => v.location));
        })
        .catch(err => {
          Promise.reject(err);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (event, selectedDate) => {
    setDataOrder({
      ...dataOrder,
      dateBooking: selectedDate.toISOString().split('T')[0],
    });
  };

  return (
    <Layout>
      <View bg="white" py={'5'}>
        <Center>
          <Container justifyContent={'center'}>
            <Card.MovieV1 image={data.image} />

            <Text mx={'auto'} mt={'5'} fontSize="lg">
              {data.name}
            </Text>
            <Text mx={'auto'} mt={'1'} fontSize="sm" color={'coolGray.500'}>
              {data.category}
            </Text>
          </Container>
        </Center>

        <View flexDirection={'row'} flexWrap="wrap" px="4" mt={10}>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Release date</Text>
            <Text fontSize={'md'}>
              {data.releaseDate
                ? new Date(data.releaseDate).toDateString()
                : 'xx-xx-xxxx'}
            </Text>
          </View>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Directed by</Text>
            <Text fontSize={'md'}>{data.director}</Text>
          </View>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Duration</Text>
            <Text fontSize={'md'}>{data.duration}</Text>
          </View>
          <View w={'1/2'} mt="5">
            <Text color={'coolGray.500'}>Casts</Text>
            <Text fontSize={'md'}>{data.casts}</Text>
          </View>
        </View>

        <View px="4">
          <Divider bg={'gray.100'} my="3" px="3" />

          <Text>Synopsis</Text>
          <Text color={'muted.500'} mt="2" fontSize="xs">
            {data.synopsis}
          </Text>
        </View>
      </View>

      <View bg={'custom.2'} px="4" py={10}>
        <Center>
          <Text fontSize={'lg'}>Showtimes and Tickets</Text>
          <Box w="3/4" maxW="300" mt={2}>
            <View w={'full'}>
              <Pressable
                colorScheme={'blueGray'}
                bg="blueGray.200"
                variant="subtle"
                flexDirection={'row'}
                py={3}
                px={3}
                onPress={() =>
                  DateTimePickerAndroid.open({
                    value: new Date(),
                    mode: 'date',
                    onChange,
                  })
                }>
                <Icon name="calendar" size={20} style={{}} />
                <Text ml={4} flex={2} color="gray.400">
                  {dataOrder.dateBooking.toString()}
                </Text>
                <Icon name="angle-down" size={20} />
              </Pressable>

              <View
                flexDirection={'row'}
                mt={13}
                maxWidth={'full'}
                //   borderColor={'amber.100'}
                //   borderWidth={'1'}
              >
                <Icon
                  name="map-marker"
                  size={20}
                  style={{
                    width: '15%',
                    paddingTop: 10,
                    paddingStart: 12,
                    paddingEnd: 10,
                    //   paddingTop: 35,
                    backgroundColor: '#e2e8f0',
                  }}
                />
                <Select
                  //   selectedValue={service}
                  minWidth="85%"
                  accessibilityLabel="Select Location"
                  placeholder="Choose Location"
                  bg="blueGray.200"
                  borderWidth={0}
                  dropdownIcon={
                    <Icon
                      name="angle-down"
                      size={20}
                      style={{marginEnd: 11}}></Icon>
                  }
                  borderRadius={'none'}
                  //   onValueChange={itemValue => setService(itemValue)}
                >
                  {Array.from(new Set(locationList)).map(v => {
                    return <Select.Item label={v} value={v} key={v} />;
                  })}
                </Select>
              </View>
            </View>
          </Box>
          {schedule.data.map(v => {
            console.log(v);

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
              <Box
                bg="white"
                px="7"
                py={10}
                mt={10}
                w={'full'}
                rounded="lg"
                key={v.id}>
                <Center>
                  <Image
                    source={premiere}
                    width={80}
                    height={30}
                    resizeMode="contain"
                    alt="sponsor"></Image>
                  <Text color={'gray.400'} mt={5} px="10" textAlign={'center'}>
                    {v.location}
                  </Text>
                </Center>
                <View px={5}>
                  <Divider mt={10} />
                </View>
                <View flexDirection={'row'} flexWrap="wrap" pl={'4'}>
                  {v.time.split(',').map((time, i) => {
                    console.log(
                      time == dataOrder.bookingTime &&
                        v.id == dataOrder.scheduleId,
                    );
                    return (
                      <Button
                        p="1"
                        mx={1}
                        mt="2"
                        key={time}
                        bgColor={
                          time == dataOrder.bookingTime &&
                          v.id == dataOrder.scheduleId
                            ? 'indigo.500'
                            : 'white'
                        }
                        onPress={() =>
                          setDataOrder({
                            ...dataOrder,
                            bookingTime: time,
                            scheduleId: v.id,
                          })
                        }>
                        <Text
                          textAlign={'center'}
                          fontSize={'md'}
                          color={
                            time == dataOrder.bookingTime &&
                            v.id == dataOrder.scheduleId
                              ? 'white'
                              : 'black'
                          }>
                          {time}
                        </Text>
                      </Button>
                    );
                  })}
                </View>
                <View px={4}>
                  <View
                    flexDirection={'row'}
                    justifyContent={'space-between'}
                    mt="5">
                    <Text>Price</Text>
                    <Text>
                      Rp.
                      {v.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      /seat
                    </Text>
                  </View>

                  <Button
                    mt={5}
                    colorScheme="indigo"
                    bg={
                      v.id == dataOrder.scheduleId ? 'indigo.600' : 'indigo.400'
                    }
                    shadow={v.id == dataOrder.scheduleId ? 5 : 0}
                    disabled={v.id != dataOrder.scheduleId}
                    onPress={() =>
                      props.navigation.navigate('Order', {...dataOrder, ...v})
                    }>
                    Book now
                  </Button>
                </View>
              </Box>
            );
          })}
        </Center>
      </View>
    </Layout>
  );
}

export default Detail;
