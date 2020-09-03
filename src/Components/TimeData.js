import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const TimeData = ({ data, unit }) => {
    return (
        <>
            <View style={{ flexDirection: 'row' }}>
                <Text h3 style={styles.DataText1}>
                    {data}
                </Text>

                <Text h3 style={styles.DataText2}>
                    {unit}
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    DataText1: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#c60606',
        flex: 1,
        textAlign: 'right',
        marginHorizontal: 10

    },
    DataText2: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#c60606',
        flex: 1,
        textAlign: 'left',
        marginHorizontal: 10
    }
})

export default TimeData;