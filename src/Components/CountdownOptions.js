import React, { useEffect } from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
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
                >

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Home')}>
                        <Text h4 style={TextStyle('Home')}>
                            Home
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Weeks')}>
                        <Text h4 style={TextStyle('Weeks')}>
                            Weeks
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Days')}>
                        <Text h4 style={TextStyle('Days')}>
                            Days
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Hours')}>
                        <Text h4 style={TextStyle('Hours')}>
                            Hours
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Minutes')}>
                        <Text h4 style={TextStyle('Minutes')}>
                            Minutes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Butt} onPress={() => target('Seconds')}>
                        <Text h4 style={TextStyle('Seconds')}>
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
        justifyContent: 'center'
    },
    SelectedText: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#0c9547',
        marginHorizontal: 15,
        textShadowColor: '#c60606',
        textShadowRadius: 2,
        paddingVertical: 10,
    },
    wrapper: {
        backgroundColor: '#f8f2f2'
    }
})

export default withNavigation(CountdownOptions);