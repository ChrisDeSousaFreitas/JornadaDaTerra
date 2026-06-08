import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import api from '../api/api';
import { RootStackParamList } from '../types';

type Props = { 
  navigation: NativeStackNavigationProp<RootStackParamList, 'QuestDetail'>;
  route: RouteProp<RootStackParamList, 'QuestDetail'>;
};

export default function QuestDetailScreen({ route, navigation }: Props) {
  const { quest } = route.params;

  const handleDelete = async () => {
    await api.delete(`/quests/${quest.id}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{quest.title}</Text>
      <Text style={styles.info}>Setor: {quest.sector} | Rank: {quest.rank}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('EditQuest', { quest })}><Text style={styles.btnText}>Editar Tática</Text></TouchableOpacity>
      <TouchableOpacity style={[styles.btn, {backgroundColor: '#FC2626'}]} onPress={handleDelete}><Text style={styles.btnText}>Selar Portal (Apagar)</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0C10', padding: 20 },
  title: { fontSize: 30, color: '#66FCF1', fontWeight: 'bold', marginBottom: 10 },
  info: { color: '#FFF', fontSize: 18, marginBottom: 30 },
  btn: { padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 15, backgroundColor: '#B826FC' },
  btnText: { color: '#FFF', fontWeight: 'bold', textTransform: 'uppercase' }
});