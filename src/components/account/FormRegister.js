import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {Input, Icon, Button} from 'react-native-elements'

const FormRegister = () => {
  return (
    <View style = {styles.formContainer}>
      <Input
      placeholder = "Correo ELectronico"
      containerStyle = {styles.inputForm}
      />
      <Input
      placeholder = "Contraseña"
      containerStyle = {styles.inputForm}
      password = {true}
      secureTextEntry = {true}
      />
      <Input
      placeholder = "Repetir Contraseña"
      containerStyle = {styles.inputForm}
      password = {true}
      secureTextEntry = {true}
      />
      <Button
      title = "Registrar"
      containerStyle = {styles.containerBtnRegister}
      buttonStyle = {styles.btnRegister}
      />
    </View>
  )
}

export default FormRegister

const styles = StyleSheet.create({
    formContainer:{
        marginTop: 30,
    },
    inputForm:{
        width: "100%",
        marginTop:20
    },
    containerBtnRegister:{
        marginTop : 20,
        width: "95%"
    },
    btnRegister: {
        backgroundColor: "#fcb823"
    }
})