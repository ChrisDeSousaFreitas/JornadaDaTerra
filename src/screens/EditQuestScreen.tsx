import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
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
  const [cultura, setCultura] = useState(quest.cultura);
  const [setor, setSetor] = useState(quest.setor);
  const [criticidade, setCriticidade] = useState(quest.criticidade);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleUpdate = async () => {
    setIsUpdating(true);
    try {
      await api.put(`/ocorrencias/${quest.id}`, { cultura, setor, criticidade });
      Alert.alert("Atualizado", "Dados táticos reconfigurados.");
      navigation.navigate('Quests');
    } catch (error) {
      Alert.alert("Erro", "Não foi possível atualizar o banco de dados.");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>[ RECALIBRAR: CULTURA ]</Text>
      <TextInput style={styles.input} value={cultura} onChangeText={setCultura} />
      
      <Text style={styles.label}>[ RECALIBRAR: SETOR ]</Text>
      <TextInput style={styles.input} value={setor} onChangeText={setSetor} />
      
      <Text style={styles.label}>[ ATUALIZAR RANK ]</Text>
      <TextInput style={styles.input} value={criticidade} onChangeText={setCriticidade} />
      
      <TouchableOpacity style={styles.button} onPress={handleUpdate} disabled={isUpdating}>
        {isUpdating ? <ActivityIndicator color="#0B1221" /> : <Text style={styles.buttonText}>CONFIRMAR MUDANÇAS</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', padding: 25 },
  label: { color: '#F4A261', marginBottom: 8, fontWeight: 'bold', fontSize: 12, letterSpacing: 1 },
  input: { backgroundColor: '#1F2833', color: '#FFF', padding: 18, borderRadius: 8, marginBottom: 25, borderWidth: 1, borderColor: '#F4A261', fontSize: 16 },
  button: { backgroundColor: '#F4A261', padding: 20, borderRadius: 8, alignItems: 'center', marginTop: 10 },
  buttonText: { color: '#0B1221', fontWeight: '900', letterSpacing: 1, fontSize: 16 }
});