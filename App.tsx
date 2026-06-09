import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';

// Importação das Telas (sem as notificações)
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
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0B132B' },
          headerTintColor: '#E9C46A',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quests" component={QuestsScreen} options={{ title: 'Monitoramento' }} />
        <Stack.Screen name="AddQuest" component={AddQuestScreen} options={{ title: 'Nova Ocorrência' }} />
        <Stack.Screen name="QuestDetail" component={QuestDetailScreen} options={{ title: 'Detalhes do Alerta' }} />
        <Stack.Screen name="EditQuest" component={EditQuestScreen} options={{ title: 'Ajustar Medidas' }} />
        <Stack.Screen name="Stats" component={StatsScreen} options={{ title: 'Estatísticas' }} />
        <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Mapa Orbital' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}