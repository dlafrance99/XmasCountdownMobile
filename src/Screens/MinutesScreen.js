import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import InfoIcon from '../Components/InfoIcon';
import CountdownSubtitle from '../Components/CountdownSubtitle';
import CountdownClock from '../Components/CountdownClock';
import Spacer from '../Components/Spacer';
import TimeData from '../Components/TimeData';
import AdMob from '../Components/AdMob';
import BGImage from '../Components/BGImage';

import { Context as TimeContext } from '../Context/TimeContext';

const SCREEN_HEIGHT = Dimensions.get('window').height
const MinutesScreen = () => {
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

    const Minutes = () => {
        let Minutes = Math.floor(((nextXmas - currentDate) / 60000))

        Minutes = MakeNumberLegible(Minutes)

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
        <BGImage
                pic={require('../../Images/Snowman.png')}
            />
            <CountdownClock
                isActive={true}
                target={() => updateDate()}
            />
            <View style={styles.wrapper}>                

                <CountdownSubtitle
                    title='Minutes Till'
                    title2='Christmas:'
                />

                <Spacer />

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
        justifyContent: 'flex-start',
        paddingTop: .05 * SCREEN_HEIGHT
    }
})

export default MinutesScreen;