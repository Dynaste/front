import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { displayDim, distanceBetween2Element, mainColor } from "./../../helpers/cssValues";

import React from "react";
import { useSelector } from "react-redux";

const NotificationPage = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView
          style={[styles.main, { backgroundColor: theme.background }]}
        >
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: theme.fontColor }]}>
              Ma liste de tâches
            </Text>
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
    flexDirection: "row",
    height: displayDim.y,
  },
  titleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 168,
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

export default NotificationPage;
