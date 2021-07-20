import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  classicBackground,
  displayDim,
  distanceBetween2Element,
  mainColor
} from "./../../helpers/cssValues";

import BottomInfoParty from "./../components/PartyDetailsComp/BottomInfoParty";
import MainInfoParty from "./../components/PartyDetailsComp/MainInfoParty";
import React from "react";

const ResumeTab = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Résumé</Text>
          <View style={styles.underline}></View>
        </View>
        <MainInfoParty />
        <View style={styles.locationContainer}>
          <Image
            source={require("./../../assets/pin.png")}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text>15 avenue de Vaugirard, 75015, Paris</Text>
        </View>
        <BottomInfoParty navigation={navigation}/>
      </ScrollView>
    </SafeAreaView>
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
    justifyContent: "flex-start"
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: mainColor
  },
});

export default ResumeTab;
