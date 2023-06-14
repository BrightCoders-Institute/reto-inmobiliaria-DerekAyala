import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import CardInfo from './components/cardinfo';
import styles from './styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <CardInfo />
    </SafeAreaView>
  );
}
