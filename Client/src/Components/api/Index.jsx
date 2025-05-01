import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

axiosInstance.interceptors.request.use(config => {
  // If the data is FormData, make sure the content type is not set
  // This allows the browser to set the correct content type with boundary
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
  }
  return config;
});

export default axiosInstance;



