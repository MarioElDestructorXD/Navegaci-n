import React from "react";
import {Button, Text , View} from "react-native";
export default function Profile(props){
    const {navigation} = props;
    return (
        <View>
            <Text>Mi Profile....</Text>
            <Button title="Ir a Inicio" onPress={
                ()=>props.navigation.navigate("index")
            }/>
        </View>
    )
}