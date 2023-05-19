import React from 'react';
import {View, Text, Image} from 'react-native';
import pngIcon from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {ScreenNameKeys} from '../../utils/constants/screenKey';
import images from '../../assets/images';
import {styles} from './style';
import ProfileCard from '../../components/ProfileCard';
import Header from '../../components/header';
import { Strings } from '../../strings';

const TeamProfilePage = (prop) => {
  const item = prop.route.params;

  const navigation = useNavigation();
  const onHandle = () => {
    navigation.navigate(ScreenNameKeys.Teams);
  };

  return (
    <View style={styles.mainView}>
      
      <Header img={pngIcon.backArrow} title={item.full_name} fun={() => onHandle()} />
      

      <View style={styles.profileView}>
        <View style={styles.imgView}>
          <Image source={images.logoCommon} style={styles.img} />

          <View style={styles.textView}>
            <Text style={styles.titleTxt}>
              {' '}
              {item?.full_name ? item.full_name : null}
            </Text>
          </View>

          <Text style={styles.cityTxt}>{item.city}</Text>
        </View>

        <Text style={styles.heading}> {Strings.common.heading}</Text>

        <ProfileCard title={Strings.teams.teamName} Flex={0.7} val={item.full_name}/>
        <ProfileCard title={Strings.teams.teamId} Flex={0.62} val={item.id}/>
        <ProfileCard title={Strings.teams.division} Flex={0.62} val={item.division} />
        <ProfileCard title={Strings.teams.city} Flex={0.57} val={item.city}/>
        <ProfileCard title={Strings.teams.conference} Flex={0.69} val={item.conference}/>
        <ProfileCard title={Strings.teams.teamAbb} Flex={0.66} val={item.abbreviation} />

       

      </View>
    </View>
  );
};

export default TeamProfilePage;