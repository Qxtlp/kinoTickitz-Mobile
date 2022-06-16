import {Image, Text, View} from 'native-base';
import React from 'react';
import {TouchableHighlight} from 'react-native';
import Config from 'react-native-config';

function MovieV1(props) {
  let image = `${Config.IMG_URL}default-movie.png`;
  if (props.image) {
    image = `${Config.IMG_URL}${props.image}`;
  }
  return (
    <View
      style={{
        backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
        borderColor: 'hsla(0, 0%, 87%, 1)',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        width: 155,
      }}>
      <Image
        source={{uri: image}}
        resizeMode={'contain'}
        alt="poster"
        style={{
          flex: 1,
          width: 122,
          height: 185,
        }}
      />
    </View>
  );
}

function MovieV2(props) {
  let image = `${Config.IMG_URL}default-movie.png`;
  if (props.image) {
    image = `${Config.IMG_URL}${props.image}`;
  }
  return (
    <View
      w={'40%'}
      style={{
        backgroundColor: 'white',
        borderColor: 'hsla(0, 0%, 87%, 1)',
        borderWidth: 1,
        borderRadius: 5,
        padding: 15,
        flexDirection: 'column',
        ...props.style,
      }}>
      <Image
        source={{uri: image}}
        resizeMode={'contain'}
        alt="Poster"
        style={{
          width: 120,
          height: 185,
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 10,
        }}>
        {props.name || 'Title'}
      </Text>
      <Text style={{textAlign: 'center'}}>{props.category || 'Category'}</Text>

      <TouchableHighlight
        underlayColor="white"
        style={{
          marginTop: 30,
          paddingVertical: 5,
          borderWidth: 1,
          borderColor: '#5F2EEA',
          borderRadius: 3,
          justifyContent: 'center',
        }}
        onPress={props.onPress}>
        <Text style={{color: '#5F2EEA', textAlign: 'center'}}>Details</Text>
      </TouchableHighlight>
    </View>
  );
}

const Card = {MovieV1, MovieV2};

export default Card;
