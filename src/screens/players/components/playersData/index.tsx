import React, { useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity,  TextInput, Button } from 'react-native';
import { styles } from './style';
import pngIcon from '../../../../assets/icons';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Strings } from '../../../../strings';
import { useNavigation} from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScreenNameKeys } from '../../../../utils/constants/screenKey';
import { colors } from '../../../../assets/theme/colors';

interface Playerdata {
  teamname: string;
  showbttn?: boolean;
}

const PlayersData = ({ teamname, showbttn }: Playerdata) => {
  
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [isData, setIsData] = useState(false);
  
 
  
  
  {/* ******************* Random colors ********************* */ }
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const onHandle = (item) => {
    navigation.navigate(ScreenNameKeys.ProfilePage, item);
  }

  const addfav = async (item) => {
    if(teamname==undefined)
    {
      teamname = '';
    }
    const allplayer = await AsyncStorage.getItem(teamname);
    const setplayer = allplayer ? JSON.parse(allplayer) : [];
    const final = [...setplayer, item];
    await AsyncStorage.setItem(teamname, JSON.stringify(final));
    
    setIsData(true);
    
  }


  const addfavteamname = async () => {

  
    const allteam = await AsyncStorage.getItem('currentTeams');
    const settteam = allteam ? JSON.parse(allteam) : [];
    const finalteam = [...settteam, teamname];
    await AsyncStorage.setItem('currentTeams', JSON.stringify(finalteam));
    navigation.navigate(ScreenNameKeys.MyTeams);
    setIsData(false);
    
  }

  {/* ******************* Players API ********************* */ }
  const { isLoading, error, data } = useQuery('Players', async () => {
    const res = await axios.get('https://free-nba.p.rapidapi.com/players', {
      params: {
        page: '0',
        per_page: '5130',
      },
      headers: {
        'X-RapidAPI-Key': 'b92d35722emshdb1f96ecbf0e730p1497f4jsn124949e0a308',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
    });
    return res.data.data;
  });
  if (isLoading) {
    return (
      <View>
        <Text style={styles.text}> {Strings.common.loading} </Text>
      </View>
    )
  }
  if (error) {
    return (
      <View>
        <Text style={styles.text}>{Strings.common.err} {error.message}</Text>
      </View>
    );
  }
  {/* ******************* Render Players Data ********************* */ }
  const getPlayers = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onHandle(item)}>
        <View style={styles.playerView}>

          {/* ******************* Icons ********************* */}
          <View
            style={[styles.playerIcons, { backgroundColor: generateColor() }]}>
            <Text style={styles.iconText}> {item?.first_name[0] ? item.first_name[0] : null}{item?.last_name[0] ? item.last_name[0] : null} </Text>
          </View>

          {/* ******************* Player Details ********************* */}
          <View style={styles.playerDetails}>
            <View style={styles.playerRow}>
              <Text
                style={styles.playerName}>
                {item?.first_name ? item.first_name : null}{' '}
              </Text>
              <Text
                style={styles.playerName}>
                {item?.last_name ? item.last_name : null}
              </Text>
            </View>

            <View style={styles.playerRow}>
              <Text
                style={styles.playerid}>
                #{item?.id ? item.id : null} |{' '}
              </Text>
              <Text
                style={styles.playerid}>
                {item?.position ? item.position : null}
              </Text>
            </View>
          </View>

          {/* ******************* Add Button ********************* */}
          { showbttn ?  
          <View
            style={styles.buttonView}>
            <TouchableOpacity onPress={() => addfav(item)} style={styles.btn}>
              <Text style={styles.btnTxt}>{Strings.common.add}</Text>
            </TouchableOpacity>
          </View> 
           : null
           } 
        </View>

      </TouchableOpacity>

    );
  };

  {/* ******************* Logic for searching ********************* */ }
  const filteredData = data.filter((i) => {
    return (
      i?.first_name?.toLowerCase().match(searchText.toLowerCase()) ||
      i?.last_name?.toLowerCase().match(searchText.toLowerCase())
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
      
      {showbttn && isData  ?  
      
      <View style={styles.nextBtn}>
       <TouchableOpacity onPress={addfavteamname} style={styles.btn}>
       <Text style={styles.btnTxt}> {Strings.splash.next}</Text>
        </TouchableOpacity>
        </View>
        : null 
     } 

      <FlatList
        data={filteredData}
        renderItem={getPlayers}
        style={styles.list}
      />

    </View>
  );
};

export default PlayersData;
