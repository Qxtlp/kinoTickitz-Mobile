import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Layout from '../../components/layout/main';
import Card from '../../components/card';
import {
  Box,
  FlatList,
  HStack,
  Input,
  ScrollView,
  Select,
  Spinner,
  Text,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TouchableHighlight} from 'react-native';
import {getAllMovie} from '../../stores/action/movie';

function ViewAll(props) {
  const dispatch = useDispatch();
  const [month, setMonth] = useState('');
  const [limit, setLimit] = useState(4);
  const [sort, setSort] = useState('');
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
  }, [month, limit, sort]);

  const getData = () => {
    try {
      dispatch(getAllMovie(1, limit, '', '', month));
    } catch (error) {
      console.log(error);
    }
  };

  const headerComponents = () => {
    return (
      <View back py={5}>
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
              onValueChange={itemValue => setSort(itemValue)}>
              <Select.Item label="Sort" value="" />
              <Select.Item label="Name" value="name asc" />
            </Select>
            <Input
              flex={2}
              bg={'white'}
              ml="3"
              w={'full'}
              placeholder="Search movie name"
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
                    backgroundColor: v.index == month ? '#5F2EEA' : 'white',
                    borderWidth: 1,
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
        </View>
      </View>
    );
  };

  const footerComponents = () => {
    return (
      <Layout>
        {limit < movie.pageInfo.allMovie ? (
          <HStack space={3} justifyContent="center" h={100}>
            <Spinner size={'lg'} color="indigo.500" />
          </HStack>
        ) : (
          <Text my={10} color="gray.500" textAlign="center" fontSize="lg">
            All Movie already displayed
          </Text>
        )}
      </Layout>
    );
  };

  return (
    <Layout isNotScroll={true}>
      <FlatList
        data={movie.allData}
        numColumns={2}
        ListHeaderComponent={headerComponents}
        columnWrapperStyle={{flex: 1, justifyContent: 'space-evenly'}}
        onEndReached={() =>
          limit < movie.pageInfo.allMovie ? setLimit(limit + 4) : null
        }
        onEndReachedThreshold={0.5}
        renderItem={({item}) => (
          <Card.MovieV2
            style={{marginVertical: 10}}
            id={item.id}
            name={item.name}
            category={item.category}
            image={item.image}
            onPress={() =>
              props.navigation.navigate('Detail', {id: item.id})
            }></Card.MovieV2>
        )}
        ListFooterComponent={footerComponents}
      />
    </Layout>
  );
}

export default ViewAll;
