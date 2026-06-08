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
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#0B0C10' }, 
          headerTintColor: '#B826FC', 
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quests" component={QuestsScreen} options={{ title: 'Portais Ativos' }} />
        <Stack.Screen name="AddQuest" component={AddQuestScreen} options={{ title: 'Registar Anomalia' }} />
        <Stack.Screen name="QuestDetail" component={QuestDetailScreen} options={{ title: 'Detalhes da Fenda' }} />
        <Stack.Screen name="EditQuest" component={EditQuestScreen} options={{ title: 'Reajustar Tática' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}