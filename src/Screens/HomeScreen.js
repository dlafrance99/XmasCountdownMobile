import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import { Context as TimeContext } from '../Context/TimeContext';

import Header from '../Components/Header';
import CountdownOptions from '../Components/CountdownOptions';
import CountdownSubtitle from '../Components/CountdownSubtitle';
import Spacer from '../Components/Spacer';
import TimeData from '../Components/TimeData';

const HomeScreen = () => {

    //Components
    const { state: { currentDate, year, nextChristmas }, changeCurrentDate, changeYear, changeNextChristmas } = useContext(TimeContext)

    //State
    const [Days, setDays] = useState()
    const [Hours, setHours] = useState()
    const [Minutes, setMinutes] = useState()
    const [Seconds, setSeconds] = useState()
    const [Milliseconds, setMilliseconds] = useState()

    //UseEffect
    useEffect(() => {
        updateDate()
        setDates()
    }, [])

    //Functions
    const updateDate = () => {
        let newDate = new Date();
        changeCurrentDate(newDate)
    }

    const setDates = () => {
        let nextXmas = new Date(nextChristmas)

        setDays(((nextXmas - currentDate) / 86400000).toFixed(0))
        setHours((((nextXmas - currentDate) % 86400000) / 3600000).toFixed(0))
        setMinutes(((((nextXmas - currentDate) % 86400000) % 3600000) / 60000).toFixed(0))
        setSeconds((((((nextXmas - currentDate) % 86400000) % 3600000) % 60000) / 1000).toFixed(0))
        setMilliseconds((((((nextXmas - currentDate) % 86400000) % 3600000) % 60000) % 1000).toFixed(0))
    }

    return (
        <>
            <View style={styles.wrapper}>
                <Header />

                <CountdownOptions />

                <Spacer />
                <Spacer />
                <Spacer />

                <CountdownSubtitle
                    title='Time'
                />

                <Spacer />

                <TimeData
                    data={Days}
                    unit='Days'
                />

                <TimeData
                    data={Hours}
                    unit='Hours'
                />

                <TimeData
                    data={Minutes}
                    unit='Minutes'
                />

                <TimeData
                    data={Seconds}
                    unit='Seconds'
                />

                <TimeData
                    data={Milliseconds}
                    unit='Milliseconds'
                />

            </View>
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0c9547',
        flex: 1
    }
})

export default HomeScreen;