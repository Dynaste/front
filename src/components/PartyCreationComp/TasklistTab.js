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
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import TaskItem from "./TaskItem";

const TasklistTab = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeRedux);

  const partyTasks = useSelector((state) => state.partyCreationRedux.tasksList);

  const [currentType, setCurrentType] = React.useState("");

  const addItem = () => {
    let newArr = [...partyTasks];
    newArr.push({content: currentType});
    dispatch({
      type: "ADD_TASKLIST",
      payload: { tasksList: newArr },
    });
    setCurrentType("");
  };

  const deleteItem = (index) => {
    let newArr = [...partyTasks];
    if (index === 0) {
      newArr.shift();
      dispatch({
        type: "ADD_TASKLIST",
        payload: { tasksList: newArr },
      });
    } else {
      newArr.splice(index, index);
      dispatch({
        type: "ADD_TASKLIST",
        payload: { tasksList: newArr },
      });
    }
  };
  return (
    <SafeAreaView>
      <View style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.fontColor }]}>
            Liste des tâches
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
            autoCorrect={false}
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
            disabled={currentType ? false : true}
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingTop: distanceBetween2Element / 2,
            maxWidth: displayDim.x - 40,
            maxHeight: displayDim.y / 2.3,
          }}
        >
          {partyTasks &&
            partyTasks.map((item, key) => (
              <View key={key}>
                <TaskItem item={item} position={key} deleteItem={deleteItem} />
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
    width: 153,
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
