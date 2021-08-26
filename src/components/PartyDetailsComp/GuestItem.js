import { StyleSheet, Text, View } from "react-native";
import {
  borderRadiusValue,
  defaultSizeText,
  distanceBetween2Element,
} from "../../../helpers/cssValues";

import React from "react";
import { searchUser } from "./../../../helpers/api";
import { useSelector } from "react-redux";

const GuestItem = ({item}) => {
  const theme = useSelector((state) => state.themeRedux);

  const [participantName, setParticipantName] = React.useState();

  const getName = async () => {
    const res = await searchUser(item);
    console.log(res);
    setParticipantName(res.data.data[0].username)
  }

  React.useEffect(() => {
    getName();
  }, [item])
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: theme.contrastBackground,
        },
      ]}
    >
      <View style={styles.textContainer}>
        <Text
          style={{
            color: theme.fontColor,
            textAlign: "center",
            fontSize: defaultSizeText - 2,
            padding: distanceBetween2Element / 2,
          }}
        >
          {participantName}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: distanceBetween2Element / 2,
    borderRadius: borderRadiusValue,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default GuestItem;
