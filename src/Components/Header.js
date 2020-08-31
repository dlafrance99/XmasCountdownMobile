import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const Header = () => {

    return (
        <>
            <View style={styles.Header}>
                <Text h1 style={styles.font}>
                    CHRISTMAS COUNTDOWN
                </Text>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    Header: {
        marginTop: 50
    },
    font: {
        fontFamily: 'Baskerville-BoldItalic',
        textAlign: 'center',
        color: '#f8f2f2'
    }
})

export default Header;