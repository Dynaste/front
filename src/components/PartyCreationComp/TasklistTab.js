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

import { Dimensions } from "react-native";
import React from "react";
import TaskItem from "./TaskItem";
import { useSelector } from "react-redux";

const TasklistTab = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);

  const [currentType, setCurrentType] = React.useState("");
  const [taskList, setTaskList] = React.useState([]);

  const addItem = () => {
    setTaskList([
      ...taskList,
      {
        task: currentType,
      },
    ]);
  };

  return (
    <SafeAreaView>
      <ScrollView style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.fontColor }]}>
            Liste de tâches
          </Text>
          <View style={styles.underline}></View>
        </View>
        <View style={styles.buttonContainer}>
          <TextInput
            style={[
              styles.inputStyle,
              {
                borderRadius: borderRadiusValue,
                color: theme.fontColor,
                padding: 2,
              },
            ]}
            placeholderTextColor={theme.fontColor}
            onChangeText={(text) => setCurrentType(text)}
            value={currentType}
            autoFocus={false}
            height={defaultInputSize}
            placeholder={"Ex: Ramener des chips"}
            placeholderTextColor={"#717171"}
          />
          <Pressable
            style={[
              styles.button,
              {
                backgroundColor: mainColor,
              },
            ]}
            onPress={() => {
              addItem();
            }}
          >
            <Text
              style={{
                color: classicBackground,
                fontSize: 16,
                fontWeight: defaultTextFontWeight,
              }}
            >
              Ajouter
            </Text>
          </Pressable>
        </View>
        <View>
          {taskList &&
            taskList.map((item, key) => 
            <View key={key}>
                <TaskItem item={item} />
            </View>
            )}
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
    paddingLeft: distanceBetween2Element / 2,
    paddingRight: distanceBetween2Element / 2,
  },
  titleContainer: {
    marginTop: distanceBetween2Element,
    width: 141,
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
    marginTop: distanceBetween2Element,
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
});

export default TasklistTab;
