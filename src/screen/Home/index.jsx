import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableHighlight,
  TextInput,
} from 'react-native';
import Styles from '../../styles/main';
import Layout from '../../components/layout/main';

function HomeScreen(props) {
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
          paddingVertical: 50,
        }}>
        <View
          style={{
            paddingHorizontal: 25,
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
        <ScrollView horizontal={true} style={{paddingTop: 20}}>
          {[1, 2, 3, 4, 5, 6].map(v => {
            return (
              <View
                key={v}
                style={{
                  backgroundColor: 'hsla(0, 0%, 100%, 0.3)',
                  borderColor: 'white',
                  borderWidth: 1,
                  borderRadius: 5,
                  marginStart: 20,
                  padding: 15,
                }}>
                <Image
                  source={require('../../images/show3.png')}
                  resizeMode={'contain'}
                  style={{
                    flex: 1,
                    width: 122,
                    height: 185,
                  }}></Image>
              </View>
            );
          })}
        </ScrollView>
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
        <ScrollView horizontal={true} style={{paddingTop: 20}}>
          {[1, 2, 3, 4, 5, 6].map(v => {
            return (
              <View
                key={v}
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
                  source={require('../../images/show3.png')}
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
                  }}>
                  Title
                </Text>
                <Text style={{textAlign: 'center'}}>Category</Text>

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
                    alert(v.name);
                  }}>
                  <Text style={{color: '#5F2EEA', textAlign: 'center'}}>
                    Details
                  </Text>
                </TouchableHighlight>
              </View>
            );
          })}
        </ScrollView>
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
