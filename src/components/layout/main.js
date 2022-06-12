import {extendTheme, NativeBaseProvider} from 'native-base';
import React from 'react';
import {ScrollView, View, Text, Image, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Styles from '../../styles/main';

function MainLayout(props) {
  const theme = extendTheme({
    colors: {
      custom: {
        2: '#f5f6f8',
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <ScrollView style={{}}>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />

        <View style={Styles.container}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={Styles.title}>kinoTickitz</Text>
            <Icon
              backgroundColor={'white'}
              size={30}
              name="menu"
              color="black"
              style={{marginTop: 15}}
            />
          </View>
        </View>

        {props.children}

        <View
          style={{
            ...Styles.container,
            paddingBottom: 50,
          }}>
          <Text style={{...Styles.title, marginBottom: 10}}>kinoTickitz</Text>
          <Text style={{width: 220}}>
            Stop waiting in line. Buy tickets conveniently, watch movies
            quietly.
          </Text>
          <Text style={{marginTop: 30, marginBottom: 15, fontWeight: 'bold'}}>
            Explore
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '50%',
            }}>
            <Text style={{}}>Home</Text>
            <Text style={{}}>List Movie</Text>
          </View>

          <Text style={{marginTop: 30, marginBottom: 15, fontWeight: 'bold'}}>
            Our Sponsor
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Image
              source={require('../../images/ebu.png')}
              resizeMode={'contain'}
              style={{
                width: 80,
                height: 30,
              }}
            />

            <Image
              source={require('../../images/cineone.png')}
              resizeMode={'contain'}
              style={{
                width: 80,
                height: 30,
              }}
            />

            <Image
              source={require('../../images/hiflix.png')}
              resizeMode={'contain'}
              style={{
                width: 80,
                height: 30,
              }}
            />
          </View>
          <Text style={{marginTop: 30, marginBottom: 15, fontWeight: 'bold'}}>
            Follow us
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '50%',
            }}>
            <Icon name="facebook" size={20} />
            <Icon name="instagram" size={20} />
            <Icon name="twitter" size={20} />
            <Icon name="youtube" size={20} />
          </View>
          <Text style={{marginTop: 40}}>
            © 2020 Tickitz. All Rights Reserved.
          </Text>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

export default MainLayout;
