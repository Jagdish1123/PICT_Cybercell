"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Cloud, renderSimpleIcon, fetchSimpleIcons } from 'react-icon-cloud';
import {
  IconPhone,
  IconFriends,
  IconGitBranch,
  IconCode
} from "@tabler/icons-react";
import {
  FaShieldAlt,
  FaLock,
  FaKey,
  FaUserShield,
  FaFire,
  FaCheckCircle,
  FaBug,
  FaUserSecret,
  FaFingerprint,
  FaNetworkWired,
} from 'react-icons/fa';
import { FaRegCheckCircle } from "react-icons/fa";


export default function WebClubUI() {
  const talks = [
    "Cyber Secruity Sessions",
    "Expert & CISO Talk",
    "Lightning Talks",
    "Red Team Workshop",
  ];

  const hackathons = [
    "Lakshay CTF",
    "Google CTF",
    "Hack The Box",
    "Dragon CTF"
  ];
  const ctf = [
    "PlaidCTF",
    "RuCTF",
    "picoCTF",
    "DEF CON CTF"
  ];

  
  const iconComponents = [
    { icon: <FaShieldAlt size={25} /> },
    { icon: <FaLock size={25} />},
    { icon: <FaKey size={25} /> },
    { icon: <FaUserShield size={25} /> },
    { icon: <FaFire size={25} /> },
    { icon: <FaCheckCircle size={25} /> },
    { icon: <FaBug size={25} /> },
    { icon: <FaUserSecret size={25} />},
    { icon: <FaFingerprint size={25} />},
    { icon: <FaNetworkWired size={25} /> },
  ];
  
  const DynamicIconCloud = () => {
    return (
      <div className="flex flex-wrap justify-center">
        {iconComponents.map((item, index) => (
          <div key={index} className="m-4 text-center">
            {item.icon}
          </div>
        ))}
      </div>
    );
  };
  
  interface TalksListProps {
    talks: string[]; // talks is an array of strings
  }
  
    const [isAnimating, setIsAnimating] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating(false);
        setTimeout(() => setIsAnimating(true), talks.length * 200 + 1000); // Adjust timing
      }, talks.length * 2000 + 1000); // Total delay for all items
      return () => clearInterval(interval);
    }, [talks.length]);
  
  
  const mentorshipItems = [
    { title: "Pentesting", mentor: "with Rushi • in 15m", color: "#FFDDC1", icon: "🔒" },
    { title: "Web Vulnerabilities", mentor: "with Riddhi • in 30m", color: "#CFFAFE", icon: "🌐" },
    { title: "Bug Hunting", mentor: "with Dev • in 45m", color: "#D1FAE5", icon: "🐞" },
    { title: "Jobs in Cyber Security", mentor: "with Raj • in 20m", color: "#FEE2E2", icon: "💼" },
  ];
  
  const itemVariants = {
    hidden: { y: -50, opacity: 0 },  // Start off-screen
    visible: { y: 0, opacity: 1 },   // Visible position
    exit: { y: 50, opacity: 0 }      // Move down when exiting
  };
  return (
    <div className=" mx-auto max-w-6xl pt-10"> 
<h1 className="text-5xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-900 via-blue-400 to-blue-900 text-transparent animate-fade-in mb-7">
    Things We Do: Unleashing Excitement at <span className="text-blue-500">PICT Cyber Cell</span>
    <span className="inline-block ml-2 animate-spin text-stone-950">🕸️</span>
</h1>




      
      <div className="grid grid-cols-12 gap-4 text-white">
        
        {/* Talks Section */}
        <motion.div 
      className="col-span-8 bg-slate-950 border border-white rounded-lg p-6 h-[400px] flex flex-col justify-between overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <IconPhone className="text-3xl mb-2" />
        <h2 className="text-2xl font-semibold mb-4">Talks</h2>
        <p className="mb-4">We host talks by industry experts and alumni</p>
      </div>
      
      <motion.ul className="space-y-2 flex-grow">
        {isAnimating && talks.map((talk, index) => (
          <motion.li 
            key={index}
            initial={{ y: 20, opacity: 0, skewY: -5 }}
            animate={{ 
              y: 0,
              opacity: 1,
              skewY: 0
            }}
            exit={{ 
              y: -20,
              opacity: 0,
              skewY: 5 
            }}
            transition={{ 
              delay: index * 2, // Sequential entrance
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="border border-white p-2 rounded flex justify-between items-center"
          >
            <span>{talk}</span>
            <FaRegCheckCircle className="text-green-500 ml-2" />
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>



        {/* Projects Section */}
        <motion.div 
          className="col-span-4 bg-slate-950 rounded-lg p-6 h-[400px] flex flex-col justify-between overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Container for DynamicIconCloud */}
          <div className="flex-grow flex justify-center items-center overflow-hidden" style={{ height: '200px' }}>
            <motion.div 
              animate={{ 
                scale: [1.2, 1.7, 1.2],
                rotate: [0, 10, -30, 0],
              }}
              transition={{ 
                duration: 10, 
                ease: "linear", 
                repeat: Infinity,
              }}
            >
              <DynamicIconCloud />
            </motion.div>
          </div>

          {/* Text and Icon Section */}
          <div>
            <IconGitBranch className="text-3xl mb-2" />
            <h2 className="text-2xl font-semibold mb-4">Attach and Defend</h2>
            <p className="mb-4">Think like an attacker and defend like a pro</p>
          </div>
        </motion.div>

        {/* Mentorships Section */}
        <motion.div 
          className="col-span-4 bg-slate-950 rounded-lg p-6 h-[400px] flex flex-col justify-between overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="h-[200px] overflow-hidden relative">
            <motion.div
              className="absolute top-0"
              animate={{ y: ['-100%', '0%'] }} // Move from -100% to 0%
              transition={{
                duration: 10, // Adjust duration for scroll speed
                ease: 'linear',
                repeat: Infinity,
              }}
            >
              {/* Mentorship items */}
              {mentorshipItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center border border-gray-500 p-4 rounded-md m-2 shadow-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-md flex items-center justify-center mr-4">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>{item.mentor}</p>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate items for seamless scrolling */}
              {mentorshipItems.map((item, index) => (
                <motion.div 
                  key={`duplicate-${index}`}
                  className="flex items-center border border-gray-500 p-4 rounded-md m-2 shadow-lg"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-md flex items-center justify-center mr-4">
                    <span className="text-xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p>{item.mentor}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="mt-auto">
            <IconFriends className="text-3xl mb-2" />
            <h2 className="text-2xl font-semibold mb-4">Mentorships</h2>
            <p className="mb-4">Get mentored by industry professionals</p>
          </div>
        </motion.div>


        {/* Hackathons Section */}
        <motion.div 
            className="col-span-8 bg-slate-950 rounded-lg p-6 h-[400px] flex flex-col justify-between overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            >
            <motion.div 
              className="pt-10 whitespace-nowrap flex-grow overflow-hidden relative"
            >
              <motion.div 
                className="flex" 
                animate={{ x: ["0%", "-100%"] }} // Scroll effect to the left
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
              >
                {[...ctf, ...ctf].map((ctfItem, index) => (
                  <div 
                    key={index} 
                    className="ml-3 inline-block border border-white p-4 rounded text-xl"
                  >
                    {ctfItem}
                  </div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div 
                className="pt-10 space-x-2 whitespace-nowrap flex-grow"
                animate={{ x: ["-100%", "0%"] }} // Move the entire container from 0% to -100%
                transition={{ 
                    duration: 10, 
                    repeat: Infinity, 
                    ease: "linear"
                }}
            >
                {[...hackathons, ...hackathons].map((hackathon, index) => (
                    <motion.div 
                        key={index} 
                        className="inline-block border border-white p-4 rounded text-xl overflow-hidden"
                        initial={{ x: 0 }} // Start at original position
                        animate={{ x: 0 }} // Keep items at original position during the animation
                        transition={{ 
                            delay: index * 0.5, // Stagger the appearance of items
                            duration: 1.5 // Duration for each item's transition
                        }} 
                    >
                        {hackathon}
                    </motion.div>
                ))}
            </motion.div>
            <div>
                <IconCode className="text-3xl mb-2" />
                <h2 className="text-2xl font-semibold mb-4">CTF</h2>
                <p className="mb-4">Participate in CTF and showcase your skills to the world</p>
            </div>
        </motion.div>
      </div>
      <div className='pb-10'></div>
    </div>
  );
}
