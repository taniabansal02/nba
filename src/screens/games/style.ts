import { StyleSheet } from "react-native";
import fonts from "../../assets/fonts";

export const styles = StyleSheet.create({

 mainView: {
        backgroundColor: 'black', 
        flex: 1
    },
    text :{
        color: '#ffffff',
    }, 
    headerView :{
        backgroundColor: '#191c23',
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
      },
      headerText:{
        color: 'white',
        fontFamily: fonts.lato,
        fontSize: 20,
        marginLeft: 20,
      },
      horizontalLine:{
        borderBottomColor: '#3a3940',
        borderWidth: 1,
        marginTop: -2,
      },
      searchBar: {
        backgroundColor: '#191c23',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        width: '90%',
        height: 45,
        marginHorizontal: 20,
        borderColor: '#5e6168',
        borderWidth: 1,
        borderRadius: 6,
      },
      searchIcon: {
        marginHorizontal: 14
      },
      input: {
        fontSize: 16, 
        flex: 1, 
        color: '#ffffff'
      },
})