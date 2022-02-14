import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import Navigation from './src/navigations/Navigation';
import Index from './src/screens/Index';
import Profile from './src/screens/Profile';


export default function App() {
  return (
    <Navigation/>
  );
}

