import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {Icon} from 'react-native-elements'

import Profile from '../screens/Profile'
//import Index from '../screens/Index'
import Smart from '../screens/Smart'
import SmartGo from '../screens/SmartGo'
import SmartStack from './SmartStack'
import SmartGoStack from './SmartGoStack'
import ProfileStack from './ProfileStack'
import IndexStack from './IndexStack'
const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator 
            initialRouteName='index'
                tabBarOptions={{
                    inactiveTintColor:"#EC7063",
                    activeTintColor:"#900C3F",
                }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOption(route, color)
                })}>
                <Tab.Screen name='index' options={{ title: 'Inicio' }} component={IndexStack} />
                <Tab.Screen name='smart' options={{ title: 'Smart' }} component={SmartStack} />
                <Tab.Screen name='smart-go' options={{ title: 'SmartGo' }} component={SmartGoStack} />
                <Tab.Screen name='profile' options={{ title: 'Perfil' }} component={ProfileStack} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOption(route, color) {
    let icono;
    switch (route.name) {
        case "index":
            icono = "view-grid-outline"
            break;
        case "smart":
            icono = "weight-lifter"
            break;
        case "smart-go":
            icono = "google"
            break;
        case "profile":
            icono = "account-outline"
            break;
        default:
            break;
    }
    return(
        <Icon type="material-community"name={icono} size={22} color={color}></Icon>
    )
}