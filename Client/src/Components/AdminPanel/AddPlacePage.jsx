<<<<<<< HEAD
import React, { useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, Controller } from 'react-hook-form';
import { fetchPlaces, addPlace, updatePlace, deletePlace } from '../api/Place';
import { useCategories } from '../Hooks/useCategory';
=======
import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useForm, Controller } from 'react-hook-form';
import { fetchPlaces, addPlace, updatePlace, deletePlace } from '../api/Place';
import { useCategories } from '../Hooks/useCategory'; // Import the useCategories hook
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
import usePlaceStore from '../Store/placeStore';
import {
  Container,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  CircularProgress,
  Alert,
  Box,
  Grid,
} from '@mui/material';
import Layout from './Layout';

const AdminPlaces = () => {
  const queryClient = useQueryClient();
  const { filter, setFilter, selectedCategory, setSelectedCategory } = usePlaceStore();

<<<<<<< HEAD
  const { data: places = [], isLoading: placesLoading, error: placesError } = useQuery({
=======
  // Fetch places and categories
  const { data: places, isLoading: placesLoading, error: placesError } = useQuery({
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    queryKey: ['places'],
    queryFn: fetchPlaces,
  });
  const { data: categories = [], isLoading: categoriesLoading, error: categoriesError } = useCategories();
<<<<<<< HEAD
    console.log(categories)

=======

  // Form setup with validation
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
  const { register, handleSubmit, reset, setValue, control, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      location: '',
      description: '',
      category: '',
<<<<<<< HEAD
      related_name: '',
      time_to_travel: '',
     image: null,
    },
  });

  const [openDialog, setOpenDialog] = React.useState(false);
  const [editingPlace, setEditingPlace] = React.useState(null);
  const [imagePreview, setImagePreview] = React.useState(null);

  useEffect(() => {
    console.log('Categories:', categories);
    console.log('Places:', places);
  }, [categories, places]);
=======
      timetotravel: '',
      related_name: '',
      image: null,
    },
  });

  const [openDialog, setOpenDialog] = useState(false);
  const [editingPlace, setEditingPlace] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

  // Mutations
  const addMutation = useMutation({
    mutationFn: addPlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
      reset();
      setOpenDialog(false);
      setImagePreview(null);
    },
    onError: (error) => {
<<<<<<< HEAD
      console.error('Add error:', error.response?.data || error.message);
=======
      console.error('Add error:', error);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }) => updatePlace(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
      reset();
      setOpenDialog(false);
      setEditingPlace(null);
      setImagePreview(null);
    },
    onError: (error) => {
<<<<<<< HEAD
      console.error('Update error:', error.response?.data || error.message);
=======
      console.error('Update error:', error);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deletePlace,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['places'] });
    },
    onError: (error) => {
<<<<<<< HEAD
      console.error('Delete error:', error.response?.data || error.message);
    },
  });

  
  const onSubmit = (data) => {
    console.log('Form data:', data);
=======
      console.error('Delete error:', error);
    },
  });

  // Handle form submission
  const onSubmit = (data) => {
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('location', data.location);
    formData.append('description', data.description);
<<<<<<< HEAD
    formData.append('category', data.category || '');
    formData.append('related_name', data.related_name || '');
    formData.append('time_to_travel', data.time_to_travel);
    if (data.image && data.image[0]) {
      formData.append('place_image', data.image[0]);
    }

    if (editingPlace) {
      updateMutation.mutate({ id: editingPlace._id, data: formData });
=======
    formData.append('category', data.category);
    formData.append('time_to_travel', data.timetotravel);
    formData.append('related_name', data.related_name || ''); // Ensure related_name is not undefined

    if (data.image && data.image[0]) {
      formData.append('image', data.image[0]);
    }

    // Log the form data
    console.log('Form Data:');
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }

    if (editingPlace) {
      updateMutation.mutate({ id: editingPlace.id, data: formData });
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    } else {
      addMutation.mutate(formData);
    }
  };

  // Open dialog for adding/editing
  const handleOpenDialog = (place = null) => {
    if (place) {
      setEditingPlace(place);
      setValue('name', place.name);
      setValue('location', place.location);
      setValue('description', place.description);
      setValue('category', place.category?._id || '');
<<<<<<< HEAD
      setValue('related_name', place.related_name || '');
      setValue('time_to_travel', place.time_to_travel);
=======
      setValue('timetotravel', place.time_to_travel);
      setValue('related_name', place.related_name);
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
      setImagePreview(place.image || null);
    } else {
      setEditingPlace(null);
      reset();
      setImagePreview(null);
    }
    setOpenDialog(true);
  };

<<<<<<< HEAD
=======
  // Handle delete
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this place?')) {
      deleteMutation.mutate(id);
    }
  };

<<<<<<< HEAD
=======
  // Handle image preview
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

<<<<<<< HEAD
  const filteredPlaces = Array.isArray(places)
    ? places.filter((place) => {
        const matchesFilter = place.name.toLowerCase().includes(filter.toLowerCase());
        const matchesCategory = selectedCategory ? place.category?._id === selectedCategory : true;
        return matchesFilter && matchesCategory;
      })
    : [];

=======
  // Filter places
  const filteredPlaces = Array.isArray(places?.data) ? places.data.filter((place) => {
    const matchesFilter = place.name.toLowerCase().includes(filter.toLowerCase());
    const matchesCategory = selectedCategory ? place.category?.id === selectedCategory : true;
    return matchesFilter && matchesCategory;
  }) : [];

  // Loading and error states
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
  if (placesLoading || categoriesLoading) {
    return (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (placesError) {
    return <Alert severity="error">Error loading places: {placesError.message}</Alert>;
  }

  if (categoriesError) {
    return <Alert severity="error">Error loading categories: {categoriesError.message}</Alert>;
  }

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" gutterBottom>
          Manage Places
        </Typography>

<<<<<<< HEAD
        {addMutation.isError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Error adding place: {addMutation.error.response?.data?.message || addMutation.error.message}
=======
        {/* Error Messages */}
        {addMutation.isError && (
          <Alert severity="error" sx={{ mb: 2 }}>
            Error adding place: {addMutation.error.message}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
          </Alert>
        )}
        {updateMutation.isError && (
          <Alert severity="error" sx={{ mb: 2 }}>
<<<<<<< HEAD
            Error updating place: {updateMutation.error.response?.data?.message || updateMutation.error.message}
=======
            Error updating place: {updateMutation.error.message}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
          </Alert>
        )}
        {deleteMutation.isError && (
          <Alert severity="error" sx={{ mb: 2 }}>
<<<<<<< HEAD
            Error deleting place: {deleteMutation.error.response?.data?.message || deleteMutation.error.message}
          </Alert>
        )}

=======
            Error deleting place: {deleteMutation.error.message}
          </Alert>
        )}

        {/* Filters */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        <Grid container spacing={2} sx={{ mb: 3 }}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Search by Name"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel>Category</InputLabel>
              <Select
                value={selectedCategory || ''}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                label="Category"
              >
                <MenuItem value="">All Categories</MenuItem>
<<<<<<< HEAD
                {categories.length > 0 ? (
                  categories.map((cat, index) => (
                    <MenuItem key={cat._id ?? `cat-${index}`} value={cat._id ?? ''}>
                      {cat.name ?? 'Unnamed Category'}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem disabled>No categories available</MenuItem>
                )}
=======
                {categories?.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.name}
                  </MenuItem>
                ))}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
              </Select>
            </FormControl>
          </Grid>
        </Grid>

<<<<<<< HEAD
=======
        {/* Add Place Button */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpenDialog()}
          sx={{ mb: 3 }}
        >
          Add Place
        </Button>

<<<<<<< HEAD
=======
        {/* Places Table */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Category</TableCell>
<<<<<<< HEAD
                <TableCell>Related Name</TableCell>
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
                <TableCell>Time to Travel</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
<<<<<<< HEAD
              {filteredPlaces.length > 0 ? (
                filteredPlaces.map((place) => (
                  <TableRow key={place._id}>
                    <TableCell>{place.name}</TableCell>
                    <TableCell>{place.location}</TableCell>
                    <TableCell>{place.category?.name || 'No Category'}</TableCell>
                    <TableCell>{place.related_name || 'N/A'}</TableCell>
                    <TableCell>{place.time_to_travel}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={() => handleOpenDialog(place)}
                        sx={{ mr: 1 }}
                        disabled={addMutation.isLoading || updateMutation.isLoading}
                      >
                        Edit
                      </Button>
                      <Button
                        color="error"
                        onClick={() => handleDelete(place._id)}
                        disabled={deleteMutation.isLoading}
                      >
                        {deleteMutation.isLoading && deleteMutation.variables === place._id
                          ? <CircularProgress size={20} />
                          : 'Delete'}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No places found
                  </TableCell>
                </TableRow>
              )}
=======
              {filteredPlaces?.map((place) => (
                <TableRow key={place.id}>
                  <TableCell>{place.name}</TableCell>
                  <TableCell>{place.location}</TableCell>
                  <TableCell>{place.category.name}</TableCell>
                  <TableCell>{place.time_to_travel}</TableCell>
                  <TableCell align="right">
                    <Button
                      onClick={() => handleOpenDialog(place)}
                      sx={{ mr: 1 }}
                      disabled={addMutation.isLoading || updateMutation.isLoading}
                    >
                      Edit
                    </Button>
                    <Button
                      color="error"
                      onClick={() => handleDelete(place.id)}
                      disabled={deleteMutation.isLoading}
                    >
                      {deleteMutation.isLoading && deleteMutation.variables === place.id
                        ? <CircularProgress size={20} />
                        : 'Delete'}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
            </TableBody>
          </Table>
        </TableContainer>

<<<<<<< HEAD
=======
        {/* Add/Edit Dialog */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>{editingPlace ? 'Edit Place' : 'Add Place'}</DialogTitle>
          <DialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Name"
                {...register('name', {
                  required: 'Name is required',
                  maxLength: { value: 100, message: 'Name must be 100 characters or less' },
                })}
                fullWidth
                margin="normal"
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Location"
                {...register('location', {
                  required: 'Location is required',
                  maxLength: { value: 100, message: 'Location must be 100 characters or less' },
                })}
                fullWidth
                margin="normal"
                error={!!errors.location}
                helperText={errors.location?.message}
              />
              <TextField
                label="Description"
<<<<<<< HEAD
                {...register('description', {
                  required: 'Description is required',
                })}
=======
                {...register('description')}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
                fullWidth
                margin="normal"
                multiline
                rows={4}
<<<<<<< HEAD
                error={!!errors.description}
                helperText={errors.description?.message}
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
              />
              <FormControl fullWidth margin="normal" error={!!errors.category}>
                <InputLabel>Category</InputLabel>
                <Controller
                  name="category"
                  control={control}
<<<<<<< HEAD
                  render={({ field: { onChange, value } }) => (
                    <Select
                      value={value || ''}
                      onChange={(e) => {
                        console.log('Selected category:', e.target.value);
                        onChange(e.target.value);
                      }}
                      label="Category"
                    >
                      <MenuItem value="">None</MenuItem>
                      {categories.length > 0 ? (
                        categories.map((cat, index) => (
                          <MenuItem key={cat._id ?? `cat-${index}`} value={cat._id ?? ''}>
                            {cat.name ?? 'Unnamed Category'}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>No categories available</MenuItem>
                      )}
=======
                  rules={{ required: 'Category is required' }}
                  render={({ field }) => (
                    <Select {...field} label="Category">
                      {Array.isArray(categories) && categories.map((cat) => (
                        <MenuItem key={cat._id} value={cat._id}>
                          {cat.name}
                        </MenuItem>
                      ))}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
                    </Select>
                  )}
                />
                {errors.category && (
                  <Typography color="error" variant="caption">
                    {errors.category.message}
                  </Typography>
                )}
              </FormControl>
              <TextField
                label="Related Name"
                {...register('related_name', {
<<<<<<< HEAD
=======
                  required: 'Related name is required',
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
                  maxLength: { value: 100, message: 'Related name must be 100 characters or less' },
                })}
                fullWidth
                margin="normal"
                error={!!errors.related_name}
                helperText={errors.related_name?.message}
              />
              <TextField
                label="Time to Travel"
<<<<<<< HEAD
                {...register('time_to_travel', {
=======
                {...register('timetotravel', {
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
                  required: 'Time to travel is required',
                  maxLength: { value: 50, message: 'Time to travel must be 50 characters or less' },
                })}
                fullWidth
                margin="normal"
<<<<<<< HEAD
                error={!!errors.time_to_travel}
                helperText={errors.time_to_travel?.message}
              />
              <Box sx={{ mt: 2 }}>
                <input
                  type="file"
                  accept="image/*"
                  {...register('image', {
                    required: editingPlace ? false : 'Image is required',
                  })}
                  onChange={handleImageChange}
                />
                {errors.image && (
                  <Typography color="error" variant="caption">
                    {errors.image.message}
                  </Typography>
                )}
=======
                error={!!errors.timetotravel}
                helperText={errors.timetotravel?.message}
              />
              <Box sx={{ mt: 2 }}>
                <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                  Image (Optional)
                </Typography>
                <input
                  type="file"
                  accept="image/*"
                  {...register('image')}
                  onChange={handleImageChange}
                />
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
                {imagePreview && (
                  <Box mt={2}>
                    <img
                      src={imagePreview}
                      alt="Preview"
                      style={{ maxWidth: '100%', maxHeight: '150px', borderRadius: '4px' }}
                    />
                  </Box>
                )}
              </Box>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} disabled={addMutation.isLoading || updateMutation.isLoading}>
              Cancel
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              color="primary"
              disabled={addMutation.isLoading || updateMutation.isLoading}
            >
              {addMutation.isLoading || updateMutation.isLoading ? (
<<<<<<< HEAD
                <CircularProgress size={20} />
=======
                < circularProgress size={20} />
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
              ) : editingPlace ? (
                'Update'
              ) : (
                'Add'
              )}
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Layout>
  );
};

export default AdminPlaces;
