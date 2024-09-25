import Image from "next/image";
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

export default function CommunitySection() {
  const clubHead = {
    name: "Devendra",
    title: "Chairperson",
    image: "/Devendra.png",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  };

  const coordinators = [
    {
      name: "Tanmay",
      title: "Vice Chairperson",
      image: "/tanmay.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Pranav",
      title: "Secretary",
      image: "/pranav.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Kunj",
      title: "Technical Head",
      image: "/kunj.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Jagdish",
      title: "Web Security Head",
      image: "/Jagdish.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Aditya",
      title: "Digital Forensic Head",
      image: "/aditya.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Kedar",
      title: "Marketing Head",
      image: "/kedar.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Ajinkya",
      title: "Admin Head",
      image: "/ajinkya.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sunny",
      title: "Design Head",
      image: "/sunny.png",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  return (
    <section className="py-16 bg-custom-bg">
    <div className="container mx-auto px-4">
     
        <h2 className="text-5xl font-bold text-center mb-0 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in">
          MEET OUR COUNCIL MEMBERS
        </h2>
  
  
      {/* Club Head */}
      <div className="rounded-3xl p-8 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 rounded-3xl"></div>
        <div className="relative z-10 flex flex-col items-center text-center border border-black shadow-lg p-6 rounded-lg w-full max-w-xs mx-auto bg-white">
          <Image
            src={clubHead.image}
            alt={clubHead.name}
            width={300}
            height={300}
            className="rounded-full mb-4 border-4 border-[#1FA2FF]"
          />
          {/* <h3 className="text-2xl font-semibold text-gray-800">{clubHead.name}</h3>
          <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold mb-4">{clubHead.title}</p> */}
          <div className="flex justify-center space-x-4">
            <a href={clubHead.socials.linkedin} className="text-[#36a9f1] hover:-translate-y-1 transition-transform duration-300">
              <FaLinkedin size={29} />
            </a>
            <a href={clubHead.socials.twitter} className="text-[#080808] hover:-translate-y-1 transition-transform duration-300">
              <FaGithub size={29} />
            </a>
            <a href={clubHead.socials.instagram} className="text-[#fa365a] hover:-translate-y-1 transition-transform duration-300">
              <FaInstagram size={29} />
            </a>
          </div>
        </div>
      </div>
  
      {/* Coordinators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mx-20">
        {coordinators.map((coordinator) => (
          <div
            key={coordinator.name}
            className="flex flex-col border border-transparent rounded-xl text-center bg-white shadow-lg transition-transform transform hover:-translate-y-2"
          >
            <div className="px-1 py-10">
              <Image
                src={coordinator.image}
                alt={coordinator.name}
                width={300}
                height={300}  
                className="rounded-full mx-auto mb-4 border-4 border-[#1FA2FF]"
              />
              {/* <h3 className="text-2xl font-semibold text-gray-800">{coordinator.name}</h3>
              <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold mb-4">{coordinator.title}</p> */}
              <div className="flex justify-center space-x-4 mt-auto">
                <a href={coordinator.socials.linkedin} className="text-[#36a9f1] hover:-translate-y-1 transition-transform duration-300">
                  <FaLinkedin size={29} />
                </a>
                <a href={coordinator.socials.twitter} className="text-[#080808] hover:-translate-y-1 transition-transform duration-300">
                  <FaGithub size={29} />
                </a>
                <a href={coordinator.socials.instagram} className="text-[#fa365a] hover:-translate-y-1 transition-transform duration-300">
                  <FaInstagram size={29} />
                </a>
              </div>
            </div>
          </div>          
        ))}
      </div>
    </div>
  </section>
  
  );
}
