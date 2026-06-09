import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
      Alert.alert("Erro de Validação", "Insira todos os parâmetros táticos.");
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post('/ocorrencias', { cultura: cultura.trim(), setor: setor.trim(), criticidade: criticidade.trim() });
      Alert.alert("Sucesso", "Dados transmitidos ao Nexus Orbital.");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha no uplink de dados.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <View style={styles.labelRow}>
          <MaterialCommunityIcons name="sprout" size={16} color="#00E5FF" />
          <Text style={styles.label}>ESPÉCIE / CULTURA</Text>
        </View>
        <TextInput style={styles.input} placeholder="Ex: Milho, Soja..." placeholderTextColor="#45A29E" onChangeText={setCultura} />
      </View>
      
      <View style={styles.inputGroup}>
        <View style={styles.labelRow}>
          <Ionicons name="location" size={16} color="#00E5FF" />
          <Text style={styles.label}>COORDENADA / SETOR</Text>
        </View>
        <TextInput style={styles.input} placeholder="Ex: Setor Norte" placeholderTextColor="#45A29E" onChangeText={setSetor} />
      </View>
      
      <View style={styles.inputGroup}>
        <View style={styles.labelRow}>
          <Ionicons name="warning" size={16} color="#FF2A54" />
          <Text style={[styles.label, { color: '#FF2A54' }]}>NÍVEL DE AMEAÇA</Text>
        </View>
        <TextInput style={[styles.input, { borderColor: 'rgba(255, 42, 84, 0.5)' }]} placeholder="Alta, Média ou Baixa" placeholderTextColor="#45A29E" onChangeText={setCriticidade} />
      </View>
      
      <TouchableOpacity style={styles.button} onPress={handleCreate} disabled={isSubmitting} activeOpacity={0.8}>
        {isSubmitting ? <ActivityIndicator color="#0B1221" /> : (
          <View style={styles.btnContent}>
            <Ionicons name="cloud-upload-outline" size={20} color="#0B1221" />
            <Text style={styles.buttonText}>TRANSMITIR DADOS</Text>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', padding: 25 },
  inputGroup: { marginBottom: 25 },
  labelRow: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 8 },
  label: { color: '#00E5FF', fontWeight: 'bold', fontSize: 12, letterSpacing: 1 },
  input: { backgroundColor: '#1F2833', color: '#FFF', padding: 16, borderRadius: 8, borderWidth: 1, borderColor: '#45A29E', fontSize: 16 },
  button: { backgroundColor: '#00E5FF', padding: 20, borderRadius: 8, marginTop: 10, shadowColor: '#00E5FF', shadowOpacity: 0.4, shadowRadius: 8 },
  btnContent: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10 },
  buttonText: { color: '#0B1221', fontWeight: '900', letterSpacing: 1, fontSize: 16 }
});