import React from 'react';
import { ArrowRightIcon, CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

const projectData = [
  {
    name: "Brandify",
    description: "A cutting-edge marketing automation platform designed to streamline campaign management and boost engagement.",
    imageUrl: "https://placehold.co/600x400/172554/FFF?text=Brandify",
    liveUrl: "#",
    sourceUrl: "#",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    name: "Portfolio Pro",
    description: "A SaaS platform for creatives to build and manage their online portfolios effortlessly with a range of templates.",
    imageUrl: "https://placehold.co/600x400/172554/FFF?text=Portfolio+Pro",
    liveUrl: "#",
    sourceUrl: "#",
    tags: ["Vue.js", "Firebase", "Sass"]
  },
];

const Projects = () => {
  return (
    <section id="projects" className="h-screen w-full flex items-center bg-slate-50 text-slate-900">
      <div className="container mx-auto px-4 md:px-6 h-full flex flex-col justify-center py-16">
        <div className="text-left mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            My<span className="text-orange-500"> Project </span>  
            </h2>
          {/* <p className="mt-4 max-w-2xl text-lg text-slate-600">
            A selection of projects that I'm proud of.
          </p> */}
        </div>
        <div className="flex-grow overflow-y-auto pr-4 -mr-4 
                        scrollbar-thin scrollbar-thumb-slate-400 scrollbar-track-slate-200 
                        hover:scrollbar-thumb-slate-500">
          <ul className="space-y-4">
            {projectData.map((project) => (
              <li key={project.name} className="group bg-white p-4 rounded-lg border border-transparent 
                                               hover:border-amber-500 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-full sm:w-1/3 lg:w-1/4">
                    <img
                      src={project.imageUrl}
                      alt={`${project.name} screenshot`}
                      className="w-full h-auto rounded-md object-cover aspect-video"
                    />
                  </div>
                  <div className="w-full sm:w-2/3 lg:w-3/4">
                    <h3 className="text-xl font-semibold text-orange-600">{project.name}</h3>
                    <p className="mt-2 text-slate-600">{project.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="inline-block bg-slate-200 text-slate-700 text-xs font-medium px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center space-x-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" 
                         className="inline-flex items-center text-sm font-semibold text-sky-600 hover:text-sky-800">
                        <EyeIcon className="h-4 w-4 mr-1.5" />
                        View Live
                      </a>
                      <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" 
                         className="inline-flex items-center text-sm font-semibold text-slate-600 hover:text-slate-800">
                        <CodeBracketIcon className="h-4 w-4 mr-1.5" />
                        Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;