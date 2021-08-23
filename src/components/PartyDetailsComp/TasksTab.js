import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  distanceBetween2Element,
  mainColor,
} from "./../../../helpers/cssValues";

import { Dimensions } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const TasksTab = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);

  return (
    <SafeAreaView>
      <ScrollView style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.fontColor }]}>
            Liste de tâches
          </Text>
          <View style={styles.underline}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: Dimensions.get("window").width,
    flexDirection: "row",
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
    paddingLeft: distanceBetween2Element / 2,
    paddingRight: distanceBetween2Element / 2,
  },
  titleContainer: {
    marginTop: distanceBetween2Element,
    width: 141,
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
});

export default TasksTab;
