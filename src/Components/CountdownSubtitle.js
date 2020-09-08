import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const CountdownSubtitle = ({ title, title2 }) => {
    return (
        <>
            <Text h2 style={styles.Subtitle}>
                {title}
            </Text>

            <Text h2 style={styles.Subtitle}>
                {title2}
            </Text>
        </>
    )
}

const styles = StyleSheet.create({
    Subtitle: {
        textAlign: 'center',
        fontFamily: 'Baskerville-BoldItalic',
        color: '#f8f2f2'

    }
})

export default CountdownSubtitle;