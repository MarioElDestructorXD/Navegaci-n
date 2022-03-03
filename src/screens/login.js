import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  return (
    <ScrollView>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png",
        }}
      />
      <View style={styles.viewContainer}>
        <Text>Login form</Text>
        <Text>Regístrate</Text>
        <CrearCuenta />
      </View>
      <Divider style={styles.divider} />
      <Text>REDES SOCIALES</Text>
      {/* <Image
        style={styles.logo}
        resizeMode="container"
        source={require("../../assets/utez.jpg")}
      /> */}
    </ScrollView>
  );
}

function CrearCuenta() {
  const navigation = useNavigation();
  return (
    <Text style={styles.textRegister}>
      ¿Aún no tienes cuenta?{" "}
      <Text
        style={styles.btnRegister}
        onPress={() => navigation.navigate("register")}>
        Regístrate aquí
      </Text>
    </Text>
  );
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 400,
    alignSelf: "center",
  },
  viewContainer: {
    marginHorizontal: 40
  },
  textRegister: {
    marginTop: 15,
    marginHorizontal: 10
  },
  btnRegister: {
    color: "#fcb823",
    fontWeight: "bold",
  },
  divider: {
    backgroundColor: "#fcb823",
    margin: 40,
  },
});
