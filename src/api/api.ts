// src/api/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://SEU_IP_AQUI:3000', // ou o link do ngrok
});

// CERTIFICA-TE QUE ESTÁ ASSIM:
export default api;

import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveOffline = async (key: string, data: any) => {
  await AsyncStorage.setItem(key, JSON.stringify(data));
};
export const getOffline = async (key: string) => {
  const data = await AsyncStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};