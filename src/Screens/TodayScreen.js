import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';

import CountdownSubtitle from '../Components/CountdownSubtitle';
import Spacer from '../Components/Spacer';
import CountdownClock from '../Components/CountdownClock';
import AdMob from '../Components/AdMob';
import InfoIcon from '../Components/InfoIcon';

const HomeScreen = () => {
    //State
    const [Answer, setAnswer] = useState('No, Today is Not Christmas')

    //Functions
    useEffect(() => {
        updateDate()
    }, [])

    const updateDate = () => {
        let Today = new Date()

        if (Today.getDate() === 25 && Today.getMonth() === 11) {
            setAnswer('Yes! Today is Christmas!')
        } else {
            setAnswer('No, Today is Not Christmas')
        }
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
                    title='Is Today'
                    title2='Christmas?'
                />

                <Spacer />

                <Text h3 style={styles.Text}>
                    {Answer}
                </Text>
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