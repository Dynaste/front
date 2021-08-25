import {
    Pressable,
    StyleSheet,
    Text
} from "react-native";

import React from 'react';
import {createParty} from "./../../../helpers/api";
import { useSelector } from "react-redux";

const ValidateButton = () => {

    const newParty = useSelector((state) => state.partyCreationRedux);
    const theme = useSelector((state) => state.themeRedux);
    const identity = useSelector((state) => state.tokenRedux);


    const postNewParty = async() => {
        console.log(newParty);
        console.log(identity.jwt);
        const response = await createParty(identity.jwt, newParty);
        console.log(response)
    }
    
    return (
        <Pressable
              onPress={() => {
                postNewParty()
              }}
              style={[styles.backButton, { justifyContent: "flex-end" }]}
            >
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: theme.fontColor,
                }}
              >
                Valider
              </Text>
            </Pressable>
    );
};

const styles = StyleSheet.create({
    backButton: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      flexDirection: "row",
      width: "50%",
      minHeight: 30,
    }
  });

export default ValidateButton;