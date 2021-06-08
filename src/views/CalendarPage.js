import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import { Dimensions } from "react-native";
import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { isLog } from "./../../helpers/functions";

const CalendarPage = ({ navigation }) => {
  const identity = useSelector((state) => state.tokenRedux);
  const dispatch = useDispatch();

  const logged = isLog(identity);

  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View>
          <Text>I am CalendarPage</Text>
          {logged && <Text>Logged</Text>}
          <Button
            onPress={() => (dispatch({type: "reset_jwt", payload: {}}))}
            title="Reset jwt"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: Dimensions.get("window").width,
    flexDirection: "row",
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
});

export default CalendarPage;
