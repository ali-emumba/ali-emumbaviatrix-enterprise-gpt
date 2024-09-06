import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://172.16.2.234:5000/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
