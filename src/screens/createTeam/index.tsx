import React , {useState}from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { ScreenNameKeys } from "../../utils/constants/screenKey";


const CreateTeam = () => {
    const [teamname , setTeamname] = useState('');
    const navigation = useNavigation();
    const navigateToPlayers = () => {
        navigation.navigate(ScreenNameKeys.Players , {teamname:teamname,showbttn:true});
    }
    return(
        <View>
           <TextInput placeholder="Enter team title" onChangeText={val=>setTeamname(val)}></TextInput>
           <TextInput placeholder="Enter color"></TextInput>
           <TouchableOpacity style={{backgroundColor: 'red'}} onPress={() => navigateToPlayers()}>
            <Text> Add Players </Text>
           </TouchableOpacity>
        </View>
    )
}

export default CreateTeam;