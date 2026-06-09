import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types';
import HomeScreen from './src/screens/HomeScreen';
import QuestsScreen from './src/screens/QuestsScreen';
import AddQuestScreen from './src/screens/AddQuestScreen';
import QuestDetailScreen from './src/screens/QuestDetailScreen';
import EditQuestScreen from './src/screens/EditQuestScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#0B132B' }, headerTintColor: '#E9C46A' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quests" component={QuestsScreen} options={{ title: 'Monitoramento' }} />
        <Stack.Screen name="AddQuest" component={AddQuestScreen} options={{ title: 'Nova Ocorrência' }} />
        <Stack.Screen name="QuestDetail" component={QuestDetailScreen} options={{ title: 'Detalhes do Alerta' }} />
        <Stack.Screen name="EditQuest" component={EditQuestScreen} options={{ title: 'Ajustar Medidas' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}