"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Vector3, Scene } from "three";
import { OrbitControls } from "@react-three/drei";
import { Globe, GlobeConfig, Position } from "@/components/ui/globe";
import { SparklesCore } from "@/components/ui/sparkles";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

// Helper function to generate a gradient color between two colors
function getGradientColor(color1, color2, percentage) {
  const r1 = parseInt(color1.slice(1, 3), 16);
  const g1 = parseInt(color1.slice(3, 5), 16);
  const b1 = parseInt(color1.slice(5, 7), 16);
  const r2 = parseInt(color2.slice(1, 3), 16);
  const g2 = parseInt(color2.slice(3, 5), 16);
  const b2 = parseInt(color2.slice(5, 7), 16);
  
  const r = Math.round(r1 + (r2 - r1) * percentage).toString(16).padStart(2, '0');
  const g = Math.round(g1 + (g2 - g1) * percentage).toString(16).padStart(2, '0');
  const b = Math.round(b1 + (b2 - b1) * percentage).toString(16).padStart(2, '0');
  
  return `#${r}${g}${b}`;
}

// Predefined list of cities with coordinates
const cities = [
  { name: 'San Francisco', lat: 37.7749, lng: -122.4194 },
  { name: 'Los Angeles', lat: 34.0522, lng: -118.2437 },
  { name: 'New York', lat: 40.7128, lng: -74.0060 },
  { name: 'London', lat: 51.5074, lng: -0.1278 },
  { name: 'Paris', lat: 48.8566, lng: 2.3522 },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
  { name: 'Dubai', lat: 25.276987, lng: 55.296249 },
  { name: 'Beijing', lat: 39.9042, lng: 116.4074 },
  { name: 'Tokyo', lat: 35.6895, lng: 139.6917 },
  { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
  { name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
  { name: 'Berlin', lat: 52.5200, lng: 13.4050 },
  { name: 'Toronto', lat: 43.65107, lng: -79.347015 },
  { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
  { name: 'Istanbul', lat: 41.0082, lng: 28.9784 },
  { name: 'Rome', lat: 41.9028, lng: 12.4964 },
  { name: 'Buenos Aires', lat: -34.6037, lng: -58.3816 },
  { name: 'Singapore', lat: 1.3521, lng: 103.8198 },
  { name: 'Seoul', lat: 37.5665, lng: 126.978 },
  { name: 'Amsterdam', lat: 52.3676, lng: 4.9041 },
];

// Generate random globe data
const globeData = [];
const numberOfConnections = 20;

for (let i = 0; i < numberOfConnections; i++) {
  const startCity = cities[Math.floor(Math.random() * cities.length)];
  let endCity;
  do {
    endCity = cities[Math.floor(Math.random() * cities.length)];
  } while (startCity === endCity);

  const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const color = getGradientColor(color1, color2, Math.random());

  globeData.push({
    order: i + 1,
    startLat: startCity.lat,
    startLng: startCity.lng,
    endLat: endCity.lat,
    endLng: endCity.lng,
    arcAlt: Math.random() * 0.4 + 0.1, 
    color: color,
  });
}

const globeConfig: GlobeConfig = {
  pointSize: 2,
  atmosphereColor: "#ffffff",
  showAtmosphere: true,
  atmosphereAltitude: 0.1,
  polygonColor: "rgba(255, 255, 255, 0.6)",
  globeColor: "#1d072e",
  emissive: "#004080",
  emissiveIntensity: 0.2,
  shininess: 0.9,
  arcTime: 2500,
  arcLength: 0.7,
  rings: 2,
  maxRings: 5,
};

export default function Home() {
  const words = [
    { text: "Welcome" },
    { text: "to" },
    { text: "PICT", className: "text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 shadow-lg" },
    { text: "Cyber", className: "text-blue-500 dark:text-blue-500" },
    { text: "Cell", className: "text-blue-500 dark:text-blue-500" },
  ];

  return (
    <div className="relative flex flex-col items-center justify-center h-[40rem] bg-black overflow-hidden">
      <Canvas
        className="absolute inset-0"
        scene={new Scene()}
        camera={new PerspectiveCamera(50, 1.2, 180, 1800)}
      >
        <ambientLight color="#ffffff" intensity={0.6} />
        <directionalLight color="#ffffff" position={new Vector3(-400, 100, 400)} />
        <directionalLight color="#ffffff" position={new Vector3(-200, 500, 200)} />
        <pointLight color="#ffffff" position={new Vector3(-200, 500, 200)} intensity={0.8} />
        <Globe globeConfig={globeConfig} data={globeData} />
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          minDistance={300}
          maxDistance={300}
          autoRotateSpeed={1}
          autoRotate={true}
          minPolarAngle={Math.PI / 3.5}
          maxPolarAngle={Math.PI - Math.PI / 3}
        />
      </Canvas>
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0"
        particleColor="#FFFFFF"
      />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white mb-10">
          <TypewriterEffect words={words} />
        </h1>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}
