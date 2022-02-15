import React from 'react';
import { View, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { Text } from 'react-native-elements';

import Header from '../Components/Header';
import AdMob from '../Components/AdMob';
import Spacer from '../Components/Spacer';

const InfoScreen = () => {
    const openUrl = async (url) => {
        const supported = await Linking.canOpenURL(url)

        if (supported) {
            await Linking.openURL(url)
        } else {
            console.log('an error opening has occured')
        }
    }

    return (
        <>
            <View style={styles.wrapper}>
                <Header
                    title='INFO'
                />

                <View style={{flex: 1}}>
                    <Spacer />

                    <Text h4 style={styles.text}>
                        Christmas Countdown lets you know how many days are left till Christmas!
                    </Text>

                    <Spacer />

                    <Text style={styles.text}>
                        With several different sections Christmas Countdown will let you know how many Weeks, Days, Hours, Minutes, or Seconds there are left till the best day of the year, Christmas!
                    </Text>

                    <Spacer />

                    <Text h4 style={styles.text}>
                        Want to know more about our app?
                    </Text>

                    <Spacer />

                    <TouchableOpacity onPress={() => openUrl('https://docs.google.com/document/d/1gQ_XltK3mL76A3yiN_XeFO3K_2HxA2_vWTBPhYP_PRk/edit')}>
                        <Text h4 style={styles.urlText}>
                            Privacy Policy
                        </Text>
                    </TouchableOpacity>

                    <Spacer />

                    <TouchableOpacity onPress={() => openUrl('https://docs.google.com/document/d/1-5ZiAoXzUQLTHJXYdp5CVHP8gznryCs0HklFUje5eZQ/edit#heading=h.kitoga69q1dy')}>
                        <Text h4 style={styles.urlText}>
                            Terms of Use
                        </Text>
                    </TouchableOpacity>

                </View>

                <AdMob />
            </View>

        </>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#0c9547',
        flex: 1
    },
    text: {
        color: '#f8f2f2',
        fontFamily: 'Baskerville-BoldItalic',
        marginHorizontal: 10,
        fontSize: 20
    },
    urlText: {
        color: '#2015ad',
        fontFamily: 'Baskerville-BoldItalic',
        textAlign: 'center',
        fontSize: 20,
        textDecorationLine: 'underline'
    }
})

export default InfoScreen;