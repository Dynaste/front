import { Image, StyleSheet, Text, View } from 'react-native';

import CalendarPage from "./src/views/CalendarPage";
import HomePage from "./src/views/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import NotificationPage from "./src/views/NotificationPage";
import PartyPage from "./src/views/PartyPage";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  // const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: '#ededed',
            borderRadius: 15,
            border: 'none',
            height: 80
          }
        }}>
        <Tab.Screen name="Home" component={HomePage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('./assets/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#478c94'
                }} />
              <Text>
                Home
                </Text>
            </View>
          )
        }} />
        <Tab.Screen name="Calendar" component={CalendarPage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('./assets/calendar.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#478c94'
                }} />
              <Text>
                Calendar
                </Text>
            </View>
          )
        }} />
        <Tab.Screen name="Create" component={HomePage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', top: -30, justifyContent: 'center', height: 60, width: 60 * 2, borderBottomLeftRadius: 60 * 2, borderBottomRightRadius: 60 * 2, backgroundColor: '#fff' }}>
              <View style={{ alignItems: 'center', justifyContent: 'center', top: -15, backgroundColor: '#478c94', borderRadius: '50%', padding: 10 }}>
                <Image
                  source={require('./assets/plus.png')}
                  resizeMode='contain'
                  style={{
                    width: 40,
                    height: 40,
                    tintColor: '#fff'
                  }} />
              </View>
            </View>
          )
        }} />
        <Tab.Screen name="Notifications" component={NotificationPage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('./assets/archive.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#478c94'
                }} />
              <Text>
                Todos
                </Text>
            </View>
          )
        }} />
        <Tab.Screen name="Party" component={PartyPage} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image
                source={require('./assets/profile-user.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#e32f45' : '#478c94'
                }} />
              <Text>
                Settings
                </Text>
            </View>
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});
