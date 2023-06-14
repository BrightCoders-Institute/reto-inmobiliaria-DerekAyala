import React from 'react';
import { FlatList, View } from 'react-native';
import properties from '../propiedades.json';
import Card from './card';
import styles from '../styles/styles';

function CardInfo() {
  const renderCard = ({ item }) => (
    <Card
      nombre={item.nombre}
      direccion={item.direccion}
      habitaciones={item.habitaciones}
      baños={item.baños}
      superficie={item.superficie}
      renta={item.renta}
      calificacion={item.calificacion}
    />
  );

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={properties.propiedades}
        keyExtractor={((item) => item.id.toString())}
        renderItem={renderCard}
      />
    </View>
  );
}

export default CardInfo;
