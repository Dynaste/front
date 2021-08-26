import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  defaultInputSize,
  defaultSizeText,
  defaultTextFontWeight,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "./../../../helpers/cssValues";

import GuestItem from "./GuestItem";
import React from "react";
import { useSelector } from "react-redux";

const ParticipantsTab = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);
  const party = useSelector((state) => state.currentPartyRedux);

  return (
    <SafeAreaView>
      <View style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.fontColor }]}>
            Participants
          </Text>
          <View style={styles.underline}></View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingTop: distanceBetween2Element / 2,
            maxWidth: displayDim.x - 40,
            maxHeight: displayDim.y / 2.3,
          }}
        >
          {party.current.guestsList &&
            party.current.guestsList.map((item, key) => (
              <View key={key}>
                <GuestItem item={item}/>
              </View>
            ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    minWidth: displayDim.x,
    minHeight: displayDim.y,
    paddingLeft: distanceBetween2Element / 2,
    paddingRight: distanceBetween2Element / 2,
    marginBottom: distanceBetween2Element * 2,
  },
  titleContainer: {
    marginTop: distanceBetween2Element,
    width: 115,
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
  inputStyle: {
    width: "70%",
    textAlign: "center",
    fontSize: defaultSizeText - 2,
    borderWidth: 2,
    borderColor: mainColor,
  },
  buttonContainer: {
    width: displayDim.x - 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: distanceBetween2Element / 3,
  },
  button: {
    width: "25%",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    height: defaultInputSize - 2,
  },
  label: {
    marginTop: distanceBetween2Element,
    fontSize: 16,
  },
});

export default ParticipantsTab;
