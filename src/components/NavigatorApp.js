import { Image, StyleSheet, View } from "react-native";
import {
  classicBackground,
  contrastBackground,
  mainColor,
} from "../../helpers/cssValues";

import CalendarPage from "../views/CalendarPage";
import HomePage from "../views/HomePage";
import TasksPage from "../views/TasksPage";
import PartyCreationPage from "../views/PartyCreationPage";
import ProfilPage from "../views/ProfilPage";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { isLog } from "../../helpers/functions";
import { useSelector } from "react-redux";

export default function NavigatorApp() {
  const Tab = createBottomTabNavigator();
  const identity = useSelector((state) => state.tokenRedux);
  const theme = useSelector((state) => state.themeRedux);

  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: "absolute",
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: theme.contrastBackground,
          borderRadius: 15,
          border: "none",
          height: 70,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require("./../../assets/home.png")}
                resizeMode="contain"
                style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Calendar"
        component={CalendarPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require("./../../assets/calendar.png")}
                resizeMode="contain"
                style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
              />
            </View>
          ),
        }}
      />
      {isLog(identity) && (
        <Tab.Screen
          name="Create"
          component={PartyCreationPage}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  position: "relative",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={[
                    styles.shadow,
                    {
                      top: -20,
                      backgroundColor: mainColor,
                      borderRadius: "50%",
                      padding: 10,
                    },
                  ]}
                >
                  <Image
                    source={require("./../../assets/plus.png")}
                    resizeMode="contain"
                    style={{
                      width: 40,
                      height: 40,
                      tintColor: classicBackground,
                    }}
                  />
                </View>
              </View>
            ),
          }}
        />
      )}

      <Tab.Screen
        name="Tasks"
        component={TasksPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require("./../../assets/archive.png")}
                resizeMode="contain"
                style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={ProfilPage}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={styles.iconContainer}>
              <Image
                source={require("./../../assets/profile-user.png")}
                resizeMode="contain"
                style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: mainColor,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  iconContainer: {
    top: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: mainColor,
  },
});
