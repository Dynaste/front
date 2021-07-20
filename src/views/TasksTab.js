import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    distanceBetween2Element,
    mainColor
} from './../../helpers/cssValues';

import { Dimensions } from "react-native";
import React from "react";

const TasksTab = ({ navigation }) => {
  
    return (
      <SafeAreaView>
        <ScrollView style={styles.main}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Liste de tâches</Text>
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
    },
    titleContainer: {
        marginTop: distanceBetween2Element
    },
    title: {
        fontSize: 20
    },
    underline: {
        backgroundColor: mainColor,
        width: '100%',
        height: 2,
        marginTop: 4
    }
  });
  
  export default TasksTab;