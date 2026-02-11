import axios from 'axios';

const configAxios = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};
export const privateApi = axios.create({ ...configAxios });
export const publicApi = axios.create({ ...configAxios, withCredentials: true });
