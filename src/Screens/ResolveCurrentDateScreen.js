import React, { useContext, useEffect } from 'react';

import { Context as TimeContext } from '../Context/TimeContext';


const ResolveCurrentDateScreen = ({ navigation }) => {

    const { state: { nextChristmas, currentDate, year }, changeCurrentDate, changeYear, changeNextChristmas } = useContext(TimeContext)

    useEffect(() => {
        getNewDate()

    }, [])

    //Functions
    const getNewDate = async () => {
        const currentDate = new Date();
        const nextXmasDate = new Date(nextChristmas)

        console.log(currentDate.getFullYear())

        await changeCurrentDate(currentDate)

        if (currentDate >= nextXmasDate) {
            changeYear(currentDate.getFullYear())
            changeNextChristmas('December 25 ' + (currentDate.getFullYear()) + ' 00:00')
        }

        navigation.navigate('Home')
    }

    return null
}

export default ResolveCurrentDateScreen;