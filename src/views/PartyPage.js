import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import { classicBackground, displayDim } from "../../helpers/cssValues";

import PartyResume from "../components/PartyResume";
import React from "react";

const PartyPage = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View>
          <PartyResume navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: displayDim.x,
    flexDirection: "row",
    height: displayDim.y,
    backgroundColor: classicBackground,
  },
});

export default PartyPage;
