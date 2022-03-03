import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {Icon} from 'react-native-elements'

import Profile from '../screens/Profile'
//import Index from '../screens/Index'
import Smart from '../screens/Smart'
import SmartGo from '../screens/SmartGo'
import SmartStack from './SmartStack'
import SmartGoStack from './SmartGoStack'
import ProfileStack from './ProfileStack'
import IndexStack from './IndexStack'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer'; 

const Drawer = createDrawerNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name="index" component={IndexStack} options={{title:'Index', drawerIcon:()=>{
                    <Icon type='material-community' size={22} name={'view-grid-outline'}/>
                }}}/>
                <Drawer.Screen name="profile" component={IndexStack} options={{title:'Profile', drawerIcon:()=>{
                    <Icon type='material-community' size={22} name={'account-outline'}/>
                }}}/>
                <Drawer.Screen name="smart" component={IndexStack} options={{title:'Smart', drawerIcon:()=>{
                    <Icon type='material-community' size={22} name={'weight-lifter'}/>
                }}}/>
            </Drawer.Navigator>
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