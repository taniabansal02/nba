import React from 'react';
import {View, Text,  Image} from 'react-native';
import pngIcon from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {ScreenNameKeys} from '../../utils/constants/screenKey';
import images from '../../assets/images';
import ProfileCard from '../../components/ProfileCard';
import {styles} from './style';
import Header from '../../components/header';
import { Strings } from '../../strings';

const ProfilePage = (prop) => {
  const item = prop.route.params;

  const navigation = useNavigation();
  const onHandle = () => {
    navigation.navigate(ScreenNameKeys.Players);
  };

  return (
    <View style={styles.mainView}>

      <Header img={pngIcon.backArrow} title={item?.first_name + ' ' +   item.last_name}  fun={() => onHandle()}/>
      
      <View style={styles.profileView}>
        <View style={styles.imgView}>
          <Image source={images.common} style={styles.img} />

          <View style={styles.textView}>
            <Text style={styles.titleTxt}>
              {' '}
              {item?.first_name ? item.first_name : null}
            </Text>
            <Text style={styles.titleTxt}>
              {' '}
              {item?.last_name ? item.last_name : null}
            </Text>
          </View>

          <Text style={styles.cityTxt}>{item.team.city}</Text>
        </View>

        <Text style={styles.heading}>{Strings.common.heading} </Text>

        <ProfileCard title={Strings.player.playerId} Flex={0.79} val={item.id} />
        <ProfileCard title={Strings.player.team} Flex={0.73} val={item.team.full_name} />
        <ProfileCard title={Strings.teams.teamId} Flex={0.77} val={item.team.id} />
        <ProfileCard title={Strings.player.position} Flex={0.77} val={item?.position ? item.position : '-'} />
        <ProfileCard title={Strings.teams.division} Flex={0.77} val={item.team.division} />
        <ProfileCard title={Strings.teams.division} Flex={0.77} val={item.team.city} />
        <ProfileCard title={Strings.teams.conference} Flex={0.85} val={item.team.conference} />
        <ProfileCard title={Strings.teams.teamAbb} Flex={0.81} val={item.team.abbreviation} />

      </View>
    </View>
  );
};

export default ProfilePage;
