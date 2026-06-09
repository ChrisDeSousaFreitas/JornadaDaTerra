import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ocorrencia } from '../types';

// Simula o tempo de resposta de um servidor real (600ms)
const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

const getOcorrencias = async (): Promise<Ocorrencia[]> => {
  const data = await AsyncStorage.getItem('@ocorrencias');
  return data ? JSON.parse(data) : [];
};

// Objeto "api" que imita perfeitamente o Axios
const api = {
  get: async (url: string) => {
    await delay(600); 
    return { data: await getOcorrencias() };
  },
  
  post: async (url: string, payload: any) => {
    await delay(600);
    const items = await getOcorrencias();
    const newItem = { id: Date.now().toString(), ...payload };
    await AsyncStorage.setItem('@ocorrencias', JSON.stringify([...items, newItem]));
    return { data: newItem };
  },
  
  put: async (url: string, payload: any) => {
    await delay(600);
    const id = url.split('/').pop();
    const items = await getOcorrencias();
    const updatedItems = items.map(item => item.id === id ? { ...item, ...payload } : item);
    await AsyncStorage.setItem('@ocorrencias', JSON.stringify(updatedItems));
    return { data: payload };
  },
  
  delete: async (url: string) => {
    await delay(600);
    const id = url.split('/').pop();
    const items = await getOcorrencias();
    const filteredItems = items.filter(item => item.id !== id);
    await AsyncStorage.setItem('@ocorrencias', JSON.stringify(filteredItems));
    return { data: { success: true } };
  }
};

export default api;