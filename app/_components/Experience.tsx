import React from 'react';

type ExperienceType = {
  role: string;
  company: string;
  duration: string;
  description: string[];
  type: "work" | "education";
};

const experienceData: ExperienceType[] = [
  {
    role: "Bachelor of Technology",
    company: "SBS State University",
    duration: "Jul 2016 - Jun 2020",
    description: [
      "Completed my Bachelor of Technology in Computer Science and Engineering from Shaheed Bhagat Singh State Technical Campus.",
      "Coursework: C, C++, Java, Python, DSA, Computer Networks, System design, Compiler design, Microcontrolers, IOT, etc.",
      "Internships and Trainings: Android, Java from CETPA Noida, Django, Python, Full Stack Development from NareshIT Hyderabad, TrishasoftTech Noida, also got internships SureTrust NGO.",
    ],
    type: "education"
  },
  {
    role: "Software Developer",
    company: "Micropyramid Inc.",
    duration: "Aug 2021 - Aug 2023",
    description: [
      "Developed and maintained features for a high-traffic Full Stack Developer Cloud platform using Django and React.",
      "Wrote comprehensive code for features and API integrations, increasing the user experience.",
      "Built backend + frontend for real-time code execution.",
    ],
    type: "work"
  },
  {
    role: "Master of Technology",
    company: "IIT Hyderabad",
    duration: "Aug 2023 - Jul 2025",
    description: [
      "Completed My Mtech in Techno-Entrepreneurship from Indian Institute of Technology Hyderabad.",
      "Technical Coursework: Deep Learning, NLP, IMVP, Fraud analytics and DSA.",
      "Entrepreneurship Coursework: Foundation of Entrepreneurship, Design Thinking, Marketing, Finance, Strategic Management.",
      "Final Year Project: Developed an Ed-Tech startup from scratch."
    ],
    type: "education"
  }
];

const ExperienceCard = ({ role, company, duration, description, position, type }: { role: string; company:string; duration: string; description: string[]; position: 'left' | 'right' | 'top'; type: 'work' | 'education' }) => (
  <div className="relative group">
    {/* Main Card Content */}
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-orange-500/30 w-full">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-orange-500 mb-1 font-semibold">{duration}</p>
          <h3 className="text-xl font-bold text-gray-900">{role}</h3>
          <p className="text-lg font-light text-gray-600">{company}</p>
        </div>
        {/* Info Icon */}
        <div className="flex-shrink-0 ml-2 w-8 h-8 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-sm font-bold transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-white">
          {type === 'work' ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          )}
        </div>
      </div>
    </div>
    
    {/* Tooltip with Description */}
    <div className={`absolute w-full max-w-md p-4 rounded-lg bg-gray-800 text-white shadow-xl z-20
                    invisible opacity-0 transition-all duration-300 group-hover:visible group-hover:opacity-100
                    ${position === 'top' ? 'bottom-full mb-4 group-hover:translate-y-[-10px]' : ''}
                    ${position === 'left' ? 'top-1/2 -translate-y-1/2 right-full mr-4 group-hover:translate-x-[-10px]' : ''}
                    ${position === 'right' ? 'top-full mt-4 group-hover:translate-y-[10px]' : ''}`}>
      <ul className="space-y-2 text-gray-300 text-sm">
        {description.map((point, i) => (
          <li key={i} className="flex items-start">
            <svg className="w-3 h-3 mr-2 mt-1 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>{point}</span>
          </li>
        ))}
      </ul>
      {/* Tooltip Arrow */}
      <div className={`absolute w-0 h-0 border-x-8 border-x-transparent border-y-8 border-y-transparent
                      ${position === 'top' ? 'top-full border-t-8 border-t-gray-800 !border-x-transparent' : ''}
                      ${position === 'left' ? 'top-1/2 -translate-y-1/2 left-full border-l-8 border-l-gray-800 !border-y-transparent' : ''}
                      ${position === 'right' ? 'left-1/2 -translate-x-1/2 bottom-full border-b-8 border-b-gray-800 !border-x-transparent' : ''}`}></div>
    </div>
  </div>
);

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-100 text-gray-800 h-screen">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="text-orange-500">Experience</span> & Education
        </h2>
        
        {/* Horizontal Scrollable Container for Desktop */}
        <div className="hidden md:block overflow-x-auto pb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="relative pt-52 pb-52">
            {/* The Timeline Bar */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-300"></div>
            
            {/* Timeline Items Container */}
            <div className="relative flex justify-between min-w-max px-8">
              {experienceData.map((job, index) => (
                <div key={index} className="relative flex-shrink-0 w-96 px-4">
                  {/* Timeline Dot and Connector */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className={`w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-100 z-10 order-2`}></div>
                    <div className={`w-0.5 h-16 bg-gray-300 ${index % 2 === 0 ? 'order-1 mb-1' : 'order-3 mt-1'}`}></div>
                  </div>
                  
                  {/* Card */}
                  <div className={`absolute left-1/2 -translate-x-1/2 w-full ${index % 2 === 0 ? 'bottom-[calc(50%+3.5rem)]' : 'top-[calc(50%+3.5rem)]'}`}>
                    <ExperienceCard {...job} position={index % 2 === 0 ? 'right' : 'left'} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Vertical Timeline for Mobile  */}
        <div className="relative md:hidden mt-8 pl-8">
          {/* The Vertical Timeline Bar */}
          <div className="absolute top-0 left-8 w-0.5 h-full bg-gray-300"></div>
          <div className="space-y-16">
            {experienceData.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute -left-2 top-1 w-4 h-4 bg-orange-500 rounded-full border-4 border-gray-100 z-10"></div>
                {/* Card */}
                <div className="ml-8">
                  <ExperienceCard {...job} position="top" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
