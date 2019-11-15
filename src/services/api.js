import axios from 'axios';

const api = axios.create({
  baseURL: 'https://some-domain.com/api/clientes/',
  timeout: 1000,
  headers: { Authorization: 'SXBkOU5GSX1OwoFReUlKQn9OVj4+Tl94eUlwWsKBTWxJOVBLZzZiSkp+TVZnfU9xRXw='},
});

export default api;
