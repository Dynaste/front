import {
    Pressable,
    StyleSheet,
    Text
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import React from 'react';
import {createParty} from "./../../../helpers/api";

const ValidateButton = ({navigation}) => {

    const newParty = useSelector((state) => state.partyCreationRedux);
    const theme = useSelector((state) => state.themeRedux);
    const identity = useSelector((state) => state.tokenRedux);
    const dispatch = useDispatch();


    const postNewParty = async() => {
        console.log(newParty);
        console.log(identity.jwt);
        alert("Evénement créé")
        await createParty(identity.jwt, newParty);
        dispatch({
          type: "RESET_PARTY_CREATION",
          payload: {}
        })
        navigation.navigate("Home");
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