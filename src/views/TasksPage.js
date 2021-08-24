import { SafeAreaView, ScrollView, StyleSheet, Text, View, CheckBox } from "react-native";
import { displayDim, distanceBetween2Element, mainColor } from "../../helpers/cssValues";

import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

const Task = ({ task }) => {
  const [isChecked, setIsChecked] = useState(task?.isCompleted);

  return (
    <View>
      <Text>{ task?.text }</Text>
      <CheckBox value={isChecked} onValueChange={setIsChecked} />
    </View>
  );
}

const TasksPage = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);
  const tasks = useSelector(state => state);

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log('Hello')
    console.log({tasks})
  }, [])

  useEffect(() => {
    
  }, [])

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView
          style={[styles.main, { backgroundColor: theme.background }]}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: theme.fontColor }]}>
              Ma liste de tâches
            </Text>
            <View style={styles.underline}></View>
          </View>

          {/* {
            tasks.length === 0 && (
              <Text>Aucune tâche en cours</Text>
            )
          }

          {
            tasks.length > 0 && tasks.map((id, task) => (
              <Task key={id} task={task} />
            ))
          } */}

        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: displayDim.x,
    flexDirection: "row",
    height: displayDim.y,
  },
  titleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 168,
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
});

export default TasksPage;
