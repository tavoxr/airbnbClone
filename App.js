/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
 
  useColorScheme,
  StyleSheet,
 
} from 'react-native';



import HomeScreen from './src/screens/Home';
import Post from './src/components/Post'
import feed from './assets/data/feed'
import SearchResultsScreen from './src/screens/SearchResults';
import LocationSearchScreen from './src/screens/LocationSearch';

const post1 = feed[0];

const App: () => Node = () => {

  

  return (
    <SafeAreaView style={styles.container}>
     {/* <HomeScreen/>  */}
     {/* <Post post={post1} /> */}
     {/*}  <SearchResultsScreen /> */}

     <LocationSearchScreen/>
      

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    
  }
})

export default App;
