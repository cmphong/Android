/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Puzzle from './components/puzzle'
// import DemoLottie from './components/demoLottie'
// import DemoSound from './components/demoSound'

const App = () => {
  return (
    <View style={styles.container}>
      <Puzzle />
      {/* <DemoLottie /> */}
      {/* <DemoSound /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
