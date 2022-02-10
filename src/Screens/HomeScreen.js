import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../Components/Header';
import NavBar from '../Components/NavBar';

import TodayScreen from '../Screens/TodayScreen';
import WeeksScreen from '../Screens/WeeksScreen';
import DaysScreen from '../Screens/DaysScreen';
import HoursScreen from '../Screens/HoursScreen';
import MinutesScreen from '../Screens/MinutesScreen';
import SecondsScreen from '../Screens/SecondsScreen';

import Snow from 'react-native-snow-bg'

const HomeScreen = () => {
    //State
    const [CurrentScreen, setCurrentScreen] = useState('Home')

    const showScreen = () => {
        if (CurrentScreen === 'Home') {
            return (<TodayScreen />)
        } else if (CurrentScreen === 'Weeks') {
            return (<WeeksScreen />)
        } else if (CurrentScreen === 'Days') {
            return (<DaysScreen />)
        } else if (CurrentScreen === 'Hours') {
            return (<HoursScreen />)
        } else if (CurrentScreen === 'Minutes') {
            return (<MinutesScreen />)
        } else if (CurrentScreen === 'Seconds') {
            return (<SecondsScreen />)
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                <Snow fallSpeed='medium' snowflakesCount={100}/>
                <Header
                    title='CHRISTMAS COUNTDOWN'
                />

                <NavBar
                    target={(value) => setCurrentScreen(value)}
                    Screen={CurrentScreen}
                />

                {showScreen()}

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0c9547',
        flex: 1,
    },
    Text: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#c60606',
        flex: 1,
        textAlign: 'center',
        marginHorizontal: 10

    },

})

export default HomeScreen;