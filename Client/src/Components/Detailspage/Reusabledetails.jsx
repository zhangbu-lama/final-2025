<<<<<<< HEAD

import React from "react";
import {
    Calendar,
    Mountain,
    Clock,
    BarChart2,
    Phone,
    Mail,
    Star,
    MapPin,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { useDetailsByPlace } from "../Hooks/useDetails";
=======
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Clock, MapPin, Mountain, Star, Thermometer, Phone, Mail } from "lucide-react";
import { useDetailById } from "../Hooks/useDetails";
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

const BASE_URL = "http://127.0.0.1:8000";

// Animation variants
const containerVariants = {
<<<<<<< HEAD
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, duration: 0.6 },
    },
};

const childVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const DetailsPage = () => {
    const { id } = useParams();
    const { data: treks, isLoading, error } = useDetailsByPlace(id);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-white">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="text-4xl"
                >
                    <Mountain className="w-16 h-16 text-teal-400" />
                </motion.div>
            </div>
        );
    }

    if (error || !treks) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-red-400 text-3xl font-bold">
                {error ? `Error: ${error.message}` : "Trek not found"}
            </div>
        );
    }

    if (treks.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 text-red-400 text-3xl font-bold">
                No treks available for this place.
            </div>
        );
    }

    return (
        <motion.div
            className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-6xl mx-auto">
                {treks.map((trek) => (
                    <div key={trek._id} className="mb-20">

                        <motion.div variants={childVariants} className="relative">
                            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                                {trek.images.length > 0 ? (
                                    <img
                                        src={`${BASE_URL}/Uploads/${trek.images[0]}`}
                                        alt={trek.name}
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-r from-teal-500 to-purple-600" />
                                )}
                                <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-8">
                                    <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
                                        {trek.name}
                                    </h1>
                                    <div className="flex items-center gap-4 mt-4">
                                        <div className="flex items-center gap-2 bg-teal-500/80 px-4 py-2 rounded-full">
                                            <Star className="w-6 h-6 text-yellow-300" />
                                            <span className="text-lg font-semibold">
                                                {trek.rating} ({trek.reviews} reviews)
                                            </span>
                                        </div>
                                        <Link to="/bookingform">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold text-lg shadow-lg"
                                            >
                                                Book Now
                                            </motion.button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Overview Section */}
                        <motion.div variants={childVariants} className="mt-12">
                            <h2 className="text-3xl font-bold text-teal-400 mb-6">Overview</h2>
                            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                                {trek.overview}
                            </p>
                        </motion.div>

                        {/* Details Grid */}
                        <motion.div variants={childVariants} className="mt-12">
                            <h2 className="text-3xl font-bold text-teal-400 mb-6">Details</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {[
                                    {
                                        icon: <Mountain className="w-10 h-10 text-teal-400" />,
                                        label: "Max Elevation",
                                        value: trek.max_elevation,
                                    },
                                    {
                                        icon: <Clock className="w-10 h-10 text-blue-400" />,
                                        label: "Duration",
                                        value: trek.duration,
                                    },
                                    {
                                        icon: <BarChart2 className="w-10 h-10 text-green-400" />,
                                        label: "Difficulty",
                                        value: trek.difficulty,
                                    },
                                    {
                                        icon: <Calendar className="w-10 h-10 text-red-400" />,
                                        label: "Best Season",
                                        value: trek.best_season,
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700"
                                    >
                                        <div className="flex items-center gap-4">
                                            {item.icon}
                                            <div>
                                                <p className="text-sm text-gray-400">{item.label}</p>
                                                <p className="text-lg font-semibold capitalize text-white">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Images Gallery */}
                        {trek.images.length > 0 && (
                            <motion.div variants={childVariants} className="mt-12">
                                <h2 className="text-3xl font-bold text-teal-400 mb-6">Gallery</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {trek.images.map((image, index) => (
                                        <motion.div
                                            key={index}
                                            className="relative h-64 rounded-xl overflow-hidden shadow-lg"
                                            whileHover={{ scale: 1.03 }}
                                        >
                                            <img
                                                src={`${BASE_URL}/Uploads/${image}`}
                                                alt={`${trek.name} ${index + 1}`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-3 text-white text-sm text-center">
                                                {`${trek.name} ${index + 1}`}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* Contact Section */}
                        <motion.div variants={childVariants} className="mt-12">
                            <h2 className="text-3xl font-bold text-teal-400 mb-6">Get in Touch</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                                    <Mail className="w-10 h-10 text-teal-400" />
                                    <a
                                        href={`mailto:${trek.contact_email}`}
                                        className="text-teal-300 hover:text-teal-200 text-lg"
                                    >
                                        {trek.contact_email}
                                    </a>
                                </div>
                                <div className="flex items-center gap-4 bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700">
                                    <Phone className="w-10 h-10 text-teal-400" />
                                    <a
                                        href={`tel:${trek.contact_number}`}
                                        className="text-teal-300 hover:text-teal-200 text-lg"
                                    >
                                        {trek.contact_number}
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Timestamps Section */}
                        <motion.div variants={childVariants} className="mt-12">
                            <h2 className="text-3xl font-bold text-teal-400 mb-6">Record Info</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: <Calendar className="w-10 h-10 text-teal-400" />,
                                        label: "Created",
                                        value: formatDate(trek.created_at),
                                    },
                                    {
                                        icon: <Calendar className="w-10 h-10 text-teal-400" />,
                                        label: "Last Updated",
                                        value: formatDate(trek.updated_at),
                                    },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-800/50 p-6 rounded-xl shadow-lg border border-gray-700"
                                    >
                                        <div className="flex items-center gap-4">
                                            {item.icon}
                                            <div>
                                                <p className="text-sm text-gray-400">{item.label}</p>
                                                <p className="text-lg font-semibold text-white">
                                                    {item.value}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Sticky Book Now Button */}
                        <motion.div
                            className="fixed bottom-8 right-8 z-50"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <Link to="/bookingform">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-gradient-to-r from-teal-400 to-blue-500 text-white px-8 py-4 rounded-full font-bold text-xl shadow-2xl flex items-center gap-3"
                                >
                                    <Star className="w-6 h-6 text-yellow-300" />
                                    Book Now
                                </motion.button>
                            </Link>
                        </motion.div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default DetailsPage;
=======
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, duration: 0.5 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Highlight Image component
const HighlightImage = ({ image, alt }) => (
  <motion.div
    className="relative h-48 rounded-lg overflow-hidden shadow-md"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={alt} className="object-cover w-full h-full" />
    <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-2 text-white text-sm text-center">{alt}</div>
  </motion.div>
);

const DetailsPage = () => {
  const { id } = useParams();
  const { data: trek, isLoading, error } = useDetailById(id);
  const [activeTab, setActiveTab] = useState("overview");

  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-semibold animate-pulse">
        Loading trek details...
      </div>
    );
  }

  if (error || !trek) {
    return (
      <div className="text-center py-10 text-red-500 font-semibold">
        {error ? `Error: ${error.message}` : 'Trek not found'}
      </div>
    );
  }

  const handleTabChange = (tab) => setActiveTab(tab);

  // Prepare images for gallery
  const highlights = [
    { image: trek.image1, alt: `${trek.name} Image 1` },
    { image: trek.image2, alt: `${trek.name} Image 2` },
    { image: trek.image3, alt: `${trek.name} Image 3` },
    { image: trek.image4, alt: `${trek.name} Image 4` },
  ].filter(item => item.image); // Filter out null/undefined images

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-sky-100 font-sans">
      {/* Hero Section */}
      <motion.div
        className="relative h-[50vh] md:h-[70vh] w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={highlights[0]?.image ? `${BASE_URL}${highlights[0].image}` : "https://via.placeholder.com/600/400?text=Trek+Image"}
          alt={trek.name}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          {/* Animated background elements */}
          <div className="absolute top-10 left-[10%] w-32 h-16 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-20 left-[25%] w-48 h-20 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-5 right-[15%] w-40 h-16 bg-white/10 rounded-full blur-xl"></div>
        </div>

        <div className="absolute top-6 left-6 z-10">
          <Link
            to="/places"
            className="flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full hover:bg-white/30 transition-all transform hover:scale-105"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Treks</span>
          </Link>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 w-full p-6 md:p-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="flex items-center gap-2 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(trek.rating)
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white font-medium">
                {trek.rating} ({trek.reviews} reviews)
              </span>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {trek.name}
            </motion.h1>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-emerald-500/30">
                <Clock className="h-4 w-4" />
                <span>{trek.duration}</span>
              </div>
              <div className="flex items-center gap-2 bg-sky-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-sky-500/30">
                <Mountain className="h-4 w-4" />
                <span>{trek.max_elevation}</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm text-white px-3 py-1 rounded-full border border-purple-500/30">
                <Thermometer className="h-4 w-4" />
                <span>{trek.best_season}</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="mb-12">
              <div className="grid w-full grid-cols-2 border-b sticky top-0 bg-white/90 backdrop-blur-sm z-10 rounded-t-lg shadow-sm">
                {["overview", "gallery"].map((tab) => (
                  <button
                    key={tab}
                    className={`py-3 px-4 text-center relative transition-all ${
                      activeTab === tab
                        ? "text-sky-600 font-medium"
                        : "text-gray-500 hover:text-sky-600"
                    }`}
                    onClick={() => handleTabChange(tab)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    {activeTab === tab && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600"
                        layoutId="activeTab"
                      />
                    )}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                {/* Overview Tab */}
                {activeTab === "overview" && (
                  <motion.div
                    key="overview"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h2 className="text-2xl font-bold text-primary mb-4">Trek Overview</h2>
                      <p className="text-gray-700 mb-6 leading-relaxed">{trek.overview}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-sky-50 p-4 rounded-lg">
                          <h3 className="font-semibold text-primary mb-2 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-accent" />
                            Trek Details
                          </h3>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex justify-between">
                              <span>Difficulty:</span>
                              <span className="font-medium">{trek.difficulty}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Max Elevation:</span>
                              <span className="font-medium">{trek.max_elevation}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Best Season:</span>
                              <span className="font-medium">{trek.best_season}</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Gallery Tab */}
                {activeTab === "gallery" && (
                  <motion.div
                    key="gallery"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6"
                  >
                    <div className="bg-white rounded-xl p-6 shadow-md">
                      <h2 className="text-2xl font-bold text-primary mb-6">Trek Gallery</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {highlights.map((highlight, index) => (
                          <HighlightImage key={index} image={`${BASE_URL}${highlight.image}`} alt={highlight.alt} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Column - Contact Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
          >
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-xl p-6 shadow-lg sticky top-6 border border-sky-100">
              <h3 className="text-xl font-bold text-sky-800 mb-4">Contact Us</h3>
              <div className="space-y-4 mb-6">
                <motion.div
                  className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">{trek.contact_number}</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-3 p-3 bg-sky-50 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">{trek.contact_email}</span>
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  to="/bookingform"
                  className="w-full bg-gradient-to-r from-emerald-500 to-sky-500 hover:from-emerald-600 hover:to-sky-600 text-white font-bold py-3 rounded-lg shadow-md inline-block text-center transition-all"
                >
                  Book Now
                </Link>
              </motion.div>
              <div className="mt-6 text-center">
                <p className="text-gray-500 text-sm">Need help planning your trip?</p>
                <Link
                  to="/contact"
                  className="text-sky-600 font-medium text-sm hover:text-sky-700 transition-colors"
                >
                  Contact our travel experts
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      {/* Why Trek Section */}
      <section className="bg-gradient-to-r from-sky-100 to-emerald-50 rounded-xl shadow-lg p-8 mb-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-sky-800 mb-6">Why Trek in Nepal?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Mountain className="h-8 w-8 text-emerald-600" />,
              title: "Majestic Mountains",
              text: "Experience the world's highest peaks up close.",
            },
            {
              icon: <MapPin className="h-8 w-8 text-emerald-600" />,
              title: "Diverse Landscapes",
              text: "Trek through varied terrains and ecosystems.",
            },
            {
              icon: <Clock className="h-8 w-8 text-emerald-600" />,
              title: "Rich Culture",
              text: "Immerse in local traditions and customs.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center p-4 bg-white/70 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-emerald-100 p-4 rounded-full mb-4 shadow-inner">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-sky-700 mb-2">{card.title}</h3>
              <p className="text-gray-600">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
