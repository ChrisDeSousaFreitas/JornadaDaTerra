// src/api/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.4:3000', // entre as duas barras (//) e o número da porta (3000) deve ser o IP do seu computador
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