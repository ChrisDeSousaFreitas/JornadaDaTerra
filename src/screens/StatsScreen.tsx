import React from 'react';
import { View, Text, Dimensions, StyleSheet, ScrollView } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

export default function StatsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <MaterialCommunityIcons name="weather-partly-rainy" size={30} color="#00E5FF" />
        <Text style={styles.title}>Análise Espectral e Umidade</Text>
      </View>

      <Text style={styles.subtitle}>[ Média pluviométrica dos últimos 5 dias ]</Text>

      <LineChart
        data={{ labels: ["Seg", "Ter", "Qua", "Qui", "Sex"], datasets: [{ data: [60, 65, 58, 70, 62] }] }}
        width={Dimensions.get("window").width - 50} 
        height={220} 
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />

      {/* Widgets Adicionais para encher a tela de informações úteis */}
      <View style={styles.widgetGrid}>
        <View style={styles.widget}>
          <Ionicons name="thermometer" size={24} color="#F4A261" />
          <Text style={styles.widgetLabel}>Temp. Média</Text>
          <Text style={styles.widgetValue}>24.5 °C</Text>
        </View>
        <View style={styles.widget}>
          <MaterialCommunityIcons name="sprout" size={24} color="#00FF66" />
          <Text style={styles.widgetLabel}>Saúde do Solo</Text>
          <Text style={styles.widgetValue}>89% (Estável)</Text>
        </View>
        <View style={styles.widget}>
          <Ionicons name="warning-outline" size={24} color="#FF2A54" />
          <Text style={styles.widgetLabel}>Zonas Críticas</Text>
          <Text style={styles.widgetValue}>2 Setores</Text>
        </View>
        <View style={styles.widget}>
          <MaterialCommunityIcons name="signal-variant" size={24} color="#00E5FF" />
          <Text style={styles.widgetLabel}>Conexão Orbital</Text>
          <Text style={styles.widgetValue}>Latência: 45ms</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const chartConfig = { 
  backgroundColor: '#1F2833',
  backgroundGradientFrom: '#1F2833', 
  backgroundGradientTo: '#0B1221',
  decimalPlaces: 0,
  color: (opacity = 1) => `rgba(0, 229, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(197, 198, 199, ${opacity})`,
  propsForDots: { r: "5", strokeWidth: "2", stroke: "#FF2A54" }
};

const styles = StyleSheet.create({ 
  container: { flexGrow: 1, backgroundColor: '#0B1221', padding: 25, alignItems: 'center' }, 
  header: { flexDirection: 'row', alignItems: 'center', marginBottom: 10, gap: 10 },
  title: { color: '#00E5FF', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 },
  subtitle: { color: '#45A29E', fontSize: 12, marginBottom: 25, fontFamily: 'monospace' },
  chart: { borderRadius: 12, borderWidth: 1, borderColor: '#45A29E', paddingRight: 10 },
  widgetGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', width: '100%', marginTop: 30 },
  widget: { width: '47%', backgroundColor: '#1F2833', padding: 15, borderRadius: 8, marginBottom: 15, borderWidth: 1, borderColor: 'rgba(69, 162, 158, 0.3)', alignItems: 'center' },
  widgetLabel: { color: '#C5C6C7', fontSize: 12, marginTop: 8, marginBottom: 4 },
  widgetValue: { color: '#FFF', fontSize: 14, fontWeight: 'bold' }
});