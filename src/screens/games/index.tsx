import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {styles} from './style';
import {Strings} from '../../strings';
import pngIcon from '../../assets/icons';
import GamesData from './components/gamesData';
import {useNavigation} from '@react-navigation/native';
import {ScreenNameKeys} from '../../utils/constants/screenKey';
import Header from '../../components/header';

const Games = () => {
  const onHandle = () => {
    navigation.navigate(ScreenNameKeys.Home);
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainView}>
      <Header
        img={pngIcon.backArrow}
        title={Strings.common.games}
        fun={() => onHandle()}
      />

      {/* ******************* Games card ********************* */}
      <View style={styles.list}>
        <GamesData />
      </View>
    </SafeAreaView>
  );
};

export default Games;
