import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { Strings } from '../../strings';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';

// const navigation = useNavigation();

const Navbar = () => {
const navigation = useNavigation();

    const navigateToGames = () => {
        navigation.navigate(ScreenNameKeys.Games);
    }

    const navigateToTeams = () => {
        navigation.navigate(ScreenNameKeys.Teams);
    }

    const navigateToPlayers = () => {
        navigation.navigate(ScreenNameKeys.Players);
    }
   

    return (
        <View style={styles.mainView}>
            <View style={styles.navbarView}>
            
                
                
                <TouchableOpacity onPress={() => navigateToGames()}>
                <Text style={styles.headerText}>{Strings.common.games}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity onPress={() => navigateToTeams()}>
                <Text style={styles.headerText}>{Strings.common.teams}</Text>
                </TouchableOpacity>
               
               <TouchableOpacity onPress={() => navigateToPlayers()}>
               <Text style={styles.headerText}>{Strings.common.players}</Text>
               </TouchableOpacity>
               
                <Text style={styles.headerText}>{Strings.common.videos}</Text>
            </View>
        </View>
    );
};

export default Navbar;