import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import InfoIcon from '../Components/InfoIcon';
import CountdownSubtitle from '../Components/CountdownSubtitle';
import CountdownClock from '../Components/CountdownClock';
import Spacer from '../Components/Spacer';
import TimeData from '../Components/TimeData';
import AdMob from '../Components/AdMob';

import { Context as TimeContext } from '../Context/TimeContext';

const WeeksScreen = () => {

    //Context
    const { state: { currentDate, nextChristmas }, changeCurrentDate } = useContext(TimeContext)

    //UseEffect
    useEffect(() => {
        updateDate()
    }, [])

    //Functions
    const updateDate = () => {
        let newDate = new Date();
        changeCurrentDate(newDate)
    }

    let nextXmas = new Date(nextChristmas)

    const Weeks = () => {
        let Weeks = Math.floor((nextXmas - currentDate) / 604800000)

        return (Weeks)
    }

    const Days = () => {
        let Days = Math.floor(((nextXmas - currentDate) % 604800000) / 86400000)

        return (Days)
    }

    const Hours = () => {
        let Hours = Math.floor((((nextXmas - currentDate) % 86400000) / 3600000))

        return Hours
    }

    const Minutes = () => {
        let Minutes = Math.floor((((nextXmas - currentDate) % 3600000) / 60000))

        return Minutes
    }

    const Seconds = () => {
        let Seconds = Math.floor((((nextXmas - currentDate) % 60000) / 1000))

        return Seconds
    }

    return (
        <>
            <CountdownClock
                isActive={true}
                target={() => updateDate()}
            />
            <View style={styles.wrapper}>

                <Spacer />
                <Spacer />
                <Spacer />

                <CountdownSubtitle
                    title='Weeks Till'
                    title2='Christmas:'
                />

                <Spacer />

                <TimeData
                    data={Weeks()}
                    unit='Weeks'
                />

                <TimeData
                    data={Days()}
                    unit='Days'
                />

                <TimeData
                    data={Hours()}
                    unit='Hours'
                />

                <TimeData
                    data={Minutes()}
                    unit='Minutes'
                />

                <TimeData
                    data={Seconds()}
                    unit='Seconds'
                />

            </View>

            <InfoIcon />

            <AdMob />
        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0c9547',
        flex: 1
    }
})

export default WeeksScreen;