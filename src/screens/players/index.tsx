import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, Image, TouchableOpacity, ActivityIndicator, SafeAreaView, FlatList } from 'react-native';
import { styles } from "./style";
import pngIcon, { Icons } from "../../assets/icons";
import fonts from "../../assets/fonts";
import PlayersData from "./components/playersData";
// import filter from 'lodash.filter';
import { useQuery } from 'react-query';
import axios from 'axios';



const Players = () => {
    const [searchQuery, setSearchQuery] = useState("");

    {/* ******************* Players API ********************* */ }
    const { isLoading, error, data:mydata } = useQuery('Players', async () => {
        const res = await axios.get('https://free-nba.p.rapidapi.com/players',
            {
                params: {
                    page: '0',
                    per_page: '5130'
                },
                headers: {
                    'X-RapidAPI-Key': 'b92d35722emshdb1f96ecbf0e730p1497f4jsn124949e0a308',
                    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
                }
            });
        console.log(res.data.data)
        return res.data.data;
    });
    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size='large' color='#5500dc' />
            </View>

        );
    }
    if (error) {
        return <View><Text>An error has occurred : {error.message}</Text></View>;
    }

    // const searcher = () =>{
    const filteredData = mydata.filter((i) => {
        
           return i.first_name.toLowerCase().match(searchQuery.toLowerCase()) || 
           i.last_name.toLowerCase().match(searchQuery.toLowerCase());

        
            
    });
    
// }


    {/* ******************* Random colors ********************* */ }
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };

    

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
        <SafeAreaView style={{ backgroundColor: 'black', flex: 1 }}>

            {/* ******************* Header ********************* */}
            <View style={{ backgroundColor: '#191c23', flexDirection: 'row', alignItems: 'center', height: 60 }}>
                <Image source={pngIcon.backArrow} style={{ marginLeft: 10 }} />
                <Text style={{ color: 'white', fontFamily: fonts.lato, fontSize: 20, marginLeft: 20 }}> PLAYERS </Text>
            </View>

            {/* ******************* Horizontal Line ********************* */}
            <View style={{ borderBottomColor: '#3a3940', borderWidth: 1, marginTop: -2 }}></View>

            {/* ******************* Search Bar ********************* */}
            <View style={{ backgroundColor: '#191c23', flexDirection: 'row', alignItems: 'center', marginTop: 20, width: '90%', height: 45, marginHorizontal: 20, borderColor: '#5e6168', borderWidth: 1, borderRadius: 6 }}>
                <Image source={pngIcon.search} style={{ marginHorizontal: 14 }} />
                <TextInput
                    placeholder="Search"
                    placeholderTextColor={'#ffff'}
                    style={{ fontSize: 16, flex: 1, color: '#fff' }}
                    clearButtonMode="always"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={(text) => setSearchQuery(text)}
                />
            </View>

            {/* ******************* Render Player Data ********************* */}
            <View style={{ marginTop: 30 }}>
            <FlatList data={filteredData} renderItem={getPlayers} />
            </View>

        </SafeAreaView>
    );
};

export default Players;