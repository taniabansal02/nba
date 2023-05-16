import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';

const MyTeams = () => {
    const navigation = useNavigation();
    const onHandle = () => {
        navigation.navigate(ScreenNameKeys.Players);
    }
    return(
        <View>
            <Text>My teams </Text>
            <TouchableOpacity style={{backgroundColor:'blue'}} onPress={() => onHandle()}>
                <Text> Add Player </Text>
            </TouchableOpacity>
        </View>
    )
};

export default MyTeams;