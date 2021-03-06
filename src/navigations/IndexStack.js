import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Index from '../screens/Index';
import Training from '../screens/Training'

const Stack = createStackNavigator();

export default function indexStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen
        name='index'
        component={ Index }
        options={{ title: "Inicio" }}
        />
        
    </Stack.Navigator>
  )
}