import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import {styles} from './style';
import pngIcon from '../../assets/icons';
import TeamsData from './components/teamData';
import { Strings } from '../../strings';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';
import Header from '../../components/header';



const Teams = () => {
  
  const navigation = useNavigation();
  const onHandle = () => {
    navigation.navigate(ScreenNameKeys.Home);
  }
  return (
    <SafeAreaView style={styles.mainView}>
      {/* ******************* Header ********************* */}
      <Header img={pngIcon.backArrow} title={Strings.common.teams} />
      {/* <View
        style={styles.headerView}>
        <TouchableOpacity onPress={() => onHandle()}>
          <Image source={pngIcon.backArrow} style={{marginLeft: 10}} />
          </TouchableOpacity>
        
        <Text
          style={styles.headerText}>
          {Strings.common.teams}
        </Text>
      </View> */}

      {/* ******************* Horizontal Line ********************* */}
      {/* <View
        style={styles.horizontalLine}></View> */}

      {/* ******************* Render Player Data ********************* */}
      <View style={styles.list}>
        <TeamsData />
      </View>
     
    </SafeAreaView>
  );
};

export default Teams;
