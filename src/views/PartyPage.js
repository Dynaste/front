import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { displayDim, distanceBetween2Element, mainColor } from "../../helpers/cssValues";

import PartyResume from "../components/PartyResume";
import React from "react";
import { useSelector } from "react-redux";

const PartyPage = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView style={[styles.main, { backgroundColor: theme.background }]}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color: theme.fontColor}]}>Mon prochain évènement</Text>
            <View style={styles.underline}></View>
          </View>
          <View style={styles.centered}>
            <PartyResume navigation={navigation} />
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={[styles.title, {color: theme.fontColor}]}>Mes futurs évènements</Text>
            <View style={styles.underline}></View>
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
    paddingLeft: distanceBetween2Element/2,
    paddingRight: distanceBetween2Element/2,
  },
  titleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 235,
  },
  subtitleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 220,
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
