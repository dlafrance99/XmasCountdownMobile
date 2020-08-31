import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const TimeData = ({ data, unit }) => {
    return (
        <>
            <Text h3 style={styles.DataText}>
                {data} - {unit}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    DataText: {
        fontFamily: 'Baskerville-BoldItalic',
        textAlign: 'center',
        color: '#c60606'
    }
})

export default TimeData;