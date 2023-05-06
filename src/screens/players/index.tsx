import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import pngIcon, {Icons} from '../../assets/icons';
import PlayersData from './components/playersData';
import { Strings } from '../../strings';


const Players = () => {
  return (
    <SafeAreaView style={styles.mainView}>
      {/* ******************* Header ********************* */}
      <View
        style={styles.headerView}>
        <Image source={pngIcon.backArrow} style={{marginLeft: 10}} />
        <Text
          style={styles.headerText}>
          {Strings.common.players}
        </Text>
      </View>

      {/* ******************* Horizontal Line ********************* */}
      <View
        style={styles.horizontalLine}></View>

      {/* ******************* Render Player Data ********************* */}
      <View>
        <PlayersData />
      </View>
    </SafeAreaView>
  );
};

export default Players;
