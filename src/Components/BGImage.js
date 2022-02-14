//Imports
import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Text } from 'react-native-elements';

//Components


//Context


//Style


const SCREENHEIGHT = Dimensions.get('window').height
const BGImage = ({ pic, side }) => {

    //State------------------------------------------------------


    //Context----------------------------------------------------


    //Functions--------------------------------------------------
    const chooseSide = () => {
        if (side === 'right') {
            return styles.picStyle
        } else {
            return styles.picStyleLeft
        }
    }

    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <Image
                source={pic}
                style={chooseSide()}
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
        bottom: -10,
        right: 0,
    },
    picStyleLeft: {
        resizeMode: 'contain',
        height: .4 * SCREENHEIGHT,
        width: .36 * SCREENHEIGHT,
        position: 'absolute',
        bottom: 0,
        left: -10,
    }
})

export default BGImage;