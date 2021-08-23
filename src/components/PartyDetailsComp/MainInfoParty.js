import { StyleSheet, View } from "react-native";
import {
  contrastBackground,
  displayDim,
  distanceBetween2Element,
} from "./../../../helpers/cssValues";

import React from "react";
import { useSelector } from "react-redux";

const MainInfoParty = () => {
  const theme = useSelector((state) => state.themeRedux);

  return (
    <View style={styles.mainInfoContainer}>
      <View style={styles.ownerContainer}></View>
      <View style={styles.mainSeparator}></View>
      <View style={styles.dateContainer}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainInfoContainer: {
    marginTop: distanceBetween2Element,
    width: displayDim.x - 40,
    display: "flex",
    flexDirection: "row",
  },
  ownerContainer: {
    height: 60,
    width: "63%",
    backgroundColor: contrastBackground,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
  },
  mainSeparator: {
    width: "4%",
  },
  dateContainer: {
    height: 60,
    width: "33%",
    backgroundColor: contrastBackground,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
  }
});

export default MainInfoParty;
