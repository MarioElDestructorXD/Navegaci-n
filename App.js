import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, LogBox } from 'react-native';
import 'react-native-gesture-handler'
import Navigation from './src/navigations/Navigation';
 import {firebaseApp} from './src/utils/firebase';
 import * as firebase from 'firebase';
import React, {useEffect} from 'react';

export default function App() {
  console.disableYellowBox=true;
  // useEffect(() => {
  //   firebase.auth().onAuthStateChanged((user) =>{
  //     console.log(user);
  //   });
  // }, []);
  
  return (
    <Navigation/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
