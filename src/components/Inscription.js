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

import React from "react";
import { signup } from "../../helpers/api";

const Inscription = ({ navigation, setInscription }) => {
  const [stepper, setStepper] = React.useState(0);

  const [lastname, setLastname] = React.useState("");
  const [firstname, setFirstname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");

  const isCompleted = (step) => {
    if (step === 0) {
      if (lastname.length >= 2 && firstname.length >= 2 && ValidateEmail(email) && phone.length === 10) {
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
                    }}
                  />
                  <Text style={{ fontSize: 14 }}>Etape précedente</Text>
                </Pressable>
              </View>
            )}

            <View style={styles.titleContainer}>
              <Text style={styles.title}>Inscription</Text>
            </View>
            {stepper === 0 && (
              <>
                <Text style={styles.label}>Nom de famille</Text>
                <TextInput
                  style={[
                    styles.inputStyle,
                    {
                      borderTopRightRadius: borderRadiusValue,
                    },
                  ]}
                  onChangeText={(text) => setLastname(text)}
                  value={lastname}
                  autoFocus={false}
                  height={defaultInputSize}
                  placeholder={"Skywalker"}
                />
                <Text style={styles.label}>Prénom</Text>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(text) => setFirstname(text)}
                  value={firstname}
                  autoFocus={false}
                  height={defaultInputSize}
                  placeholder={"Luke"}
                />
                <Text style={styles.label}>Mail</Text>
                <TextInput
                  style={styles.inputStyle}
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
                <Text style={styles.label}>Téléphone</Text>
                <TextInput
                  style={[
                    styles.inputStyle,
                    {
                      borderBottomLeftRadius: borderRadiusValue,
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
                <Text style={styles.label}>Pseudo</Text>
                <TextInput
                  style={[
                    styles.inputStyle,
                    {
                      borderTopRightRadius: borderRadiusValue,
                    },
                  ]}
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                  autoFocus={false}
                  height={defaultInputSize}
                  placeholder={"Mickey"}
                />
              </>
            )}

            {stepper === 2 && (
              <>
                <Text style={styles.label}>Mot de passe</Text>
                <Text style={{marginBottom: 5}}>(8 caractères minimum, 1 majuscule, 1 chiffre)</Text>
                <TextInput
                  style={[
                    styles.inputStyle,
                    {
                      borderWidth: 2,
                      borderColor: mainColor,
                      borderTopRightRadius: borderRadiusValue,
                    },
                  ]}
                  placeholder="not qwerty"
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                  height={defaultInputSize}
                  secureTextEntry={true}
                  autoCorrect={false}
                />
                <Text style={styles.label}>Confirmation</Text>
                <TextInput
                  style={[
                    styles.inputStyle,
                    {
                      borderWidth: 2,
                      borderColor: mainColor,
                      borderBottomLeftRadius: borderRadiusValue,
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
                      : shadowColor,
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
                      : shadowColor,
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
});

export default Inscription;
