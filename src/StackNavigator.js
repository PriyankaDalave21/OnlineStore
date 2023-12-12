import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './Screens/HomeScreen'
import MenuScreen from './Screens/MenuScreen'
import Splash from './Screens/Splash'
import Login from './Screens/Login'
const StackNavigator = () => {
    const Stack= createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Splash" component={Splash} options={{headerShown:false}}/>
    <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
    <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    <Stack.Screen name="Menu" component={MenuScreen} options={{headerShown :false}}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default StackNavigator;

const styles = StyleSheet.create({})