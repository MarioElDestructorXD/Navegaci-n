import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Index from "../screens/Index";
import Profile from "../screens/Profile";


const Tab = createBottomTabNavigator();

export default function Navigation(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen 
                name="index"
                component={Index}
                />
                <Tab.Screen 
                name="profile"
                component={Profile}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}