import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import pngIcon from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {ScreenNameKeys} from '../../utils/constants/screenKey';
import images from '../../assets/images';
import {styles} from './style';
import GamesProfileCard from './components/gamesCard';
import fonts from '../../assets/fonts';
import { ScrollView } from 'react-native-gesture-handler';

const GamesProfilePage = (prop) => {
  const item = prop.route.params;
  // console.log(item);

  const navigation = useNavigation();
  const onHandle = () => {
    navigation.navigate(ScreenNameKeys.Games);
  };

  return (
    <ScrollView>
    <View style={styles.mainView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onHandle()}>
          <Image source={pngIcon.backArrow} style={styles.arrow} />
        </TouchableOpacity>

        <View style={{flexDirection:'row', marginLeft:20}}>
        <Text style={{color:'white', fontFamily:fonts.MerriBold, fontSize:20}}>{item.home_team.abbreviation}</Text>
        <Text style={{color:'white', fontFamily:fonts.MerriBold, fontSize:20}}>  v  </Text>
        <Text style={{color:'white', fontFamily:fonts.MerriBold, fontSize:20}}>{item.visitor_team.abbreviation}</Text>
        </View>
       
      </View>

      <View style={styles.profileView}>
        <View style={styles.imgView}>
          <Image source={images.match} style={styles.img} />
        </View>
       

        <Text style={styles.heading}> INFO </Text>
        <GamesProfileCard title='Match' Flex={0.82} val={item.period} />

        <GamesProfileCard title='Series' Flex={0.81} val ={item.home_team.city} txt=' Vs ' name={item.visitor_team.city}  season={item.season}/>
        {/* <GamesProfileCard title='Date' val={item.date} /> */}
        <GamesProfileCard title='Venue' Flex={0.82} val={item.home_team.city}/>
        <GamesProfileCard title='Umpire' Flex={0.84} val='Joey Crawford' />
        <GamesProfileCard title='Referee' Flex={0.85}  val='Quin Snyder'/>

        <Text style={styles.heading}> VENUE GUIDE </Text>
        <GamesProfileCard title='Stadium' Flex={0.87} val='Sawai Mansingh Stadium' />
        <GamesProfileCard title='City' Flex={0.77} val={item.home_team.city}/>
        <GamesProfileCard title='Capacity' Flex={0.86} val='30000' />

        <Text style={styles.heading}> TV GUIDE - IN </Text>
        <GamesProfileCard title='Streaming' Flex={0.9} val='Jio Cinema' />
        <GamesProfileCard title='TV' Flex={0.74} val='Star Sports Network' />
        
        
       
       
        

        

      </View>
    </View>
    </ScrollView>
  );
};

export default GamesProfilePage;
