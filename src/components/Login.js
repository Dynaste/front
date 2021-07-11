import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import {
  borderRadiusValue,
  displayDim,
  distanceBetween2Element,
} from "../../helpers/cssValues";

import React from "react";
import { login } from "../../helpers/api";
import { useDispatch } from "react-redux";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const dispatch = useDispatch();

  const postLogin = async () => {
    const body = {
      email: email.toLowerCase(),
      password: pwd,
    };
    const res = await login(body);

    console.log(res);
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
      <View style={styles.loginContainer}>
        <Text
          style={{
            fontSize: 24,
            textAlign: "center",
            marginBottom: distanceBetween2Element,
          }}
        >
          LOGIN
        </Text>
        <TextInput
          style={[
            styles.logInput,
            {
              borderWidth: 2,
              borderColor: "#7F5DF0",
              borderTopRightRadius: borderRadiusValue,
              marginBottom: 1,
            },
          ]}
          placeholder="Identifiant"
          onChangeText={(text) => setEmail(text)}
          value={email}
          autoFocus={true}
          autoComplete="email"
          keyboardType="email-address"
        />
        <TextInput
          style={[
            styles.logInput,
            {
              borderWidth: 2,
              borderColor: "#7F5DF0",
              borderBottomLeftRadius: borderRadiusValue,
            },
          ]}
          placeholder="Mot de passe"
          onChangeText={(text) => setPwd(text)}
          value={pwd}
          secureTextEntry={true}
          autoCorrect={false}
        />
        <Text
          style={{
            textDecorationLine: "underline",
            color: "#0a5894",
            marginTop: distanceBetween2Element,
          }}
        >
          J'ai oublié mon mot de passe
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
          onPress={() => postLogin()}
        >
          <Text style={{ color: "#fff", fontSize: 20 }}>Connexion</Text>
        </Pressable>
      </View>
      <Text style={{ marginTop: distanceBetween2Element, fontSize: 24 }}>
        OU
      </Text>
      <Pressable
        style={{
          borderRadius: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#7F5DF0",
          width: displayDim.x - 40,
          height: 60,
          marginTop: distanceBetween2Element,
        }}
        onPress={() => console.log("Need to redirect into new account")}
      >
        <Text style={{ color: "#fff", fontSize: 20 }}>
          J'ai pas encore de compte
        </Text>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: "red",
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
});

export default Login;
