import React from "react"
import {Text, View, Button} from "react-native"

export default function Profile(props){
    return(
        <View>
            <Text>Mi profile</Text>
            <Button title="Ir a Smart" onPress={()=>{
                props.navigation.navigate("smart")
            }}></Button>
            <Button title="Ir a Inicio" onPress={()=>{
                props.navigation.navigate("index")
            }}></Button>
            <Button title="Ir a SmartGo" onPress={()=>{
                props.navigation.navigate("smart-go")
            }}></Button>
        </View>
        
    )
}