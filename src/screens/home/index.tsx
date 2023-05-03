import React, {useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {styles} from './style';

// import axios from 'axios';
import images from '../../assets/images';
import {Image} from 'react-native';
import {useQuery} from 'react-query';
import axios from 'axios';
import Swiper from 'react-native-swiper';
import TopPlayerData from './components/TopPlayers';
import Navbar from '../../components/navbar';

const Home = () => {
  
 
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

  



  return (
    <ScrollView style={{flex:1,  backgroundColor:'black',}}>
      
       {/* ******************* Banner ********************* */}
      <Image source={images.banner} style={styles.banner} />

      {/* ******************* Navbar ********************* */}
      <Navbar />
      <View
        style={{
          borderBottomColor: '#2f2f2f',
          borderWidth: 1,
          marginTop: -6,
        }}></View>

      
    {/* ******************* Render Top Player Data ********************* */}
      <TopPlayerData />
     

     {/* ******************* Upcomming Matches ********************* */}
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
           {/* <View style={{backgroundColor:'red', height:200, width:'100%'}}>
                <Text style={{color:'white'}}>hii</Text>
            </View>
      <Text style={{color:'white'}}>hello</Text> */}
      {/* <View style={{backgroundColor:'red', height:200, width:'100%'}}>
                <Text style={{color:'white'}}>hii</Text>
            </View> */}

      
   
    </ScrollView>
  );
};

export default Home;
