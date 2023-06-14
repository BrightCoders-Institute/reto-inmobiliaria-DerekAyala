import React from 'react';
import {
  Text, View, Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
import styles from '../styles/styles';

function Card({
  nombre,
  direccion,
  habitaciones,
  baños,
  superficie,
  renta,
}) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.infoContainer}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={{ uri: 'https://www.smartertravel.com/wp-content/uploads/2014/09/stm540f217ac5b9d20140909.jpg' }}
          />
        </View>
        <View style={styles.info}>
          <Text style={[styles.title, styles.bold]}>{nombre}</Text>
          <View style={styles.iconText}>
            <Ionicons name="location-outline" size={20} color="#8a8c8d" />
            <Text style={[styles.text, styles.gray]}>{direccion}</Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconText}>
              <Ionicons name="bed-outline" size={20} color="#8a8c8d" />
              <Text style={[styles.text, styles.bold]}>{habitaciones}</Text>
            </View>
            <View style={styles.iconText}>
              <MaterialCommunityIcons name="bathtub-outline" size={20} color="#8a8c8d" />
              <Text style={[styles.text, styles.bold]}>{baños}</Text>
            </View>
            <View style={styles.iconText}>
              <MaterialCommunityIcons name="set-square" size={20} color="#8a8c8d" />
              <Text style={[styles.text, styles.bold]}>{superficie}</Text>
            </View>
          </View>
          <View style={styles.row}>
            <Text style={[styles.title, styles.bold]}>{renta}</Text>
            <MaterialCommunityIcons style={styles.icon} name="cards-heart" size={16} color="#fff" />
          </View>
        </View>
      </View>
    </View>
  );
}

Card.propTypes = {
  nombre: PropTypes.string.isRequired,
  direccion: PropTypes.string.isRequired,
  habitaciones: PropTypes.string.isRequired,
  baños: PropTypes.string.isRequired,
  superficie: PropTypes.string.isRequired,
  renta: PropTypes.string.isRequired,
};

export default Card;
