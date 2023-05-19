import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from 'react-native';
import {styles} from './style';
import pngIcon from '../../../../assets/icons';
import {useQuery} from 'react-query';
import axios from 'axios';
import {Strings} from '../../../../strings';
import {useNavigation} from '@react-navigation/native';
import {ScreenNameKeys} from '../../../../utils/constants/screenKey';
import {colors} from '../../../../assets/theme/colors';
import { API_KEY, BASE_URL, GAMES, HOST_URL } from '../../../../services/endpoints';

const GamesData = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  {
    /* ******************* Random colors ********************* */
  }
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const onHandle = item => {
    navigation.navigate(ScreenNameKeys.GamesProfilePage, item);
  };

  {
    /* ******************* Games API ********************* */
  }
  const {isLoading, error, data} = useQuery('Games', async () => {
    const res = await axios.get(BASE_URL+GAMES , {
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': HOST_URL,
      },
    });
    return res.data.data;
  });
  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size={'large'}/>
      </View>
    );
  }
  if (error) {
    return (
      <View>
        <Text style={styles.text}>
          {Strings.common.err} {error.message}
        </Text>
      </View>
    );
  }

  {
    /* ******************* Render Gamess Data ********************* */
  }
  const getGames = ({item}) => {
  
    return (
      <TouchableOpacity onPress={() => onHandle(item)}>
        <View style={styles.mainview}>
          <Text style={styles.heading}>
            {' '}
            {item?.home_team?.conference ? item.home_team.conference : null}{Strings.games.config}{item.status}
          </Text>

          <View style={styles.container}>
            <View style={styles.gameView}>
              <View style={[styles.icons, {backgroundColor: generateColor()}]}>
                <Text style={styles.text}>
                  {item?.home_team?.city[0] ? item.home_team.city[0] : null}
                  {item?.home_team?.name[0] ? item.home_team.name[0] : null}
                </Text>
              </View>
              <View>
                <Text style={styles.gameName}>{item.home_team.full_name}</Text>
              </View>
            </View>

            <View style={styles.scoreTextView}>
              <Text style={styles.scoreTeam1}>
                {item?.home_team_score ? item.home_team_score : null}
              </Text>
            </View>

            <View style={styles.detailView}>
              <Text style={styles.detailText}>
                {' '}
                {item?.season ? item.season : null}
              </Text>
              <Text style={styles.detailText}>
                {' '}
                {item?.status ? item.status : null}
              </Text>
            </View>

            <View style={styles.scoreTextView}>
              <Text style={styles.scoreteam2}>
                {item?.visitor_team_score ? item.visitor_team_score : null}
              </Text>
            </View>

            <View style={styles.team2NameView}>
              <View style={[styles.icons, {backgroundColor: generateColor()}]}>
                <Text style={styles.text}>
                  {item?.visitor_team?.city[0]
                    ? item.visitor_team.city[0]
                    : null}
                  {item?.visitor_team?.name[0]
                    ? item.visitor_team.name[0]
                    : null}
                </Text>
              </View>
              <View>
                <Text style={styles.gameName}>
                  {item.visitor_team.full_name}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

    {/* ******************* Logic for searching ********************* */ }
  const filteredData = data.filter((i) => {
    return (
      i?.home_team?.full_name?.toLowerCase().match(searchText.toLowerCase()) ||
      i?.visior_team?.last_name?.toLowerCase().match(searchText.toLowerCase())
    );
  });

  return (
    <View>
      {/* ******************* Search Bar ********************* */}
      <View style={styles.searchBar}>
        <Image source={pngIcon.search} style={styles.searchIcon} />
        <TextInput
          placeholder= {Strings.games.search}
          placeholderTextColor={colors.black}
          style={styles.input}
          clearButtonMode="always"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setSearchText(text)}
        />
      </View>

      {/* ******************* Games card ********************* */}
      <FlatList
        data={filteredData}
        renderItem={getGames}
        style={styles.list}></FlatList>
    </View>
  );
};

export default GamesData;
