import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { ValidateEmail, isPasswordStrong } from "../../helpers/functions";
import {
  borderRadiusValue,
  classicBackground,
  defaultInputSize,
  defaultSizeText,
  displayDim,
  distanceBetween2Element,
  mainColor,
  shadowColor,
} from "../../helpers/cssValues";
import { login, signup } from "../../helpers/api";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import { isLoaded } from "expo-font";

const Inscription = ({ navigation, setInscription }) => {
  const dispatch = useDispatch();
  const [stepper, setStepper] = React.useState(0);

  const theme = useSelector((state) => state.themeRedux);

  const [lastname, setLastname] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const [errorMsg, setErrorMsg] = React.useState(null);
  // const [successMsg, setSuccessMsg] = React.useState(null);
  const [timer, setTimer] = React.useState(5);

  const isCompleted = (step) => {
    if (step === 0) {
      if (
        lastname.length >= 2 &&
        firstname.length >= 2 &&
        ValidateEmail(email) &&
        phone.length === 10
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (step === 1) {
      if (username.length >= 2) {
        return true;
      } else {
        return false;
      }
    }
    if (step === 2) {
      if (password === password2 && isPasswordStrong(password)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const postInscription = async () => {
    const body = {
      lastname: lastname,
      firstname: firstname,
      email: email.toLowerCase(),
      username: username,
      phone: phone,
      password: password,
      profilePicturePath: "...",
      role: "user",
    };
    const res = await signup(body);
    console.log(res);

    if (res.status !== 201) {
      setErrorMsg(res.data.message);
      setTimer(5);
    } else {
      const bodyLogin = {
        email: email.toLowerCase(),
        password: password,
      };
      const res = await login(bodyLogin);
      if (res.data.statusCode === 202) {
        dispatch({
          type: "add_jwt",
          payload: { jwt: res.data.data.token, date: Date.now() },
        });

        navigation.navigate("Home");
      }
    }
  };

  React.useEffect(() => {
    if (errorMsg) {
      setTimeout(() => {
        setErrorMsg(null);
      }, 5000);
    }
  }, [errorMsg]);

  React.useEffect(() => {
    timer > 0 && setTimeout(() => setTimer(timer - 1), 1000);
  }, [timer]);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView
          style={[styles.main, { backgroundColor: theme.background }]}
        >
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
                  tintColor: theme.fontColor,
                }}
              />
              <Text style={{ fontSize: 16, color: theme.fontColor }}>
                Annuler
              </Text>
            </Pressable>
          </View>
          <View
            style={[
              styles.loginContainer,
              {
                backgroundColor: theme.background,
                shadowColor: theme.shadowColor,
              },
            ]}
          >
            {stepper !== 0 && (
              <View>
                <Pressable
                  onPress={() => setStepper(stepper - 1)}
                  style={styles.previousButton}
                >
                  <Image
                    source={require("./../../assets/left-arrow.png")}
                    resizeMode="contain"
                    style={{
                      width: 18,
                      height: 18,
                      tintColor: theme.fontColor
                    }}
                  />
                  <Text style={{ fontSize: 14, color: theme.fontColor }}>Etape précedente</Text>
                </Pressable>
              </View>
            )}

            <View style={styles.titleContainer}>
              <Text style={[styles.title, {color: theme.fontColor}]}>Inscription</Text>
            </View>
            {stepper === 0 && (
              <>
                <Text style={[styles.label, {color: theme.fontColor}]}>Nom de famille</Text>
                <TextInput
                placeholderTextColor={"#717171"}
                  style={[
                    styles.inputStyle,
                    {
                      borderTopRightRadius: borderRadiusValue,
                      color: theme.fontColor
                    },
                  ]}
                  onChangeText={(text) => setLastname(text)}
                  value={lastname}
                  autoFocus={false}
                  height={defaultInputSize}
                  placeholder={"Skywalker"}
                />
                <Text style={[styles.label, {color: theme.fontColor}]}>Prénom</Text>
                <TextInput
                placeholderTextColor={"#717171"}
                  style={[styles.inputStyle, {color: theme.fontColor}]}
                  onChangeText={(text) => setFirstname(text)}
                  value={firstname}
                  autoFocus={false}
                  height={defaultInputSize}
                  placeholder={"Luke"}
                />
                <Text style={[styles.label, {color: theme.fontColor}]}>Mail</Text>
                <TextInput
                placeholderTextColor={"#717171"}
                  style={[styles.inputStyle, {color: theme.fontColor}]}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  autoFocus={false}
                  autoComplete="email"
                  keyboardType="email-address"
                  height={defaultInputSize}
                  placeholder={"baby_yoda@gmail.com"}
                  type={"email-address"}
                  autoComplete={"email"}
                />
                <Text style={[styles.label, {color: theme.fontColor}]}>Téléphone</Text>
                <TextInput
                placeholderTextColor={"#717171"}
                  style={[
                    styles.inputStyle,
                    {
                      borderBottomLeftRadius: borderRadiusValue,
                      color: theme.fontColor
                    },
                  ]}
                  onChangeText={(text) => setPhone(text)}
                  value={phone}
                  autoFocus={false}
                  autoComplete="tel"
                  keyboardType="phone-pad"
                  height={defaultInputSize}
                  placeholder={"0623456789"}
                />
              </>
            )}

            {stepper === 1 && (
              <>
                <Text style={[styles.label, {color: theme.fontColor}]}>Pseudo</Text>
                <TextInput
                placeholderTextColor={"#717171"}
                  style={[
                    styles.inputStyle,
                    {
                      borderTopRightRadius: borderRadiusValue,
                      color: theme.fontColor
                    },
                  ]}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                  autoFocus={false}
                  height={defaultInputSize}
                  placeholder={"Mickey"}
                  autoCorrect={false}
                />
              </>
            )}

            {stepper === 2 && (
              <>
                <Text style={[styles.label, {color: theme.fontColor}]}>Mot de passe</Text>
                <Text style={{ marginBottom: 5, color: theme.fontColor }}>
                  (8 caractères minimum, 1 majuscule, 1 chiffre)
                </Text>
                <TextInput
                placeholderTextColor={"#717171"}
                  style={[
                    styles.inputStyle,
                    {
                      borderWidth: 2,
                      borderColor: mainColor,
                      borderTopRightRadius: borderRadiusValue,
                      color: theme.fontColor
                    },
                  ]}
                  placeholder="not qwerty"
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  height={defaultInputSize}
                  secureTextEntry={true}
                  autoCorrect={false}
                />
                <Text style={[styles.label, {color: theme.fontColor}]}>Confirmation</Text>
                <TextInput
                placeholderTextColor={"#717171"}
                  style={[
                    styles.inputStyle,
                    {
                      borderWidth: 2,
                      borderColor: mainColor,
                      borderBottomLeftRadius: borderRadiusValue,
                      color: theme.fontColor
                    },
                  ]}
                  placeholder="not qwerty"
                  onChangeText={(text) => setPassword2(text)}
                  value={password2}
                  height={defaultInputSize}
                  secureTextEntry={true}
                  autoCorrect={false}
                />
              </>
            )}
            {stepper !== 2 && (
              <Pressable
                style={[
                  styles.button,
                  {
                    backgroundColor: isCompleted(stepper)
                      ? mainColor
                      : theme.shadowColor,
                  },
                ]}
                onPress={() => setStepper(stepper + 1)}
                disabled={isCompleted(stepper) ? false : true}
              >
                <Text style={{ color: classicBackground, fontSize: 20 }}>
                  Suivant
                </Text>
              </Pressable>
            )}

            {stepper === 2 && (
              <Pressable
                style={[
                  styles.button,
                  {
                    backgroundColor: isCompleted(stepper)
                      ? mainColor
                      : theme.shadowColor,
                  },
                ]}
                onPress={() => postInscription()}
                disabled={isCompleted(stepper) ? false : true}
              >
                <Text style={{ color: classicBackground, fontSize: 20 }}>
                  Inscription
                </Text>
              </Pressable>
            )}
          </View>
          {errorMsg && (
            <View style={styles.popupContainer}>
              <View
                style={[
                  styles.popup,
                  {
                    backgroundColor: theme.contrastBackground,
                    borderWidth: 2,
                    borderColor: "#E94C2E",
                  },
                ]}
              >
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  Error({timer})
                </Text>
                <Text style={{ fontSize: 18, textAlign: "center" }}>
                  {errorMsg}
                </Text>
              </View>
            </View>
          )}
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
  previousButton: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    fontSize: 14,
    minHeight: 24,
    marginBottom: 20,
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
    fontSize: 16,
  },
  underline: {
    backgroundColor: mainColor,
    width: "100%",
    height: 2,
    marginTop: 4,
  },
  loginContainer: {
    width: displayDim.x - 20,
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
  button: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginTop: distanceBetween2Element,
  },
  inputStyle: {
    width: "100%",
    textAlign: "center",
    fontSize: defaultSizeText,
    borderWidth: 2,
    borderColor: mainColor,
  },
  popup: {
    fontSize: 26,
    borderRadius: borderRadiusValue,
    width: "98%",
    padding: 10,
  },
  popupContainer: {
    width: displayDim.x - 20,
    height: displayDim.y,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    elevation: 5,
  },
});

export default Inscription;
