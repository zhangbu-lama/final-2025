<<<<<<< HEAD
"use client"

import { useState } from "react"
import useProductStore from "../Store/useProductstore"
import { Link } from "react-router-dom"
import React from "react"
const placeholderImage = "https://placehold.co/300x200?text=No+Image"

export default function ProductShowcase() {
  const { products } = useProductStore()
  const [imageErrors, setImageErrors] = useState({})
  const [selectedCategory, setSelectedCategory] = useState("all")

  const handleImageError = (productId) => {
    setImageErrors((prev) => ({ ...prev, [productId]: true }))
  }

  // Get unique categories from products
  const categories = ["all", ...new Set(products.map((p) => p.category).filter(Boolean))]

  // Filter products by selected category
  const filteredProducts =
    selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center">
            <span className="mr-3">🧰</span> Climbing Gear
          </h2>
          <p className="text-slate-600 max-w-2xl">
            Book high-quality climbing gear for your adventure. All equipment is regularly inspected and maintained for
            your safety.
          </p>
        </div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <div className="mt-4 md:mt-0">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-teal-600 text-white"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <div className="text-5xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-slate-700 mb-2">No Products Available</h3>
          <p className="text-slate-600">We're currently restocking our inventory. Please check back later!</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full border border-slate-200 transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={imageErrors[product.id] || !product.imageUrl ? placeholderImage : product.imageUrl}
                  alt={product.title || "Product"}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={() => handleImageError(product.id)}
                />

                {/* Price Tag */}
                <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full shadow-md">
                  <span className="font-bold text-teal-600">Rs. {product.price || "N/A"}</span>
                </div>

                {/* Category Tag */}
                {product.category && (
                  <div className="absolute top-3 left-3 bg-slate-800 bg-opacity-75 px-3 py-1 rounded-full">
                    <span className="text-xs font-medium text-white">{product.category}</span>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-slate-800 mb-1">{product.title || "Untitled Product"}</h3>

                {product.name && product.name !== product.title && (
                  <p className="text-sm text-slate-600 mb-2">{product.name}</p>
                )}

                {product.description && (
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{product.description}</p>
                )}

                {/* Product Details */}
                <div className="mt-auto">
                  {product.expiresAt && (
                    <div className="flex items-center text-xs text-slate-500 mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      Available until: {new Date(product.expiresAt).toLocaleDateString()}
                    </div>
                  )}

                  <Link
                    to={`/bouldering/booking/${product.id}`}
                    className="block w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 px-4 rounded-lg text-center transition-colors duration-300"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
=======
import React, { useState } from "react";
import useProductStore from "../Store/useProductstore";
import { Link } from "react-router-dom";

const placeholderImage = "https://via.placeholder.com/300x200?text=No+Image";

export default function ProductShowcase() {
  const { products } = useProductStore();
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (productId) => {
    console.error(`Image failed to load for product ID: ${productId}`);
    setImageErrors((prev) => ({ ...prev, [productId]: true }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10 flex items-center">
          <span className="mr-3 text-4xl">🧗‍♂️</span> Book Your Gears
        </h2>

        {products.length === 0 ? (
          <div className="text-center text-gray-600 text-lg">
            No products available. Please check again later!
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col max-w-[270px] mx-auto border border-gray-100"
              >
                {/* Image Section */}
                <div className="w-full h-48 bg-gray-100 relative overflow-hidden">
                  <img
                    src={
                      imageErrors[product.id] || !product.imageUrl
                        ? placeholderImage
                        : product.imageUrl
                    }
                    alt={product.name || "Product"}
                    className="h-full w-full object-cover rounded-t-2xl transition-transform duration-500 hover:scale-110"
                    onError={() => handleImageError(product.id)}
                    onLoad={() => console.log(`Image loaded for product ID: ${product.id}`)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition duration-300 pointer-events-none rounded-t-2xl" />
                </div>

                {/* Content Section */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {product.title || "Untitled Product"}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1 truncate">
                    {product.name || "No Name"}
                  </p>
                  <p className="text-blue-600 font-bold text-lg mt-2">
                    Rs. {product.price || "N/A"}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Expires:{" "}
                    {product.expiresAt
                      ? new Date(product.expiresAt).toLocaleDateString()
                      : "N/A"}
                  </p>

                  <div className="flex-grow" />

                  <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 text-sm rounded-lg transition-all duration-300">
                    <Link to={`/bookproduct/${product.id}`} className="flex items-center justify-center">
                      <span>📦</span>
                      <span className="ml-2">View Details</span>
                    </Link>
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
}
