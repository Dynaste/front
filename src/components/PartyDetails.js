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
} from "../../helpers/cssValues";

import GroceryTab from "./../views/GroceryTab";
import ParticipantsTab from "./../views/ParticipantsTab";
import React from "react";
import ResumeTab from "./../views/ResumeTab";
import TasksTab from "./../views/TasksTab";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const PartyDetails = ({ route, navigation }) => {
  //   const { testId } = route.params;
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView>
      <View style={styles.main}>
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
                //   tintColor: "#fff", HERE you can change color of the icon
              }}
            />
            <Text style={{fontSize: 16}}>Back</Text>
          </Pressable>
          {/* <Text>infoTest: {JSON.stringify(testId)}</Text> HERE it's the way to display a props directly in the route parameter */}
        </View>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: mainColor,
            style: { backgroundColor: classicBackground,
            margin: distanceBetween2Element/2},
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
                    style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
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
                  style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
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
                    style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
                ),
              }}
          />
          <Tab.Screen
            name="Grocery list"
            component={GroceryTab}
            options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/grocery.png")}
                    resizeMode="contain"
                    style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
                ),
              }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: displayDim.x,
    height: displayDim.y,
    backgroundColor: classicBackground,
    padding: distanceBetween2Element/2
  },
  backButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: distanceBetween2Element,
    fontSize: 16
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: mainColor
  },
  header: {
      margin: distanceBetween2Element
  }
});

export default PartyDetails;
