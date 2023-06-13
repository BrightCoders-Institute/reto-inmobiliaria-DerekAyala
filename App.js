import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar,NativeModules,  Platform } from 'react-native';
const { StatusBarManager } = NativeModules;
import CardInfo from './components/cardinfo';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
        <CardInfo/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  }
});
