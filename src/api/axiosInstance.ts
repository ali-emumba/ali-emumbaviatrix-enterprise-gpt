import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.2.233:8000/api/v1',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
