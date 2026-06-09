import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
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

  const handleDelete = () => {
    Alert.alert(
      "Atenção", "Deseja purgar esta anomalia do sistema?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", style: "destructive", onPress: async () => {
            try {
              await api.delete(`/ocorrencias/${quest.id}`);
              navigation.navigate('Quests');
            } catch (e) {
              Alert.alert("Erro", "Falha ao apagar o registro.");
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataBox}>
        <Text style={styles.title}>{quest.cultura}</Text>
        <Text style={styles.info}>Setor Alvo: {quest.setor}</Text>
        <Text style={styles.info}>Nível de Ameaça: <Text style={styles.rank}>{quest.criticidade.toUpperCase()}</Text></Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate('EditQuest', { quest })}>
          <Text style={styles.btnText}>RECALCULAR TÁTICA</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnDelete} onPress={handleDelete}>
          <Text style={styles.btnTextDelete}>SELAR PORTAL (APAGAR)</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', padding: 25, justifyContent: 'space-between' },
  dataBox: { backgroundColor: '#1F2833', padding: 30, borderRadius: 12, borderWidth: 1, borderColor: '#45A29E', marginTop: 20 },
  title: { fontSize: 32, color: '#00E5FF', fontWeight: '900', marginBottom: 20, textTransform: 'uppercase' },
  info: { color: '#C5C6C7', fontSize: 18, marginBottom: 15 },
  rank: { color: '#FF2A54', fontWeight: 'bold' },
  actions: { width: '100%', gap: 15, paddingBottom: 40 },
  btnEdit: { backgroundColor: 'transparent', padding: 20, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#F4A261' },
  btnDelete: { backgroundColor: 'rgba(255, 42, 84, 0.1)', padding: 20, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#FF2A54' },
  btnText: { color: '#F4A261', fontWeight: 'bold', letterSpacing: 1 },
  btnTextDelete: { color: '#FF2A54', fontWeight: 'bold', letterSpacing: 1 }
});