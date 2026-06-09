import axios from 'axios';

// ATENÇÃO: Substitua pelo IP da sua máquina ou URL do Ngrok/Túnel
const api = axios.create({
  baseURL: 'http://192.168.15.4:3000', 
  timeout: 5000, // Evita carregamento infinito se a rede falhar
});

export default api;