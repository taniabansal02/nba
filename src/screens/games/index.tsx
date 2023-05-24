import React from 'react';
import {View, SafeAreaView} from 'react-native';
import {styles} from './style';
import {Strings} from '../../strings';
import GamesData from './components/gamesData';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/header';

const Games = () => {
 
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainView}>

      <Header title={Strings.common.games} />

      {/* ******************* Games card ********************* */}
      <View style={styles.list}>
        <GamesData />
      </View>
    </SafeAreaView>
  );
};

export default Games;
