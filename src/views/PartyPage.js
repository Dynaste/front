import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { classicBackground, displayDim, distanceBetween2Element, mainColor } from "../../helpers/cssValues";

import PartyResume from "../components/PartyResume";
import React from "react";

const PartyPage = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ backgroundColor: classicBackground }}>
        <ScrollView style={styles.main}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Mon prochain évènement</Text>
            <View style={styles.underline}></View>
          </View>
          <View style={styles.centered}>
            <PartyResume navigation={navigation} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: displayDim.x,
    height: displayDim.y,
    backgroundColor: classicBackground,
    paddingLeft: distanceBetween2Element/2,
    paddingRight: distanceBetween2Element/2,
  },
  titleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 235,
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
  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default PartyPage;
