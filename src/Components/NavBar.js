//Imports
import React, { useState, useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';

//Components


//Context


//Style

const NavBar = ({ target, Screen }) => {

    //State------------------------------------------------------


    //Context----------------------------------------------------


    //Functions--------------------------------------------------
    const TextStyle = (value) => {
        if (value === Screen) {
            return styles.SelectedText
        } else {
            return styles.optionsText
        }
    }

    //Show-------------------------------------------------------


    //Main-------------------------------------------------------


    return (
        <>
            <View style={{flex:1, height: 5}}>
                <ScrollView
                    horizontal
                    style={styles.ScrollStyle}
                    contentContainerStyle={styles.Wrapper}
                    showsHorizontalScrollIndicator={false}
                    bounces={false}
                >
                    <TouchableOpacity onPress={() => target('Home')} style={styles.Butt}>
                        <Text h3 style={TextStyle('Home')}>
                            Home
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => target('Weeks')} style={styles.Butt}>
                        <Text h3 style={TextStyle('Weeks')}>
                            Weeks
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => target('Days')} style={styles.Butt}>
                        <Text h3 style={TextStyle('Days')}>
                            Days
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => target('Hours')} style={styles.Butt}>
                        <Text h3 style={TextStyle('Hours')}>
                            Hours
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => target('Minutes')} style={styles.Butt}>
                        <Text h3 style={TextStyle('Minutes')}>
                            Minutes
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => target('Seconds')} style={styles.Butt}>
                        <Text h3 style={TextStyle('Seconds')}>
                            Seconds
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    Wrapper: {
        backgroundColor: '#f8f2f2',
        maxHeight: 75,
    },
    optionsText: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#b52c2c',
        marginHorizontal: 15,
    },
    Butt: {
        justifyContent: 'center',
    },
    SelectedText: {
        fontFamily: 'Baskerville-BoldItalic',
        color: '#0c9547',
        marginHorizontal: 15,
        textShadowColor: '#c60606',
        textShadowRadius: 2,
        paddingVertical: 15,
    },
})

export default NavBar;