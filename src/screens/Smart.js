import React from "react";
import {Button, Text , View} from "react-native";
export default function Smart(props){

    const {navigation} = props
    return (
        <View>
            <Text>Mi Smart....</Text>
            <Button title="Ir a Training" onPress={
                ()=>props.navigation.navigate("training")
            }/>
        </View>
    )
}