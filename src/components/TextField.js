import { StyleSheet, TextInput } from "react-native";
import { borderRadiusValue, mainColor } from "../../helpers/cssValues";

import React from "react";

const TextField = ({
  value,
  setValue,
  height,
  placeholder = "",
  type = "default",
  autoFocus = false,
  autoComplete = false,
  secureTextEntry= false
}) => {
  return (
    <>
      <TextInput
        style={[
          styles.logInput,
          {
            borderWidth: 2,
            borderColor: mainColor,
            borderRadius: borderRadiusValue,
            marginBottom: 1,
            height: height ?? 40,
          },
        ]}
        placeholder={placeholder}
        onChangeText={(text) => setValue(text)}
        value={value}
        autoFocus={autoFocus}
        keyboardType={type}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
      />
    </>
  );
};

const styles = StyleSheet.create({
  logInput: {
    textAlign: "center",
    fontSize: 18,
  },
});

export default TextField;
