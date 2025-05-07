import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
<<<<<<< HEAD
import { useCreateBooking } from "../Hooks/useBooking";
import { useNavigate } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email_address: "",
    phone: "",
    start_date: "",
    travel_date: "",
    group_size: 1,
=======

const BookingForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    start_date: "",
    travel_date: "",
    group_size: 2,
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    destination: "",
    special_requirements: "",
  });

<<<<<<< HEAD
  const { mutate: addBooking, isLoading } = useCreateBooking();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      ...formData,
      status: "Pending",
    };

    addBooking(bookingData, {
      onSuccess: () => {
        toast.success("Booking submitted successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email_address: "",
          phone: "",
          start_date: "",
          travel_date: "",
          group_size: 1,
          destination: "",
          special_requirements: "",
        });

        // Redirect to /esewapayment after short delay
        setTimeout(() => {
          navigate("/esewapayment");
        }, 1500);
      },
      onError: (error) => {
        toast.error(`Failed to submit booking: ${error.message}`);
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Book Your Trip</h2>
        <p className="text-center text-gray-500 mb-8">Fill in the details below to confirm your reservation.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="first_name"
              placeholder="First Name"
              value={formData.first_name}
              onChange={handleChange}
              className="input-style"
              required
            />
            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              value={formData.last_name}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email_address"
              placeholder="Email"
              value={formData.email_address}
              onChange={handleChange}
              className="input-style"
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Start Date</label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="input-style"
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Travel Date</label>
              <input
                type="date"
                name="travel_date"
                value={formData.travel_date}
                onChange={handleChange}
                className="input-style"
                required
=======
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send data to backend API
    try {
      const response = await fetch("http://127.0.0.1:8000/bookings/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your booking has been submitted successfully!");
        // Optionally, clear the form after successful submission
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          start_date: "",
          travel_date: "",
          group_size: 2,
          destination: "",
          special_requirements: "",
        });
      } else {
        const errorData = await response.json();
        toast.error(errorData.detail || "There was an issue with your booking submission.");
      }
    } catch (error) {
      toast.error("An error occurred while submitting your booking.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-500 to-blue-500 py-12 px-6 sm:px-8 lg:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 space-y-6">
        <h2 className="text-3xl font-semibold text-center text-indigo-700">Book Your Adventure</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* First and Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Travel and Start Date */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="start_date" className="block text-sm font-medium text-gray-700">
                Start Date
              </label>
              <input
                type="date"
                id="start_date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="travel_date" className="block text-sm font-medium text-gray-700">
                Travel Date
              </label>
              <input
                type="date"
                id="travel_date"
                name="travel_date"
                value={formData.travel_date}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
              />
            </div>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="number"
              name="group_size"
              placeholder="Group Size"
              value={formData.group_size}
              onChange={handleChange}
              className="input-style"
              min="1"
              required
            />
            <input
              type="text"
              name="destination"
              placeholder="Destination"
              value={formData.destination}
              onChange={handleChange}
              className="input-style"
              required
            />
          </div>

          <textarea
            name="special_requirements"
            rows="4"
            placeholder="Any special requirements?"
            value={formData.special_requirements}
            onChange={handleChange}
            className="input-style w-full"
          />

          <div className="text-center">
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-2 rounded-md shadow-md transition"
              disabled={isLoading}
            >
              {isLoading ? "Submitting..." : "Submit Booking"}
            </button>
          </div>
        </form>

        <ToastContainer />
      </div>
=======
          {/* Group Size and Destination */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="group_size" className="block text-sm font-medium text-gray-700">
                Group Size
              </label>
              <input
                type="number"
                id="group_size"
                name="group_size"
                value={formData.group_size}
                onChange={handleChange}
                min="1"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label htmlFor="special_requirements" className="block text-sm font-medium text-gray-700">
              Special Requirements
            </label>
            <textarea
              id="special_requirements"
              name="special_requirements"
              value={formData.special_requirements}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
              placeholder="Any special requirements or preferences?"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>

      {/* Toast Container */}
      <ToastContainer />
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    </div>
  );
};

export default BookingForm;
<<<<<<< HEAD
=======


>>>>>>> a9a2883aa685ca9314235678934306724487af7f
