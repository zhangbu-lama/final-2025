import axiosInstance from './Index';

export const registerUser = async (data) => {
<<<<<<< HEAD
    const response = await axiosInstance.post('/v1/auth/signup', data);
=======
    const response = await axiosInstance.post('/signup/register', data);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    return response.data;
};

export const loginUser = async (data) => {
<<<<<<< HEAD
    const response = await axiosInstance.post('/v1/auth/login', data);
=======
    const response = await axiosInstance.post('/signup/login', data);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    return response.data;
};

export const logoutUser = async () => {
<<<<<<< HEAD
    const response = await axiosInstance.post('/v1/auth/logout', {});
=======
    const response = await axiosInstance.post('/signup/logout', {});
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    return response.data;
};
