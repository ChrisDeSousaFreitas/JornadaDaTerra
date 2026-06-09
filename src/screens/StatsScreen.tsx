import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function StatsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Variação Mágica / Umidade</Text>
      <LineChart
        data={{ labels: ["Seg", "Ter", "Qua", "Qui", "Sex"], datasets: [{ data: [60, 65, 58, 70, 62] }] }}
        width={Dimensions.get("window").width - 50} 
        height={240} 
        chartConfig={chartConfig}
        bezier
        style={styles.chart}
      />
    </View>
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
  container: { flex: 1, backgroundColor: '#0B1221', padding: 25, alignItems: 'center' }, 
  title: { color: '#00E5FF', fontSize: 20, fontWeight: 'bold', marginBottom: 30, textTransform: 'uppercase', letterSpacing: 1 },
  chart: { borderRadius: 12, borderWidth: 1, borderColor: '#45A29E' }
});