/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import SVG, { Circle } from 'react-native-svg';
import ButtonOrDash from './components/determineRoute/buttonOrDash';
import BluetoothContextProvider, { BluetoothContext } from './contexts/BluetoothContext';

const App: () => React$Node = () => {
  return (
    <BluetoothContextProvider>
        <ButtonOrDash/>
    </BluetoothContextProvider> 
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F7FB"
  },

})
export default App;
