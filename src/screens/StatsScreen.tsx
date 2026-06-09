import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Umidade</Text>
      <LineChart
        data={{ labels: ["Seg", "Ter", "Qua", "Qui", "Sex"], datasets: [{ data: [60, 65, 58, 70, 62] }] }}
        width={Dimensions.get("window").width - 40} height={220} chartConfig={chartConfig}
      />
    </View>
  );
}
const chartConfig = { backgroundGradientFrom: '#1C2541', color: () => '#E9C46A' };
const styles = StyleSheet.create({ container: { flex: 1, backgroundColor: '#0B132B', padding: 20 }, title: { color: '#FFF', fontSize: 20 } });