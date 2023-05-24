import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import {styles} from './style';
import TeamsData from './components/teamData';
import { Strings } from '../../strings';
import Header from '../../components/header';



const Teams = () => {
  
  return (
    <SafeAreaView style={styles.mainView}>
      {/* ******************* Header ********************* */}
      <Header title={Strings.common.teams} />

      {/* ******************* Render Player Data ********************* */}
      <View style={styles.list}>
        <TeamsData />
      </View>
     
    </SafeAreaView>
  );
};

export default Teams;
