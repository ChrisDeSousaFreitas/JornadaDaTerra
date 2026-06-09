import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
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
      "Alerta de Segurança", "Confirmar exclusão deste registro no banco de dados?",
      [
        { text: "Abortar", style: "cancel" },
        { text: "Purgar", style: "destructive", onPress: async () => {
            try {
              await api.delete(`/ocorrencias/${quest.id}`);
              navigation.navigate('Quests');
            } catch (e) {
              Alert.alert("Erro", "Falha de comunicação.");
            }
          }
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.dataBox}>
        <View style={styles.headerIcon}>
          <MaterialCommunityIcons name="satellite-variant" size={40} color="#00E5FF" />
        </View>
        <Text style={styles.title}>{quest.cultura}</Text>
        
        <View style={styles.infoRow}>
          <Ionicons name="locate-outline" size={20} color="#45A29E" />
          <Text style={styles.info}>Setor Alvo: <Text style={styles.infoHighlight}>{quest.setor}</Text></Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="warning" size={20} color="#FF2A54" />
          <Text style={styles.info}>Nível de Ameaça: <Text style={styles.rank}>{quest.criticidade.toUpperCase()}</Text></Text>
        </View>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate('EditQuest', { quest })} activeOpacity={0.7}>
          <Ionicons name="options-outline" size={20} color="#F4A261" />
          <Text style={styles.btnTextEdit}>RECALIBRAR TÁTICA</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.btnDelete} onPress={handleDelete} activeOpacity={0.7}>
          <Ionicons name="trash-bin-outline" size={20} color="#FF2A54" />
          <Text style={styles.btnTextDelete}>PURGAR REGISTRO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0B1221', padding: 25, justifyContent: 'space-between' },
  dataBox: { backgroundColor: 'rgba(31, 40, 51, 0.8)', padding: 30, borderRadius: 12, borderWidth: 1, borderColor: '#00E5FF', marginTop: 20, alignItems: 'center' },
  headerIcon: { marginBottom: 15, padding: 15, backgroundColor: 'rgba(0, 229, 255, 0.1)', borderRadius: 50 },
  title: { fontSize: 26, color: '#00E5FF', fontWeight: '900', marginBottom: 25, textTransform: 'uppercase', letterSpacing: 2 },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: 10, width: '100%', marginBottom: 15, backgroundColor: '#1F2833', padding: 15, borderRadius: 8 },
  info: { color: '#C5C6C7', fontSize: 16 },
  infoHighlight: { color: '#FFF', fontWeight: 'bold' },
  rank: { color: '#FF2A54', fontWeight: 'bold', letterSpacing: 1 },
  actions: { width: '100%', gap: 15, paddingBottom: 40 },
  btnEdit: { backgroundColor: 'transparent', flexDirection: 'row', justifyContent: 'center', padding: 20, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#F4A261', gap: 10 },
  btnDelete: { backgroundColor: 'rgba(255, 42, 84, 0.1)', flexDirection: 'row', justifyContent: 'center', padding: 20, borderRadius: 8, alignItems: 'center', borderWidth: 1, borderColor: '#FF2A54', gap: 10 },
  btnTextEdit: { color: '#F4A261', fontWeight: 'bold', letterSpacing: 1 },
  btnTextDelete: { color: '#FF2A54', fontWeight: 'bold', letterSpacing: 1 }
});