import React, { useState } from "react";
import { View, Text, FlatList, Image, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';
import images from "../../../../assets/images";
import fonts from "../../../../assets/fonts";

const PlayersData = () => {

    // {/* ******************* Random colors ********************* */ }
    // const generateColor = () => {
    //     const randomColor = Math.floor(Math.random() * 16777215)
    //         .toString(16)
    //         .padStart(6, '0');
    //     return `#${randomColor}`;
    // };

    // {/* ******************* Players API ********************* */ }
    // const { isLoading, error, data } = useQuery('Players', async () => {
    //     const res = await axios.get('https://free-nba.p.rapidapi.com/players',
    //         {
    //             params: {
    //                 page: '0',
    //                 per_page: '5130'
    //             },
    //             headers: {
    //                 'X-RapidAPI-Key': 'b92d35722emshdb1f96ecbf0e730p1497f4jsn124949e0a308',
    //                 'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
    //             }
    //         });
    //     console.log(res.data)
    //     return res.data;
    // });
    // if (isLoading) {
    //     return (
    //         <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    //            <ActivityIndicator size='large' color='#5500dc' />
    //         </View>
            
    //     );
    // }
    // if (error) {
    //     return <View><Text>An error has occurred : {error.message}</Text></View>;
    // }


    const getPlayers = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, backgroundColor: '#191c23', height: 70 }}>

                {/* ******************* Icons ********************* */}
                <View style={{ backgroundColor: generateColor(), alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 50, marginLeft: 20 }}>
                    <Text style={{ color: 'white', }}>{item.first_name[0] + item.last_name[0]}</Text>
                </View>

                {/* ******************* Player Details ********************* */}
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontFamily: fonts.lato, fontSize: 18 }}>{item.first_name} </Text>
                        <Text style={{ color: 'white', fontFamily: fonts.lato, fontSize: 18 }}>{item.last_name}</Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: '#83868d', fontFamily: fonts.lato, fontSize: 17 }}>#{item.id} | </Text>
                        <Text style={{ color: '#83868d', fontFamily: fonts.lato, fontSize: 17 }}>{item.position}</Text>
                    </View>

                </View>

                {/* ******************* Add Button ********************* */}
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', height: 30, width: 70, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black', fontFamily: fonts.lato, fontSize: 16 }}> Add</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
    return (
        <View>
            {/* <FlatList data={data.data} renderItem={getPlayers} /> */}
        </View>
    );
};

export default PlayersData;