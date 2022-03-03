import React, { useEffect, useState } from "react";
import { Text, View, Button } from "react-native";
import { firebaseApp } from "../utils/firebase";
import firebase from "@firebase/app";
require("firebase/auth");
import Login from "./Login";
import Loading from "../components/Loading";

export default function Index(props) {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) return <Loading isVisible={true} text={"Cargando..."}/>;
  if (login) {
    return (
      <View>
        <Text>Mi index</Text>
        <Button
          title="Ir a Smart"
          onPress={() => {
            props.navigation.navigate("smart");
          }}
        ></Button>
        <Button
          title="Ir a Profile"
          onPress={() => {
            props.navigation.navigate("profile");
          }}
        ></Button>
        <Button
          title="Ir a SmartGo"
          onPress={() => {
            props.navigation.navigate("smart-go");
          }}
        ></Button>
        <Button
          title="Ir a Training"
          onPress={() => {
            props.navigation.navigate("smart", { screen: "training" });
          }}
        ></Button>
      </View>
    );
  } else {
      return(<Login/>);
  }
}
