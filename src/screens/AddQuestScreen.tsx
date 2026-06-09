// src/screens/AddQuestScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import api from '../api/api';
import { RootStackParamList } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'AddQuest'> };

export default function AddQuestScreen({ navigation }: Props) {
  const [cultura, setCultura] = useState('');
  const [setor, setSetor] = useState('');
  const [criticidade, setCriticidade] = useState('');

  const handleCreate = async () => {
    if (!cultura || !setor || !criticidade) {
      Alert.alert("Campo Vazio", "Por favor, preencha todos os campos da anomalia.");
      return;
    }

    try {
      await api.post('/ocorrencias', { 
        cultura, 
        setor, 
        criticidade: criticidade.charAt(0).toUpperCase() + criticidade.slice(1).toLowerCase() 
      });
      
      // Feedback de Sucesso
      Alert.alert("Sucesso", "Ocorrência registrada e satélite atualizado!");
      navigation.goBack();
      
    } catch (error) {
      // Feedback de Erro
      Alert.alert("Erro", "Falha na conexão com o servidor. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Cultura Afetada:</Text>
      <TextInput style={styles.input} placeholder="ex: Soja" placeholderTextColor="#45A29E" onChangeText={setCultura} />
      
      <Text style={styles.label}>Setor da Propriedade:</Text>
      <TextInput style={styles.input} placeholder="ex: Setor Norte" placeholderTextColor="#45A29E" onChangeText={setSetor} />
      
      <Text style={styles.label}>Criticidade (Baixa, Média, Alta):</Text>
      <TextInput style={styles.input} placeholder="ex: Alta" placeholderTextColor="#45A29E" onChangeText={setCriticidade} />
      
      <TouchableOpacity style={styles.button} onPress={handleCreate}>
        <Text style={styles.buttonText}>REGISTRAR OCORRÊNCIA</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B132B', padding: 20 },
  label: { color: '#E9C46A', marginBottom: 5, fontWeight: 'bold' },
  input: { backgroundColor: '#1C2541', color: '#FFF', padding: 15, borderRadius: 8, marginBottom: 20, borderWidth: 1, borderColor: '#45A29E' },
  button: { backgroundColor: '#F4A261', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#0B132B', fontWeight: 'bold' }
});