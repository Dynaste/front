import * as Location from "expo-location";

import MapView, { Marker } from "react-native-maps";
import {
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  defaultInputSize,
  defaultSizeText,
  defaultTextFontWeight,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "./../../../helpers/cssValues";
import { useDispatch, useSelector } from "react-redux";

import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

const LocationTab = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);
  const newParty = useSelector((state) => state.partyCreationRedux);
  const dispatch = useDispatch();

  const [date, setDate] = React.useState(new Date(1635951730000));
  const [show, setShow] = React.useState(true);

  const [address, setAddress] = React.useState("");
  const [coord, setCoord] = React.useState({
    latitude: 48.52258,
    longitude: 1.693479,
  });

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  React.useEffect(() => {
    dispatch({
      type: "ADD_ADDRESS",
      payload: { address: address },
    });
  }, [address]);

  React.useEffect(() => {
    dispatch({
      type: "ADD_COORD",
      payload: { position: coord },
    });
  }, [coord]);

  React.useEffect(() => {
    console.log(date)
    dispatch({
      type: "ADD_DATE",
      payload: { date: date },
    });
  }, [date]);

  const nextStep = () => {
    dispatch({
      type: "ADD_STEP1",
      payload: { date: date },
    });
    navigation.navigate("Create participants");
  };

  const putMarkerOnMap = async () => {
    if (address) {
      let result = await Location.geocodeAsync(address);
      console.log(result);
      await setCoord({
        latitude: result[0].latitude,
        longitude: result[0].longitude,
      });
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView
          style={[styles.main, { backgroundColor: theme.background }]}
        >
          <View style={styles.subtitleDateContainer}>
            <Text style={[styles.title, { color: theme.fontColor }]}>Date</Text>
            <View style={styles.underline}></View>
          </View>
          <View
            style={[
              styles.dateContainer,
              { backgroundColor: theme.contrastBackground },
            ]}
          >
            <View style={{ width: "65%", color: "#fff" }}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onDateChange}
              />
            </View>
            <View style={{ width: "25%" }}>
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={"time"}
                is24Hour={true}
                display="default"
                onChange={onDateChange}
              />
            </View>
          </View>
          <View style={styles.subtitleLocContainer}>
            <Text style={[styles.title, { color: theme.fontColor }]}>
              Localisation
            </Text>
            <View style={styles.underline}></View>
          </View>
          <TextInput
            style={[
              styles.inputStyle,
              {
                borderRadius: borderRadiusValue,
                color: theme.fontColor,
                padding: 2,
              },
            ]}
            placeholderTextColor={theme.fontColor}
            onChangeText={(text) => setAddress(text)}
            value={address}
            autoFocus={false}
            height={defaultInputSize}
            placeholder={"Ex: 5 rue la fontaine 28320 Gallardon"}
            placeholderTextColor={"#717171"}
          />
          <Pressable
            style={styles.mapTextContainer}
            onPress={() => {
              putMarkerOnMap();
            }}
          >
            <Text
              style={{
                color: theme.blueLink,
                fontSize: defaultSizeText,
                fontWeight: "400",
                textAlign: "center",
              }}
            >
              Voir sur la carte
            </Text>
          </Pressable>
          <MapView
            style={styles.map}
            onPress={(e) => console.log(e.nativeEvent)}
            showsPointsOfInterest={true}
            region={{
              latitude: coord.latitude,
              longitude: coord.longitude,
              latitudeDelta: 5,
              longitudeDelta: 5,
            }}
            minZoomLevel={12}
            maxZoomLevel={20}
          >
            <Marker coordinate={coord} title={"Position de l'évènement"} />
          </MapView>
          {/* <View style={styles.buttonContainer}>
            <Pressable
              style={[
                styles.button,
                {
                  backgroundColor: mainColor,
                },
              ]}
              onPress={() => nextStep()}
            >
              <Text
                style={{
                  color: classicBackground,
                  fontSize: 20,
                  fontWeight: defaultTextFontWeight,
                }}
              >
                Suivant
              </Text>
            </Pressable>
          </View> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    minWidth: displayDim.x,
    height: displayDim.y,
    backgroundColor: classicBackground,
    paddingLeft: distanceBetween2Element / 2,
    paddingRight: distanceBetween2Element / 2,
  },
  titleContainer: {
    marginTop: distanceBetween2Element,
    width: 206,
  },
  subtitleDateContainer: {
    marginTop: distanceBetween2Element,
    width: 47,
  },
  subtitleLocContainer: {
    marginTop: distanceBetween2Element,
    width: 113,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  underline: {
    backgroundColor: mainColor,
    width: "100%",
    height: 2,
    marginTop: 4,
  },
  locationContainer: {
    marginTop: distanceBetween2Element,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: mainColor,
  },
  dateContainer: {
    height: 60,
    width: "95%",
    marginTop: distanceBetween2Element,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  map: {
    marginTop: distanceBetween2Element,
    width: displayDim.x - 40,
    height: displayDim.y / 4.5,
  },
  button: {
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: distanceBetween2Element,
    padding: 10,
  },
  buttonContainer: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    width: "95%",
    textAlign: "center",
    fontSize: defaultSizeText - 2,
    borderWidth: 2,
    borderColor: mainColor,
    marginTop: distanceBetween2Element,
  },
  mapTextContainer: {
    width: "90%",
    height: 20,
    marginTop: distanceBetween2Element / 2,
  },
});

export default LocationTab;
