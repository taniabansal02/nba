import React from 'react';
import {View, Text, SafeAreaView, Image, TextInput, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {Strings} from '../../strings';
import pngIcon from '../../assets/icons';
import GamesData from './components/gamesData';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';

const Games = () => {
  const onHandle = () => {
    navigation.navigate(ScreenNameKeys.Home);
  }
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
      <TouchableOpacity onPress={() => onHandle()}>
          <Image source={pngIcon.backArrow} style={{marginLeft: 10}} />
          </TouchableOpacity>
        <Text style={styles.headerText}>{Strings.common.games}</Text>
      </View>
      {/* ******************* Games card ********************* */}
      <View>
        <GamesData />
      </View>
    </SafeAreaView>
  );
};

export default Games;
