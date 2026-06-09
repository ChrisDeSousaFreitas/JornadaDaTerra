import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
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
      Alert.alert("Erro de Sistema", "Falha ao sincronizar com o satélite.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchOcorrencias);
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }: { item: Ocorrencia }) => {
    const isCritical = item.criticidade.toLowerCase() === 'alta';
    return (
      <TouchableOpacity style={[styles.card, isCritical && styles.cardCritical]} onPress={() => navigation.navigate('QuestDetail', { quest: item })}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>{item.cultura}</Text>
          <Text style={[styles.rankText, isCritical && { color: '#FF2A54' }]}>RANK: {item.criticidade.toUpperCase()}</Text>
        </View>
        <Text style={styles.cardText}>Localização: {item.setor}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#00E5FF" style={{ marginTop: 50 }} />
      ) : (
        <FlatList 
          data={ocorrencias} 
          keyExtractor={(item) => item.id.toString()} 
          renderItem={renderItem}
          ListEmptyComponent={<Text style={styles.emptyText}>[ Nenhuma anomalia detectada no radar ]</Text>}
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddQuest')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', padding: 20 },
  card: { backgroundColor: '#1F2833', padding: 20, borderRadius: 8, marginBottom: 15, borderLeftWidth: 4, borderLeftColor: '#00E5FF' },
  cardCritical: { borderLeftColor: '#FF2A54', backgroundColor: 'rgba(255, 42, 84, 0.05)' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  cardTitle: { color: '#FFF', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase' },
  rankText: { color: '#F4A261', fontWeight: 'bold', fontSize: 12 },
  cardText: { color: '#C5C6C7', fontSize: 14 },
  emptyText: { color: '#45A29E', textAlign: 'center', marginTop: 80, fontSize: 16, fontStyle: 'italic' },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#00E5FF', width: 65, height: 65, borderRadius: 35, justifyContent: 'center', alignItems: 'center', shadowColor: '#00E5FF', shadowOpacity: 0.5, shadowRadius: 10, elevation: 5 },
  fabText: { fontSize: 30, color: '#0B1221', fontWeight: 'bold' }
});