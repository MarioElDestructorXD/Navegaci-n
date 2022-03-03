import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Profile from '../screens/Profile';
const Stack = createStackNavigator();

export default function IndexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name='profile' options={{ title: 'Profile' }} component={Profile}/>
    </Stack.Navigator>
  )
}