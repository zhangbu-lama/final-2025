import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchPlaces, addPlace, updatePlace, deletePlace } from '../api/Place';

export const usePlaces = () => {
  return useQuery({
    queryKey: ['places'],
    queryFn: fetchPlaces,
  });
};

export const useAddPlace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addPlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
    },
  });
};

export const useUpdatePlace = () => {
  const queryClient = useQueryClient();
  return useMutation({
<<<<<<< HEAD
    mutationFn: ({ _id, data }) => updatePlace(_id, data),
=======
    mutationFn: ({ id, data }) => updatePlace(id, data),
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
    },
  });
};

export const useDeletePlace = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deletePlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
    },
  });
};