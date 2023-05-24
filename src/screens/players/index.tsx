import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import PlayersData from './components/playersData';
import { Strings } from '../../strings';
import Header from '../../components/header';



const Players = (params) => {
 
  const showbttn = params.route.params?.showbttn? params.route.params?.showbttn : false
  // const [show, setShow] = useState(false);
  
  return (
    <SafeAreaView style={styles.mainView}>
      {/* ******************* Header ********************* */}
      <Header title={Strings.common.players} />

      {/* ******************* Render Player Data ********************* */}
      <View style={styles.list}>
        <PlayersData teamname = {params.route.params?.teamname} showbttn={showbttn} />
      </View>
    </SafeAreaView>
  );
};

export default Players;
