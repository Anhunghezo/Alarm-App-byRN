/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 *
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Platform,
  StatusBar
} from "react-native";



function App(): JSX.Element {


  return (
    <SafeAreaView style={styles.safeViewContainer}>
      <Text style={styles.Heading}> Alarm Application</Text>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  safeViewContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#78ff'
  },
  Heading: {
    color: 'white',
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center"
  }
});

export default App;
