import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  defaultInputSize,
  displayDim,
  distanceBetween2Element,
  mainColor,
  shadowColor,
} from "../../helpers/cssValues";

import React from "react";
import TextField from "./TextField";
import { signup } from "../../helpers/api";

const Inscription = ({ navigation, setInscription }) => {
  const [lastname, setLastname] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [pseudo, setPseudo] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const isCompleted = () => {
    if (
      password === password2 &&
      password.length >= 6 &&
      lastname &&
      firstname &&
      email &&
      pseudo &&
      phone
    ) {
      return true;
    } else {
      return false;
    }
  };

  const postInscription = async () => {
    const body = {
      lastname: lastname,
      firstname: firstname,
      email: email.toLowerCase(),
      pseudo: pseudo,
      phone: phone,
      password: password,
      notifications: [],
      profilePicturePath: "",
    };
    const res = await signup(body);
    console.log(res);
  };
  return (
    <>
      <SafeAreaView style={{ backgroundColor: classicBackground }}>
        <ScrollView style={styles.main}>
          <View>
            <Pressable
              onPress={() => setInscription(false)}
              style={styles.backButton}
            >
              <Image
                source={require("./../../assets/left-arrow.png")}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Text style={{ fontSize: 16 }}>Annuler</Text>
            </Pressable>
          </View>
          <View style={styles.loginContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Inscription</Text>
            </View>
            <Text style={styles.label}>Nom de famille</Text>
            <TextField
              value={lastname}
              setValue={setLastname}
              height={defaultInputSize}
              placeholder={"Skywalker"}
            />
            <Text style={styles.label}>Prénom</Text>
            <TextField
              value={firstname}
              setValue={setFirstname}
              height={defaultInputSize}
              placeholder={"Luke"}
            />
            <Text style={styles.label}>Pseudo</Text>
            <TextField
              value={pseudo}
              setValue={setPseudo}
              height={defaultInputSize}
              placeholder={"Mickey"}
            />
            <Text style={styles.label}>Mail</Text>
            <TextField
              value={email}
              setValue={setEmail}
              height={defaultInputSize}
              placeholder={"baby_yoda@gmail.com"}
              type={"email-address"}
              autoComplete={"email"}
            />
            <Text style={styles.label}>Téléphone</Text>
            <TextField
              value={phone}
              setValue={setPhone}
              height={defaultInputSize}
              placeholder={"0623456789"}
              type={"phone-pad"}
            />
            <Text style={styles.label}>Mot de passe</Text>
            <TextField
              value={password}
              setValue={setPassword}
              height={defaultInputSize}
              placeholder={"abc"}
              secureTextEntry={true}
            />
            <Text style={styles.label}>Confirmation</Text>
            <TextField
              value={password2}
              setValue={setPassword2}
              height={defaultInputSize}
              placeholder={"abc"}
              secureTextEntry={true}
            />
            <Pressable
              style={[
                styles.button,
                { backgroundColor: isCompleted() ? mainColor : shadowColor },
              ]}
              onPress={() => postInscription()}
              disabled={isCompleted() ? false : true}
            >
              <Text style={{ color: classicBackground, fontSize: 20 }}>
                Inscription
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: displayDim.x,
    minHeight: displayDim.y,
    backgroundColor: classicBackground,
    padding: distanceBetween2Element / 2,
  },
  backButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    fontSize: 16,
    minHeight: 30,
  },
  icon: {
    width: 25,
    height: 25,
    tintColor: mainColor,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  label: {
    marginTop: distanceBetween2Element / 2,
  },
  underline: {
    backgroundColor: mainColor,
    width: "100%",
    height: 2,
    marginTop: 4,
  },
  loginContainer: {
    width: displayDim.x - 20,
    backgroundColor: classicBackground,
    shadowColor: shadowColor,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    paddingTop: distanceBetween2Element,
    paddingBottom: distanceBetween2Element,
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 10,
    marginTop: distanceBetween2Element,
    borderRadius: borderRadiusValue,
  },
  logInput: {
    height: 40,
    textAlign: "center",
    fontSize: 18,
  },
  button: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: distanceBetween2Element,
  },
});

export default Inscription;
