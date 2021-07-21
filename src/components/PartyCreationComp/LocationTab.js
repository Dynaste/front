import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
} from "react-native";
import {
    classicBackground,
    displayDim,
    distanceBetween2Element,
    mainColor,
} from './../../../helpers/cssValues';

import React from "react";

const LocationTab = ({ navigation }) => {
    return (
      <>
        <SafeAreaView style={{backgroundColor: classicBackground}}>
          <ScrollView style={styles.main}>
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
  });
  
  export default LocationTab;
  