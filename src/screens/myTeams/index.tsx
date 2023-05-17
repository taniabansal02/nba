import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity , FlatList, TextInput} from 'react-native';
import { useNavigation,useIsFocused } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Header from '../../components/header';
import pngIcon from '../../assets/icons';
import { Strings } from '../../strings';
import { styles } from './style';
import { colors } from '../../assets/theme/colors';

const MyTeams = () => {
    const navigation = useNavigation();
    const [data,setdata] = useState('');
    const [ teamname, setTeamname] = useState('');
    const navigateToPlayers = () => {
        navigation.navigate(ScreenNameKeys.Players, {teamname: teamname, showbttn : true});
    }
    // const onHandle = () => {
    //     navigation.navigate(ScreenNameKeys.CreateTeam);
    // }
    const getteamnames  = async () => {
        const mylist = await AsyncStorage.getItem('currentTeams');
        const final = mylist?JSON.parse(mylist):[]
        setdata(final);

    }
    const isfocused = useIsFocused();
    const itemclik = (item) => {
        console.log('myitem' , item)
        navigation.navigate('News' , {item})
    }
  useEffect(() => {
    getteamnames();
  }, [isfocused]);
    const renderItem = ({item}) => {
        console.log(item);

        return(
            <TouchableOpacity onPress={()=>itemclik(item)} ><Text>{item}</Text></TouchableOpacity>
            
        )
    }

    return(
        <View style={{flex:1, backgroundColor: colors.bg}}>
            <Header img={pngIcon.backArrow} title={Strings.teams.myTeam} />
            <View style={{flexDirection:'row', marginTop:30, gap:-10}}>
                <View style={styles.inputView}>
                <TextInput 
                placeholder='Enter team name' 
                placeholderTextColor={colors.black}
                style={styles.input}
                clearButtonMode="always"
                autoCapitalize="none"
                autoCorrect={false}
                onChangeText={val => setTeamname(val)}
                />

                </View>
                
            <TouchableOpacity onPress={() => navigateToPlayers()} style={styles.btn}>
              <Text style={styles.btnTxt}>
                Add Team
              </Text>
            </TouchableOpacity>
            </View>
            
            <FlatList renderItem={renderItem} data={data} />
        </View>
    )
};

export default MyTeams;