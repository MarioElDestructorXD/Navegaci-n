import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Index from "../screens/Index";
import Profile from "../screens/Profile";
import Smart from "../screens/Smart";
import SmartGo from "../screens/SmartGo";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="profile"
        tabBarOptions={{
          inactiveTintColor: "green",
          activeTintColor: "red",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOption(route, color),
        })}
      >
        <Tab.Screen
          name="index"
          component={Index}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="profile"
          component={Profile}
          options={{ title: "Perfil" }}
        />
        <Tab.Screen
          name="smart"
          component={Smart}
          options={{ title: "Smart" }}
        />
        <Tab.Screen
          name="smart-go"
          component={SmartGo}
          options={{ title: "SmartGo" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

  function name(route, color) {
      return(
          
      )
  }
}
