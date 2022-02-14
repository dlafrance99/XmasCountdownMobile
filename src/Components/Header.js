import React from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { withNavigation } from 'react-navigation'
import { Text } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';

import AdMob from './AdMob'
import { AdMobBanner } from 'expo-ads-admob';


const SCREEN_HEIGHT = Dimensions.get('window').height
const Header = ({ title, navigation }) => {

    const showContent = () => {
        if (title === 'INFO') {
            return (
                <>
                    <View style={styles.background} >
                        <View style={styles.Header}>
                            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.Butt}>
                                <Ionicons name="ios-arrow-back" style={styles.iconStyle} />
                            </TouchableOpacity>

                            <Text h1 style={styles.font}>
                                {title}
                            </Text>

                            <View style={{ flex: 1 }} />
                        </View>
                    </View>
                </>
            )
        } else {
            return (
                <>
                    <View style={styles.background} >
                        <View style={styles.Header}>
                            <Text h1 style={styles.font}>
                                {title}
                            </Text>
                        </View>
                    </View>
                </>
            )
        }
    }

    return (
        <>
            {showContent()}
        </>
    )
}

const styles = StyleSheet.create({
    Header: {
        marginTop: .05*SCREEN_HEIGHT,
        backgroundColor: '#c60606',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    font: {
        fontFamily: 'Baskerville-BoldItalic',
        textAlign: 'center',
        color: '#f8f2f2',
        flex: 1
    },
    background: {
        backgroundColor: '#c60606',
        paddingBottom: 10
    },
    iconStyle: {
        fontSize: 45,
        color: '#f8f2f2',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    Butt: {
        flex: 1,
        justifyContent: 'center'
    }
})

export default withNavigation(Header);