import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import InfoIcon from '../Components/InfoIcon';
import CountdownSubtitle from '../Components/CountdownSubtitle';
import CountdownClock from '../Components/CountdownClock';
import Spacer from '../Components/Spacer';
import TimeData from '../Components/TimeData';
import AdMob from '../Components/AdMob';

import { Context as TimeContext } from '../Context/TimeContext';


const HoursScreen = () => {

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

    const Hours = () => {
        let Hours = Math.floor(((nextXmas - currentDate) / 3600000))
        Hours = MakeNumberLegible(Hours)

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

    const MakeNumberLegible = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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
                    title='Hours Till'
                    title2='Christmas:'
                />

                <Spacer />

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
        flex: 1,
        justifyContent: 'center',
        bottom: 30
    }
})

export default HoursScreen;