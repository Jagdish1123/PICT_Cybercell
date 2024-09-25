import Image from "next/image"
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'

export default function CommunitySection() {
  const clubHead = {
    name: "Suman Sourav",
    title: "CLUB HEAD",
    image: "/placeholder.svg?height=200&width=200",
    bio: "The Cyber Cell Club serves as the protector of the digital domain, battling against cyber threats and safeguarding our online security. Strong beliefs lead to great achievements. With immense joy we are thrilled to announce Suman Sourav as the club head for the 2023-2024 term at Cyber Cell. His passion and unwavering determination have inspired everyone, making him the ideal selection to lead us in the 2023-24 season. We look forward to an unforgettable year under your headship and extend our heartfelt wishes for a future filled with success and achievements.",
    socials: {
      linkedin: "#",
      twitter: "#",
      instagram: "#"
    }
  }

  const coordinators = [
    {
      name: "Priyanshu Bhardwaj",
      title: "CLUB CO-ORDINATOR",
      image: "/placeholder.svg?height=150&width=150",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Ajay Sharma",
      title: "CLUB CO-ORDINATOR",
      image: "/placeholder.svg?height=150&width=150",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Ayushi Shukla",
      title: "CLUB CO-ORDINATOR",
      image: "/placeholder.svg?height=150&width=150",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Aviral Singh",
      title: "CLUB CO-ORDINATOR",
      image: "/placeholder.svg?height=150&width=150",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
        name: "Priyanshu Bhardwaj",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Ajay Sharma",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Ayushi Shukla",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Aviral Singh",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Priyanshu Bhardwaj",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Ajay Sharma",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Ayushi Shukla",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      },
      {
        name: "Aviral Singh",
        title: "CLUB CO-ORDINATOR",
        image: "/placeholder.svg?height=150&width=150",
        socials: {
          linkedin: "#",
          twitter: "#",
          instagram: "#"
        }
      }
  ]

  return (
    <section className="py-16 bg-custom-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-white text-center mb-10">MEET OUR COMMUNITY</h2>
        
        {/* Club Head */}
        <div className="rounded-3xl p-8 mb-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 rounded-3xl"></div>
          <div className="relative z-10 flex flex-col items-center text-center border border-black shadow-lg p-6 rounded-lg w-full max-w-xs mx-auto bg-white">
            <Image
              src={clubHead.image}
              alt={clubHead.name}
              width={150}
              height={150}
              className="rounded-full mb-4"
            />
            <h3 className="text-2xl font-semibold">{clubHead.name}</h3>
            <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-bold mb-4">{clubHead.title}</p>
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
              className="flex flex-col border border-black rounded-xl text-center bg-white card-hover"
            >
              <div className="px-1 py-10">
                <Image
                  src={coordinator.image}
                  alt={coordinator.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-2xl font-semibold">{coordinator.name}</h3>
                <p className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold mb-4">{coordinator.title}</p>
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
  )
}