import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import api from '../api/api';
import { RootStackParamList } from '../types';

type Props = { 
  navigation: NativeStackNavigationProp<RootStackParamList, 'EditQuest'>;
  route: RouteProp<RootStackParamList, 'EditQuest'>;
};

export default function EditQuestScreen({ route, navigation }: Props) {
  const { quest } = route.params;
  const [title, setTitle] = useState(quest.title);
  const [sector, setSector] = useState(quest.sector);
  const [rank, setRank] = useState(quest.rank);

  const handleUpdate = async () => {
    await api.put(`/quests/${quest.id}`, { title, sector, rank: rank.toUpperCase() });
    navigation.navigate('Quests');
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />
      <TextInput style={styles.input} value={sector} onChangeText={setSector} />
      <TextInput style={styles.input} value={rank} onChangeText={setRank} maxLength={1} />
      <TouchableOpacity style={styles.button} onPress={handleUpdate}><Text style={styles.buttonText}>Atualizar</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B0C10', padding: 20 },
  input: { backgroundColor: '#1F2833', color: '#FFF', padding: 15, borderRadius: 8, marginBottom: 20 },
  button: { backgroundColor: '#B826FC', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', textTransform: 'uppercase' }
});