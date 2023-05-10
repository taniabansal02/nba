import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './style';
import pngIcon from '../../../../assets/icons';
import {useQuery} from 'react-query';
import axios from 'axios';
import {Strings} from '../../../../strings';
import fonts from '../../../../assets/fonts';

const GamesData = () => {
  {
    /* ******************* Random colors ********************* */
  }
  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
  };

  {
    /* ******************* Games API ********************* */
  }
  const {isLoading, error, data} = useQuery('Games', async () => {
    const res = await axios.get('https://free-nba.p.rapidapi.com/games', {
      headers: {
        'X-RapidAPI-Key': 'b92d35722emshdb1f96ecbf0e730p1497f4jsn124949e0a308',
        'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
      },
    });
    console.log(res.data.data);
    return res.data.data;
  });
  if (isLoading){
    return(
      <View> 
        <Text>gg</Text>
      </View>
    )}
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
     
        <View style={{backgroundColor:'#191c23', height: 140, marginBottom:5}}>

        <Text style={{color:'white', marginLeft:'37%', marginTop:20}}>{item?.home_team?.conference?item.home_team.conference : null} - Config. {item.status}</Text>

            <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:30, marginTop: 15 }}>
                <View style={{backgroundColor:generateColor(), height:55, width:55, borderRadius:50, alignItems:'center', justifyContent:'center', }}>
                    <Text style={{color:'#ffffff'}}>{item?.home_team?.city[0]? item.home_team.city[0] : null }{ item?.home_team?.name[0] ? item.home_team.name[0] : null}</Text>
                </View>

                <View style={{ marginTop:25, marginLeft:-20}}>
                <Text style={{color:'white', fontFamily:fonts.lato, fontSize:30, fontWeight:'500', }}>{item?.home_team_score ? item.home_team_score : null}</Text>   
                </View>


                <View style={{flexDirection:'column', marginTop:20}}>
                <Text style={styles.text}> {item?.season ? item.season : null}</Text>
                <Text style={styles.text}> {item?.status ? item.status : null}</Text>
                </View>
                


                <View style={{ marginTop:25, marginRight:-20}}>
                <Text style={{color:'white', fontFamily:fonts.lato, fontSize:30, fontWeight:'500'}}>{item?.visitor_team_score ? item.visitor_team_score : null}</Text>
                </View>

                <View style={{backgroundColor:generateColor(), height:55, width:55, borderRadius:50, alignItems:'center', justifyContent:'center', }}>
                    <Text style={{color:'#ffffff'}}>{item?.visitor_team?.city[0]? item.visitor_team.city[0] : null }{item?.visitor_team?.name[0] ? item.visitor_team.name[0] : null}</Text>
                </View>

                

            </View>

        </View>
        

    );
  };

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
          //   onChangeText={text => setSearchText(text)}
        />
      </View>

      {/* ******************* Games card ********************* */}
      <FlatList
        data={data}
        renderItem={getGames}
        style={styles.list}></FlatList>
    </View>
  );
};

export default GamesData;
