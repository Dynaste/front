import { Pressable, StyleSheet, View } from "react-native";
import {
  contrastBackground,
  displayDim,
  distanceBetween2Element,
  mainColor
} from "../../../helpers/cssValues";

import React from "react";

const BottomInfoParty = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.infoContainer} onPress={() => navigation.navigate("Participants")}></Pressable>
      <Pressable style={styles.infoContainer} onPress={() => navigation.navigate("Tasks list")}></Pressable>
      <Pressable style={styles.infoContainer} onPress={() => navigation.navigate("Grocery list")}></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: distanceBetween2Element,
    width: displayDim.x - 40,
    display: "flex",
  },
  infoContainer: {
    height: 75,
    width: "100%",
    backgroundColor: contrastBackground,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: distanceBetween2Element
  },
});

export default BottomInfoParty;
