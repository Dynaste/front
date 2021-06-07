import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
} from "react-native";

import React, { useEffect, useState } from "react";

import { Dimensions } from "react-native";

const ProfilPage = ({ navigation }) => {
  const [logs, setLogs] = useState({
    id: "",
    pwd: "",
  });

  const [id, setId] = useState("")

  return (
    <SafeAreaView>
      <ScrollView style={styles.main}>
        <View>
          <Text>I AM ProfilPage</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => setId(text)}
            value={id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexWrap: "nowrap",
    minWidth: Dimensions.get("window").width,
    flexDirection: "row",
    height: Dimensions.get("window").height,
    backgroundColor: "#fff",
  },
});

export default ProfilPage;
