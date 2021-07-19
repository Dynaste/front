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

import { MaterialIcons } from "@expo/vector-icons";
import Page1 from "./Page1";
import Page2 from "./Page2";
import React from "react";
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
            <Text>Back</Text>
          </Pressable>
          {/* <Text>infoTest: {JSON.stringify(testId)}</Text> HERE it's the way to display a props directly in the route parameter */}
        </View>
        <Tab.Navigator
          initialRouteName="Feed"
          tabBarOptions={{
            activeTintColor: mainColor,
            style: { backgroundColor: classicBackground },
            indicatorStyle: { backgroundColor: mainColor },
            iconStyle: { color: mainColor },
            showLabel: false,
            showIcon: true,
          }}
        >
          <Tab.Screen
            name="Résumé"
            component={Page1}
            options={{
              tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/calendar.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: mainColor,
                      opacity: focused ? 1 : 0.75,
                    }}
                  />
              ),
            }}
          />
          <Tab.Screen
            name="Participants"
            component={Page2}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./../../assets/calendar.png")}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                    tintColor: mainColor,
                    opacity: focused ? 1 : 0.75,
                  }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Liste de tâches"
            component={Page2}
            options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/calendar.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: mainColor,
                      opacity: focused ? 1 : 0.75,
                    }}
                  />
                ),
              }}
          />
          <Tab.Screen
            name="Liste de course"
            component={Page2}
            options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/calendar.png")}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: mainColor,
                      opacity: focused ? 1 : 0.75,
                    }}
                  />
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
  },
  backButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    marginTop: distanceBetween2Element,
  },
});

export default PartyDetails;
