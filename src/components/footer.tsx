import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="container mx-auto ">
          <div className="h-px bg-slate-100/50 mb-12 w-full"></div>
          {/* Horizontal Line */}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start px-1">
            {/* Contact Us Section */}
            <div className="md:col-start-1 md:col-end-2 ml-5">
              <div className="flex items-center mb-4">
                <Image
                  src="/logo.png" 
                  alt="Website Logo"
                  width={90} 
                  height={90} 
                  className="ml-24"
                />
              </div>
    
              <p className="text-white mb-4 ml-20">
                A group of passionate PICT students are helping the community of PICT.
              </p>
              {/* Social Media Icons */}
              <div className="flex justify-center space-x-8 mt-4">
                <Link href="#" aria-label="LinkedIn" className="text-[#1da1f2] hover:-translate-y-1 transition-transform duration-300">
                  <FaLinkedin size={35} />
                </Link>
                <Link href="#" aria-label="GitHub" className="text-[#3b5998] hover:-translate-y-1 transition-transform duration-300">
                  <FaGithub size={35} />
                </Link>
                <Link href="#" aria-label="Instagram" className="text-[#e4405f] hover:-translate-y-1 transition-transform duration-300">
                  <FaInstagram size={35} />
                </Link>
                <Link href="#" aria-label="Twitter" className="text-[#1da1f2] hover:-translate-y-1 transition-transform duration-300">
                  <FaTwitter size={35} />
                </Link>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="flex flex-col items-center">
              <h2 className="text-2xl font-semibold mb-4">QUICK LINKS</h2>
              <ul className="space-y-4 text-center">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-blue-400 transition duration-300">Home</Link>
                </li>
                <li>
                  <Link href="/team" className="text-gray-400 hover:text-blue-400 transition duration-300">Team</Link>
                </li>
                <li>
                  <Link href="/resources" className="text-gray-400 hover:text-blue-400 transition duration-300">Resources</Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-400 hover:text-blue-400 transition duration-300">Events</Link>
                </li>
              </ul>
            </div>

            {/* Form Section */}
            <div className="md:col-start-3 md:col-end-4 pr-5">
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 mb-4">
                CONTACT US
              </h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    className="w-full p-2 bg-gray-800 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email *"
                    required
                    className="w-full p-2 bg-gray-800 rounded"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Message</label>
                  <textarea
                    id="message"
                    placeholder="Message"
                    rows={4}
                    className="w-full p-2 bg-gray-800 rounded"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-black px-6 py-2 rounded float-right"
                >
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
