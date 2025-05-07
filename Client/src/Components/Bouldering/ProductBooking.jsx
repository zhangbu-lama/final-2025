import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductStore from "../Store/useProductstore";
import useAuthStore from "../Store/AuthStore";
import useBookingStore from "../Store/bookingStore";
import { v4 as uuidv4 } from "uuid";
import { X } from "lucide-react";
import Down from "../HomePage/Down";
import axios from "../api/Index";

export default function ProductBooking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addBooking } = useProductStore();
  const { user, isAdmin } = useAuthStore();
  const { fetchUserBookings } = useBookingStore();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState({
    userName: "",
    contact: "",
    startDate: "",
    endDate: "",
  });
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [showPayment, setShowPayment] = useState(false);
  const [bookingId, setBookingId] = useState(null);

  useEffect(() => {
    if (isAdmin) {
      setToast({
        show: true,
        message: "Admin users cannot make bookings. Please use a regular user account.",
        type: "error",
      });
      setTimeout(() => navigate("/bouldering"), 2000);
      return;
    }

    const fetchProduct = async () => {
      try {
        setIsLoading(true);
        let foundProduct = products.find((p) => p.id === id || p._id === id);
        
        if (!foundProduct) {
          const response = await axios.get(`/products/${id}`);
          foundProduct = response.data;
        }
        
        if (!foundProduct) {
          setToast({
            show: true,
            message: "Product not found",
            type: "error",
          });
          setTimeout(() => navigate("/bouldering"), 2000);
          return;
        }
        
        setProduct(foundProduct);
      } catch (error) {
        setToast({
          show: true,
          message: "Failed to load product details",
          type: "error",
        });
        setTimeout(() => navigate("/bouldering"), 2000);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, products, navigate, isAdmin]);

  useEffect(() => {
    if (!user) {
      navigate("/userlogin");
    }
  }, [user, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isAdmin) {
      setToast({
        show: true,
        message: "Admin users cannot make bookings. Please use a regular user account.",
        type: "error",
      });
      return;
    }

    try {
      const booking = {
        userName: form.userName,
        contact: form.contact,
        startDate: form.startDate,
        endDate: form.endDate,
        productId: id,
        productName: product?.name || "Unknown Product",
        status: "pending",
        createdAt: new Date().toISOString(),
      };

      addBooking(booking);
      setShowPayment(true);
    } catch (error) {
      setToast({
        show: true,
        message: "Failed to create booking. Please try again.",
        type: "error",
      });
    }
  };

  const handlePaymentClick = () => {
    if (isAdmin) {
      setToast({
        show: true,
        message: "Admin users cannot make bookings. Please use a regular user account.",
        type: "error",
      });
      return;
    }

    navigate("/esewapayment", { 
      state: { 
        amount: product.price,
        bookingId: bookingId,
        returnUrl: "/bouldering/booking/" + id
      } 
    });
  };

  const closeToast = () => {
    setToast({ show: false, message: "", type: "" });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
      </div>
    );
  }

  if (!product || !user || isAdmin) return null;

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-8 relative">
        {toast.show && (
          <div className="fixed top-4 right-4 z-50 animate-slide-in">
            <div
              className={`${
                toast.type === "error" ? "bg-red-600" : "bg-teal-600"
              } text-white px-6 py-4 rounded-xl shadow-lg flex items-center justify-between max-w-sm`}
            >
              <span>{toast.message}</span>
              <button onClick={closeToast} className="ml-4 hover:text-teal-200">
                <X size={20} />
              </button>
            </div>
          </div>
        )}

        {!showPayment ? (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">
              Book: {product.name}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  value={form.userName}
                  onChange={(e) => setForm({ ...form, userName: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="e.g. +91 123 456 7890"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => setForm({ ...form, startDate: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => setForm({ ...form, endDate: e.target.value })}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
                  required
                />
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-800">
                  Total Amount: Rs. {product.price}
                </p>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300"
              >
                Proceed to Payment
              </button>
            </form>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-semibold text-teal-800 mb-6">
              Complete Payment
            </h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-lg font-semibold text-gray-800">
                  Amount to Pay: Rs. {product.price}
                </p>
              </div>
              <button
                onClick={handlePaymentClick}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-4 rounded-xl transition-colors duration-300"
              >
                Pay with eSewa
              </button>
              <button
                onClick={() => setShowPayment(false)}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-4 rounded-xl transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}