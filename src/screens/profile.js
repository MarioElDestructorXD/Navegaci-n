import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "react-native-elements";

const profile = () => {
  return (
    <View style={styles.userInfo}>
      <Text>Información de Usuario</Text>
      <Text>Opciones de Cuenta</Text>
      <Button
        title="Cerrar Sesion"
        buttonStyle={styles.btnCloseSesion}
        titleStyle={styles.btnTitle}
      />
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({});
