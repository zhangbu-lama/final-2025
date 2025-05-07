import axiosInstance from './Index';

export const getAllClimbingGear = async () => {
  const response = await axiosInstance.get('/climbing-gear');
  return response.data.data;
};

export const getClimbingGearById = async (id) => {
  const response = await axiosInstance.get(`/climbing-gear/${id}`);
  return response.data.data;
};

export const createClimbingGear = async (gearData) => {
  const response = await axiosInstance.post('/climbing-gear', gearData);
  return response.data.data;
};

export const updateClimbingGear = async (id, gearData) => {
  const response = await axiosInstance.put(`/climbing-gear/${id}`, gearData);
  return response.data.data;
};

export const deleteClimbingGear = async (id) => {
  const response = await axiosInstance.delete(`/climbing-gear/${id}`);
  return response.data.data;
}; 