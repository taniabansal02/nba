import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity , FlatList} from 'react-native';
import { useNavigation,useIsFocused } from "@react-navigation/native";
import { ScreenNameKeys } from '../../utils/constants/screenKey';
import AsyncStorage from '@react-native-async-storage/async-storage';
const MyTeams = () => {
    const navigation = useNavigation();
    const [data,setdata] = useState('')
    const onHandle = () => {
        navigation.navigate(ScreenNameKeys.CreateTeam);
    }
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
        <View>
            <Text>My teams </Text>
            <TouchableOpacity style={{backgroundColor:'blue'}} onPress={() => onHandle()}>
                <Text> Add Player </Text>
            </TouchableOpacity>
            <FlatList renderItem={renderItem} data={data} />
        </View>
    )
};

export default MyTeams;