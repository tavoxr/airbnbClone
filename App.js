/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
 
  useColorScheme,
  StyleSheet,
 
} from 'react-native';



import HomeScreen from './src/screens/Home';
import Post from './src/components/Post'

const App: () => React$Node = () => {

  return (
    <SafeAreaView style={styles.container}>
     {/* <HomeScreen/>  */}
      <Post/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    
  }
})

export default App;
