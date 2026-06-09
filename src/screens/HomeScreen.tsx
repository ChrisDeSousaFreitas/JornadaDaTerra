import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = { navigation: NativeStackNavigationProp<RootStackParamList, 'Home'> };

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jornada da Terra</Text>
      
      <View style={styles.card}>
        <Text style={styles.cardHeader}>🛰️ Status do Satélite: ONLINE</Text>
        <Text style={styles.text}>Propriedade: Fazenda Boa Vista</Text>
        <Text style={styles.text}>Última atualização: Agora mesmo</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.btnPrincipal} onPress={() => navigation.navigate('Quests')}>
          <Text style={styles.btnText}>Monitoramento (Quests)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecundario} onPress={() => navigation.navigate('Stats')}>
          <Text style={styles.btnTextSec}>Estatísticas (Gráficos)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecundario} onPress={() => navigation.navigate('Map')}>
          <Text style={styles.btnTextSec}>Mapa Orbital</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#0B132B', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: 20 
  },
  title: { 
    fontSize: 32, 
    color: '#E9C46A', 
    fontWeight: 'bold', 
    marginBottom: 30 
  },
  card: { 
    backgroundColor: '#1C2541', 
    padding: 20, 
    borderRadius: 12, 
    width: '100%', 
    marginBottom: 40,
    borderLeftWidth: 4,
    borderLeftColor: '#E9C46A'
  },
  cardHeader: { 
    color: '#E9C46A', 
    fontWeight: 'bold', 
    marginBottom: 10,
    fontSize: 16
  },
  text: { 
    color: '#FFF', 
    marginBottom: 5 
  },
  buttonContainer: {
    width: '100%',
    gap: 15
  },
  btnPrincipal: { 
    backgroundColor: '#F4A261', 
    padding: 18, 
    borderRadius: 10, 
    alignItems: 'center'
  },
  btnSecundario: { 
    backgroundColor: '#1C2541', 
    padding: 18, 
    borderRadius: 10, 
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F4A261'
  },
  btnText: { 
    color: '#0B132B', 
    fontWeight: 'bold',
    fontSize: 16
  },
  btnTextSec: { 
    color: '#F4A261', 
    fontWeight: 'bold',
    fontSize: 16
  }
});