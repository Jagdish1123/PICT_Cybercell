import React from 'react';

interface CardProps {
  icon: React.ReactNode;
  number: string;
  description: string;
  color: string;
  shadowColor: string;
}

const Card: React.FC<CardProps> = ({ icon, number, description, color, shadowColor }) => (
  <div className={`rounded-xl p-6 ${color} flex flex-col items-center justify-center text-white ${shadowColor} transition-transform duration-300 ease-in-out transform hover:scale-105`}>
    {icon}
    <h2 className="text-4xl font-bold mt-4">{number}</h2>
    <p className="text-2sm mt-4 text-center">{description}</p>
  </div>
);

// Define the main component
const NumbersThatMatter: React.FC = () => {
  return (
    <div className="bg-black flex items-center justify-center p-12">
      <div className="w-full max-w-6xl">
      <h1 className="text-5xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in mb-7">Our Journey in Numbers</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card
            icon={
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="currentColor"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            number="100+"
            description="Current Members"
            color="bg-blue-500"
            shadowColor="shadow-lg shadow-blue-500/50"
          />
          <Card
            icon={
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 9h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 14h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 4v15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            number="2+"
            description="Years in presence"
            color="bg-gray-600"
            shadowColor="shadow-lg shadow-gray-600/50"
          />
          <Card
            icon={
              <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 14h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            number="15+"
            description="Events conducted this year"
            color="bg-purple-600"
            shadowColor="shadow-lg shadow-purple-600/50"
          />
        </div>
      </div>
    </div>
  );
}

export default NumbersThatMatter;
