import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import {
    classicBackground,
    displayDim
} from './../../helpers/cssValues'

import React from 'react';

const NotificationPage = ({ navigation }) => {

    return(
        <>
        <SafeAreaView style={{backgroundColor: classicBackground}}>
            <ScrollView style={styles.main}>
                <View>
                    <Text>I am Todos</Text>
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

export default NotificationPage;