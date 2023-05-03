import React from "react";
import {View, Text, FlatList, Image } from 'react-native';
import images from "../../../../assets/images";

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
        style={{flex: 1, alignItems: 'center', marginTop: 10, marginLeft: 11, height:120}}>
        <Image
          style={{
            height: 90,
            width: 90,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#a32132',
          }}
          source={item.image}
        />
        <Text style={{marginTop: 5, justifyContent: 'center', color: 'white'}}>
          {item.name}
        </Text>
      </View>
    );
  };

    return(
        <View>
             {/* Leagues  */}
      <FlatList
        data={topPlayers}
        renderItem={renderTopPlayers}
        horizontal={true}
      />
        </View>

    )

};

export default TopPlayerData;