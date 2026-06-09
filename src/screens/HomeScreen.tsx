import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> };

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.systemText}>SYSTEM ALIVE</Text>
      <Text style={styles.title}>JORNADA DA TERRA</Text>
      
      <View style={styles.hudCard}>
        <Text style={styles.hudHeader}>[Sincronização Orbital]</Text>
        <View style={styles.statusRow}>
          <View style={styles.statusDot} />
          <Text style={styles.text}>Status: Conectado</Text>
        </View>
        <Text style={styles.text}>Alvo: Fazenda Boa Vista</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Quests')}>
          <Text style={styles.btnTextPrimary}>ACESSAR MISSÕES (MONITORAMENTO)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('Stats')}>
          <Text style={styles.btnTextSecondary}>ABRIR TELEMETRIA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecondary} onPress={() => navigation.navigate('Map')}>
          <Text style={styles.btnTextSecondary}>RADAR DE CAMPO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', alignItems: 'center', justifyContent: 'center', padding: 25 },
  systemText: { color: '#45A29E', fontSize: 12, letterSpacing: 3, marginBottom: 5, fontWeight: 'bold' },
  title: { fontSize: 34, color: '#00E5FF', fontWeight: '900', marginBottom: 40, textAlign: 'center', textShadowColor: '#00E5FF', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 10 },
  hudCard: { backgroundColor: 'rgba(31, 40, 51, 0.8)', padding: 25, borderRadius: 12, width: '100%', marginBottom: 40, borderWidth: 1, borderColor: '#00E5FF' },
  hudHeader: { color: '#00E5FF', fontWeight: 'bold', marginBottom: 15, fontSize: 14, letterSpacing: 1 },
  statusRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  statusDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#00FF66', marginRight: 10, shadowColor: '#00FF66', shadowOpacity: 0.8, shadowRadius: 5 },
  text: { color: '#C5C6C7', fontSize: 16, marginBottom: 5 },
  buttonContainer: { width: '100%', gap: 15 },
  btnPrimary: { backgroundColor: 'transparent', padding: 20, borderRadius: 8, alignItems: 'center', borderWidth: 2, borderColor: '#FF2A54' },
  btnSecondary: { backgroundColor: 'transparent', padding: 18, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#45A29E' },
  btnTextPrimary: { color: '#FF2A54', fontWeight: '900', fontSize: 16, letterSpacing: 1 },
  btnTextSecondary: { color: '#45A29E', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 }
});