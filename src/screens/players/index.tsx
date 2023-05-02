import React from "react";
import { View, Text , ScrollView, TextInput} from 'react-native';
import { styles } from "./style";

const Players = () => {
    return(
       <ScrollView style={{backgroundColor:'black'}}>
        <View style={{backgroundColor: '#191c23'}}>

        <TextInput placeholder="Search" placeholderTextColor={'#8a8b93'} />
        </View>

       
        
        

       </ScrollView>
    );
};

export default Players;