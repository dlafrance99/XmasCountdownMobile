//Imports
import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

//Components


//Context


//Style


const SCREENHEIGHT = Dimensions.get('window').height
const BGImage = ({ pic }) => {

    //State------------------------------------------------------


    //Context----------------------------------------------------


    //Functions--------------------------------------------------


    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <Image
                source={require('../../Images/Santa.png')}
                style={styles.picStyle}
            />
        </>
    )
}

const styles = StyleSheet.create({
    picStyle: {
        resizeMode: 'contain',
        height: .4 * SCREENHEIGHT,
        width: .36 * SCREENHEIGHT,
        position: 'absolute',
        bottom: 50,
        right: 0
    }
})

export default BGImage;