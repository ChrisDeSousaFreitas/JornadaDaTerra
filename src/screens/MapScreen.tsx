import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: -23.55, longitude: -46.63, latitudeDelta: 0.01, longitudeDelta: 0.01 }}>
        <Marker coordinate={{ latitude: -23.55, longitude: -46.63 }} title="Fazenda Boa Vista" />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({ container: { flex: 1 }, map: { width: '100%', height: '100%' } });