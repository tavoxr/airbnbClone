/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

import Router from './src/navigation/Router';
import HomeScreen from './src/screens/Home';


const App: () => Node = () => {

  return (
    <>
      <Router />
    </>
  );
};

const styles = StyleSheet.create({
  container:{
    
  }
})

export default App;
