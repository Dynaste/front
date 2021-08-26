import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  borderRadiusValue,
  defaultSizeText,
  distanceBetween2Element,
  mainColor,
} from "../../../helpers/cssValues";

import React from "react";
import { useSelector } from "react-redux";

const TaskItem = ({ item }) => {
  const theme = useSelector((state) => state.themeRedux);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.contrastBackground,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text
          style={{
            color: theme.fontColor,
            textAlign: "center",
            fontSize: defaultSizeText - 2,
            padding: distanceBetween2Element / 2,
          }}
        >
          {item.content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: distanceBetween2Element / 2,
    borderRadius: borderRadiusValue,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default TaskItem;
