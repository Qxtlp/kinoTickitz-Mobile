import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
  Pressable,
} from 'react-native';
import Styles from '../../styles/main';
import Layout from '../../components/layout/main';
import {getAllMovie} from '../../stores/action/movie';
import Config from 'react-native-config';
import {HStack, Spinner} from 'native-base';

function HomeScreen(props) {
  const dispatch = useDispatch();
  const [month, setMonth] = useState('');
  const monthList = [
    {index: 1, name: 'January'},
    {index: 2, name: 'February'},
    {index: 3, name: 'March'},
    {index: 4, name: 'April'},
    {index: 5, name: 'May'},
    {index: 6, name: 'June'},
    {index: 7, name: 'July'},
    {index: 8, name: 'August'},
    {index: 9, name: 'September'},
    {index: 10, name: 'October'},
    {index: 11, name: 'November'},
    {index: 12, name: 'December'},
  ];

  const movie = useSelector(state => state.movie);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [month]);

  const getData = () => {
    try {
      dispatch(getAllMovie(1, 6, '', '', month));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View style={Styles.container}>
        <Text style={{color: 'hsla(235, 14%, 50%, 1)'}}>
          Nearest Cinema, Newest Movie,
        </Text>
        <Text style={{fontSize: 34, color: '#5F2EEA', fontWeight: 'bold'}}>
          Find out now!
        </Text>

        <Image
          source={require('../../images/Group14.png')}
          resizeMode={'contain'}
          style={{
            flex: 1,
            width: '100%',
          }}></Image>
      </View>
      <View
        style={{
          backgroundColor: '#D6D8E7',
          width: '100%',
          paddingVertical: 30,
        }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#5F2EEA'}}>Now Showing</Text>
          <Text
            style={{color: '#5F2EEA'}}
            onPress={() => {
              props.navigation.navigate('ViewAllNavigator');
            }}>
            view all
          </Text>
        </View>
        {movie.isLoading ? (
          <HStack space={3} justifyContent="center" h={200}>
            <Spinner size={'lg'} color="indigo.500" />
          </HStack>
        ) : (
          <ScrollView horizontal={true} style={{paddingTop: 20}}>
            {movie.allData.map(v => {
              let image = `${Config.IMG_URL}default-movie.png`;
              if (v.image) image = `${Config.IMG_URL}${v.image}`;
              return (
                <Pressable
                  key={v.id}
                  style={{
                    backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
                    borderColor: 'white',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginStart: 20,
                    padding: 15,
                  }}
                  onPress={() => {
                    props.navigation.navigate('Detail', {id: v.id});
                  }}>
                  <Image
                    source={{uri: image}}
                    resizeMode={'contain'}
                    style={{
                      flex: 1,
                      width: 122,
                      height: 185,
                    }}></Image>
                </Pressable>
              );
            })}
          </ScrollView>
        )}
      </View>
      <View style={{backgroundColor: 'white', paddingVertical: 50}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
          }}>
          <Text style={{fontWeight: 'bold', color: 'black'}}>
            Upcoming Movies
          </Text>
          <Text
            style={{color: '#5F2EEA'}}
            onPress={() => {
              props.navigation.navigate('ViewAllNavigator');
            }}>
            view all
          </Text>
        </View>
        <ScrollView horizontal={true} style={{paddingTop: 20}}>
          {monthList.map(v => {
            return (
              <TouchableHighlight
                key={v.index}
                underlayColor="white"
                style={{
                  width: 127,
                  height: 42,
                  borderWidth: 1,
                  backgroundColor: v.index == month ? '#5F2EEA' : 'white',
                  borderColor: '#5F2EEA',
                  borderRadius: 3,
                  justifyContent: 'center',
                  marginStart: 20,
                }}
                onPress={() => {
                  setMonth(v.index);
                  if (v.index == month) setMonth('');
                }}>
                <Text
                  style={{
                    color: v.index != month ? '#5F2EEA' : 'white',
                    textAlign: 'center',
                  }}>
                  {v.name}
                </Text>
              </TouchableHighlight>
            );
          })}
        </ScrollView>

        {movie.isLoading ? (
          <HStack space={3} justifyContent="center" h={200}>
            <Spinner size={'lg'} color="indigo.500" />
          </HStack>
        ) : (
          <ScrollView horizontal={true} style={{paddingTop: 20}}>
            {movie.allData.map(v => {
              let image = `${Config.IMG_URL}default-movie.png`;
              if (v.image) image = `${Config.IMG_URL}${v.image}`;
              return (
                <View
                  key={v.id}
                  style={{
                    backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
                    borderColor: 'hsla(0, 0%, 87%, 1)',
                    borderWidth: 1,
                    borderRadius: 5,
                    marginStart: 20,
                    padding: 15,
                    flexDirection: 'column',
                  }}>
                  <Image
                    source={{uri: image}}
                    resizeMode={'contain'}
                    style={{
                      width: 120,
                      height: 185,
                    }}></Image>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontWeight: 'bold',
                      marginTop: 10,
                      color: 'black',
                    }}>
                    {v.name}
                  </Text>
                  <Text style={{textAlign: 'center'}}>{v.category}</Text>

                  <TouchableHighlight
                    key={v.index}
                    underlayColor="white"
                    style={{
                      marginTop: 30,
                      paddingVertical: 5,
                      borderWidth: 1,
                      borderColor: '#5F2EEA',
                      borderRadius: 3,
                      justifyContent: 'center',
                    }}
                    onPress={() => {
                      props.navigation.navigate('Detail', {id: v.id});
                    }}>
                    <Text style={{color: '#5F2EEA', textAlign: 'center'}}>
                      Details
                    </Text>
                  </TouchableHighlight>
                </View>
              );
            })}
          </ScrollView>
        )}
      </View>
      <View style={{...Styles.container, paddingVertical: 50}}>
        <View
          style={{
            padding: 20,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.18,
            shadowRadius: 1.0,
            elevation: 1,
            borderRadius: 5,
            backgroundColor: '#ffff',
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            Be the vanguard of the
          </Text>
          <Text
            style={{
              fontSize: 34,
              color: '#5F2EEA',
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Moviegoers
          </Text>
          <TextInput
            style={{
              ...Styles.input,
              backgroundColor: 'white',
              padding: 10,
              marginTop: 30,
            }}
            placeholder="Type your Email"
            textContentType="emailAddress"
          />
          <TouchableHighlight
            underlayColor="white"
            style={{
              marginTop: 20,
              height: 42,
              borderWidth: 1,
              borderColor: '#5F2EEA',
              backgroundColor: '#5F2EEA',
              borderRadius: 3,
              justifyContent: 'center',
            }}
            onPress={() => {
              alert('v.name');
            }}>
            <Text style={{color: 'white', textAlign: 'center'}}>Join now</Text>
          </TouchableHighlight>

          <Text
            style={{textAlign: 'center', marginTop: 30, paddingHorizontal: 41}}>
            By joining you as a Tickitz member, we will always send you the
            latest updates via email .
          </Text>
        </View>
      </View>
    </Layout>
  );
}

export default HomeScreen;
