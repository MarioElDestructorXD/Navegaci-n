import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "../screens/Index";
import Smart from "../screens/Smart";
import { Icon } from "react-native-elements";
import { Text } from "react-native";
import Register from "../screens/Register";

const Stack = createStackNavigator();

export default function IndexStack(props) {
  const { navigation } = props;
  console.log(navigation);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="index"
        options={{
          title: "Index",
          headerShown: false,
          //headerLeft:()=>(<Icon onPress={()=>navigation.openDrawer()} type='material-community' name='menu' size={22} color={"red"}/>)
        }}
        component={Index}
      />
      <Stack.Screen
        name="register"
        options={{
          title: "Registrate"}}
        component={Register}
      />
    </Stack.Navigator>
  );
}
