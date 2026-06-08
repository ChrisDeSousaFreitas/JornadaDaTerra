import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import api from '../api/api';
import { RootStackParamList, Quest } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Quests'> };

export default function QuestsScreen({ navigation }: Props) {
  const [quests, setQuests] = useState<Quest[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchQuests = async () => {
    try {
      const response = await api.get('/quests');
      setQuests(response.data);
    } catch (error) {
      alert('Falha na comunicação orbital.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => { fetchQuests(); });
    return unsubscribe;
  }, [navigation]);

  const renderItem = ({ item }: { item: Quest }) => {
    const rankColor = item.rank === 'S' ? '#FC2626' : (item.rank === 'A' ? '#B826FC' : '#66FCF1');
    return (
      <TouchableOpacity style={[styles.card, { borderLeftColor: rankColor }]} onPress={() => navigation.navigate('QuestDetail', { quest: item })}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardInfo}>Zona: {item.sector} | Rank: <Text style={{color: rankColor, fontWeight: 'bold'}}>{item.rank}</Text></Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? <ActivityIndicator size="large" color="#B826FC" /> : (
        <FlatList data={quests} keyExtractor={(item) => item.id.toString()} renderItem={renderItem} />
      )}
      <TouchableOpacity style={styles.fab} onPress={() => navigation.navigate('AddQuest')}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0C10', padding: 15 },
  card: { backgroundColor: '#1F2833', padding: 20, borderRadius: 8, marginBottom: 15, borderLeftWidth: 5 },
  cardTitle: { color: '#66FCF1', fontSize: 20, fontWeight: 'bold' },
  cardInfo: { color: '#C5C6C7', marginTop: 5 },
  fab: { position: 'absolute', bottom: 30, right: 30, backgroundColor: '#B826FC', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
  fabText: { fontSize: 35, color: '#FFF' }
});