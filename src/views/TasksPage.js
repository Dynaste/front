import { CheckBox, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import React, {useEffect, useState} from "react";
import { displayDim, distanceBetween2Element, mainColor } from "../../helpers/cssValues";

import { useSelector } from "react-redux";

const TaskList = () => {
  // const parties = useSelector(state => state.partiesRedux);
  const [taskList, setTaskList] = React.useState([]);
  const theme = useSelector((state) => state.themeRedux);

  const generateList = (list = []) => {
    let result = [];

    return (
      <View style={[styles.centered, styles.blankContent]}>
        {
          result.length > 0 && result.map((task, id) => (
            <Task key={id} task={task} />
          ))
        }
        {
          result.length === 0 && (
            <Text style={{color: theme.fontColor, fontWeight: "500", fontSize: 18}}>Vous n'avez pas de tâche en cours</Text>
          )
        }
      </View>
    )
  }

  React.useEffect(() => {

  }, [])

  return (
    <>
      {
        generateList()
      }
    </>
  )
}

const Task = ({ task }) => {
  const [taskDetail, setTask] = useState(task);
  const theme = useSelector((state) => state.themeRedux);

  return (
    <View style={[styles2.card, {backgroundColor: theme.contrastBackground}]}>
      <Text style={{color: theme.fontColor}}>{ taskDetail?.content }</Text>
      <CheckBox value={true}
        style={styles2.checkbox} />
    </View>
  );
}

const styles2 = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: distanceBetween2Element/2,
    marginTop: distanceBetween2Element/4,
    marginBottom: distanceBetween2Element/4,
    borderRadius: 10
  },
  checkbox: {
    alignSelf: 'center'
  }
});


const data = [
  { content: 'Test task', assignedId: 'zezerzerzrzerze', isCompleted: false },
  { content: 'Test task', assignedId: 'zerzerzerezrzerzr', isCompleted: true },
  { content: 'Test task', assignedId: 'zerzerezrzerzer', isCompleted: false },
  { content: 'Test task', assignedId: 'zerezrzerzrezzerze', isCompleted: true },
]

const TasksPage = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);
  const tasks = useSelector(state => state);

  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log('Hello')
    console.log({tasks})
  }, [])

  useEffect(() => {
    setTaskList(data);
  }, [])

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView style={[styles.main, { backgroundColor: theme.background }]}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, { color: theme.fontColor }]}>
              Ma liste de tâches
            </Text>
            <View style={styles.underline}></View>
          </View>
          <View style={[styles.centered, styles.blankContent]}>
            <TaskList />
          </View>
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
    height: displayDim.y,
    paddingLeft: distanceBetween2Element/2,
    paddingRight: distanceBetween2Element/2,
  },
  titleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 235,
  },
  subtitleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 220,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  underline: {
    backgroundColor: mainColor,
    width: 165,
    height: 2,
    marginTop: 4,
  },
  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: distanceBetween2Element,
    paddingLeft: distanceBetween2Element/2,
    paddingRight: distanceBetween2Element/2,
  },
  blankContent: {
    height: displayDim.y-200,
  }
});

export default TasksPage;
