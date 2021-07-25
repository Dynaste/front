import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "../../helpers/cssValues";

import Inscription from "./Inscription"
import React from "react";
import { login } from "../../helpers/api";
import { useDispatch } from "react-redux";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [inscription, setInscription] = React.useState(false);
  const dispatch = useDispatch();

  const postLogin = async () => {
    const body = {
      email: email.toLowerCase(),
      password: pwd,
    };
    const res = await login(body);
    if (res.data.code === 202) {
      dispatch({
        type: "add_jwt",
        payload: { jwt: res.data.token, date: Date.now() },
      });

      navigation.navigate("Home");
    }
  };

  return (
    <>
      {!inscription && (
        <>
          <View style={styles.loginContainer}>
            <Text style={styles.title}>LOGIN</Text>
            <TextInput
              style={[
                styles.logInput,
                {
                  borderWidth: 2,
                  borderColor: mainColor,
                  borderTopRightRadius: borderRadiusValue,
                  marginBottom: 1,
                },
              ]}
              placeholder="Identifiant"
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoFocus={false}
              autoComplete="email"
              keyboardType="email-address"
            />
            <TextInput
              style={[
                styles.logInput,
                {
                  borderWidth: 2,
                  borderColor: mainColor,
                  borderBottomLeftRadius: borderRadiusValue,
                },
              ]}
              placeholder="Mot de passe"
              onChangeText={(text) => setPwd(text)}
              value={pwd}
              secureTextEntry={true}
              autoCorrect={false}
            />
            <Text style={styles.forgotPasswordTxt}>
              J'ai oublié mon mot de passe
            </Text>
            <Pressable style={styles.loginButton} onPress={() => postLogin()}>
              <Text style={{ color: classicBackground, fontSize: 20 }}>
                Connexion
              </Text>
            </Pressable>
          </View>
          <Text style={{ marginTop: distanceBetween2Element, fontSize: 24 }}>
            OU
          </Text>
          <Pressable
            style={styles.loginButton}
            onPress={() => setInscription(true)}
          >
            <Text style={{ color: classicBackground, fontSize: 20 }}>
              J'ai pas encore de compte
            </Text>
          </Pressable>
        </>
      )}
      {
        inscription &&
        <>
          <Inscription navigation={navigation} setInscription={setInscription}/>
        </>
      }
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: distanceBetween2Element,
  },
  logInput: {
    height: 60,
    width: "100%",
    textAlign: "center",
    fontSize: 20,
  },
  inputContainer: {
    width: displayDim.x,
    height: displayDim.y,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: displayDim.x - 40,
    backgroundColor: "white",
    shadowColor: "#b0b0b0",
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
    marginTop: 75,
    borderRadius: borderRadiusValue,
  },
  forgotPasswordTxt: {
    textDecorationLine: "underline",
    color: "#0a5894",
    marginTop: distanceBetween2Element,
  },
  loginButton: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColor,
    width: displayDim.x - 80,
    height: 60,
    marginTop: distanceBetween2Element,
  },
});

export default Login;
