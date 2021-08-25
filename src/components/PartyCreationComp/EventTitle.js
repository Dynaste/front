import { StyleSheet, TextInput } from "react-native";
import {
  borderRadiusValue,
  defaultInputSize,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "./../../../helpers/cssValues";
import { useDispatch, useSelector } from "react-redux";

import React from "react";

const EventTitle = () => {
  const theme = useSelector((state) => state.themeRedux);
  const partyName = useSelector((state) => state.partyCreationRedux.name);
  const dispatch = useDispatch();

  return (
    <>
      <TextInput
        style={[
          styles.inputName,
          {
            color: theme.fontColor,
            backgroundColor: theme.contrastBackground,
          },
        ]}
        placeholderTextColor={theme.fontColor}
        onChangeText={(text) => {
          dispatch({
              type: "ADD_NAME",
              payload: {name: text}
          })
        }}
        value={partyName}
        autoFocus={false}
        height={defaultInputSize}
        placeholder={"Nom de l'évènement"}
        placeholderTextColor={"#717171"}
        autoCorrect={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  inputName: {
    padding: 2,
    fontSize: 20,
    width: displayDim.x - 40,
    borderRadius: borderRadiusValue,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default EventTitle;
