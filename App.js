import React from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import CardInfo from './components/cardinfo';
// location
// bed-outline
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style='auto'></StatusBar>
      <View>
      <CardInfo/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
