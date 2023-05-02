import React, { useEffect } from "react";
import { View, Text, FlatList } from 'react-native';
import { styles } from "./style";
import Navbar from "../../components/navbar";
// import axios from 'axios';
import images from "../../assets/images";
import { Image } from "react-native";
import { useQuery } from 'react-query';
import axios from 'axios';


const Home = () => {

    {/* Top Players Data  */ }
    const topPlayers = [
        {
           name : 'Stephen Curry',
           image: images.stephen,
        },
        {
            name : 'Lebron James',
            image: images.lebron,
         },
         {
            name : 'Kevin Durant',
            image: images.james,
         },
         {
            name : 'Carmelo',
            image: images.carmelo,
         },
         {
            name : 'Vince Carter',
            image: images.vince,
         },
         {
            name : 'Blake Griffin',
            image: images.blake,
         },
         {
            name : 'Kevin Love',
            image: images.kevin,
         }
    ]
    
      const renderTopPlayers = ({item}) => {
        return (

            <View style={{flex:1, alignItems:'center', marginTop:10, marginLeft: 11}}>

                <Image style={{height:90, width:90, borderRadius:50, borderWidth:2, borderColor:'#961a31'}} source={ item.image} />
                <Text style={{marginTop: 5, justifyContent:'center', color:'white'}}>{item.name}</Text>
            </View>
        )
      }


    return (

        <View style={styles.body}>
            <Image source={images.banner} style={styles.banner} />
            <Navbar />
            <View style={{borderBottomColor:'#A3A3A3', borderWidth:1, marginTop:-6}}></View>

            {/* Leagues  */}
            <FlatList data={topPlayers} renderItem={renderTopPlayers} horizontal={true}/>
        </View>


    );
};

export default Home;