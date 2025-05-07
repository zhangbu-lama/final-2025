import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
<<<<<<< HEAD
  withCredentials: true,
});

// Add request interceptor to include auth token
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
=======
});

axiosInstance.interceptors.request.use(config => {
  // If the data is FormData, make sure the content type is not set
  // This allows the browser to set the correct content type with boundary
  if (config.data instanceof FormData) {
    config.headers['Content-Type'] = 'multipart/form-data';
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
  }
  return config;
});

<<<<<<< HEAD
export default axiosInstance;
=======
export default axiosInstance;



>>>>>>> a9a2883aa685ca9314235678934306724487af7f
