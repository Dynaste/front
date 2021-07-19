import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
    displayDim,
    distanceBetween2Element,
} from "../../helpers/cssValues";

import Page1 from "./Page1";
import Page2 from "./Page2";
import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const PartyDetails = ({ route, navigation }) => {
//   const { testId } = route.params;
  const Tab = createMaterialTopTabNavigator();

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View >
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
        activeTintColor: '#e91e63',
        labelStyle: { fontSize: 12 },
        style: { backgroundColor: '#fff' },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Page1}
        options={{ tabBarLabel: 'Home' }}
      />
      <Tab.Screen
        name="Notifications"
        component={Page2}
        options={{ tabBarLabel: 'Updates' }}
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
    backgroundColor: "#fff",
  },
  backButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: '100%',
    marginTop: distanceBetween2Element
  },
});

export default PartyDetails;
