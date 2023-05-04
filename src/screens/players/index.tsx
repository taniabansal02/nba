import React, {useState} from "react";
import { View, Text, ScrollView, TextInput, Image } from 'react-native';
import { styles } from "./style";
import pngIcon, { Icons } from "../../assets/icons";
import fonts from "../../assets/fonts";
import PlayersData from "./components/playersData";


const Players = () => {
const [searchQuery, setSearchQuery] = useState("");
const handleSearch = (text) => {
setSearchQuery(text);
}

    return (
        <ScrollView style={{ backgroundColor: 'black', flex: 1 }}>

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
                style={{ fontSize: 16, flex: 1, color:'#fff' }} 
                clearButtonMode="always" 
                autoCapitalize="none" 
                autoCorrect={false}
                onChangeText={(text) => handleSearch(text)} 
             />
            </View>

            {/* ******************* Render Player Data ********************* */}
            <View style={{ marginTop: 30 }}>
                <PlayersData />
            </View>










        </ScrollView>
    );
};

export default Players;