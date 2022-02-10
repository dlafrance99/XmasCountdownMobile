import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

const CountdownOptions = ({ target, Screen }) => {

    const TextStyle = (value) => {
        if (value === Screen) {
            return styles.SelectedText
        } else {
            return styles.optionsText
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{height: 75, borderWidth: 3}}
                >

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Home')}>
                        <Text h3 style={TextStyle('Home')}>
                            Home
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Weeks')}>
                        <Text h3 style={TextStyle('Weeks')}>
                            Weeks
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Days')}>
                        <Text h3 style={TextStyle('Days')}>
                            Days
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Hours')}>
                        <Text h3 style={TextStyle('Hours')}>
                            Hours
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Minutes')}>
                        <Text h3 style={TextStyle('Minutes')}>
                            Minutes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Seconds')}>
                        <Text h3 style={TextStyle('Seconds')}>
                            Seconds
                        </Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    optionsText: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#b52c2c',
        marginHorizontal: 15,
    },
    Butt: {
        justifyContent: 'center',
        borderWidth: 1
    },
    SelectedText: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#0c9547',
        marginHorizontal: 15,
        textShadowColor: '#c60606',
        textShadowRadius: 2,
        paddingVertical: 15,
    },
    wrapper: {
        backgroundColor: '#f8f2f2'
    }
})

export default (CountdownOptions);