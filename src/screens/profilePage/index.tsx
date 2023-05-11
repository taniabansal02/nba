import React from "react";
import { View, Text, ActivityIndicator, TouchableOpacity, Image } from 'react-native';
import { useQuery } from 'react-query';
import axios from 'axios';
import { styles } from "./style";
import { Strings } from "../../strings";
import pngIcon from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from "../../utils/constants/screenKey";
import images from "../../assets/images";

const ProfilePage = (prop) => {

    const item = prop.route.params;
   

    console.log(prop.route.params);
    const navigation = useNavigation();
    const onHandle = () => {
        navigation.navigate(ScreenNameKeys.Players);
    }
    const generateColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
        return `#${randomColor}`;
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: 'black', height: 50, justifyContent: 'center' }}>
                <TouchableOpacity onPress={() => onHandle()}>
                    <Image source={pngIcon.backArrow} style={{ marginLeft: 10, alignItems: 'center', justifyContent: 'center' }} />
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor : '#97002e', height:150, flexDirection:'row'}}>
                <Image source={images.common} style={{height:120, width:140, marginTop:30, marginLeft:40}}/>
                 <View>
                    <Text>{item.team.full_name} | {item.team.id} | {item.team.division}</Text>
                 </View>
            </View>
           
        </View>
    );
};

export default ProfilePage;