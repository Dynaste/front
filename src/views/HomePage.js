import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Dimensions } from 'react-native';
import PartyResume from '../components/PartyResume';
import React from 'react';

const HomePage = ({ navigation }) => {

    return(
        <SafeAreaView style={styles.main}>
            <ScrollView>
                <View>
                    <Text>I AM HOMEPAGE</Text>
                </View>
                <PartyResume />
            </ScrollView>
        </SafeAreaView>
    )
}  
 
const styles = StyleSheet.create({
    main:{
      display:'flex',
      flexWrap:'nowrap',
      minWidth: Dimensions.get('window').width,
      flexDirection:'row',
      height: Dimensions.get('window').height,
      backgroundColor: '#fff'
    }
   });

export default HomePage;