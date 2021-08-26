import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  classicBackground,
  defaultTextFontWeight,
  displayDim,
  distanceBetween2Element,
  mainColor
} from './../../../helpers/cssValues';

import BottomInfoParty from "./BottomInfoParty";
import MainInfoParty from "./MainInfoParty";
import React from "react";
import { useSelector } from "react-redux";

const ResumeTab = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);
  const party = useSelector((state) => state.currentPartyRedux);

  return (
    <>
      <SafeAreaView style={{backgroundColor: theme.background}}>
        <ScrollView style={[styles.main, {backgroundColor: theme.background}]}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color: theme.fontColor}]}>Résumé</Text>
            <View style={styles.underline}></View>
          </View>
          <MainInfoParty party={party.current}/>
          <View style={styles.locationContainer}>
            <Image
              source={require("./../../../assets/pin.png")}
              resizeMode="contain"
              style={styles.icon}
            />
            <Text style={{color: theme.fontColor, fontWeight: defaultTextFontWeight, marginLeft: 5}}>{party.current.location.address}</Text>
          </View>
          <BottomInfoParty navigation={navigation} party={party.current}/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    minWidth: displayDim.x,
    height: displayDim.y,
    backgroundColor: classicBackground,
    paddingLeft: distanceBetween2Element / 2,
    paddingRight: distanceBetween2Element / 2,
  },
  titleContainer: {
    marginTop: distanceBetween2Element,
    width: 75,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  underline: {
    backgroundColor: mainColor,
    width: "100%",
    height: 2,
    marginTop: 4,
  },
  locationContainer: {
    marginTop: distanceBetween2Element,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: mainColor,
  },
});

export default ResumeTab;
