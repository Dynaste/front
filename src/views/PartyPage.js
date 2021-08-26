import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { displayDim, distanceBetween2Element, mainColor } from "../../helpers/cssValues";
import { useSelector, useDispatch } from "react-redux";
import { getAllParties } from "../../helpers/api";
import { filterParties } from "../../helpers/functions";

import PartyResume from "../components/PartyResume";
import React from "react";

const PartyPage = ({ navigation }) => {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.themeRedux);
  const token = useSelector(state => state.tokenRedux.jwt);
  const parties = useSelector(state => state.partiesRedux);
  const [previousParty, setPreviousParty] = React.useState(null);
  const [nextParty, setNextParty] = React.useState(null);

  const init = async () => {
    const res = await getAllParties(token);
    const filteredParties = filterParties(res.data);
    dispatch({type: 'ADD_PARTY', payload: {parties: {...filteredParties}} })
  }

  React.useEffect(() => {
    if (token) {
      (async () => {
        await init();
      })();

      if (parties && parties.length > 0) {

        const dataPrevious = getNearParty(parties.previous, 'previous');
        const dataIncoming = getNearParty(parties.incoming, 'incoming');

        console.log({dataPrevious})
        console.log({dataIncoming})

        dataPrevious && setPreviousParty({...data});
        dataIncoming && setNextParty({...data});
      }
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
              party={{...nextParty}} />
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={[styles.title, {color: theme.fontColor}]}>Mes anciens évènements</Text>
            <View style={styles.underline}></View>
          </View>
          <View style={styles.centered}>
            <PartyResume
              navigation={navigation} 
              party={{...previousParty}} />
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
    width: 235,
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
    justifyContent: "center",
    minHeight: displayDim.y-600
  },
  blankContent: {
    height: displayDim.y-525,
  }
});

export default PartyPage;
