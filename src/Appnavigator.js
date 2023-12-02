import React from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import HelloWorld from './Screens/HomeScreen';
const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                options={{headerShown : false}} 
                name="Splash" 
                component={Splash} />
                  <Stack.Screen 
                options={{headerShown : false}} 
                name="Login" 
                component={Login} />
                <Stack.Screen 
                options={{headerShown : false}} 
                name="HelloWorld" 
                component={HelloWorld} />
            </Stack.Navigator>
            
        </NavigationContainer>

    );
}
export default AppNavigator;