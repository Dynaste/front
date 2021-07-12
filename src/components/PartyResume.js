import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  borderRadiusValue,
  displayDim,
  distanceBetween2Element,
} from "../../helpers/cssValues";

import React from "react";

const PartyResume = ({navigation}) => {
  return (
    <Pressable style={styles.container} onPress={() => navigation.navigate("PartyDetails", {testId: 'HELLO WORLD'})}>
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
          <Text>Creator</Text>
        </View>
        <View style={styles.participants}>
          <Text>Participants</Text>
        </View>
      </View>
      <Text style={styles.title}>Party name</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: displayDim.x - 40,
    marginLeft: 20,
    backgroundColor: "white",
    shadowColor: "#b0b0b0",
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
    marginTop: distanceBetween2Element/2,
    position: "relative",
    width: "100%",
    height: 30,
  },
  owner: {
    position: "absolute",
    left: 5,
    top: 5
  },
  participants: {
    position: "absolute",
    right: 5,
    top: 5
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
export default PartyResume;
