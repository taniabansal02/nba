import React from "react";
import { View, Text, FlatList, Image, Button, TouchableOpacity } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';
import images from "../../../../assets/images";
import fonts from "../../../../assets/fonts";

const TeamsData = () => {

    {/* ******************* Random colors ********************* */ }
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };

    {/* ******************* Teams API ********************* */ }
    const { isLoading, error, data } = useQuery('Teams', async () => {
        const res = await axios.get('https://free-nba.p.rapidapi.com/teams',
            {
                params: { page: '0' },
                headers: {
                    'X-RapidAPI-Key': '1336fa5b5dmsh54908f008934437p1f95c1jsnf7bfd1a79069',
                    'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
                }
            });
        console.log(res.data)
        return res.data;
    });
    if (isLoading) {
        return <View><Text>Loading...</Text></View>;
    }
    if (error) {
        return <View><Text>An error has occurred</Text></View>;
    }


    const getTeams = ({ item }) => {
        return (
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, backgroundColor: '#191c23', height: 70, }}>

                {/* ******************* Icons ********************* */}
                <View style={{ backgroundColor: generateColor(), alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 50, marginLeft:20 }}>
                    <Text style={{ color: 'white', }}>{item.city[0] + item.name[0]}</Text>
                </View>

                {/* ******************* Player Details ********************* */}
                <View style={{ flexDirection: 'column', marginLeft: 20 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontFamily: fonts.lato, fontSize: 18 }}>{item.full_name} </Text>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: '#83868d', fontFamily: fonts.lato, fontSize: 17 }}>{item.abbreviation} | </Text>
                        <Text style={{ color: '#83868d', fontFamily: fonts.lato, fontSize: 17 }}>#{item.id} | </Text>
                        <Text style={{ color: '#83868d', fontFamily: fonts.lato, fontSize: 17 }}>#{item.division} </Text>
                        
                    </View>

                </View>

                {/* ******************* Add Button ********************* */}
                <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', marginRight: 20 }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', height: 30, width: 70, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'black' , fontFamily: fonts.lato, fontSize: 16}}> Follow</Text>
                    </TouchableOpacity>
                </View>

            </View>

        )
    }
    return (
        <View>
            <FlatList data={data.data} renderItem={getTeams} />
        </View>
    );
};

export default TeamsData;