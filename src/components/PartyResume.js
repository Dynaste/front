import 'moment/locale/fr'

import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  displayDim,
  distanceBetween2Element,
} from "../../helpers/cssValues";
import { useDispatch, useSelector } from "react-redux";

import React from "react";
import moment from "moment";
import { searchUser } from "./../../helpers/api";

const PartyResume = ({ navigation, party }) => {
  const theme = useSelector((state) => state.themeRedux);
  const token = useSelector((state) => state.tokenRedux.jwt);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(token)
  }, []);

  const [ownerName, setOwnerName] = React.useState();

  const getName = async () => {
    const res = await searchUser(party.hostId);
    setOwnerName(res.data.data[0].username)
  }

  React.useEffect(() => {
    if(party?.hostId){
      getName();
    }
    
  }, [party])

  const redirectToDetails = () => {
    dispatch({
      type: "SET_CURRENT_PARTY",
      payload: {current: party}
    })
    
    navigation.navigate("PartyDetails", { party: party })
  }

  return (
    <>
      {
        !party?.name && (
          <View style={styles.blankContent}>
            <Text style={{color: theme.fontColor, fontSize: 18, fontWeight: "500"}}>Nous n'avons rien trouvé</Text>
          </View>
        )
      }
      {
        party?.name && (
          <Pressable
            style={[
              styles.container,
              {
                backgroundColor: theme.darkMode
                  ? theme.contrastBackground
                  : classicBackground,
                shadowColor: theme.shadowColor,
              },
            ]}
            onPress={() =>
              redirectToDetails()
            }>

            <View style={styles.pictureContainer}>
              <Image
                source={require("./../../assets/partyPictureDefault.jpeg")}
                resizeMode="contain"
                style={styles.image} />

              <View style={styles.date}>
                <Text>{moment().locale("fr").format('DD MMMM', party?.date)}</Text>
              </View>
            </View>
            <View style={styles.users}>
              <View style={styles.owner}>
                <Text style={{ color: theme.fontColor, fontWeight: "500", fontSize: 16 }}>{ownerName}</Text>
              </View>
              <View style={styles.participants}>
                <Text style={{ color: theme.fontColor, fontWeight: "500", fontSize: 16 }}>{party?.guestsList?.length} Invité{party?.guestsList?.length > 1 && "s"}</Text>
              </View>
            </View>
            <Text style={[styles.title, { color: theme.fontColor }]}>{party?.name}</Text>
          </Pressable>
        )
      }
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
    elevation: 10,
    marginTop: 15,
    padding: distanceBetween2Element / 2,
    borderRadius: borderRadiusValue,
  },
  pictureContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: displayDim.y / 4.5,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: borderRadiusValue,
  },
  date: {
    position: "absolute",
    padding: 5,
    backgroundColor: "white",
    borderRadius: borderRadiusValue,
    left: 15,
    bottom: 15,
  },
  progression: {
    position: "absolute",
    padding: 5,
    backgroundColor: "white",
    borderRadius: borderRadiusValue,
    right: 15,
    bottom: 15,
  },
  users: {
    marginTop: distanceBetween2Element / 2,
    position: "relative",
    width: "100%",
    height: 30,
  },
  owner: {
    position: "absolute",
    left: 5,
    top: 5,
  },
  participants: {
    position: "absolute",
    right: 5,
    top: 5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
export default PartyResume;
