import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import images from '../../../../assets/images';
import { styles } from './style';

const TopPlayerData = () => {
  /* Top Players Data  */

  const topPlayers = [
    {
      name: 'Stephen Curry',
      image: images.stephen,
    },
    {
      name: 'Lebron James',
      image: images.lebron,
    },
    {
      name: 'Kevin Durant',
      image: images.james,
    },
    {
      name: 'Carmelo',
      image: images.carmelo,
    },
    {
      name: 'Vince Carter',
      image: images.vince,
    },
    {
      name: 'Blake Griffin',
      image: images.blake,
    },
    {
      name: 'Kevin Love',
      image: images.kevin,
    },
  ];

  const renderTopPlayers = ({item}) => {
    return (
      <View
        style={styles.mainview}>
        <Image
          style={styles.img}
          source={item.image}
        />
        <Text
          style={styles.playerName}>
          {item.name}
        </Text>
      </View>
    );
  };

  return (
    <View>
      {/* Leagues  */}
      <FlatList
        data={topPlayers}
        renderItem={renderTopPlayers}
        horizontal={true}
      />
    </View>
  );
};

export default TopPlayerData;
