import MapView, { Marker } from "react-native-maps";
import { Pressable, StyleSheet, Text, View } from "react-native";
import {
  contrastBackground,
  displayDim,
  distanceBetween2Element,
  mainColor
} from "../../../helpers/cssValues";

import React from "react";

const BottomInfoParty = ({navigation, party}) => {
  return (
    <View style={styles.container}>
      {/* <Pressable style={styles.infoContainer} onPress={() => navigation.navigate("Participants")}>
        <View>
          <Text>
            Invité{party.guestsList.length > 1 && "s"}: 
          </Text>
          <Text>
            {party.guestsList.length}
          </Text>
        </View>
      </Pressable>
      <Pressable style={styles.infoContainer} onPress={() => navigation.navigate("Tasks list")}></Pressable> */}
      <MapView
            style={styles.map}
            showsPointsOfInterest={true}
            region={{
              latitude: +party.location.x,
              longitude: +party.location.y,
              latitudeDelta: 5,
              longitudeDelta: 5,
            }}
            minZoomLevel={12}
            maxZoomLevel={20}
          >
            <Marker
              coordinate={{
                latitude: +party.location.x,
                longitude: +party.location.y,
              }}
              title={"Position de l'évènement"}
            />
          </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: distanceBetween2Element,
    width: displayDim.x - 40,
    display: "flex",
  },
  infoContainer: {
    height: 75,
    width: "100%",
    backgroundColor: contrastBackground,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: distanceBetween2Element
  },
  map: {
    marginTop: distanceBetween2Element,
    width: displayDim.x - 40,
    height: displayDim.y / 4.5,
  },
});

export default BottomInfoParty;
