import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  classicBackground,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "./../../helpers/cssValues";

import ParticipantsTab from "./../components/PartyDetailsComp/ParticipantsTab";
import React from "react";
import ResumeTab from "./../components/PartyDetailsComp/ResumeTab";
import TasksTab from "./../components/PartyDetailsComp/TasksTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSelector } from "react-redux";

const PartyDetails = ({ route, navigation }) => {
  const { party } = route.params;
  const Tab = createMaterialTopTabNavigator();
  const theme = useSelector((state) => state.themeRedux);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <View style={[styles.main, { backgroundColor: theme.background }]}>
          <View>
            <Pressable
              onPress={() => navigation.navigate("PartyPage")}
              style={styles.backButton}
            >
              <Image
                source={require("./../../assets/left-arrow.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.fontColor,
                }}
              />
              <Text style={{ fontSize: 16, color: theme.fontColor }}>Back</Text>
            </Pressable>
          </View>
          <Tab.Navigator
            initialRouteName="Feed"
            tabBarOptions={{
              activeTintColor: mainColor,
              style: {
                backgroundColor: theme.background,
                margin: distanceBetween2Element / 2,
              },
              indicatorStyle: { backgroundColor: mainColor },
              iconStyle: { color: mainColor },
              showLabel: false,
              showIcon: true,
            }}
          >
            <Tab.Screen
              name="Resume"
              component={ResumeTab}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/list.png")}
                    resizeMode="contain"
                    style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Participants"
              component={ParticipantsTab}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/group.png")}
                    resizeMode="contain"
                    style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Tasks list"
              component={TasksTab}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/archive.png")}
                    resizeMode="contain"
                    style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
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
    padding: distanceBetween2Element / 2,
  },
  backButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    fontSize: 16,
    minHeight: 30,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: mainColor,
  },
  header: {
    margin: distanceBetween2Element,
  },
});

export default PartyDetails;
