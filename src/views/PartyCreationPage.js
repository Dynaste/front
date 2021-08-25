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
import { useDispatch, useSelector } from "react-redux";

import EventTitle from "../components/PartyCreationComp/EventTitle";
import GuestTab from "../components/PartyCreationComp/GuestTab";
import LocationTab from "../components/PartyCreationComp/LocationTab";
import React from "react";
import TasklistTab from "../components/PartyCreationComp/TasklistTab";
import ValidateButton from "../components/PartyCreationComp/ValidateButton";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const PartyCreationPage = ({ route, navigation }) => {
  //   const { testId } = route.params;
  const Tab = createMaterialTopTabNavigator();
  const theme = useSelector((state) => state.themeRedux);

  const dispatch = useDispatch();



  const backToHome = () => {
    dispatch({
      type: "RESET_PARTY_CREATION",
      payload: {}
    })
    navigation.navigate("Home");
  };

  return (
    <>
      <SafeAreaView
        style={{ backgroundColor: theme.background }}
      >
        <View style={[styles.main, { backgroundColor: theme.background }]}>
          <View style={styles.header}>
            <Pressable onPress={() => backToHome()} style={styles.backButton}>
              <Image
                source={require("./../../assets/left-arrow.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                  tintColor: theme.fontColor,
                }}
              />
              <Text style={{ fontSize: 16, color: theme.fontColor }}>
                Annuler
              </Text>
            </Pressable>
            <ValidateButton navigation={navigation} />
          </View>
          <View style={styles.titleContainer}>
            <EventTitle />
          </View>
          <Tab.Navigator
            initialRouteName="Create location"
            tabBarOptions={{
              activeTintColor: mainColor,
              style: {
                backgroundColor: theme.background,
                marginLeft: distanceBetween2Element / 2,
                marginRight: distanceBetween2Element / 2,
                marginTop: distanceBetween2Element,
              },
              indicatorStyle: { backgroundColor: mainColor },
              iconStyle: { color: mainColor },
              showLabel: false,
              showIcon: true,
            }}
          >
            <Tab.Screen
              name="Create location"
              component={LocationTab}
              options={{
                tabBarIcon: ({ focused }) => (
                  <Image
                    source={require("./../../assets/pin.png")}
                    resizeMode="contain"
                    style={[styles.icon, { opacity: focused ? 1 : 0.75 }]}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="Create participants"
              component={GuestTab}
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
              name="Create tasks list"
              component={TasklistTab}
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
    backgroundColor: classicBackground,
    padding: distanceBetween2Element / 2,
  },
  backButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "50%",
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
  titleContainer: {
    marginTop: distanceBetween2Element,
    marginLeft: distanceBetween2Element / 2,
    width: 206,
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
  header: {
    width: "98%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  
});

export default PartyCreationPage;
