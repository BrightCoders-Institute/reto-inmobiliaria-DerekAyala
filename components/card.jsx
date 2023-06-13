import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import {Ionicons} from 'react-native-vector-icons/Ionicons';
import {MaterialCommunityIcons} from 'react-native-vector-icons/MaterialCommunityIcons';

const card = ({
  nombre,
  direccion,
  habitaciones,
  baños,
  superficie,
  renta,
  calificacion,
  }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.Container}>
        <View style={styles.row}>
          <View style={styles.imageContainer}>
            <Image
              style= {styles.img}
              source={ {uri: 'https://www.smartertravel.com/wp-content/uploads/2014/09/stm540f217ac5b9d20140909.jpg'}}/>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{nombre}</Text>
            <View style={styles.iconText}>
              <Ionicons style={styles.icon} name="location-outline" size={20} color="#f5fdff"/>
              <Text>{habitaciones}</Text>
            </View>
            <Text style={styles.address}>{direccion}</Text>
            <View style={styles.row}>
              <View style={styles.iconText}>
                <Ionicons style={styles.icon} name="bed-outline" size={20} color="#f5fdff"/>
                <Text>{habitaciones}</Text>
              </View>
              <View style={styles.iconText}>
                <MaterialCommunityIcons style={styles.icon} name="bathtub-outline" size={20} color="#f5fdff"/>
                <Text>{baños}</Text>
              </View>
              <View style={styles.iconText}>
                <MaterialCommunityIcons style={styles.icon} name="set-square" size={20} color="#f5fdff"/>
                <Text>{superficie}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text>{renta}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: Platform.OS === 'android' ? StatusBarManager.HEIGHT : 0,
  }
});

export default card;
