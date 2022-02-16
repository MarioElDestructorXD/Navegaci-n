import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import IndexStack from "./IndexStack";
import ProfileStack from "./ProfileStack";
import SmartStack from "./SmartStack";
import SmartGoStack from "./SmartGoStack"

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
          tabBarIcon: ({ color }) => screenOption(route, color)
        })}
      >
        <Tab.Screen
          name="index"
          component={IndexStack}
          options={{ title: "Inicio" }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileStack}
          options={{ title: "Perfil" }}
        />
        <Tab.Screen
          name="smart"
          component={SmartStack}
          options={{ title: "Smart" }}
        />
        <Tab.Screen
          name="smart-go"
          component={SmartGoStack}
          options={{ title: "SmartGo" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );

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
      <Icon 
      type="material-community" 
      name={icono} 
      size={22}
      color="color"
      />
    )
  }
}
