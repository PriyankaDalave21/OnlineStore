import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/Appnavigator'
import HomeScreen from './src/Screens/HomeScreen'
import StackNavigator from './src/StackNavigator'

const App = () => {
  return (
    <>
      <StackNavigator />
    </>
  )
}

export default App;