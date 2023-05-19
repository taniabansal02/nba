import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { styles } from './style';
import pngIcon from '../../../../assets/icons';
import {useQuery} from 'react-query';
import axios from 'axios';
import { Strings } from '../../../../strings';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from '../../../../utils/constants/screenKey';
import { colors } from '../../../../assets/theme/colors';


const TeamsData = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  {/* ******************* Random colors ********************* */}
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
    return `#${randomColor}`;
};

const onHandle= (item) => {
  navigation.navigate(ScreenNameKeys.TeamProfilePage, item);
}

  {/* ******************* Teams API ********************* */}
  const {isLoading, error, data} = useQuery('Teams', async () => {
    const res = await axios.get('https://free-nba.p.rapidapi.com/teams', {
      params: {page: '0'},
  headers: {
    'X-RapidAPI-Key': 'b92d35722emshdb1f96ecbf0e730p1497f4jsn124949e0a308',
    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
  }
    });
    return res.data.data;
  });
  if (isLoading){
    return(
      <View> 
        <Text style={styles.text}>{Strings.common.loading}</Text>
      </View>
    )}
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
      <TouchableOpacity onPress={() => onHandle(item)}>
      <View
        style={styles.playerView}>

        {/* ******************* Icons ********************* */}
        <View
          style={[styles.playerIcons, {backgroundColor: generateColor()}]}>
          <Text style={styles.text}> {item?.city[0] ? item.city[0] : null }{ item?.name[0] ? item.name[0] : null} </Text>
        </View>

        {/* ******************* Team Details ********************* */}
       
        <View style={styles.playerDetails}>
          <View style={styles.playerRow}>
            <Text
              style={styles.playerName}>
              {item?.full_name ? item.full_name : null}
            </Text>
          </View>

          <View style={styles.playerRow}>
            <Text
              style={styles.playerid}>
              {item?.abbreviation ? item.abbreviation : null} |{' '}
            </Text>
            <Text
              style={styles.playerid}>
              #{item?.id ? item.id : null} | {' '}
            </Text>
            <Text style={styles.playerid}>{item?.division ? item.division : null}</Text>
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
      </TouchableOpacity>
    );
  };


  {/* ******************* Logic for searching ********************* */ }

  const filteredData = data.filter((i) => {
    return (
      i?.full_name?.toLowerCase().match(searchText.toLowerCase()) 
    );
  });


  return (
    <View>
      {/* ******************* Search Bar ********************* */}
      <View style={styles.searchBar}>
        <Image source={pngIcon.search} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={colors.black}
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
