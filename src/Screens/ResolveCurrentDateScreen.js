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

        await changeCurrentDate(currentDate)

        if (currentDate >= nextXmasDate) {
            changeYear(year + 1)
            changeNextChristmas('December 25 ' + (year + 1) + ' 00:00')
        }

        navigation.navigate('Home')
    }

    return null
}

export default ResolveCurrentDateScreen;