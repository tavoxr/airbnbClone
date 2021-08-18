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
import feed from './assets/data/feed'

const post1 = feed[0];

const App: () => React$Node = () => {

  

  return (
    <SafeAreaView style={styles.container}>
     {/* <HomeScreen/>  */}
      <Post post={post1} />
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    
  }
})

export default App;
