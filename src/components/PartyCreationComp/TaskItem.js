import { StyleSheet, Text, View } from 'react-native';
import { borderRadiusValue, defaultSizeText, distanceBetween2Element } from '../../../helpers/cssValues';

import React from 'react';
import { useSelector } from 'react-redux';

const TaskItem = ({item}) => {
    const theme = useSelector((state) => state.themeRedux);
    
    return (
        <View style={{backgroundColor: theme.contrastBackground, marginTop: distanceBetween2Element/2, borderRadius: borderRadiusValue}}>
            <Text style={{color: theme.fontColor, textAlign: "center", fontSize: defaultSizeText-2, padding: distanceBetween2Element/1.5}}>
                {item.task}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    
});

export default TaskItem;