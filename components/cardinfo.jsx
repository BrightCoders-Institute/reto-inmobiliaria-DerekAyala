import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import properties from '../propiedades.json'
import card from './card'


const cardinfo = () => {
    const renderCard = ({item} )=> (
        <card
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
      <FlatList
        style={styles.container}
        data={properties.propiedades }
        keyExtractor={(item => item.id.toString())}
        renderItem={renderCard}
      />
    )
};

const styles = StyleSheet.create({
  
});

export default cardinfo;
