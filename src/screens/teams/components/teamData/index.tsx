import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator
} from 'react-native';
import { styles } from './style';
import pngIcon from '../../../../assets/icons';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Strings } from '../../../../strings';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from '../../../../utils/constants/screenKey';
import { colors } from '../../../../assets/theme/colors';
import { API_KEY, BASE_URL, HOST_URL, TEAMS } from '../../../../services/endpoints';


const TeamsData = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');

  {/* ******************* Random colors ********************* */ }
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  const onHandle = (item) => {
    navigation.navigate(ScreenNameKeys.TeamProfilePage, item);
  }

  {/* ******************* Teams API ********************* */ }
  // `${BASE_URL+MOVIES}
  const { isLoading, error, data } = useQuery('Teams', async () => {
    const res = await axios.get( BASE_URL+TEAMS , {
      params: { page: '0' },
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': HOST_URL,
      }
    });
    return res.data.data;
  });
  if (isLoading) {
    return (
      <View style={styles.activityIndicator}>
        <ActivityIndicator size={'large'}/>
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

  {/* ******************* Get Teams Data ********************* */ }
  const getTeams = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => onHandle(item)}>
        <View style={styles.teamView}>

          {/* ******************* Icons ********************* */}
          <View style={[styles.teamIcons, { backgroundColor: generateColor() }]}>
            <Text style={styles.iconText}> {item?.city[0] ? item.city[0] : null}{item?.name[0] ? item.name[0] : null} </Text>
          </View>

          {/* ******************* Team Details ********************* */}

          <View style={styles.teamDetails}>
            <View style={styles.teamRow}>
              <Text style={styles.teamName}>{item?.full_name ? item.full_name : null}</Text>
            </View>

            <View style={styles.teamRow}>
              <Text style={styles.teamid}>{item?.abbreviation ? item.abbreviation : null} |{' '} </Text>
              <Text style={styles.teamid}>{Strings.teams.symbol}{item?.id ? item.id : null} | {' '} </Text>
              <Text style={styles.teamid}>{item?.division ? item.division : null}</Text>
            </View>
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
          placeholder={Strings.teams.search}
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
