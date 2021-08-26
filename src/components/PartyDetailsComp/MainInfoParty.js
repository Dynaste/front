import 'moment/locale/fr'

import { StyleSheet, Text, View } from "react-native";
import {
  contrastBackground,
  displayDim,
  distanceBetween2Element,
} from "./../../../helpers/cssValues";

import React from "react";
import moment from "moment";
import { searchUser } from "./../../../helpers/api";
import { useSelector } from "react-redux";

const MainInfoParty = ({ party }) => {
  const theme = useSelector((state) => state.themeRedux);
  const [hostName, setHostName] = React.useState();

  const getName = async () => {
    const res = await searchUser(party.hostId);
    console.log(res);
    setHostName(res.data.data[0].username)
  }

  React.useEffect(() => {
    getName();
  }, [party])

  return (
    <View style={styles.mainInfoContainer}>
      <View
        style={[
          styles.ownerContainer,
          { backgroundColor: theme.contrastBackground },
        ]}
      >
        <Text style={{color: theme.fontColor ,textAlign: "center", fontSize: 15, fontWeight: "500"}}>{hostName}</Text>
      </View>
      <View style={styles.mainSeparator}></View>
      <View
        style={[
          styles.dateContainer,
          { backgroundColor: theme.contrastBackground },
        ]}
      >
        <Text style={{color: theme.fontColor ,textAlign: "center", fontSize: 15, fontWeight: "500"}}>
        {moment( party.date).locale("fr").format('DD MMM - HH:MM')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainInfoContainer: {
    marginTop: distanceBetween2Element,
    width: displayDim.x - 40,
    display: "flex",
    flexDirection: "row",
  },
  ownerContainer: {
    height: 60,
    width: "53%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
  },
  mainSeparator: {
    width: "4%",
  },
  dateContainer: {
    height: 60,
    width: "43%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: contrastBackground,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
  },
});

export default MainInfoParty;
