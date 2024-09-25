import Image from "next/image"

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Raju Re baba",
      position: "Dean of Computer Science",
      image: "/placeholder.svg?height=300&width=300",
      details: "Dr. Chandak is a renowned expert in artificial intelligence and machine learning. With over 15 years of experience in both academia and industry, she leads our computer science department with a focus on cutting-edgJohnson is an award-winning engineer with multiple patents. He brings real-world experience to our engineering programs, emphasizinge research and innovative teaching methods."
    },
    {
      name: "Michael Johnson",
      position: "Head of Engineering",
      image: "/placeholder.svg?height=300&width=300",
      details: "Prof. Johnson is an award-winning engineer with multiple patents. He brings real-world experience to our engineering programs,Johnson is an award-winning engineer with multiple patents. He brings real-world experience to our engineering programs, emphasizing emphasizing practical skills alongside theoretical knowledge."
    },
    {
      name: "Emily Chen",
      position: "Director of Student Affairs",
      image: "/placeholder.svg?height=300&width=300",
      details: "Dr. Chen is dedicated Johnson is an award-winning engineer with multiple patents. He brings real-world experience to our engineering programs, emphasizing to enhancing student life on campus. With a background in psychology, she implements innovative programs to support student well-being and academic success."
    }
  ]

  const highlightInitials = (name: string) => {
    return name.split(' ').map((part, index) => (
      <span key={index}>
        <span className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text font-bold text-4xl">{part[0]}</span>
        {part.slice(1)}
        {index < name.split(' ').length - 1 && ' '}
      </span>
    ))
  }

  return (
    <section>
      
      <div className="relative w-full h-[45vh] pt-12 bg-cover bg-center bg-members-blur-dark">
        <div className="absolute inset-0 bg-cover bg-center bg-members-blur-dark backdrop-blur-md z-[-1]"></div>
        <div className="container px-4 md:px-6 text-center space-y-6 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            <span className="text-blue-300">PICT CyerCell</span> Members
          </h1>
          <p className="max-w-[600px] mx-auto text-2md md:text-md text-white">
            The people that make us great :)
          </p>
        </div>
      </div>

      <div className="py-12 bg-white">

      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <h2 className="text-5xl font-bold text-center mb-12">Club Founder</h2>
        {teamMembers.map((member, index) => (
          <div key={member.name} className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16 last:mb-0 mx-4 md:mx-8 lg:mx-16">
            {index % 2 === 0 ? (
              <>
                <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={350}
                    height={350}
                    className="rounded-full shadow-lg"
                  />
                </div>
                <div className="w-full md:w-2/3 m-7">
                  <h3 className="text-3xl font-semibold mb-2">
                    {highlightInitials(member.name)}
                  </h3>
                  <p className="text-muted-foreground mb-4">{member.position}</p>
                  <p>{member.details}</p>
                </div>
              </>
            ) : (
              <>
                <div className="w-full md:w-2/3 order-2 md:order-1 m-7">
                  <h3 className="text-3xl font-semibold mb-2">
                    {highlightInitials(member.name)}
                  </h3>
                  <p className="text-muted-foreground mb-4">{member.position}</p>
                  <p>{member.details}</p>
                </div>
                <div className="w-full md:w-1/3 flex justify-center md:justify-end order-1 md:order-2">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={350}
                    height={350}
                    className="rounded-full shadow-lg"
                  />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      </div>


    </section>
  )
}