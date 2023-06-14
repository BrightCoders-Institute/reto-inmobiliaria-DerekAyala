import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Card = ({
  nombre,
  direccion,
  habitaciones,
  baños,
  superficie,
  renta,
  }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style= {styles.img}
            source={ {uri: 'https://www.smartertravel.com/wp-content/uploads/2014/09/stm540f217ac5b9d20140909.jpg'}}/>
        </View>
        <View style={styles.info}>
          <Text style={[styles.title, styles.bold]}>{nombre}</Text>
          <View style={styles.iconText}>
            <Ionicons name="location-outline" size={20} color="#8a8c8d"/>
            <Text style={[styles.text,{color:'#8a8c8d'}]}>{direccion}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconText}>
              <Ionicons name="bed-outline" size={20} color="#8a8c8d"/>
              <Text style={[styles.text, styles.bold]}>{habitaciones}</Text>
            </View>
            <View style={styles.iconText}>
              <MaterialCommunityIcons name="bathtub-outline" size={20} color="#8a8c8d"/>
              <Text style={[styles.text, styles.bold]}>{baños}</Text>
            </View>
            <View style={styles.iconText}>
              <MaterialCommunityIcons name="set-square" size={20} color="#8a8c8d"/>
              <Text style={[styles.text, styles.bold]}>{superficie}</Text>
            </View>
          </View>
          <View style={[styles.row]}>
            <Text style={[styles.title, styles.bold]}>{renta}</Text>
            <MaterialCommunityIcons style={styles.icon} name="cards-heart" size={16} color="#fff"/>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10,
    backgroundColor: '#f5fdff',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  img: {
    width: 110,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 15
  },
  iconText:{
    flexDirection: 'row',
    columnGap: 10,
  },
  info:{
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 20
  },
  bold:{
    fontWeight: '500',
  },
  text:{
    fontSize: 14,
  },
  address: {
    color: '#8a8c8d',
  },
  icon:{
    backgroundColor: '#00b074',
    padding: 5,
    borderRadius: 15
  }
});

export default Card;
