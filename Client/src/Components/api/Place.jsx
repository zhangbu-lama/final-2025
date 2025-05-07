import axiosInstance from './Index';

// Fetch places
export const fetchPlaces = async () => {
  const response = await axiosInstance.get('/places/all');
<<<<<<< HEAD
  return response.data.data;
=======
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

// Add place
export const addPlace = async (data) => {
<<<<<<< HEAD
    console.log("data",data)
  const response = await axiosInstance.post('/places/add', data);
  return response.data.data;
=======
  const response = await axiosInstance.post('/places/add', data);
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

// Update place
export const updatePlace = async (id, data) => {
  const response = await axiosInstance.put(`/places/update/${id}`, data);
<<<<<<< HEAD
  return response.data.data;
=======
  return response.data;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
};

// Delete place
export const deletePlace = async (id) => {
  const response = await axiosInstance.delete(`/places/delete/${id}`);
<<<<<<< HEAD
  return response.data.data;
};
=======
  return response.data;
};
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
