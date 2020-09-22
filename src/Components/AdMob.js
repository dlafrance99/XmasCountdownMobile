import React from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob'

const AdMob = () => {
    return (
        <>
            <View style={styles.adStyle}>
                <AdMobBanner
                    bannerSize='smartBannerPortrait'
                    adUnitID='ca-app-pub-8611757228555808/4448040617'
                    servePersonalizedAds={false}
                    onDidFailToReceiveAdWithError={(error) => console.log({ error })
                    }
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    adStyle: {
        backgroundColor: '#c60606',
        marginBottom: 20,
        borderTopWidth: 5,
        borderTopColor: '#c60606',
        borderBottomWidth: 5,
        borderBottomColor: '#c60606',
    }
})

export default AdMob;