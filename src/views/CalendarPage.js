import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    classicBackground,
    displayDim
} from './../../helpers/cssValues'

import React from 'react';

const CalendarPAge = ({ navigation }) => {

    return(
        <>
        <SafeAreaView style={{backgroundColor: classicBackground}}>
            <ScrollView style={styles.main}>
                <View>
                    <Text>Calendar</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
        </>
    )
}  
 
const styles = StyleSheet.create({
    main:{
      display:'flex',
      flexWrap:'nowrap',
      minWidth: displayDim.x,
      flexDirection:'row',
      height: displayDim.y,
      backgroundColor: '#fff'
    }
   }); 

export default CalendarPAge;