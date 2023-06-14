import React from 'react';
import {
  Text, View, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from '../styles/styles';
import IconText from './icontext';

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
          <IconText ViewStyle={[styles.iconText]} icon="map-marker-outline" text={direccion} textStyles={[styles.text, styles.gray]} size={20} color="#8a8c8d" />
          <View style={styles.row}>
            <IconText ViewStyle={[styles.iconText]} icon="bed-king-outline" text={habitaciones} textStyles={[styles.text, styles.bold]} size={20} color="#8a8c8d" />
            <IconText ViewStyle={[styles.iconText]} icon="bathtub-outline" text={baños} textStyles={[styles.text, styles.bold]} size={20} color="#8a8c8d" />
            <IconText ViewStyle={[styles.iconText]} icon="set-square" text={superficie} textStyles={[styles.text, styles.bold]} size={20} color="#8a8c8d" />
          </View>
          <IconText ViewStyle={[styles.row, styles.rowReverse]} iconStyle={styles.icon} icon="cards-heart" text={renta} textStyles={[styles.title,styles.bold]} size={16} color="#fff" />
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
