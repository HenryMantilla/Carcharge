import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  Image
} from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'Estación Avenida Caracas',
  },
  {
    id: '2',
    title: 'Estación Titan Plaza',
  },
  {
    id: '3',
    title: 'Estación Plaza de las Americas',
  },
  {
    id: '4',
    title: 'Estación Calle 100',
  }
];

type ItemProps = {title: string};

const NombreEstaciones = ({title}: ItemProps) => (
  <View style={styles.item}>
    <View style={styles.stationDetails}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.stationDescription}>Distancia: 2.5 km</Text>
        <Text style={styles.stationDescription}>Tiempo estimado: 10 min</Text>
    </View>
    <Image style={styles.imageStation} source={require("../../assets/charge_station.jpg")} />
  </View>
);

const EstacionesLista = () => (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <NombreEstaciones title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flexDirection: 'row-reverse',
    backgroundColor: '#3AA8C1',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  imageStation : {
    height: 50,
    width: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  stationDetails : {
    flex: 1,
    justifyContent: 'flex-end',
    marginLeft: 5,
  },
  stationDescription : {
    paddingLeft: 10,
    fontSize: 12,
    color: "#000",
  },
});

export default EstacionesLista;