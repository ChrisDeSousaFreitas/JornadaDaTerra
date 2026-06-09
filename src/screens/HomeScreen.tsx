import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, ScrollView } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> };

export default function HomeScreen({ navigation }: Props) {
  // Animação de pulsação para o "Radar"
  const pulseAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, { toValue: 1.2, duration: 1000, useNativeDriver: true }),
        Animated.timing(pulseAnim, { toValue: 1, duration: 1000, useNativeDriver: true })
      ])
    ).start();
  }, [pulseAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Barra de Topo */}
      <View style={styles.topBar}>
        <Ionicons name="menu" size={30} color="#00E5FF" />
        <Text style={styles.systemText}>JORNADA DA TERRA_OS</Text>
        <Ionicons name="settings-outline" size={26} color="#00E5FF" />
      </View>

      {/* Título Principal com Ícone */}
      <View style={styles.titleContainer}>
        <MaterialCommunityIcons name="satellite-uplink" size={50} color="#00E5FF" />
        <Text style={styles.title}>NEXUS ORBITAL</Text>
      </View>
      
      {/* HUD de Status (Mais complexo e visual) */}
      <View style={styles.hudCard}>
        <View style={styles.hudHeaderRow}>
          <Text style={styles.hudHeader}>[ TELEMETRIA ATIVA ]</Text>
          <Animated.View style={[styles.radarBlip, { transform: [{ scale: pulseAnim }] }]} />
        </View>
        <Text style={styles.text}><Text style={styles.highlight}>Alvo:</Text> Fazenda Boa Vista (Setor Alpha)</Text>
        <Text style={styles.text}><Text style={styles.highlight}>Satélite:</Text> CBERS-4A (Órbita Baixa)</Text>
        <Text style={styles.text}><Text style={styles.highlight}>Lat/Lon:</Text> -23.5505 / -46.6333</Text>
        
        <View style={styles.divider} />
        <Text style={styles.logText}>{'>'} Analisando umidade do solo... OK</Text>
        <Text style={styles.logText}>{'>'} Varredura de pragas... ALERTA DETECTADO</Text>
      </View>

      {/* Botões de Navegação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnPrimary} onPress={() => navigation.navigate('Quests')} activeOpacity={0.7}>
          <MaterialCommunityIcons name="shield-alert-outline" size={24} color="#FF2A54" />
          <Text style={styles.btnTextPrimary}>MONITORAR ANOMALIAS</Text>
        </TouchableOpacity>

        <View style={styles.rowButtons}>
          <TouchableOpacity style={[styles.btnSecondary, { flex: 1, marginRight: 10 }]} onPress={() => navigation.navigate('Stats')} activeOpacity={0.7}>
            <Ionicons name="analytics" size={20} color="#45A29E" />
            <Text style={styles.btnTextSecondary}>DADOS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnSecondary, { flex: 1 }]} onPress={() => navigation.navigate('Map')} activeOpacity={0.7}>
            <Ionicons name="map-outline" size={20} color="#45A29E" />
            <Text style={styles.btnTextSecondary}>RADAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#0B1221', padding: 25, justifyContent: 'center' },
  topBar: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginBottom: 40, marginTop: 20 },
  systemText: { color: '#45A29E', fontSize: 12, letterSpacing: 3, fontWeight: 'bold' },
  titleContainer: { alignItems: 'center', marginBottom: 30 },
  title: { fontSize: 30, color: '#00E5FF', fontWeight: '900', marginTop: 10, textAlign: 'center', textShadowColor: 'rgba(0, 229, 255, 0.5)', textShadowOffset: { width: 0, height: 0 }, textShadowRadius: 10 },
  hudCard: { backgroundColor: 'rgba(31, 40, 51, 0.8)', padding: 20, borderRadius: 12, width: '100%', marginBottom: 30, borderWidth: 1, borderColor: '#00E5FF' },
  hudHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  hudHeader: { color: '#00E5FF', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 },
  radarBlip: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#00FF66', shadowColor: '#00FF66', shadowOpacity: 1, shadowRadius: 8 },
  text: { color: '#C5C6C7', fontSize: 14, marginBottom: 8 },
  highlight: { color: '#F4A261', fontWeight: 'bold' },
  divider: { height: 1, backgroundColor: 'rgba(69, 162, 158, 0.3)', marginVertical: 10 },
  logText: { color: '#45A29E', fontSize: 12, fontFamily: 'monospace', marginTop: 2 },
  buttonContainer: { width: '100%', gap: 15 },
  rowButtons: { flexDirection: 'row', justifyContent: 'space-between' },
  btnPrimary: { backgroundColor: 'rgba(255, 42, 84, 0.1)', flexDirection: 'row', padding: 20, borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#FF2A54', gap: 10 },
  btnSecondary: { backgroundColor: 'transparent', flexDirection: 'row', padding: 18, borderRadius: 8, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#45A29E', gap: 8 },
  btnTextPrimary: { color: '#FF2A54', fontWeight: '900', fontSize: 16, letterSpacing: 1 },
  btnTextSecondary: { color: '#45A29E', fontWeight: 'bold', fontSize: 14, letterSpacing: 1 }
});