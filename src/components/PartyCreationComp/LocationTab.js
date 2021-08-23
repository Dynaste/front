import {
  Button,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  classicBackground,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "./../../../helpers/cssValues";

import DateTimePicker from "@react-native-community/datetimepicker";
import MapView from 'react-native-maps';
import React from "react";
import { useSelector } from "react-redux";

const LocationTab = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);

  const [date, setDate] = React.useState(new Date(1635951730000));
  const [show, setShow] = React.useState(true);

  const onDateChange = (event, selectedDate) => {
    console.log(selectedDate)
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView
          style={[styles.main, { backgroundColor: theme.background }]}
        >
          <View style={styles.subtitleDateContainer}>
            <Text style={[styles.title, { color: theme.fontColor }]}>Date</Text>
            <View style={styles.underline}></View>
          </View>
          <View
            style={[
              styles.dateContainer,
              { backgroundColor: theme.contrastBackground },
            ]}
          >
            <View style={{ width: "65%", color: "#fff"}}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              is24Hour={true}
              display="default"
              onChange={onDateChange}
            />
          </View>
          <View style={{ width: "25%"}}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={true}
              display="default"
              onChange={onDateChange}
            />
          </View>
          </View>
          <View style={styles.subtitleLocContainer}>
            <Text style={[styles.title, { color: theme.fontColor }]}>
              Localisation
            </Text>
            <View style={styles.underline}></View>
          </View>

          <MapView style={styles.map} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    minWidth: displayDim.x,
    height: displayDim.y,
    backgroundColor: classicBackground,
    paddingLeft: distanceBetween2Element / 2,
    paddingRight: distanceBetween2Element / 2,
  },
  titleContainer: {
    marginTop: distanceBetween2Element,
    width: 206,
  },
  subtitleDateContainer: {
    marginTop: distanceBetween2Element,
    width: 47,
  },
  subtitleLocContainer: {
    marginTop: distanceBetween2Element,
    width: 113,
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
  locationContainer: {
    marginTop: distanceBetween2Element,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: mainColor,
  },
  dateContainer: {
    height: 60,
    width: "95%",
    marginTop: distanceBetween2Element,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  map: {
    width: displayDim.x,
    height: displayDim.y
  },
});

export default LocationTab;
