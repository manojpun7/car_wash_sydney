"use client";

import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import ServiceAreaSection from "@/components/ServiceAreaSection";

declare global {
  interface Window {
    _leafletMap?: L.Map;
  }
}

const Areas: React.FC = () => {
  useEffect(() => {
    const loadMap = async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      // Prevent duplicate map
      if (window._leafletMap) return;

      const redIcon = L.icon({
        iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
      });

      const map = L.map("serviceMap", {
        center: [-33.8688, 151.2093],
        zoom: 10,
        scrollWheelZoom: false,
      });

      window._leafletMap = map;

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(map);

      const areaCoordinates: Record<string, [number, number]> = {
        Manly: [-33.797, 151.288],
        "South Sydney": [-33.952, 151.147],
        Willoughby: [-33.798, 151.200],
        Kogarah: [-33.967, 151.135],
        "Hunters Hill": [-33.834, 151.153],
        Canterbury: [-33.914, 151.106],
        Rockdale: [-33.955, 151.141],
        Parramatta: [-33.814, 151.001],
        Liverpool: [-33.920, 150.924],
        Penrith: [-33.75, 150.692],
        Blacktown: [-33.772, 150.908],
        Gosford: [-33.425, 151.341],
        "Northern Beaches": [-33.729, 151.300],
        "Western Sydney": [-33.8, 150.92],
        "Eastern Suburbs": [-33.91, 151.25],
        "Inner West": [-33.883, 151.15],
      };

      Object.entries(areaCoordinates).forEach(([area, coords]) => {
        L.marker(coords, { icon: redIcon }).addTo(map).bindPopup(`<b>${area}</b>`);
      });
    };

    loadMap();
  }, []);

  return (
    <div>
      <ServiceAreaSection />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#0c55a6] mb-3">
            Our Sydney Service Coverage
          </h2>
          <p className="text-gray-600 mb-8">
            We proudly serve customers across Sydney and nearby suburbs.
            Explore our service areas on the map below.
          </p>

          <div
            id="serviceMap"
            className="w-full h-[400px] sm:h-[450px] rounded-2xl shadow-lg border border-gray-200"
          ></div>
        </div>
      </section>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Areas), { ssr: false });
