import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import { styles } from './style';
import pngIcon from '../../../../assets/icons';
import {useQuery} from 'react-query';
import axios from 'axios';
import fonts from '../../../../assets/fonts';
import { Strings } from '../../../../strings';

const TeamsData = () => {
  const [searchText, setSearchText] = useState('');

  {/* ******************* Random colors ********************* */}
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};

  {/* ******************* Teams API ********************* */}
  const {isLoading, error, data} = useQuery('Teams', async () => {
    const res = await axios.get('https://free-nba.p.rapidapi.com/teams', {
      params: {page: '0'},
  headers: {
    'X-RapidAPI-Key': 'b92d35722emshdb1f96ecbf0e730p1497f4jsn124949e0a308',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
    });
    console.log(res.data.data);
    return res.data.data;
  });
  if (isLoading) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color="#5500dc" />
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text style={styles.text}>{Strings.common.err} {error.message}</Text>
      </View>
    );
  }

  {/* ******************* Get Teams Data ********************* */}
  const getTeams = ({item}) => {
    return (
      <View
        style={styles.playerView}>

        {/* ******************* Icons ********************* */}
        <View
          style={[styles.playerIcons, {backgroundColor: generateColor()}]}>
          <Text style={styles.text}> {item.city[0] ? item.city[0] : null + item.name[0] ? item.name[0] : null} </Text>
        </View>

        {/* ******************* Player Details ********************* */}
        <View style={styles.playerDetails}>
          <View style={styles.playerRow}>
            <Text
              style={styles.playerName}>
              {item.full_name ? item.full_name : null}
            </Text>
          </View>

          <View style={styles.playerRow}>
            <Text
              style={styles.playerid}>
              {item.abbreviation ? item.abbreviation : null} |{' '}
            </Text>
            <Text
              style={styles.playerid}>
              #{item.id ? item.id : null} | {' '}
            </Text>
            <Text style={styles.playerid}>{item.division ? item.division : null}</Text>
          </View>
        </View>



        {/* ******************* Add Button ********************* */}
        <View
          style={styles.buttonView}>
          <TouchableOpacity
            style={styles.btn}>
            <Text
              style={styles.btnTxt}>
              {Strings.common.follow}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };


  {/* ******************* Logic for searching ********************* */ }

  const filteredData = data.filter((i) => {
    return (
      i.full_name.toLowerCase().match(searchText.toLowerCase()) 
    );
  });


  return (
    <View>
      {/* ******************* Search Bar ********************* */}
      <View style={styles.searchBar}>
        <Image source={pngIcon.search} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={'#ffff'}
          style={styles.input}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setSearchText(text)}
        />
      </View>

      <FlatList
        data={filteredData}
        renderItem={getTeams}
        style={styles.list}
      />
    </View>
  );
};

export default TeamsData;
