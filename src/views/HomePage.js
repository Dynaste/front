import PartyDetails from "../components/PartyDetails";
import PartyPage from "./PartyPage";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const HomePage = ({ navigation }) => {
  const Stack = createStackNavigator();
  const [details, setDetails] = React.useState(null);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="PartyPage" component={PartyPage} />
      <Stack.Screen name="PartyDetails" component={PartyDetails} />
    </Stack.Navigator>
  );
};

export default HomePage;
