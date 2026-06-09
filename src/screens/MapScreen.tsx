import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      {/* Overlay Superior */}
      <View style={styles.hudOverlay}>
        <Ionicons name="scan-circle-outline" size={24} color="#00FF66" style={{ marginRight: 10 }} />
        <View>
          <Text style={styles.hudText}>ESCANEAMENTO ORBITAL ATIVO</Text>
          <Text style={styles.hudSub}>Altitude do Satélite: 750km</Text>
        </View>
      </View>

      {/* O Mapa */}
      <View style={styles.mapContainer}>
        <MapView 
          style={styles.map} 
          initialRegion={{ latitude: -23.55, longitude: -46.63, latitudeDelta: 0.05, longitudeDelta: 0.05 }}
          userInterfaceStyle="dark"
        >
          <Marker 
            coordinate={{ latitude: -23.55, longitude: -46.63 }} 
            title="Fazenda Boa Vista" 
            description="Centro de Comando Agrícola" 
            pinColor="#00E5FF" 
          />
        </MapView>
      </View>

      {/* Overlay Inferior (Coordenadas) */}
      <View style={styles.bottomOverlay}>
        <Text style={styles.coordText}>LAT: 23° 33' 01" S  |  LON: 46° 37' 58" W</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#0B1221', padding: 15 }, 
  hudOverlay: { position: 'absolute', top: 30, left: 20, right: 20, zIndex: 10, backgroundColor: 'rgba(11, 18, 33, 0.9)', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#00FF66', flexDirection: 'row', alignItems: 'center' },
  hudText: { color: '#00FF66', fontWeight: 'bold', letterSpacing: 1, fontSize: 14 },
  hudSub: { color: '#45A29E', fontSize: 10, marginTop: 2 },
  mapContainer: { flex: 1, borderRadius: 15, overflow: 'hidden', borderWidth: 2, borderColor: '#45A29E', marginTop: 80, marginBottom: 60 },
  map: { width: '100%', height: '100%' },
  bottomOverlay: { position: 'absolute', bottom: 25, left: 20, right: 20, backgroundColor: '#1F2833', padding: 10, borderRadius: 5, alignItems: 'center', borderWidth: 1, borderColor: '#45A29E' },
  coordText: { color: '#FFF', fontFamily: 'monospace', fontSize: 12 }
});