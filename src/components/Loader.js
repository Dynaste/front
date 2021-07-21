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
    <SafeAreaView style={{backgroundColor: classicBackground}}>
    <View style={styles.container}>
        <Image source={require("./../../assets/lightLoading.gif")}/>
    </View>
    </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: distanceBetween2Element,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: classicBackground
  }
});

export default Loader;
