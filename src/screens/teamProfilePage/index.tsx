import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import pngIcon from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';
import {ScreenNameKeys} from '../../utils/constants/screenKey';
import images from '../../assets/images';
import {styles} from './style';
import ProfileCard from './components/teamCard';
import TeamProfileCard from './components/teamCard';

const TeamProfilePage = (prop) => {
  const item = prop.route.params;

  const navigation = useNavigation();
  const onHandle = () => {
    navigation.navigate(ScreenNameKeys.Teams);
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => onHandle()}>
          <Image source={pngIcon.backArrow} style={styles.arrow} />
        </TouchableOpacity>
      </View>

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

        <Text style={styles.heading}> PERSONAL INFORMATION </Text>

        <TeamProfileCard title="Team Name" Flex={0.7} val={item.full_name}/>
        <TeamProfileCard title="Team ID" Flex={0.6} val={item.id}/>
        <TeamProfileCard title="Division" Flex={0.6} val={item.division} />
        <TeamProfileCard title="City" Flex={0.52} val={item.city}/>
        <TeamProfileCard title="Conference" Flex={0.68} val={item.conference}/>
        <TeamProfileCard title="Team Abb" Flex={0.64} val={item.abbreviation} />

       

      </View>
    </View>
  );
};

export default TeamProfilePage;