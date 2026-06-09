import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
      Alert.alert("Erro de Conexão", "Sinal do satélite perdido.");
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
      <TouchableOpacity 
        style={[styles.card, isCritical && styles.cardCritical]} 
        onPress={() => navigation.navigate('QuestDetail', { quest: item })}
        activeOpacity={0.8}
      >
        <View style={styles.cardHeader}>
          <View style={styles.titleRow}>
            <MaterialCommunityIcons 
              name={isCritical ? "alert-decagram" : "leaf"} 
              size={20} 
              color={isCritical ? "#FF2A54" : "#00FF66"} 
            />
            <Text style={styles.cardTitle}>{item.cultura}</Text>
          </View>
          <Text style={[styles.rankText, isCritical && { color: '#FF2A54' }]}>
            [{item.criticidade.toUpperCase()}]
          </Text>
        </View>
        <Text style={styles.cardText}><Text style={styles.label}>Coordenada (Setor):</Text> {item.setor}</Text>
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
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="checkmark-done-circle-outline" size={60} color="#45A29E" />
              <Text style={styles.emptyText}>Nenhuma anomalia detectada no momento.</Text>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 100 }}
        />
      )}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddQuest')} activeOpacity={0.8}>
        <MaterialCommunityIcons name="radar" size={30} color="#0B1221" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', padding: 20 },
  card: { backgroundColor: 'rgba(31, 40, 51, 0.6)', padding: 20, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: '#45A29E', borderLeftWidth: 4, borderLeftColor: '#00E5FF' },
  cardCritical: { borderLeftColor: '#FF2A54', borderColor: 'rgba(255, 42, 84, 0.4)', backgroundColor: 'rgba(255, 42, 84, 0.05)' },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  cardTitle: { color: '#FFF', fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 },
  rankText: { color: '#F4A261', fontWeight: 'bold', fontSize: 12, letterSpacing: 1 },
  cardText: { color: '#C5C6C7', fontSize: 14 },
  label: { color: '#45A29E', fontSize: 12 },
  emptyContainer: { alignItems: 'center', marginTop: 80 },
  emptyText: { color: '#45A29E', textAlign: 'center', marginTop: 15, fontSize: 14, letterSpacing: 1 },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#00E5FF', width: 65, height: 65, borderRadius: 35, justifyContent: 'center', alignItems: 'center', shadowColor: '#00E5FF', shadowOpacity: 0.6, shadowRadius: 10, elevation: 5 }
});