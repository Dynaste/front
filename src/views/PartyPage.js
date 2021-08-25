import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { displayDim, distanceBetween2Element, mainColor } from "../../helpers/cssValues";
import { useSelector } from "react-redux";
import { getAllParties } from "../../helpers/api";

import PartyResume from "../components/PartyResume";
import React from "react";

const PartyPage = ({ navigation }) => {
  const theme = useSelector((state) => state.themeRedux);
  const token = useSelector(state => state.tokenRedux.jwt);
  const [parties, setParties] = React.useState([]);

  const init = async () => {
    const data = await getAllParties(token);
    setParties(data.data);
  }

  React.useEffect(() => {
    if (token) {
      init();
    }
  }, [token])

  return (
    <>
      <SafeAreaView style={{ backgroundColor: theme.background }}>
        <ScrollView style={[styles.main, { backgroundColor: theme.background }]}>
          <View style={styles.titleContainer}>
            <Text style={[styles.title, {color: theme.fontColor}]}>Mon prochain évènement</Text>
            <View style={styles.underline}></View>
          </View>
          <View style={styles.centered}>
            <PartyResume 
              navigation={navigation} 
              informations={{date: 'Jeudi 11 Mai 2021', host: 'KARCZINSKI Quentin', participants: [], name: 'Crémaillère'}} />
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={[styles.title, {color: theme.fontColor}]}>Mes futurs évènements</Text>
            <View style={styles.underline}></View>
          </View>
          {
              parties.length === 0 && (
                <View style={[styles.centered, styles.blankContent]}>
                  <Text style={{color: theme.fontColor, fontSize: 15}}>Vous n'avez aucune soirée prévue</Text>
                </View>
              )
            }

            {
              parties.length > 0 && parties.map((party, id) => (
                <PartyResume key={id}
                  navigation={navigation} 
                  informations={{date: '', host: '', participants: [], name: ''}} />
              ))
            }
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
    height: displayDim.y,
    paddingLeft: distanceBetween2Element/2,
    paddingRight: distanceBetween2Element/2,
  },
  titleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 235,
  },
  subtitleContainer: {
    marginLeft: distanceBetween2Element/2,
    marginTop: distanceBetween2Element,
    width: 220,
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
  centered: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  blankContent: {
    height: "100%",
  }
});

export default PartyPage;
