<<<<<<< HEAD
import { create } from "zustand";

const usePlaceStore = create((set) => ({
  filter: "",
  setFilter: (newFilter) => set({ filter: newFilter }),
  selectedPlace: null,
  setSelectedPlace: (place) => set({ selectedPlace: place }),
=======
import { create } from 'zustand';

const usePlaceStore = create((set) => ({
  filter: '',
  setFilter: (newFilter) => set({ filter: newFilter }),
  selectedCategory: null,
  setSelectedCategory: (category) => set({ selectedCategory: category }),
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
}));

export default usePlaceStore;