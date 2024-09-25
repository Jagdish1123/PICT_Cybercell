"use client";

import React from 'react';
import { FaTools } from 'react-icons/fa';
import { MdConstruction } from "react-icons/md";

const UnderConstruction: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <MdConstruction className="text-6xl text-yellow-500 mb-4" />
      <h1 className="text-4xl font-bold text-center mb-2">Under Construction</h1>
      <p className="text-lg text-gray-700 mb-4">
        Were working hard to bring you a new experience. Stay tuned!
      </p>
      <FaTools className="text-5xl text-blue-500 mb-4" />
      <div className="flex space-x-4">
        <span role="img" aria-label="Hammer" className="text-4xl">🔨</span>
        <span role="img" aria-label="Construction Worker" className="text-4xl">👷‍♂️</span>
        <span role="img" aria-label="Caution" className="text-4xl">⚠️</span>
      </div>
    </div>
  );
};

export default UnderConstruction;
