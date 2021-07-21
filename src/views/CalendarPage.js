import { Agenda, Calendar, CalendarList } from "react-native-calendars";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  borderRadiusValue,
  classicBackground,
  contrastBackground,
  displayDim,
  distanceBetween2Element,
  mainColor,
} from "./../../helpers/cssValues";

import { LocaleConfig } from "react-native-calendars";
import React from "react";

const CalendarPAge = ({ navigation }) => {
  LocaleConfig.locales["fr"] = {
    monthNames: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
    dayNames: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
    dayNamesShort: ["D.", "L.", "M.", "M.", "J.", "V.", "S."],
    today: "Aujourd'hui",
  };
  LocaleConfig.defaultLocale = "fr";
  return (
    <>
      <SafeAreaView style={{ backgroundColor: classicBackground }}>
        <ScrollView style={styles.main}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Mon calendrier</Text>
            <View style={styles.underline}></View>
          </View>
          <View style={styles.calendarContainer}>
            <Calendar
              // Handler which gets executed on day press. Default = undefined
              onDayPress={(day) => {
                console.log("selected day", day);
              }}
              // Handler which gets executed on day long press. Default = undefined
              onDayLongPress={(day) => {
                console.log("selected day", day);
              }}
              // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
              monthFormat={"MMMM yyyy"}
              // Handler which gets executed when visible month changes in calendar. Default = undefined
              onMonthChange={(month) => {
                console.log("month changed", month);
              }}
              hideExtraDays={false}
              // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
              // day from another month that is visible in calendar page. Default = false
              disableMonthChange={true}
              // Hide day names. Default = false
              hideDayNames={false}
              // Handler which gets executed when press arrow icon left. It receive a callback can go back month
              onPressArrowLeft={(subtractMonth) => subtractMonth()}
              // Handler which gets executed when press arrow icon right. It receive a callback can go next month
              onPressArrowRight={(addMonth) => addMonth()}
              // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
              disableAllTouchEventsForDisabledDays={true}
              // Enable the option to swipe between months. Default = false
              enableSwipeMonths={true}
              style={{
                borderWidth: 2,
                borderColor: mainColor,
                borderRadius: borderRadiusValue,
                paddingBottom: distanceBetween2Element,
                paddingTop: distanceBetween2Element,
              }}
              theme={{
                calendarBackground: contrastBackground,
                textSectionTitleColor: mainColor,
                textSectionTitleDisabledColor: "#d9e1e8",
                selectedDayBackgroundColor: "#00adf5",
                selectedDayTextColor: "#ffffff",
                todayTextColor: mainColor,
                dayTextColor: "black",
                textDisabledColor: "#d9e1e8",
                dotColor: "#00adf5",
                selectedDotColor: "#ffffff",
                arrowColor: mainColor,
                disabledArrowColor: "#d9e1e8",
                monthTextColor: "black",
                indicatorColor: "black",
                textDayFontWeight: "300",
                textMonthFontWeight: "bold",
                textDayHeaderFontWeight: "300",
                textDayFontSize: 20,
                textMonthFontSize: 18,
                textDayHeaderFontSize: 18,
              }}
            />
          </View>
          <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>Mes prochains évènements</Text>
            <View style={styles.underline}></View>
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
    flexDirection: "row",
    minHeight: displayDim.y,
    backgroundColor: "#fff",
  },
  calendarContainer: {
    marginTop: distanceBetween2Element,
    width: displayDim.x - 40,
    marginLeft: distanceBetween2Element,
  },
  titleContainer: {
    marginLeft: distanceBetween2Element,
    marginTop: distanceBetween2Element,
    width: 139,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
  },
  subtitleContainer: {
    marginLeft: distanceBetween2Element,
    marginTop: distanceBetween2Element,
    width: 255,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  underline: {
    backgroundColor: mainColor,
    width: "100%",
    height: 2,
    marginTop: 4,
  },
});

export default CalendarPAge;
