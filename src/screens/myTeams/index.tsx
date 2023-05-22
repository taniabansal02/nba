import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/header';
import pngIcon from '../../assets/icons';
import { Strings } from '../../strings';
import { styles } from './style';
import { colors } from '../../assets/theme/colors';

const MyTeams = () => {
    const navigation = useNavigation();
    const [data, setdata] = useState('');
    const [teamname, setTeamname] = useState('');
    const[isError, setIsError] = useState('');

    // const navigateToPlayers = () => {
    //     navigation.navigate(ScreenNameKeys.Players, { teamname: teamname, showbttn: true });
    // }

    const navigateToHome = () => {
        navigation.navigate(ScreenNameKeys.Home)
    }

    const getteamnames = async () => {
        const mylist = await AsyncStorage.getItem('currentTeams');
        const final = mylist ? JSON.parse(mylist) : []
        setdata(final);
    }

   const validate = () => {
    if(teamname.trim() === ''){
        console.warn('Team name cannot be empty');
        return null;
    }
    // else if(alreadyExist(teamname)){
    //     setIsError('Team name should be unique');
    //     return null;
    // }
    else{
        navigation.navigate(ScreenNameKeys.Players, { teamname: teamname, showbttn: true });
    }
   }

//    const alreadyExist = (newTeamName) => {
//     return data.match(newTeamName);
//    }

    const isfocused = useIsFocused();
    const itemclik = (item) => {
        navigation.navigate(ScreenNameKeys.MyTeamDetail, { item })
    }

    const deleteTeam = async (index) => {
        const tempData = data;
        const selectedData = tempData.filter((item, ind) => {
            return ind != index;
        });
        setdata(selectedData);
        await AsyncStorage.setItem('currentTeams', JSON.stringify(selectedData));
    }
    useEffect(() => {
        getteamnames();
    }, [isfocused]);
    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => itemclik(item)}>
                <View style={styles.teamView}>

                    {/* ******************* My team Details ********************* */}
                    <View style={styles.teamDetails}>
                        <View style={styles.playerRow}>
                            <Text style={styles.teamName}> {item} </Text>
                        </View>
                    </View>

                    {/* ******************* Delete Data ********************* */}
                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={() => deleteTeam(index)} style={styles.btn}>
                            <Text style={styles.btnTxt}> {Strings.common.delete} </Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <Header img={pngIcon.backArrow} title={Strings.teams.myTeam} fun={() => navigateToHome()}/>
            <View style={styles.teamRow}>
                <View style={styles.inputView}>
                    <TextInput
                        placeholder= {Strings.teams.search}
                        placeholderTextColor={colors.black}
                        style={styles.input}
                        clearButtonMode="always"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText={val => setTeamname(val)}
                    />
                </View>

                <TouchableOpacity onPress={() => validate()} style={styles.btn}>
                    <Text style={styles.btnTxt}>
                        {Strings.teams.addTeam}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.heading}> {Strings.teams.listOfTeams} </Text>

            <FlatList renderItem={renderItem} data={data} />
        </View>
    )
};

export default MyTeams;