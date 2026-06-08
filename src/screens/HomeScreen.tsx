import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> };

export default function HomeScreen({ navigation }: Props) {
  const [telemetry, setTelemetry] = useState({ temp: 22, rad: 0.5, coords: '-23.55, -46.63' });

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetry({
        temp: 20 + Math.floor(Math.random() * 5),
        rad: parseFloat((Math.random() * 1.5).toFixed(2)),
        coords: `-23.55${Math.floor(Math.random() * 9)}, -46.63${Math.floor(Math.random() * 9)}`
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Jornada da Terra</Text>
        <Text style={styles.location}>Santuário: Fazenda Boa Vista</Text>
        
        <View style={styles.telemetryBox}>
          <Text style={styles.telemetryTitle}>🛰️ Satélite Sentinel-B Ativo</Text>
          <Text style={styles.telemetryData}>GPS: {telemetry.coords}</Text>
          <Text style={styles.telemetryData}>Temperatura Solo: {telemetry.temp}°C</Text>
          <Text style={styles.telemetryData}>Flutuação Energética: <Text style={{color: telemetry.rad > 1 ? '#FC2626' : '#66FCF1'}}>{telemetry.rad} µSv</Text></Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quests')}>
          <Text style={styles.buttonText}>Analisar Fendas Dimensionais</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0C10' },
  overlay: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 40, fontWeight: '900', color: '#66FCF1', marginBottom: 10, textShadowColor: '#66FCF1', textShadowRadius: 10 },
  location: { fontSize: 18, color: '#B826FC', fontWeight: 'bold', marginBottom: 30 },
  telemetryBox: { backgroundColor: '#1F2833', padding: 15, borderRadius: 8, borderWidth: 1, borderColor: '#45A29E', marginBottom: 40, width: '100%' },
  telemetryTitle: { color: '#B826FC', fontWeight: 'bold', fontSize: 16, marginBottom: 10 },
  telemetryData: { color: '#C5C6C7', fontSize: 14, marginBottom: 5 },
  button: { borderColor: '#B826FC', borderWidth: 2, paddingVertical: 15, paddingHorizontal: 30, borderRadius: 8 },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase' }
});