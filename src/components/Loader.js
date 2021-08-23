import { Image, SafeAreaView, StyleSheet, View } from "react-native";
import {
  classicBackground,
  displayDim,
  distanceBetween2Element,
} from "./../../helpers/cssValues";

import React from "react";

const Loader = () => {
  return (
    <>
    <View style={styles.container}>
        <Image source={require("./../../assets/lightLoading.gif")}/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: distanceBetween2Element,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default Loader;
