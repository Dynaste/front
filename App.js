import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorApp from './src/components/NavigatorApp';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import themeReducer from "./src/reducers/themeReducer";
import tokenReducer from "./src/reducers/tokenReducer";

export default function App() {

  const tokenPersistConfig = {
    key: "root",
    storage: AsyncStorage,
  };

  const themePersistConfig = {
    key: "root2",
    storage: AsyncStorage,
  };
  const persistedToken = persistReducer(tokenPersistConfig, tokenReducer);
  const persistedTheme = persistReducer(themePersistConfig, themeReducer)

  const rootReducer = combineReducers({
    tokenRedux: persistedToken,
    themeRedux: persistedTheme
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
