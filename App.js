import { Image, StyleSheet, View } from "react-native";
import {
  classicBackground,
  contrastBackground,
  mainColor,
} from "./helpers/cssValues";
import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import CalendarPage from "./src/views/CalendarPage";
import HomePage from "./src/views/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import NotificationPage from "./src/views/NotificationPage";
import { PersistGate } from "redux-persist/integration/react";
import ProfilPage from "./src/views/ProfilPage";
import { Provider } from "react-redux";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import tokenReducer from "./src/reducers/tokenReducer";

export default function App() {
  const Tab = createBottomTabNavigator();

  const tokenPersistConfig = {
    key: "root",
    storage: AsyncStorage,
  };
  const persistedToken = persistReducer(tokenPersistConfig, tokenReducer);

  const rootReducer = combineReducers({
    tokenRedux: persistedToken,
  });

  const store = createStore(rootReducer);
  const persistor = persistStore(store);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Tab.Navigator
            tabBarOptions={{
              showLabel: false,
              style: {
                position: "absolute",
                bottom: 25,
                left: 20,
                right: 20,
                elevation: 0,
                backgroundColor: contrastBackground,
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
                      source={require("./assets/home.png")}
                      resizeMode="contain"
                      style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
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
                      source={require("./assets/calendar.png")}
                      resizeMode="contain"
                      style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Create"
              component={HomePage}
              options={{
                tabBarIcon: ({ focused }) => (
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
                        source={require("./assets/plus.png")}
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
            <Tab.Screen
              name="Notifications"
              component={NotificationPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("./assets/archive.png")}
                      resizeMode="contain"
                      style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Party"
              component={ProfilPage}
              options={{
                tabBarIcon: ({ focused }) => (
                  <View style={styles.iconContainer}>
                    <Image
                      source={require("./assets/profile-user.png")}
                      resizeMode="contain"
                      style={[styles.icon, {opacity: focused ? 1 : 0.75}]}/>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: classicBackground,
    alignItems: "center",
    justifyContent: "center",
  },
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
    tintColor: mainColor
  },
});
