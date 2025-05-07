import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import useLocationStore from "../Store/useLocationStore";
<<<<<<< HEAD
import rock from '../../assets/rock.png';
=======
import rock from '../../assets/rock.png'; // Import the rock icon
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

const MapComponent = () => {
  const mapRef = useRef(null);
  const leafletMap = useRef(null);
  const locations = useLocationStore((state) => state.locations);
<<<<<<< HEAD
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (!leafletMap.current && mapRef.current) {
=======

  useEffect(() => {
    if (!leafletMap.current) {
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
      leafletMap.current = L.map(mapRef.current).setView([28.17, 85.63], 12);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "© OpenStreetMap",
      }).addTo(leafletMap.current);
    }

    if (locations && Array.isArray(locations)) {
<<<<<<< HEAD
      // Clear existing markers
      leafletMap.current?.eachLayer((layer) => {
=======
      leafletMap.current.eachLayer((layer) => {
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
        if (layer instanceof L.Marker) {
          leafletMap.current.removeLayer(layer);
        }
      });

<<<<<<< HEAD
      // Add markers for each location
      locations.forEach((location) => {
        const markerIcon = L.icon({
          iconUrl: rock,
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        const marker = L.marker([location.lat, location.lng], {
          icon: markerIcon,
        }).addTo(leafletMap.current);
        
        // Create a custom popup
        const popupContent = `
          <div class="custom-popup">
            <h3 class="font-bold text-teal-700">${location.name}</h3>
            ${location.difficulty ? 
              `<p class="text-sm mt-1">Difficulty: 
                <span class="font-medium ${getDifficultyColor(location.difficulty)}">
                  ${location.difficulty}
                </span>
              </p>` : ''}
            ${location.description ? 
              `<p class="text-sm mt-1">${location.description}</p>` : ''}
          </div>
        `;
        
        marker.bindPopup(popupContent);
      });

      // If no locations, show a message
      if (locations.length === 0 && mapContainerRef.current) {
        const noLocationsEl = document.createElement('div');
        noLocationsEl.className = 'absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10';
        noLocationsEl.innerHTML = '<p class="text-slate-600 font-medium">No climbing locations available</p>';
        mapContainerRef.current.appendChild(noLocationsEl);
      }
    }

    // Resize handler to make the map responsive
    const handleResize = () => {
      if (leafletMap.current) {
        leafletMap.current.invalidateSize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
=======
      locations.forEach((location) => {
        const markerIcon = L.icon({
          iconUrl: rock, // Use the imported rock icon
          iconSize: [38, 38],
          iconAnchor: [19, 38],
        });

        L.marker([location.lat, location.lng], {
          icon: markerIcon,
        })
          .addTo(leafletMap.current)
          .bindPopup(location.name);
      });
    }

    return () => {
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
      leafletMap.current?.off();
      leafletMap.current?.remove();
      leafletMap.current = null;
    };
  }, [locations]);

<<<<<<< HEAD
  // Helper function to get color class based on difficulty
  function getDifficultyColor(difficulty) {
    const level = difficulty.toLowerCase();
    if (level.includes('easy')) return 'text-green-600';
    if (level.includes('medium') || level.includes('moderate')) return 'text-amber-600';
    if (level.includes('hard') || level.includes('difficult')) return 'text-red-600';
    return 'text-slate-600';
  }

  return (
    <div 
      ref={mapContainerRef}
      className="relative"
    >
      <div
        ref={mapRef}
        className="h-[500px] w-full"
      />
      
      {/* Map Controls Overlay */}
      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md p-3 z-[1000] flex flex-col space-y-2">
        <button 
          className="p-2 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          onClick={() => leafletMap.current?.setView([28.17, 85.63], 12)}
          title="Reset view"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        </button>
        <button 
          className="p-2 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors"
          onClick={() => leafletMap.current?.locate({setView: true, maxZoom: 16})}
          title="Find my location"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
=======
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-6 bg-white rounded-lg shadow-xl border border-gray-200 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-teal-700">Explore Langtang Region</h1>
          <p className="text-lg mt-4 text-gray-600">
            Discover beautiful stone markers and landmarks across the stunning Langtang region.
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Use the map below to find locations and explore the serene beauty of the region.
          </p>
        </div>

        <div className="map-container bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div
            ref={mapRef}
            className="h-96 w-full"
            style={{
              borderRadius: "12px",
              border: "2px solid #e2e8f0",
            }}
          />
        </div>

        <div className="text-center mt-6 text-teal-600">
          <h2 className="text-xl font-semibold">How to Use the Map</h2>
          <p className="text-sm mt-2 text-gray-600">
            Zoom in and out using the controls on the map or by scrolling. Click on any marker to view more
            details about that location.
          </p>
        </div>
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default MapComponent;
=======
export default MapComponent;
>>>>>>> a9a2883aa685ca9314235678934306724487af7f
