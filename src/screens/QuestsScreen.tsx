import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import api from '../api/api';
import { RootStackParamList, Ocorrencia } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Quests'> };

export default function QuestsScreen({ navigation }: Props) {
  const [ocorrencias, setOcorrencias] = useState<Ocorrencia[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchOcorrencias = async () => {
    try {
      const response = await api.get('/ocorrencias');
      setOcorrencias(response.data);
    } catch (error) {
      alert('Falha na sincronização dos dados.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { fetchOcorrencias(); });
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }: { item: Ocorrencia }) => (
    <TouchableOpacity 
      style={styles.card} 
      onPress={() => navigation.navigate('QuestDetail', { quest: item })}
    >
      <Text style={styles.cardTitle}>{item.cultura}</Text>
      <Text style={styles.cardText}>Setor: {item.setor} | Risco: {item.criticidade}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#E9C46A" /> : (
        <FlatList 
          data={ocorrencias} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={renderItem} // <--- Aqui é onde o FlatList chama a tua função
        />
      )}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddQuest')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B132B', padding: 15 },
  card: { backgroundColor: '#1C2541', padding: 20, borderRadius: 10, marginBottom: 15, borderLeftWidth: 5, borderLeftColor: '#F4A261' },
  cardTitle: { color: '#E9C46A', fontSize: 20, fontWeight: 'bold' },
  cardText: { color: '#FFF', marginTop: 5 },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#F4A261', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  fabText: { fontSize: 35, color: '#0B132B' }
});