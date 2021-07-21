import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text
} from "react-native";
import {
  displayDim,
  distanceBetween2Element,
} from "../../helpers/cssValues";
import { useDispatch, useSelector } from "react-redux";

import Login from "./../components/Login";
import React from "react";
import { isLog } from "./../../helpers/functions";

const ProfilPage = ({ navigation }) => {
  const identity = useSelector((state) => state.tokenRedux);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.main}>
      {!isLog(identity) ? (
        <Login navigation={navigation}/>
      ) : (
        <>
          <Text style={{ marginTop: distanceBetween2Element, fontSize: 24 }}>
            Vous etes connecté
          </Text>
          <Pressable
          style={{
            borderRadius: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#7F5DF0",
            width: displayDim.x - 80,
            height: 60,
            marginTop: distanceBetween2Element,
          }}
          onPress={() => (dispatch({type: "reset_jwt", payload: {}}))}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Logout</Text>
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
    backgroundColor: "#fff",
    alignItems: "center",
  }
});

export default ProfilPage;
