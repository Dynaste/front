import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  borderRadiusValue,
  defaultSizeText,
  distanceBetween2Element,
  mainColor,
} from "../../../helpers/cssValues";

import React from "react";
import { useSelector } from "react-redux";

const TaskItem = ({ item, position, deleteItem }) => {
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
      <Pressable
        style={styles.trashContainer}
        onPress={() => {
          deleteItem(position);
        }}
      >
        <View style={styles.trashContainer}>
          <Image
            style={styles.image}
            source={
              theme.darkMode
                ? require("./../../../assets/outline_delete_white_24dp.png")
                : require("./../../../assets/outline_delete_black_24dp.png")
            }
          />
        </View>
      </Pressable>
      <View style={styles.textContainer}>
        <Text
          style={{
            color: theme.fontColor,
            textAlign: "center",
            fontSize: defaultSizeText - 2,
            padding: distanceBetween2Element / 2,
          }}
        >
          {item.task}
        </Text>
      </View>
      <View style={styles.userContainer}>
        <Image
          style={styles.image}
          source={
            theme.darkMode
              ? require("./../../../assets/outline_person_add_white_24dp.png")
              : require("./../../../assets/outline_person_add_black_24dp.png")
          }
        />
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
  image: {
    height: 26,
    width: 26,
  },
  trashContainer: {
    width: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#E94C2E",
    height: "100%",
    borderBottomLeftRadius: borderRadiusValue,
    borderTopLeftRadius: borderRadiusValue,
  },
  textContainer: {
    width: "78%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  userContainer: {
    width: "12%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: mainColor,
    height: "100%",
    borderBottomRightRadius: borderRadiusValue,
    borderTopRightRadius: borderRadiusValue,
  },
});

export default TaskItem;
