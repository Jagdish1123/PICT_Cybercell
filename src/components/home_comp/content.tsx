import React from 'react';
import Image from 'next/image'; // Import Image from Next.js

export default function CyberHUBLanding() {
  return (
    <div className="bg-black min-h-screen text-white p-8 flex items-center">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center bg-clip-text bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 text-transparent animate-fade-in animate-pulse">
        Inspiring the Next Wave of Cybersecurity Leaders
    </h1>
    
    
          <p className="text-xl mb-6">
           Welcome to the PICT Cybercell Club, the ultimate destination for cybersecurity enthusiasts.
          </p>
          <h2 className="text-2xl font-semibold mb-4">About Us:</h2>
          <ul className="space-y-3">
            {[
              'We conduct numerous engaging workshops and hands-on sessions led by industry professionals.',
              'Support and guidance for newcomers in the fields of cybersecurity and ethical hacking.',
              'Join a vibrant community of over 150 students passionate about cybersecurity.',
              'Collaborate on open-source projects and contribute to real-world applications.',
              'Access resources, tools, and mentorship to enhance your cybersecurity skills.'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-orange-500 mr-2">■</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/howarewe.png" 
            alt="Cyber Hub Image"
            width={700} 
            height={700} 
            className="text-gray-300" 
          />
        </div>
      </div>
    </div>
  );
}
