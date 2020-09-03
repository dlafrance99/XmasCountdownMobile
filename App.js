import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'

import ResolveCurrentDateScreen from './src/Screens/ResolveCurrentDateScreen';
import HomeScreen from './src/Screens/HomeScreen';
import WeeksScreen from './src/Screens/WeeksScreen';
import HoursScreen from './src/Screens/HoursScreen';
import MinutesScreen from './src/Screens/MinutesScreen';
import SecondsScreen from './src/Screens/SecondsScreen';

import { Provider as TimeProvider } from './src/Context/TimeContext';

const switchNavigator = createSwitchNavigator({
  ResolveCurrentDate: ResolveCurrentDateScreen,
  Home: HomeScreen,
  Weeks: WeeksScreen,
  Hours: HoursScreen,
  Minutes: MinutesScreen,
  Seconds: SecondsScreen,
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