import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import {styles} from './style';
import pngIcon, {Icons} from '../../assets/icons';
import PlayersData from './components/playersData';
import { Strings } from '../../strings';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';
import Header from '../../components/header';


const Players = (params) => {
 
  const showbttn = params.route.params?.showbttn? params.route.params?.showbttn : false
  const [show, setShow] = useState(false);

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainView}>
      {/* ******************* Header ********************* */}
      <Header img={pngIcon.backArrow} title={Strings.common.players} />
      {/* <View
        style={styles.headerView}>
          <TouchableOpacity onPress={() => onHandle()}>
          <Image source={pngIcon.backArrow} style={{marginLeft: 10}} />
          </TouchableOpacity>
        
        <Text 
          style={styles.headerText}>
          {Strings.common.players}
        </Text>
      </View> */}

      {/* ******************* Horizontal Line ********************* */}
      {/* <View
        style={styles.horizontalLine}></View> */}

      {/* ******************* Render Player Data ********************* */}
      <View style={{marginBottom:194}}>
        <PlayersData teamname = {params.route.params?.teamname} showbttn={showbttn} />
      </View>
    </SafeAreaView>
  );
};

export default Players;
