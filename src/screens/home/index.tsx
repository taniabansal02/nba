import React, {useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {styles} from './style';
import Navbar from '../../components/Navbar';
// import axios from 'axios';
import images from '../../assets/images';
import {Image} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import PlayerData from './components/TopPlayers';

const Home = () => {
  
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

  {
    /* One to One matches  */
  }
  const matches = [
    {
      img: images.knick,
    },
    {
      img: images.lak,
    },
  ];

  const renderTopPlayers = ({item}) => {
    return (
      <View
        style={{flex: 1, alignItems: 'center', marginTop: 10, marginLeft: 11, backgroundColor:'green', height:120}}>
        <Image
          style={{
            height: 90,
            width: 90,
            borderRadius: 50,
            borderWidth: 2,
            borderColor: '#961a31',
          }}
          source={item.image}
        />
        <Text style={{marginTop: 5, justifyContent: 'center', color: 'white'}}>
          {item.name}
        </Text>
      </View>
    );
  };



  return (
    <ScrollView style={{flex:1,  backgroundColor:'black',}}>
      
      <Image source={images.banner} style={styles.banner} />
      <Navbar />
      <View
        style={{
          borderBottomColor: '#2f2f2f',
          borderWidth: 1,
          marginTop: -6,
        }}></View>

      {/* Leagues  */}
      {/* <FlatList
        data={topPlayers}
        renderItem={renderTopPlayers}
        horizontal={true}
      /> */}

      <PlayerData />
     

      {/* Matches  */}
      <Swiper showsButtons autoplay style={{height:400, marginTop:10}}>
         <View style={{flex:1}}>
            <Image style={{height:300, width:"100%"}} source={matches[0].img} />
            <View style={{backgroundColor:'red', height:200, width:'100%'}}>
                <Text style={{color:'white'}}>hii</Text>
            </View>
         
         </View>

         <View style={{flex:1}}>
            <Image style={{height:300, width:"100%"}} source={matches[1].img} />
            <View style={{backgroundColor:'red', height:200, width:'100%'}}>
                <Text style={{color:'white'}}>hii</Text>
            </View>
            
         </View>

      </Swiper>
      <Text style={{color:'white'}}>hello</Text>
      {/* <View style={{backgroundColor:'red', height:200, width:'100%'}}>
                <Text style={{color:'white'}}>hii</Text>
            </View> */}

      
   
    </ScrollView>
  );
};

export default Home;
