import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import pngIcon from "../../assets/icons";

interface Props{
    img ?: any,
    title ?: string,
    fun ?: Function,
}

const Header = ({img, title, fun} : Props) => {
    return(
        <View
        style={styles.headerView}>
          <TouchableOpacity onPress={() => fun()}>
          <Image source={img} style={{marginLeft: 10}} />
          </TouchableOpacity>
        
        <Text 
          style={styles.headerText}>
          {title}
        </Text>
      </View>
    );
};

export default Header;