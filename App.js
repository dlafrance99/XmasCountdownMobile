import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import ResolveCurrentDateScreen from './src/Screens/ResolveCurrentDateScreen';
import HomeScreen from './src/Screens/HomeScreen';
import DaysScreen from './src/Screens/DaysScreen';
import HoursScreen from './src/Screens/HoursScreen';
import MinutesScreen from './src/Screens/MinutesScreen';
import SecondsScreen from './src/Screens/SecondsScreen';
import SleepsScreen from './src/Screens/SleepsScreen';

import { Provider as TimeProvider } from './src/Context/TimeContext';

const switchNavigator = createSwitchNavigator({
  ResolveCurrentDate: ResolveCurrentDateScreen,
  Home: HomeScreen,
  Days: DaysScreen,
  Hours: HoursScreen,
  Minutes: MinutesScreen,
  Seconds: SecondsScreen,
  Sleeps: SleepsScreen
},
  {
    headerMode: 'none'
  })

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <>
      <TimeProvider>
        <App />
      </TimeProvider>
    </>
  )
}