import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Smart from '../screens/Smart';
import Training from '../screens/Training';
const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='smart' options={{ title: 'Smart' }} component={Smart}/>
        <Stack.Screen name='training' options={{ title: 'Training' }} component={Training}/>
    </Stack.Navigator>
  )
}