import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, TextInput } from 'react-native';
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/header';
import { Strings } from '../../strings';
import { styles } from './style';
import { colors } from '../../assets/theme/colors';

const MyTeams = () => {
    const navigation = useNavigation();
    const [data, setdata] = useState('');
    const [teamname, setTeamname] = useState('');
    const[isError, setIsError] = useState('');

    { /* ******************* Get Team names ********************* */ }
    const getTeamNames = async () => {
        const mylist = await AsyncStorage.getItem('currentTeams');
        const final = mylist ? JSON.parse(mylist) : []
        setdata(final);
    }

    { /* ******************* Validations ********************* */ }
   const validate = () => {
    let firstregex = /^[A-Z][a-z]*$/;

    if(teamname.trim() === ''){
        setIsError(Strings.teams.empty);
        return null;
    }
    else if (!firstregex.test(teamname)){
        setIsError(Strings.teams.alphabets);
        return null;
    }
    else if(teamname.length < 3){
        setIsError(Strings.teams.length);
        return null;
    }
    else{
        navigation.navigate(ScreenNameKeys.Players, { teamname: teamname, showbttn: true });
    }
   }

   { /* ******************* Sendind team name to team detail page ********************* */ }
    const isfocused = useIsFocused();
    const itemClick = (item) => {
        navigation.navigate(ScreenNameKeys.MyTeamDetail, { item })
    }


    { /* ******************* Delete team logic ********************* */ }
    const deleteTeam = async (index) => {
        const tempData = data;
        const selectedData = tempData.filter((item, ind) => {
            return ind != index;
        });
        setdata(selectedData);
        await AsyncStorage.setItem('currentTeams', JSON.stringify(selectedData));
    }
    useEffect(() => {
        getTeamNames();
    }, [isfocused]);

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => itemClick(item)}>
                <View style={styles.teamView}>

                    {/* ******************* My team Details ********************* */}
                    <View style={styles.teamDetails}>
                        <View style={styles.playerRow}>
                            <Text style={styles.teamName}> {item} </Text>
                        </View>
                    </View>

                    {/* ******************* Delete Button ********************* */}
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
            <Header title={Strings.teams.myTeam}/>
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
            <Text style={styles.error}> {isError}</Text>
            <Text style={styles.heading}> {Strings.teams.listOfTeams} </Text>

            <FlatList style={styles.list} renderItem={renderItem} data={data} />
        </View>
    )
};

export default MyTeams;