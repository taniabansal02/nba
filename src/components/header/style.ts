import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";
import { colors } from "../../assets/theme/colors";


export const styles = StyleSheet.create({
   
      headerView :{
        backgroundColor: colors.headerBg,
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
      },
      backArrow : {
        marginLeft: 10,
      },
      headerText:{
        color: colors.white,
        fontFamily: fonts.lato,
        fontSize: 20,
        marginLeft: 20,
      },
})