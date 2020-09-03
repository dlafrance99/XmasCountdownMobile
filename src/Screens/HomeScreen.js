import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';

import Header from '../Components/Header';
import CountdownOptions from '../Components/CountdownOptions';
import CountdownSubtitle from '../Components/CountdownSubtitle';
import Spacer from '../Components/Spacer';
import TimeData from '../Components/TimeData';
import CountdownClock from '../Components/CountdownClock';
import AdMob from '../Components/AdMob';

import { Context as TimeContext } from '../Context/TimeContext';

const HomeScreen = () => {

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

    const Days = () => {
        let Days = Math.floor(((nextXmas - currentDate) / 86400000))

        return (Days)
    }

    const Hours = () => {
        let Hours = Math.floor((((nextXmas - currentDate) % 86400000) / 3600000))

        return Hours
    }

    const Minutes = () => {
        let Minutes = Math.floor(((((nextXmas - currentDate) % 86400000) % 3600000) / 60000))

        return Minutes
    }

    const Seconds = () => {
        let Seconds = Math.floor((((((nextXmas - currentDate) % 86400000) % 3600000) % 60000) / 1000))

        return Seconds
    }

    return (
        <>
            <CountdownClock
                isActive={true}
                target={() => updateDate()}
            />
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

                <AdMobBanner
                    bannerSize='fullBanner'
                    adUnitID='ca-app-pub-8611757228555808/4448040617'
                    servePersonalizedAds={false}
                    onDidFailToReceiveAdWithError={(error) => console.log({ error })}
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