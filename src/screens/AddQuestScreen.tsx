import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import api from '../api/api';
import { RootStackParamList } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'AddQuest'> };

export default function AddQuestScreen({ navigation }: Props) {
  const [cultura, setCultura] = useState('');
  const [setor, setSetor] = useState('');
  const [criticidade, setCriticidade] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCreate = async () => {
    if (!cultura || !setor || !criticidade) {
      Alert.alert("Erro de Validação", "Todos os parâmetros são obrigatórios.");
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post('/ocorrencias', { 
        cultura: cultura.trim(), 
        setor: setor.trim(), 
        criticidade: criticidade.trim() 
      });
      Alert.alert("Missão Gerada", "Anomalia registrada no sistema.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Falha Crítica", "Sinal perdido. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>[ PARÂMETRO: CULTURA ]</Text>
      <TextInput style={styles.input} placeholder="Ex: Milho Mutante" placeholderTextColor="#45A29E" onChangeText={setCultura} />
      
      <Text style={styles.label}>[ PARÂMETRO: SETOR ]</Text>
      <TextInput style={styles.input} placeholder="Ex: Zona Leste" placeholderTextColor="#45A29E" onChangeText={setSetor} />
      
      <Text style={styles.label}>[ RANK DE CRITICIDADE ]</Text>
      <TextInput style={styles.input} placeholder="Alta, Média ou Baixa" placeholderTextColor="#45A29E" onChangeText={setCriticidade} />
      
      <TouchableOpacity style={styles.button} onPress={handleCreate} disabled={isSubmitting}>
        {isSubmitting ? <ActivityIndicator color="#0B1221" /> : <Text style={styles.buttonText}>INSERIR NO RADAR</Text>}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', padding: 25 },
  label: { color: '#00E5FF', marginBottom: 8, fontWeight: 'bold', fontSize: 12, letterSpacing: 1 },
  input: { backgroundColor: '#1F2833', color: '#FFF', padding: 18, borderRadius: 8, marginBottom: 25, borderWidth: 1, borderColor: '#45A29E', fontSize: 16 },
  button: { backgroundColor: '#00E5FF', padding: 20, borderRadius: 8, alignItems: 'center', marginTop: 10, shadowColor: '#00E5FF', shadowOpacity: 0.4, shadowRadius: 8 },
  buttonText: { color: '#0B1221', fontWeight: '900', letterSpacing: 1, fontSize: 16 }
});