"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { PinContainer } from "@/components/ui/3d-pin";
import { motion } from "framer-motion";

interface Resource {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  tags: string[];
}

const events: Resource[] = [
  {
    id: 1,
    title: "Introduction to Competitive Programming",
    description: "Learn the basics of competitive programming and problem-solving techniques in this comprehensive workshop.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/intro-to-competitive-programming",
    tags: ["Programming", "Beginner"],
  },
  {
    id: 2,
    title: "Advanced Data Structures Workshop",
    description: "Dive deep into advanced data structures and their applications in solving complex algorithmic problems.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/advanced-data-structures",
    tags: ["Data Structures", "Advanced"],
  },
  {
    id: 3,
    title: "Machine Learning Fundamentals",
    description: "Explore the core concepts of machine learning and its practical applications in various industries.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/machine-learning-fundamentals",
    tags: ["AI", "Machine Learning"],
  },
  {
    id: 4,
    title: "Web Development Bootcamp",
    description: "Join this intensive bootcamp to learn the fundamentals of web development.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/web-development-bootcamp",
    tags: ["Web Development", "Beginner"],
  },
  {
    id: 5,
    title: "Cloud Computing Basics",
    description: "Understand the fundamentals of cloud computing and its applications in modern tech.",
    imageUrl: "/placeholder.svg?height=300&width=400",
    url: "https://example.com/cloud-computing-basics",
    tags: ["Cloud", "Beginner"],
  },
];

export default function EventGrid() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const allTags = Array.from(new Set(events.flatMap(event => event.tags)));

  useEffect(() => {
    const filtered = events.filter(event => 
      (selectedTag ? event.tags.includes(selectedTag) : true) &&
      (event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       event.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredEvents(filtered);
  }, [selectedTag, searchTerm]);

  return (
    <div className="py-16 bg-black min-h-screen">
    <h1 className="text-5xl font-bold text-center mb-0 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in">
    Resources
  </h1>


      {/* Search Bar and Filter Section */}
      <div className="container mx-auto px-4 mb-12">
        <div className="flex flex-col md:flex-row items-center mb-4">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full md:w-1/3 p-2 mb-2 md:mb-0 bg-gray-800 text-white rounded"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="md:ml-4">
            <h3 className="text-white font-semibold mb-2">Filter by Tag</h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full text-sm ${selectedTag === null ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}
              >
                All
              </button>
              {allTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-full text-sm ${selectedTag === tag ? 'bg-blue-500 text-white' : 'bg-gray-800 text-white'}`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resource Cards Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredEvents.slice(0, 6).map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-stretch justify-center"
            >
              <PinContainer title={event.title} href={event.url}>
                <div className="flex flex-col bg-gray-800 rounded-lg shadow-lg p-8 tracking-tight text-slate-100 w-full h-[24rem]">
                  <div className="mb-6">
                    <Image 
                      src={event.imageUrl} 
                      alt={event.title} 
                      width={300} 
                      height={70} 
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="pb-4 font-bold text-base text-slate-100">
                    {event.title}
                  </h3>
                  <div className="text-base font-normal mb-4">
                    <span className="text-slate-500">
                      {event.description}
                    </span>
                  </div>
                  <div className="flex flex-wrap mt-2">
                    {event.tags.map(tag => (
                      <span key={tag} className="bg-gray-700 text-white text-xs px-3 py-1 rounded-full mr-2">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
