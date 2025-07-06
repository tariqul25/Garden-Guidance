// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://garden-hub-server-xi.vercel.app',
});

export default axiosInstance;
