// import { demoEvents } from "@/lib/eventsDemoData";
import ExpandableEventCard from "@/components/events/ExpandableEventCard"
import { getEvents } from "@/helpers/getEvents"

export default async function EventsPage() {

    const events = await getEvents()

    return (
        <>
            <section className="min-h-screen bg-secondary-800 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] bg-dark-bg">
                <div className="mx-auto py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
                    <h2 className="text-5xl font-bold text-center bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in mb-7">Events</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Event cards here */}
                        {console.log("here: ", events)}
                        {events.map((event) => (
                            <ExpandableEventCard key={event.id} event={{ id: event.id, ...event.attributes }} />
                        ))}

                    </div>
                </div>
            </section>
        </>
    );
}

// "use client";

// import React from "react";
// import Image from "next/image";
// import { motion } from "framer-motion"; // For animations

// export default function ContactUs() {
//   const contacts = [
//     {
//       platform: "WhatsApp",
//       username: "Cybercell Group",
//       qrCodeUrl: "/Whatsapp.png", // replace with actual QR code URL
//       profileUrl: "https://wa.me/1234567890", // replace with actual WhatsApp URL
//     },
//     {
//       platform: "Instagram",
//       username: "@cybercellgroup",
//       qrCodeUrl: "/insta.png", // replace with actual QR code URL
//       profileUrl: "https://instagram.com/cybercellgroup", // replace with actual Instagram URL
//     },
//     {
//       platform: "LinkedIn",
//       username: "Cybercell Group",
//       qrCodeUrl: "/linkedin.png", // replace with actual QR code URL
//       profileUrl: "https://linkedin.com/company/cybercellgroup", // replace with actual LinkedIn URL
//     },
//   ];

//   return (
//     <div className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-black min-h-screen">
//     <h1 className="text-5xl font-bold text-center mb-0 bg-clip-text bg-gradient-to-r from-blue-500 to-blue-300 text-transparent animate-fade-in">
//     Contact Us
//   </h1>


//       <div className="container mx-auto px-4 md:px-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {contacts.map((contact, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, delay: index * 0.2 }}
//               className="bg-gray-800 p-8 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
//             >
//               <h2 className="text-3xl font-bold text-white mb-4">{contact.platform}</h2>
//               <p className="text-lg font-semibold text-gray-400 mb-6">{contact.username}</p>
//               <a
//                 href={contact.profileUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="block"
//               >
//                 <Image
//                   src={contact.qrCodeUrl}
//                   alt={`${contact.platform} QR Code`}
//                   width={220}
//                   height={220}
//                   className="mx-auto mb-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
//                 />
//               </a>
//               <a
//                 href={contact.profileUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="inline-block text-lg text-blue-500 hover:text-blue-300 transition-colors"
//               >
//                 Visit {contact.platform} Profile
//               </a>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
