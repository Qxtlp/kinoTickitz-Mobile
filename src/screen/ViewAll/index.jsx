import React from 'react';
import Styles from '../../styles/main';
import Layout from '../../components/layout/main';
import Card from '../../components/card';
import {
  Box,
  Center,
  Container,
  Heading,
  Input,
  ScrollView,
  Select,
  Text,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight} from 'react-native';

function ViewAll(props) {
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
  console.log('viewall all');
  return (
    <Layout>
      <View bg="custom.2" py={10}>
        <View mx={5} centerContent={false}>
          <Text>List Movie</Text>
          <View flexDirection={'row'} mt={2} h={9}>
            <Select
              placeholder="Sort"
              //   selectedValue={language}
              flex={1}
              dropdownIcon={
                <Icon name="caret-down" style={{marginEnd: 10}}></Icon>
              }
              fontSize={'xs'}
              borderRadius={'full'}
              bg="white"
              h={1}
              //   onValueChange={(itemValue) => setLanguage(itemValue)}
            >
              <Select.Item label="Wallet" value="key0" />
              <Select.Item label="ATM Card" value="key1" />
              <Select.Item label="Debit Card" value="key2" />
              <Select.Item label="Credit Card" value="key3" />
              <Select.Item label="Net Banking" value="key4" />
            </Select>
            <Input
              flex={2}
              bg={'white'}
              mx="3"
              placeholder="Input"
              variant={'rounded'}
            />
          </View>
          <ScrollView
            horizontal={true}
            style={{paddingTop: 20, paddingStart: 18, marginHorizontal: -35}}>
            {monthList.map(v => {
              return (
                <TouchableHighlight
                  key={v.index}
                  underlayColor="white"
                  style={{
                    width: 127,
                    height: 42,
                    borderWidth: 1,
                    borderColor: '#5F2EEA',
                    borderRadius: 3,
                    justifyContent: 'center',
                    marginStart: 20,
                  }}
                  onPress={() => {
                    alert(v.name);
                  }}>
                  <Text style={{color: '#5F2EEA', textAlign: 'center'}}>
                    {v.name}
                  </Text>
                </TouchableHighlight>
              );
            })}
          </ScrollView>
          <View
            mt={10}
            flexDirection="row"
            flexWrap={'wrap'}
            justifyContent="space-between">
            {[1, 2, 3].map(v => {
              return (
                <Card.MovieV2
                  style={{marginTop: 15}}
                  key={v}
                  onPress={() =>
                    props.navigation.navigate('Detail', {id: 'id dasuwa'})
                  }></Card.MovieV2>
              );
            })}
          </View>
        </View>
      </View>
    </Layout>
  );
}

export default ViewAll;
