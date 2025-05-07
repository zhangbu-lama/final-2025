import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
import {
  LayoutDashboard,
  FolderPlus,
  MapPin,
  FileText,
  BookOpen,
  Map,
  PackagePlus,
  ShoppingCart,
  Menu,
  X,
} from 'lucide-react';

<<<<<<< HEAD
=======
// Animation Variants
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
const sidebarVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  exit: { opacity: 0, x: -50, transition: { duration: 0.3 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, delay: 0.1 },
  },
  hover: {
    scale: 1.05,
    x: 5,
    transition: { duration: 0.2, ease: 'easeOut' },
  },
};

const SidebarLink = ({ to, icon: Icon, label }) => {
<<<<<<< HEAD
  return (
    <motion.div whileHover="hover" variants={linkVariants}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
            isActive
              ? 'bg-teal-500 text-white shadow-md'
              : 'text-gray-600 hover:bg-teal-50 hover:text-teal-600'
          }`
        }
        aria-label={label}
      >
        <Icon
          className={`h-5 w-5 transition-colors duration-200 ${
            ({ isActive }) => (isActive ? 'text-white' : 'text-gray-600')
          }`}
        />
        <span>{label}</span>
=======
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
      isActive
        ? 'text-teal-600 font-semibold'
        : 'text-gray-500 hover:text-teal-600'
    }`;

  return (
    <motion.div
      whileHover="hover"
      variants={linkVariants}
    >
      <NavLink to={to} className={linkStyle}>
        <Icon className="h-5 w-5 group-hover:text-teal-600 transition duration-200" />
        {label}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
      </NavLink>
    </motion.div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
<<<<<<< HEAD
=======
      {/* Mobile Toggle Button */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-teal-500 text-white rounded-full shadow-md hover:bg-teal-600 transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close sidebar' : 'Open sidebar'}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

<<<<<<< HEAD
      <motion.aside
        className={`w-64 bg-white/95 backdrop-blur-md border-r border-gray-100 text-gray-800 h-screen p-6 space-y-6 fixed top-0 left-0 shadow-lg z-40 transform ${
=======
      {/* Sidebar */}
      <motion.aside
        className={`w-64 bg-white/90 backdrop-blur-md border-r border-gray-100/50 text-gray-800 h-screen p-6 space-y-6 fixed top-0 left-0 shadow-lg z-40 transform ${
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 transition-transform duration-300`}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={sidebarVariants}
        role="navigation"
        aria-label="Travel Admin Navigation"
      >
<<<<<<< HEAD
=======
        {/* Logo */}
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        <div className="flex items-center gap-3 mb-8">
          <svg
            className="h-8 w-8 text-teal-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a10 10 0 00-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10A10 10 0 0012 2z" />
            <path d="M12 6v6l4 2" />
            <path d="M2 12h4" />
            <path d="M18 12h4" />
            <path d="M12 2v4" />
            <path d="M12 18v4" />
          </svg>
<<<<<<< HEAD
          <Link 
          to='/'>
          <div className="text-xl font-bold text-teal-600">Travel</div>
          </Link>
        </div>

        <nav className="flex flex-col space-y-1">
          <SidebarLink to="/add-category" icon={FolderPlus} label="Add Category" />
          <SidebarLink to="/page" icon={MapPin} label="Add Place" />
          <SidebarLink to="/add-details" icon={FileText} label="Add Details" />
          <SidebarLink to="/show-bookings" icon={BookOpen} label="Show Trail Booking" />
=======
          <div className="text-xl font-bold text-teal-600">TravelNepal</div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col space-y-2">
          <SidebarLink to="/dashboard" icon={LayoutDashboard} label="Dashboard" />
          <SidebarLink to="/add-category" icon={FolderPlus} label="Add Category" />
          <SidebarLink to="/add-page" icon={MapPin} label="Add Place" />
          <SidebarLink to="/add-details" icon={FileText} label="Add Details" />
          <SidebarLink to="/show-bookings" icon={BookOpen} label="Show Bookings" />
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
          <SidebarLink to="/addlocation" icon={Map} label="Add Location" />
          <motion.div whileHover={{ scale: 1.03 }} className="my-2">
            <NavLink
              to="/addproduct"
<<<<<<< HEAD
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-teal-500 text-white shadow-md'
                    : 'bg-teal-500/10 text-teal-600 hover:bg-teal-500/20'
                }`
              }
              aria-label="Add Product"
            >
              <PackagePlus className="h-5 w-5" />
              <span>Add Product</span>
=======
              className="flex items-center gap-3 px-4 py-2 bg-teal-500/10 text-teal-600 rounded-lg text-sm font-medium hover:bg-teal-500/20 transition-all duration-200"
            >
              <PackagePlus className="h-5 w-5" />
              Add Product
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
            </NavLink>
          </motion.div>
          <SidebarLink to="/productbooking" icon={ShoppingCart} label="Show Product Bookings" />
        </nav>

<<<<<<< HEAD
        <div className="mt-auto">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold">
              A
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">admin@gmail.com</p>
=======
        {/* User Profile */}
        <div className="mt-auto">
          <div className="flex items-center gap-3 p-3 bg-gray-100/50 rounded-lg">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white font-semibold">
              TS
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">travelnepal</p>
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
            </div>
          </div>
        </div>
      </motion.aside>
<<<<<<< HEAD

      {isOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
    </>
  );
};

export default Sidebar;