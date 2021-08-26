import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "../../../helpers/cssValues";

import React from "react";
import { useSelector } from "react-redux";

const ResultModal = ({ closeModal, currentType, result, addItem }) => {
  const theme = useSelector((state) => state.themeRedux);

  const validModal = () => {
    const element = {
      _id: result.data[0]._id,
      username: result.data[0].username,
    };
    addItem(element);
    closeModal();
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.modal,
          {
            backgroundColor: theme.contrastBackground,
          },
        ]}
      >
        {/* <View style={[styles.backButtonContainer]}>
          <Pressable onPress={() => setIsOpen(false)}>
            <Text style={[styles.backButton, { color: theme.fontColor }]}>
              Annuler
            </Text>
          </Pressable>
        </View> */}
        {result?.data && result.data[0] ? (
          <>
          <Text style={[styles.searchTitle, { color: theme.fontColor }]}>Nous avons trouvé</Text>
          <Text style={[styles.searchTitle, { color: theme.fontColor }]}>{result.data[0].username}</Text>
        </>
        ) : (
          <>
            <Text style={[styles.searchTitle, { color: theme.fontColor }]}>Aucun utilisateur trouvé</Text>
            <Text style={[styles.searchTitle, { color: theme.fontColor }]}>{currentType}</Text>
          </>
        )}
        <View style={[styles.buttonContainer]}>
          <View style={styles.buttonC}>
            <Pressable
              onPress={() => closeModal()}
              style={[styles.button, { backgroundColor: "#E94C2E" }]}
            >
              <Text style={styles.textButton}>Annuler</Text>
            </Pressable>
          </View>
          <View style={styles.buttonC}>
            <Pressable
              onPress={() => {
                validModal();
              }}
              style={[styles.button, { backgroundColor: mainColor }]}
            >
              <Text style={styles.textButton}>Ajouter</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: displayDim.x,
    height: displayDim.y,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    top: -200,
    left: -10,
  },
  modal: {
    marginTop: distanceBetween2Element / 2,
    borderRadius: borderRadiusValue,
    display: "flex",
    alignItems: "center",
    width: "90%",
    height: "25%",
    position: "relative",
  },
  searchTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginTop: distanceBetween2Element
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: distanceBetween2Element
  },
  buttonC: {
    width: "45%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadiusValue,
  },
  textButton: {
    fontSize: 18,
    fontWeight: "500",
    padding: 8,
    color: classicBackground,
  },
});

export default ResultModal;
