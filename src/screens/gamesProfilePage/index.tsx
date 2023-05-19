import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import pngIcon from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenNameKeys } from '../../utils/constants/screenKey';
import images from '../../assets/images';
import { styles } from './style';
import ProfileCard from '../../components/ProfileCard';
import { ScrollView } from 'react-native-gesture-handler';
import { Strings } from '../../strings';

const GamesProfilePage = (prop) => {
  const item = prop.route.params;
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

          <View style={styles.headerView}>
            <Text style={styles.headerTxt}>{item.home_team.abbreviation}</Text>
            <Text style={styles.headerTxt}>  {Strings.games.headerText} </Text>
            <Text style={styles.headerTxt}>{item.visitor_team.abbreviation}</Text>
          </View>

        </View>

        <View style={styles.profileView}>
          <View style={styles.imgView}>
            <Image source={images.match} style={styles.img} />
          </View>
          <Text style={styles.heading}> {Strings.games.info} </Text>
          <ProfileCard title={Strings.games.match} Flex={0.82} val={item.period} />

          <ProfileCard title={Strings.games.series} Flex={0.81} val={item.home_team.city} txt={Strings.games.vs} name={item.visitor_team.city} season={item.season} />

          <ProfileCard title={Strings.games.venue} Flex={0.82} val={item.home_team.city} />
          <ProfileCard title={Strings.games.umpire} Flex={0.84} val={Strings.games.umpireName} />
          <ProfileCard title={Strings.games.referee} Flex={0.85} val={Strings.games.refereeName} />

          <Text style={styles.heading}> {Strings.games.guide} </Text>
          <ProfileCard title={Strings.games.stadium} Flex={0.87} val={Strings.games.stadiumName} />
          <ProfileCard title={Strings.games.city} Flex={0.77} val={item.home_team.city} />
          <ProfileCard title={Strings.games.capacity} Flex={0.86} val={Strings.games.capacityQty} />

          <Text style={styles.heading}> {Strings.games.tvGuide} </Text>
          <ProfileCard title={Strings.games.streaming} Flex={0.9} val={Strings.games.streamingName} />
          <ProfileCard title={Strings.games.tv} Flex={0.74} val={Strings.games.tvName} />
        </View>
      </View>
    </ScrollView>
  );
};

export default GamesProfilePage;
