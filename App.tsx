import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';

import HomeScreen from './src/screens/HomeScreen';
import QuestsScreen from './src/screens/QuestsScreen';
import AddQuestScreen from './src/screens/AddQuestScreen';
import QuestDetailScreen from './src/screens/QuestDetailScreen';
import EditQuestScreen from './src/screens/EditQuestScreen';
import StatsScreen from './src/screens/StatsScreen';
import MapScreen from './src/screens/MapScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#0B1221" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0B1221' },
          headerTintColor: '#00E5FF',
          headerTitleStyle: { fontWeight: '900' },
          headerShadowVisible: false,
          contentStyle: { backgroundColor: '#0B1221' }
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quests" component={QuestsScreen} options={{ title: 'Painel de Missões' }} />
        <Stack.Screen name="AddQuest" component={AddQuestScreen} options={{ title: 'Reportar Anomalia' }} />
        <Stack.Screen name="QuestDetail" component={QuestDetailScreen} options={{ title: 'Detalhes do Alerta' }} />
        <Stack.Screen name="EditQuest" component={EditQuestScreen} options={{ title: 'Ajustar Tática' }} />
        <Stack.Screen name="Stats" component={StatsScreen} options={{ title: 'Telemetria' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Radar Orbital' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}