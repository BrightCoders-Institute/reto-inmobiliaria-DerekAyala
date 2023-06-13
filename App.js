import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, NativeModules, Image } from 'react-native';
const { StatusBarManager } = NativeModules;

export default function App() {
  const propiedades = {
    nombre: 'The Willows',
    direccioon: '3517 W. Gray St. Utica',
    habitaciones: '3',
    baños: '2',
    superficie: '230 ft²',
    renta: '$440/m',
    calificacion: '4.7'
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  }
});
