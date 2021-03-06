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
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "./../../../helpers/cssValues";
import { useDispatch, useSelector } from "react-redux";

import DateTimePicker from "@react-native-community/datetimepicker";
import React from "react";

const LocationTab = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);
  const partyDate = useSelector((state) => state.partyCreationRedux.date);
  const partyAddress = useSelector(
    (state) => state.partyCreationRedux.location.address
  );
  const partyCoordX = useSelector(
    (state) => state.partyCreationRedux.location.x
  );
  const partyCoordY = useSelector(
    (state) => state.partyCreationRedux.location.y
  );
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
    dispatch({
      type: "ADD_DATE",
      payload: { date: currentDate },
    });
  };

  const putMarkerOnMap = async () => {
    if (partyAddress) {
      let result = await Location.geocodeAsync(partyAddress);
      dispatch({
        type: "ADD_COORD",
        payload: {
          position: {
            latitude: result[0].latitude,
            longitude: result[0].longitude
          },
        },
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
                value={partyDate}
                mode={"date"}
                is24Hour={true}
                display="default"
                onChange={onDateChange}
              />
            </View>
            <View style={{ width: "25%" }}>
              <DateTimePicker
                testID="dateTimePicker"
                value={partyDate}
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
            onChangeText={(text) =>
              dispatch({
                type: "ADD_ADDRESS",
                payload: { address: text },
              })
            }
            value={partyAddress}
            autoFocus={false}
            height={defaultInputSize}
            autoCorrect={false}
            placeholder={"Ex: 5 rue la fontaine Gallardon"}
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
            showsPointsOfInterest={true}
            region={{
              latitude: +partyCoordX,
              longitude: +partyCoordY,
              latitudeDelta: 5,
              longitudeDelta: 5,
            }}
            minZoomLevel={12}
            maxZoomLevel={20}
          >
            <Marker
              coordinate={{
                latitude: +partyCoordX,
                longitude: +partyCoordY,
              }}
              title={"Position de l'??v??nement"}
            />
          </MapView>
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
