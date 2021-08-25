import {
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

import GuestItem from "./GuestItem";
import React from "react";
import ResultModal from "./ResultModal";
import { searchUser } from "../../../helpers/api";

const GuestTab = ({ navigation }) => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeRedux);
  const newParty = useSelector((state) => state.partyCreationRedux);

  const [currentType, setCurrentType] = React.useState("");
  const [guestList, setGuestList] = React.useState([]);
  const [result, setResult] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);

  const addItem = (element) => {
    console.log(element);
    setGuestList([...guestList, element]);
    setCurrentType("");
  };

  const searchItem = async () => {
    const res = await searchUser(encodeURIComponent(currentType.toLowerCase()));
    console.log(res);
    setResult(res.data);
    setIsOpen(true);
  };

  React.useEffect(() => {
    if (guestList.length > 0) {
      let newArr = [];
      guestList.map((item) => {
        return newArr.push(item._id);
      });
      dispatch({
        type: "ADD_GUESTLIST",
        payload: { guestsList: newArr },
      });
    } else {
      dispatch({
        type: "ADD_GUESTLIST",
        payload: { guestsList: [] },
      });
    }
  }, [guestList]);

  const deleteItem = (index) => {
    let newArr = [...guestList];
    if (index === 0) {
      newArr.shift();
      setGuestList(newArr);
    } else {
      newArr.splice(index, index);
      setGuestList(newArr);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
    setCurrentType("");
  };
  return (
    <SafeAreaView>
      <View style={[styles.main, { backgroundColor: theme.background }]}>
        <View style={styles.titleContainer}>
          <Text style={[styles.title, { color: theme.fontColor }]}>
            Participants
          </Text>
          <View style={styles.underline}></View>
        </View>
        <Text style={[styles.label, { color: theme.fontColor }]}>
          Pseudo, email ou téléphone
        </Text>
        <View style={styles.buttonContainer}>
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
            onChangeText={(text) => setCurrentType(text)}
            value={currentType}
            autoFocus={false}
            autoCorrect={false}
            height={defaultInputSize}
            placeholder={"Ex: Dynaste#000001"}
            placeholderTextColor={"#717171"}
          />
          <Pressable
            style={[
              styles.button,
              {
                backgroundColor: mainColor,
              },
            ]}
            onPress={() => {
              searchItem();
            }}
          >
            <Text
              style={{
                color: classicBackground,
                fontSize: 16,
                fontWeight: defaultTextFontWeight,
              }}
            >
              Chercher
            </Text>
          </Pressable>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            paddingTop: distanceBetween2Element / 2,
            maxWidth: displayDim.x - 40,
            maxHeight: displayDim.y / 2.3,
          }}
        >
          {guestList &&
            guestList.map((item, key) => (
              <View key={key}>
                <GuestItem item={item} position={key} deleteItem={deleteItem} />
              </View>
            ))}
        </ScrollView>
      </View>
      {isOpen && (
        <ResultModal
          closeModal={closeModal}
          currentType={currentType}
          result={result}
          addItem={addItem}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    minWidth: displayDim.x,
    minHeight: displayDim.y,
    paddingLeft: distanceBetween2Element / 2,
    paddingRight: distanceBetween2Element / 2,
    marginBottom: distanceBetween2Element * 2,
  },
  titleContainer: {
    marginTop: distanceBetween2Element,
    width: 115,
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
  inputStyle: {
    width: "70%",
    textAlign: "center",
    fontSize: defaultSizeText - 2,
    borderWidth: 2,
    borderColor: mainColor,
  },
  buttonContainer: {
    width: displayDim.x - 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: distanceBetween2Element / 3,
  },
  button: {
    width: "25%",
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    height: defaultInputSize - 2,
  },
  label: {
    marginTop: distanceBetween2Element,
    fontSize: 16,
  },
});

export default GuestTab;
