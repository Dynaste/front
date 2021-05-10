import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Dimensions } from 'react-native';
import React from 'react';

const NotificationPage = ({ navigation }) => {

    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.main}>
                    <Text>I am Todos</Text>
                </View>
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

export default NotificationPage;