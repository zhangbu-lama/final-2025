import React from 'react';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Loader2 } from 'lucide-react';
import Layout from './Layout';
import { useGetAllBookings } from '../Hooks/useBooking'; // ✅ Import hook

=======
import { Link } from 'react-router-dom';
import { ArrowLeft, Loader2 } from 'lucide-react';
import Layout from './Layout';

// Static bookings data (replace with dynamic data fetching if needed)
const bookings = [
  {
    id: 1,
    customer: 'John Doe',
    destination: 'Bali',
    email: 'john@example.com',
    date: '2025-05-01',
    seats: 2,
    status: 'Confirmed',
  },
  {
    id: 2,
    customer: 'Sita Sharma',
    destination: 'Dubai',
    email: 'sita@example.com',
    date: '2025-06-15',
    seats: 1,
    status: 'Pending',
  },
];

// Animation Variants (Copied from TrekAdminPanel)
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Placebooking = () => {
<<<<<<< HEAD
  const { data, isLoading, error } = useGetAllBookings(); // ✅ Fetch API data
=======
  // Placeholder for dynamic data fetching (e.g., with React Query)
  const isLoading = false; // Set to true if fetching data
  const error = null; // Set to error object if fetch fails
  const data = bookings; // Replace with fetched data
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-emerald-50 font-sans">
<<<<<<< HEAD
=======
        {/* Header */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        <motion.header
          className="bg-gradient-to-r from-sky-700 via-sky-600 to-emerald-500 py-8 px-6 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center">
<<<<<<< HEAD
            <h1 className="text-4xl font-extrabold text-gray-400 tracking-tight">
              Booking Records Dashboard
            </h1>
          </div>
        </motion.header>

=======
            <div className="flex items-center gap-6">
              <Link
                to="/dashboard"
                className="flex items-center gap-2 text-white hover:text-emerald-200 transition-colors duration-200"
              >
                <ArrowLeft className="h-6 w-6" />
                <span className="text-lg font-medium">Back to Dashboard</span>
              </Link>
              <h1 className="text-4xl font-extrabold text-white tracking-tight">
                Booking Records Dashboard
              </h1>
            </div>
          </div>
        </motion.header>

        {/* Main Content */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        <main className="max-w-7xl mx-auto px-6 py-12">
          {isLoading && (
            <div className="text-center py-16">
              <Loader2 className="h-12 w-12 text-emerald-500 animate-spin mx-auto" />
              <p className="text-lg font-medium text-gray-600 mt-4">Loading bookings...</p>
            </div>
          )}
          {error && (
            <div className="text-center py-16 bg-red-50 rounded-lg p-6">
              <p className="text-lg font-semibold text-red-600">Error: {error.message}</p>
            </div>
          )}
          {!isLoading && !error && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            >
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gradient-to-r from-sky-100 to-emerald-50 text-sky-800">
                    <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">Customer</th>
                    <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">Destination</th>
                    <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">Email</th>
                    <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">Date</th>
                    <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">Seats</th>
                    <th className="py-4 px-6 text-left font-semibold text-sm uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((booking) => (
                    <motion.tr
<<<<<<< HEAD
                      key={booking._id}
                      variants={childVariants}
                      className="border-b border-gray-100 hover:bg-sky-50/50 transition-colors duration-150"
                    >
                      <td className="py-4 px-6 font-medium text-gray-800">
                        {booking.first_name} {booking.last_name}
                      </td>
                      <td className="py-4 px-6 text-gray-600">{booking.destination}</td>
                      <td className="py-4 px-6 text-gray-600">{booking.email}</td>
                      <td className="py-4 px-6 text-gray-600">{booking.travel_date}</td>
                      <td className="py-4 px-6 text-gray-600">{booking.group_size}</td>
                      <td className="py-4 px-6 text-gray-600">
                        <span className="px-3 py-1 rounded-full text-sm bg-green-200 text-green-800">
                        Success
=======
                      key={booking.id}
                      variants={childVariants}
                      className="border-b border-gray-100 hover:bg-sky-50/50 transition-colors duration-150"
                    >
                      <td className="py-4 px-6 font-medium text-gray-800">{booking.customer}</td>
                      <td className="py-4 px-6 text-gray-600">{booking.destination}</td>
                      <td className="py-4 px-6 text-gray-600">{booking.email}</td>
                      <td className="py-4 px-6 text-gray-600">{booking.date}</td>
                      <td className="py-4 px-6 text-gray-600">{booking.seats}</td>
                      <td className="py-4 px-6 text-gray-600">
                        <span
                          className={`px-3 py-1 rounded-full text-sm ${
                            booking.status === 'Confirmed'
                              ? 'bg-emerald-200 text-emerald-800'
                              : 'bg-yellow-200 text-yellow-800'
                          }`}
                        >
                          {booking.status}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
              {data?.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No bookings found.</p>
                </div>
              )}
            </motion.div>
          )}
        </main>
      </div>
    </Layout>
  );
};

<<<<<<< HEAD
export default Placebooking;
=======
export default Placebooking;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
