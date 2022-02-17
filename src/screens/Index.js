import React from "react";
import {Button, Text , View} from "react-native";
export default function Index(props){
    const {navigation} = props;
    return (
        <View>
            <Text>Mi Index....</Text>
            <Button title="Ir a Smart" onPress={
                ()=>props.navigation.navigate("smart")
            }/>
            <Button title="Ir a Perfil" onPress={
                ()=>props.navigation.navigate("profile")
            }/>
            <Button title="Ir a Training" onPress={
                ()=>props.navigation.navigate("smart","training")
            }/>
        </View>
    )
}