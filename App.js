import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ResolveCurrentDateScreen from './src/Screens/ResolveCurrentDateScreen';
import HomeScreen from './src/Screens/HomeScreen';
import InfoScreen from './src/Screens/InfoScreen';

import { Provider as TimeProvider } from './src/Context/TimeContext';

const switchNavigator = createSwitchNavigator({
  ResolveCurrentDate: ResolveCurrentDateScreen,
  NormalFlow: createStackNavigator({
    Home: HomeScreen,
    Info: InfoScreen
  },
    {
      headerMode: 'none'
    })
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