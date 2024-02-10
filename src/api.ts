import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // Remplacez par l'URL de votre backend
  headers: {
    'Content-Type': 'application/json',
  },
});

// Ajouter un intercepteur pour chaque requête


export default api;
