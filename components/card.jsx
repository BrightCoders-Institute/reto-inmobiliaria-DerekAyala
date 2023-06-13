import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

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
        <View>
          <Text style={styles.title}>{nombre}</Text>
          <View style={styles.iconText}>
            <Text style={styles.address}>{direccion}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconText}>
              <Text style={styles.text}>{habitaciones}</Text>
            </View>
            <View style={styles.iconText}>
              <Text style={styles.text}>{baños}</Text>
            </View>
            <View style={styles.iconText}>
              <Text style={styles.text}>{superficie}</Text>
            </View>
          </View>
          <View style={[styles.row]}>
            <Text style={styles.text}>{renta}</Text>
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
    justifyContent: 'space-between'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    columnGap: 10,
  },
  title: {
    fontWeight: '500',
    fontSize: 20
  },
  text:{
    fontWeight: '500',
    fontSize: 15,
  },
  address: {
    color: '#8a8c8d',
  },
});

export default Card;
