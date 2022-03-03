import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SmartGo from '../screens/SmartGo';
const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='smart-go' options={{ title: 'SmartGo' }} component={SmartGo}/>
    </Stack.Navigator>
  )
}