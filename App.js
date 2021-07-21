import { combineReducers, createStore } from "redux";
import { persistReducer, persistStore } from "redux-persist";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorPartyCreation from './src/components/NavigatorPartyCreation';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import React from "react";
import tokenReducer from "./src/reducers/tokenReducer";

export default function App() {

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
};
