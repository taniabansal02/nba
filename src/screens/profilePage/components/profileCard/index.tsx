import React from 'react';
import {View, Text } from 'react-native';
import { styles } from './style';

interface Props {
    title : string,
    Flex: any,
    val : string,
}

const ProfileCard = ({title, Flex, val} : Props) => {
    return(
        <View style={styles.cardView}>
            <View style={styles.cardRow}>
                <Text style={styles.titleTxt}>{title}</Text>
                <View style={{flex:Flex}}>
                <Text style={styles.valText}>{val}</Text>
                </View>
            </View>
      </View>
    )
}

export default ProfileCard;
