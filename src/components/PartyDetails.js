import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Dimensions } from 'react-native';
import React from 'react';

const PartyDetails = ({route, navigation}) => {

    const { testId } = route.params;

    return(
        <SafeAreaView>
            <ScrollView style={styles.main}>
                <View>
                    <Text>Party details</Text>
                    <Pressable onPress={() => navigation.navigate("PartyPage")}>
                        <Text>
                            Back
                        </Text>
                    </Pressable>
                    <Text>
                        infoTest: {JSON.stringify(testId)}
                    </Text>
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

export default PartyDetails;