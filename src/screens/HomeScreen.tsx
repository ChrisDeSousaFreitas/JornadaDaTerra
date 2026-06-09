import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> };

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jornada da Terra</Text>
      <View style={styles.card}>
        <Text style={styles.text}>🛰️ Satélite: Ativo</Text>
        <Text style={styles.text}>Status: Monitorando Fazenda Boa Vista</Text>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Quests')}>
        <Text style={styles.btnText}>Ver Alertas</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B132B', alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: 30, color: '#E9C46A', marginBottom: 20 },
  card: { backgroundColor: '#1C2541', padding: 20, borderRadius: 10, width: '80%', marginBottom: 30 },
  text: { color: '#FFF', marginBottom: 5 },
  btn: { backgroundColor: '#F4A261', padding: 15, borderRadius: 8 },
  btnText: { color: '#0B132B', fontWeight: 'bold' }
});