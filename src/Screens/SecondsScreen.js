import React, { useContext, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../Components/Header';
import CountdownOptions from '../Components/CountdownOptions';
import CountdownSubtitle from '../Components/CountdownSubtitle';
import CountdownClock from '../Components/CountdownClock';
import Spacer from '../Components/Spacer';
import TimeData from '../Components/TimeData';

import { Context as TimeContext } from '../Context/TimeContext';

const SecondsScreen = () => {
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

    const Seconds = () => {
        let Seconds = Math.floor(((nextXmas - currentDate) / 1000))

        Seconds = MakeNumberLegible(Seconds)

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
                <Header />

                <CountdownOptions />

                <Spacer />
                <Spacer />
                <Spacer />

                <CountdownSubtitle
                    title='Minutes'
                />

                <Spacer />

                <TimeData
                    data={Seconds()}
                    unit='Seconds'
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

export default SecondsScreen;