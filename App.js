import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorApp from './src/components/NavigatorApp';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import partyCreationStore from "./src/reducers/partyCreationReducer";
import themeReducer from "./src/reducers/themeReducer";
import tokenReducer from "./src/reducers/tokenReducer";
import taskReducer from "./src/reducers/taskReducer";
import partyReducer from "./src/reducers/partyReducer";

export default function App() {

  const tokenPersistConfig = {
    key: "root",
    storage: AsyncStorage,
  };

  const themePersistConfig = {
    key: "root2",
    storage: AsyncStorage,
  };

  const taskPersistConfig = {
    key: "root3",
    storage: AsyncStorage
  }

  const partiesPersisConfig = {
    key: "root4",
    storage: AsyncStorage
  } 

  const persistedToken = persistReducer(tokenPersistConfig, tokenReducer);
  const persistedTheme = persistReducer(themePersistConfig, themeReducer);
  const persistedTasks = persistReducer(taskPersistConfig, taskReducer);
  const persistedParties = persistReducer(partiesPersisConfig, partyReducer);

  const rootReducer = combineReducers({
    tokenRedux: persistedToken,
    themeRedux: persistedTheme,
    partyCreationRedux: partyCreationStore,
    taskRedux: persistedTasks,
    partiesRedux: persistedParties
  });

  const store = createStore(rootReducer);
  const persistor = persistStore(store);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NavigatorApp/>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};
