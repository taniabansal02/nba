import { StyleSheet } from "react-native";
import fonts from "../../../../assets/fonts";

export const styles = StyleSheet.create({

    text :{
        color: '#ffffff',
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
      list:{
        marginTop: 20
      },
      indicator:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
      },
      playerView: {
        
        alignItems: 'center',
        marginBottom: 5,
        backgroundColor: '#191c23',
        height: 120,
      },
      homeTeam:{
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: -300,
        
      },
      playerDetails : {
        flexDirection:'column',
        marginLeft: 20
      },
      playerRow:{
        flexDirection: 'row'
      },
      playerName:{
        color: 'white', 
        fontFamily: fonts.lato, 
        fontSize: 18
      },
      playerid:{
        color: '#83868d', 
        fontFamily: fonts.lato, 
        fontSize: 17
      },
      buttonView:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 20,
      },
      btn:{
        backgroundColor: 'white',
        height: 30,
        width: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      btnTxt:{
        color: 'black', 
        fontFamily: fonts.lato, 
        fontSize: 16
      }
})