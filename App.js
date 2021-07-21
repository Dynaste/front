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
import NavigatorPartyCreation from './src/components/NavigatorPartyCreation';
import NotificationPage from "./src/views/NotificationPage";
import PartyCreationPage from "./src/views/PartyCreationPage";
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
          <NavigatorPartyCreation/>
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
    tintColor: mainColor,
  },
});
