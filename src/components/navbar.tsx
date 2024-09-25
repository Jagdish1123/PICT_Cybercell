'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi'; 
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative bg-black backdrop-blur-lg p-4 w-full border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="relative w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="/logo.png"
              alt="Website Logo"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
        </button>

        {/* Navigation */}
        <nav className={`lg:flex lg:items-center lg:space-x-8 transition-transform duration-300 ease-in-out ${isOpen ? 'block' : 'hidden lg:block'}`}>
          <ul className="flex flex-col lg:flex-row lg:space-x-8 font-semibold text-gray-100">
            <li className="relative group">
              <Link href="/home" className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
                Home
                <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/events" className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
                Events
                <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/team" className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
                Team
                <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/resources" className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
                Resources
                <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
            <li className="relative group">
              <Link href="/contact" className="relative px-4 py-2 text-white hover:text-blue-400 transition-all duration-300 ease-in-out">
                Contact Us
                <span className="absolute inset-x-0 bottom-0 h-1 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
