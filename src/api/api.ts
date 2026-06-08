import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.3:3000', //Entre as duas barras '//' e o ':3000' insira seu IP local.
});

export default api;