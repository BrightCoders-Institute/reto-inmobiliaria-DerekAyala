import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import properties from '../propiedades.json'
import Card from './card'


const CardInfo = () => {
    const renderCard = ({item} ) => (
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
      <View style={styles.container}>
        <FlatList
          data={properties.propiedades }
          keyExtractor={(item => item.id.toString())}
          renderItem={renderCard}
        />
      </View>
    )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CardInfo;
