import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.hudOverlay}>
        <Text style={styles.hudText}>RASTREAMENTO ATIVO</Text>
      </View>
      <MapView 
        style={styles.map} 
        initialRegion={{ latitude: -23.55, longitude: -46.63, latitudeDelta: 0.01, longitudeDelta: 0.01 }}
        userInterfaceStyle="dark"
      >
        <Marker coordinate={{ latitude: -23.55, longitude: -46.63 }} title="Fazenda Boa Vista" description="Epicentro detectado" pinColor="#FF2A54" />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#0B1221' }, 
  map: { width: '100%', height: '100%' },
  hudOverlay: { position: 'absolute', top: 20, left: 20, right: 20, zIndex: 10, backgroundColor: 'rgba(11, 18, 33, 0.8)', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#00E5FF', alignItems: 'center' },
  hudText: { color: '#00E5FF', fontWeight: 'bold', letterSpacing: 2 }
});