import React from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './style';
interface Props {
  slider1img?: any;
  slider2img?: any;
  heading: string;
  subheading: string;
  team1logo: any;
  team1name: string;
  score1: string;
  status: string;
  score2: string;
  team2logo: any;
  team2name: string;
  txt: string;
}

const SwiperDetails = ({
  heading,
  subheading,
  team1logo,
  team1name,
  score1,
  status,
  score2,
  team2logo,
  team2name,
  txt,
  slider1img,
  slider2img,
}: Props) => {
  return (
    <View style={styles.swiperView}>
      <Image style={styles.swiperImg} source={slider1img} />

      <View style={styles.txtView}>
        <Text style={styles.heading}> {heading}</Text>
        <Text style={styles.subHead}> {subheading}</Text>
      </View>

      <View style={styles.container}>
        <View>
          <Image source={team1logo} style={styles.team1Logo} />
          <Text style={styles.teamNameTxt}>{team1name}</Text>
        </View>

        <Text style={styles.scoreTxt}>{score1}</Text>

        <View style={styles.statusView}>
          <Text style={styles.statusTxt}>{status}</Text>
        </View>
        <Text style={styles.score2Txt}>{score2}</Text>

        <View>
          <Image source={team2logo} style={styles.team2Logo} />
          <Text style={styles.teamNameTxt}>{team2name}</Text>
        </View>
      </View>

      <View style={styles.txtView}>
        <Text style={styles.subHead}>{txt}</Text>
      </View>
    </View>
  );
};

export default SwiperDetails;
