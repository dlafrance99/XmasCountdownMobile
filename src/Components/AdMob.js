import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob'

const AdMob = () => {
    return (
        <>
            <AdMobBanner
                bannerSize='banner'
                adUnitID='ca-app-pub-8611757228555808/4448040617'
                servePersonalizedAds={true}
            />
        </>
    )
}

const styles = StyleSheet.create({

})

export default AdMob;