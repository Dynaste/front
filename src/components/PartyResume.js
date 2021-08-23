import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  displayDim,
  distanceBetween2Element,
  shadowColor,
} from "../../helpers/cssValues";

import React from "react";
import { useSelector } from "react-redux";

const PartyResume = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);

  return (
    <Pressable
      style={[
        styles.container,
        {
          backgroundColor: theme.darkMode
            ? theme.contrastBackground
            : classicBackground,
          shadowColor: theme.shadowColor,
        },
      ]}
      onPress={() =>
        navigation.navigate("PartyDetails", { testId: "Party ID: 1" })
      }
    >
      <View style={styles.pictureContainer}>
        <Image
          source={require("./../../assets/partyPictureDefault.jpeg")}
          resizeMode="contain"
          style={styles.image}
        />
        <View style={styles.date}>
          <Text>Date</Text>
        </View>

        <View style={styles.progression}>
          <Text>Progression</Text>
        </View>
      </View>
      <View style={styles.users}>
        <View style={styles.owner}>
          <Text style={{ color: theme.fontColor }}>Creator</Text>
        </View>
        <View style={styles.participants}>
          <Text style={{ color: theme.fontColor }}>Participants</Text>
        </View>
      </View>
      <Text style={[styles.title, { color: theme.fontColor }]}>Party name</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: displayDim.x - 40,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    marginTop: 15,
    padding: distanceBetween2Element / 2,
    borderRadius: borderRadiusValue,
  },
  pictureContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: displayDim.y / 4.5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: borderRadiusValue,
  },
  date: {
    position: "absolute",
    padding: 5,
    backgroundColor: "white",
    borderRadius: borderRadiusValue,
    left: 15,
    bottom: 15,
  },
  progression: {
    position: "absolute",
    padding: 5,
    backgroundColor: "white",
    borderRadius: borderRadiusValue,
    right: 15,
    bottom: 15,
  },
  users: {
    marginTop: distanceBetween2Element / 2,
    position: "relative",
    width: "100%",
    height: 30,
  },
  owner: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  participants: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
export default PartyResume;
