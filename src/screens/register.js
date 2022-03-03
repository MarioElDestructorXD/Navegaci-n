import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import RegisterForm from '../components/acount/FormRegister'
import {Icon, Input,Button} from 'react-native-elements'
import { ScrollView } from 'react-native-web'
import FormRegister from '../components/acount/FormRegister'

export default function Register() {
  return (
    <ScrollView>
      <Image
        style={styles.logo}
        resizeMode="contain"
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png",
        }}
      />

      <View style={styles.viewForm}>
        <FormRegister></FormRegister>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    height: 200,
    width: 400,
    alignSelf: "center",
  },
  viewForm:{
    marginHorizontal:40
  }
})