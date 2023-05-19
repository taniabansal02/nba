import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import pngIcon from '../../assets/icons';
import PlayersData from './components/playersData';
import { Strings } from '../../strings';
import { useNavigation } from "@react-navigation/native";
import Header from '../../components/header';
import { ScreenNameKeys } from '../../utils/constants/screenKey';


const Players = (params) => {
 
  const showbttn = params.route.params?.showbttn? params.route.params?.showbttn : false
  const [show, setShow] = useState(false);
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate(ScreenNameKeys.Home);
  }
  return (
    <SafeAreaView style={styles.mainView}>
      {/* ******************* Header ********************* */}
      <Header img={pngIcon.backArrow} title={Strings.common.players} fun={() => navigateToHome()}/>

      {/* ******************* Render Player Data ********************* */}
      <View style={styles.list}>
        <PlayersData teamname = {params.route.params?.teamname} showbttn={showbttn} />
      </View>
    </SafeAreaView>
  );
};

export default Players;
