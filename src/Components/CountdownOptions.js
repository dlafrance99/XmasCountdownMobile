import React from 'react';
import { ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { Text } from 'react-native-elements';

const CountdownOptions = ({ navigation }) => {

    const handleSwitchScreen = (value) => {
        navigation.navigate(value)
    }

    return (
        <>
            <View >
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                    <TouchableOpacity onPress={() => handleSwitchScreen('Home')}>
                        <Text h4 style={styles.optionsText}>
                            Home
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSwitchScreen('Weeks')}>
                        <Text h4 style={styles.optionsText}>
                            Weeks
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSwitchScreen('Hours')}>
                        <Text h4 style={styles.optionsText}>
                            Hours
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSwitchScreen('Minutes')}>
                        <Text h4 style={styles.optionsText}>
                            Minutes
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleSwitchScreen('Seconds')}>
                        <Text h4 style={styles.optionsText}>
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
        color: '#c60606',
        marginHorizontal: 15,
    }
})

export default withNavigation(CountdownOptions);