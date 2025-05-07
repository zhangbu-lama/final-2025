import axiosInstance from './Index';

// Fetch all details
export const fetchDetails = async () => {
  const response = await axiosInstance.get('/treks/all/');
<<<<<<< HEAD
  return response.data.data;
};

// Fetch detail by ID
export const fetchDetailById = async (_id) => {
  const response = await axiosInstance.get(`/treks/${_id}`);
  return response.data.data;
=======
  return response.data;
};

// Fetch detail by ID
export const fetchDetailById = async (id) => {
  const response = await axiosInstance.get(`/treks/${id}/`);
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

// Fetch details by place ID
export const fetchDetailsByPlace = async (placeId) => {
  const response = await axiosInstance.get(`/treks/place/${placeId}`);
<<<<<<< HEAD
  return response.data.data;
=======
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

// Add detail
export const addDetail = async (data) => {
  const response = await axiosInstance.post('/treks/add', data);
<<<<<<< HEAD
  return response.data.data;
=======
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

// Update detail
export const updateDetail = async (id, data) => {
<<<<<<< HEAD
  const response = await axiosInstance.put(`/treks/update${id}`, data);
  return response.data.data;
=======
  const response = await axiosInstance.put(`/treks/update/${id}`, data);
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

// Delete detail
export const deleteDetail = async (id) => {
<<<<<<< HEAD
  const response = await axiosInstance.delete(`/treks/delete${id}`);
  return response.data.data;
=======
  const response = await axiosInstance.delete(`/treks/delete/${id}`);
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};
