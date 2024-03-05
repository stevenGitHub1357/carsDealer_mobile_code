import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://carsdealerwebservice-production-1aa2.up.railway.app/', // Remplacez par l'URL de votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});


export default api;
