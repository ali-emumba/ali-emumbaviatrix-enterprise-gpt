import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://18.117.145.73:5000/api/v1",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
