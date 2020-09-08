import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { withNavigation } from 'react-navigation'

import { FontAwesome } from '@expo/vector-icons';

const InfoIcon = ({ navigation }) => {
    return (
        <>
            <TouchableOpacity onPress={() => navigation.navigate('Info')} style={styles.iconWrapper}>
                <FontAwesome name='info-circle' style={styles.IconStyle} />
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    IconStyle: {
        fontSize: 35,
        color: '#f8f2f2',
        alignSelf: 'flex-end',
        marginHorizontal: 15,
        marginBottom: 10
    },
    iconWrapper: {

    }
})

export default withNavigation(InfoIcon);