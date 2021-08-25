import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import {
  defaultTextFontWeight,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "../../helpers/cssValues";
import { useDispatch, useSelector } from "react-redux";

import Login from "./../components/Login";
import React from "react";
import { getLoggedInUser } from "../../helpers/api";
import { isLog } from "./../../helpers/functions";

const ProfilPage = ({ navigation }) => {
  const identity = useSelector((state) => state.tokenRedux);
  const theme = useSelector((state) => state.themeRedux);
  const dispatch = useDispatch();
  const [userDetail, setUser] = React.useState({});

  const init = async (token) => {
    const user = await getLoggedInUser(token);
    setUser(user.data);
    console.log({ user });
  };

  React.useEffect(() => {
    console.log(identity);

    if (identity.jwt !== "") {
      init(identity.jwt);
    }
  }, [identity]);

  return (
    <SafeAreaView style={[styles.main, { backgroundColor: theme.background }]}>
      {!isLog(identity) ? (
        <Login navigation={navigation} />
      ) : (
        <>
          <Text
            style={{
              marginTop: distanceBetween2Element,
              fontSize: 24,
              color: theme.fontColor,
            }}
          >
            Vous êtes connecté
          </Text>
          <Text
            style={{
              marginTop: distanceBetween2Element,
              fontSize: 20,
              color: theme.fontColor,
            }}
          >
            {userDetail.username}
          </Text>
          {/* <Text
            style={{
              marginTop: distanceBetween2Element,
              fontSize: 20,
              color: theme.fontColor,
            }}
          >
            Nom: {userDetail.lastname}
          </Text>
          <Text
            style={{
              marginTop: distanceBetween2Element,
              fontSize: 20,
              color: theme.fontColor,
            }}
          >
            Prénom: {userDetail.firstname}
          </Text> */}
          <View style={styles.toggleContainer}>
            <Text style={[styles.label, { color: theme.fontColor }]}>
              Thème sombre :
            </Text>
            <Switch
              trackColor={{ false: "#767577", true: mainColor }}
              thumbColor={theme.darkMode ? "#3e3e3e" : "#f4f3f4"}
              ios_backgroundColor="#767577"
              onValueChange={() =>
                dispatch({
                  type: "SET_THEME",
                  payload: { theme: !theme.darkMode },
                })
              }
              value={theme.darkMode}
            />
          </View>
          <Pressable
            style={{
              borderRadius: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: mainColor,
              width: displayDim.x - 80,
              height: 60,
              marginTop: distanceBetween2Element,
            }}
            onPress={() => dispatch({ type: "reset_jwt", payload: {} })}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: defaultTextFontWeight,
              }}
            >
              Logout
            </Text>
          </Pressable>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: displayDim.x,
    height: displayDim.y,
    alignItems: "center",
    // justifyContent: "center"
  },
  toggleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: distanceBetween2Element,
  },
  label: {
    marginRight: distanceBetween2Element,
    fontWeight: defaultTextFontWeight,
  },
});

export default ProfilPage;
