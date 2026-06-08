import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import api from '../api/api';
import { RootStackParamList } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'AddQuest'> };

export default function AddQuestScreen({ navigation }: Props) {
  const [title, setTitle] = useState('');
  const [sector, setSector] = useState('');
  const [rank, setRank] = useState('');

  const handleCreate = async () => {
    if (!title || !sector || !rank) return;
    try {
      await api.post('/quests', { title, sector, rank: rank.toUpperCase() });
      navigation.goBack();
    } catch (error) {
      alert('Erro.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholderTextColor="#45A29E" placeholder="Anomalia (ex: Praga Glacial)..." onChangeText={setTitle} />
      <TextInput style={styles.input} placeholderTextColor="#45A29E" placeholder="Setor de impacto..." onChangeText={setSector} />
      <TextInput style={styles.input} placeholderTextColor="#45A29E" placeholder="Rank (S, A, B, C)..." onChangeText={setRank} maxLength={1} />
      <TouchableOpacity style={styles.button} onPress={handleCreate}><Text style={styles.buttonText}>Registar</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0C10', padding: 20 },
  input: { backgroundColor: '#1F2833', color: '#FFF', padding: 15, borderRadius: 8, marginBottom: 20, borderWidth: 1, borderColor: '#45A29E' },
  button: { backgroundColor: '#B826FC', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold' }
});