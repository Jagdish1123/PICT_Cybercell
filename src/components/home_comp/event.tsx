"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Event {
  image: string;
  title: string;
}

const events: Event[] = [
  {
    image: '/sunny.png', // Replace with your image paths
    title: 'Cybersecurity Basics',
  },
  {
    image: '/sunny.png',
    title: 'Advanced Threat Detection',
  },
  {
    image: '/sunny.png',
    title: 'Ethical Hacking',
  },
  {
    image: '/path/to/image4.jpg',
    title: 'Future Trends in Cybersecurity',
  },
];

const EventsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative mx-auto w-1/2 h-[500px] overflow-hidden rounded-lg">
      <Image
        src={events[currentIndex].image}
        alt={events[currentIndex].title}
        layout="fill" // Makes the image fill the container
        objectFit="cover" // Ensures the image covers the area
        className="rounded-lg"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white text-center">
        <h2 className="text-xl font-semibold">{events[currentIndex].title}</h2>
      </div>
      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {events.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-2">
      <h1 className="text-5xl font-bold mb-6 text-center">Our Past Events</h1>
      <EventsCarousel />
    </div>
  );
};

export default Home;
