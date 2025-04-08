import axios from 'axios';
import { env } from '@utils/general.utils';

const api = axios.create({
  baseURL: env.VITE_BACKEND,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default api;