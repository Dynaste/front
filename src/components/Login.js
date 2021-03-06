import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "../../helpers/cssValues";
import { useDispatch, useSelector } from "react-redux";

import Inscription from "./Inscription";
import React from "react";
import { login } from "../../helpers/api";

const Login = ({ navigation }) => {

  const theme = useSelector((state) => state.themeRedux);

  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [inscription, setInscription] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [timer, setTimer] = React.useState(5);
  const dispatch = useDispatch();


  const postLogin = async () => {
    const body = {
      email: email.toLowerCase(),
      password: pwd,
    };
    const res = await login(body);
    console.log(res)
    if (res.data.statusCode === 202) {
      dispatch({
        type: "add_jwt",
        payload: { jwt: res.data.data.token, date: Date.now() },
      });

      navigation.navigate("Home");
    }
    if (res.status !== 202) {
      setErrorMsg(res.data.message);
      setTimer(5);
    }
  }

  React.useEffect(()=>{
    if(errorMsg){
      setTimeout(()=>{setErrorMsg(null)}, 5000);
    }
  }, [errorMsg])

  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <>
      {!inscription && (
        <>
          <View style={[styles.loginContainer, {backgroundColor: theme.background, shadowColor: theme.shadowColor}]}>
            <Text style={[styles.title, {color: theme.fontColor}]}>LOGIN</Text>
            <TextInput
              style={[
                styles.logInput,
                {
                  borderWidth: 2,
                  borderColor: mainColor,
                  borderTopRightRadius: borderRadiusValue,
                  marginBottom: 1,
                  color: theme.fontColor
                },
              ]}
              placeholder="email"
              placeholderTextColor={theme.fontColor}
              onChangeText={(text) => setEmail(text)}
              value={email}
              autoFocus={false}
              autoCorrect={false}
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
                  color: theme.fontColor
                },
              ]}
              placeholder="mot de passe"
              placeholderTextColor={theme.fontColor}
              onChangeText={(text) => setPwd(text)}
              value={pwd}
              secureTextEntry={true}
              autoCorrect={false}
            />
            <Text style={[styles.forgotPasswordTxt, { color: theme.blueLink}]}>
              J'ai oubli?? mon mot de passe
            </Text>
            <Pressable
              style={styles.loginButton}
              onPress={() => postLogin()}
              disabled={pwd && email ? false : true}
            >
              <Text style={{ color: classicBackground, fontSize: 20 }}>
                Connexion
              </Text>
            </Pressable>
          </View>
          <Text style={{ marginTop: distanceBetween2Element, fontSize: 24, color: theme.fontColor }}>
            OU
          </Text>
          <Pressable
            style={styles.inscriptionButton}
            onPress={() => setInscription(true)}
          >
            <Text style={{ color: classicBackground, fontSize: 20 }}>
              Je n'ai pas encore de compte
            </Text>
          </Pressable>

          {errorMsg && (
            <View style={styles.popupContainer}>
              <View style={[styles.popup, {backgroundColor: theme.contrastBackground, borderWidth: 2, borderColor: "#E94C2E"}]}>
                <Text style={{fontSize: 18, textAlign: "center", color: theme.fontColor}}>Error({timer})</Text>
                <Text style={{fontSize: 18, textAlign: "center", color: theme.fontColor}}>{errorMsg}</Text>
              </View>
            </View>
          )}
        </>
      )}
      {inscription && (
        <>
          <Inscription
            navigation={navigation}
            setInscription={setInscription}
          />
        </>
      )}
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
    height: 50,
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
    marginTop: distanceBetween2Element,
  },
  loginButton: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColor,
    height: 50,
    marginTop: distanceBetween2Element,
    padding: distanceBetween2Element / 2,
  },
  inscriptionButton: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: mainColor,
    width: displayDim.x - 80,
    height: 50,
    marginTop: distanceBetween2Element,
  },
  popup: {
    fontSize: 26,
    borderRadius: borderRadiusValue,
    width: "98%",
    padding: 10,
    marginTop: distanceBetween2Element*2
  },
  popupContainer: {
    width: displayDim.x -20,
    height: displayDim.y,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    elevation: 5
  }
});

export default Login;
