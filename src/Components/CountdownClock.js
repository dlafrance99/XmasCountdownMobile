import React, { useEffect } from 'react';


const CountdownClock = ({ isActive, target }) => {

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                target()
            }, 1000)
        } else if (!isActive) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive])

    return null
}

export default CountdownClock;