"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { EyeIcon, CodeBracketIcon, PaperClipIcon } from "@heroicons/react/24/outline";

// Categories
export type Category = "DL" | "AI" | "Full Stack";

type Project = {
  name: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
  tags: string[];
  papers: {title: string; url: string}[];
  resources: {title: string; url: string}[];
  category: Category;
  year?: number;
};

const categoryMeta: Record<
  Category,
  { label: string; badge: string; ring: string; dot: string }
> = {
  DL: {
    label: "Deep Learning",
    badge: "bg-emerald-50 text-emerald-700",
    ring: "ring-emerald-200",
    dot: "bg-emerald-500",
  },
  AI: {
    label: "AI / ML",
    badge: "bg-sky-50 text-sky-700",
    ring: "ring-sky-200",
    dot: "bg-sky-500",
  },
  "Full Stack": {
    label: "Full Stack",
    badge: "bg-amber-50 text-amber-700",
    ring: "ring-amber-200",
    dot: "bg-amber-500",
  },
};

// Preview data (same as /projects page; can be centralized later)
const projectData: Project[] = [

  // AI / ML
  {
    name: "NanoGPT",
    description:
      "Followed Andrej Karpathy tutorial to build a Generatively Pretrained Transformer (GPT), following the paper 'Attention is All You Need' and OpenAI's GPT-2 / GPT-3.",
    imageUrl: "https://placehold.co/600x400/0ea5e9/FFF?text=NanoGPT",
    liveUrl: "#",
    sourceUrl: "https://github.com/KrishnakGitHub/nano-gpt",
    tags: ["LLM", "PyTorch"],
    papers: [
      { title: "Attention is All You Need", url: "https://arxiv.org/abs/1706.03762" },
      { title: "OpenAI GPT-3", url: "https://arxiv.org/abs/2005.14165" }
    ],
    resources: [
      { title: "OpenAI ChatGPT blog", url: "https://openai.com/blog/chatgpt/" }
    ],
    category: "AI",
    year: 2025,
  },
];

const Projects = () => {
  // Compute a few recent projects (by year desc, fallback by name)
  const recent = useMemo(() => {
    const items = projectData.slice();
    items.sort((a, b) => (b.year ?? 0) - (a.year ?? 0) || a.name.localeCompare(b.name));
    return items.slice(0, 3);
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 text-gray-800 h-screen">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Recent <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-600 mt-2">Exploring Building Reflecting</p>
        </div>

        {/* Grid preview */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recent.map((project) => {
            const meta = categoryMeta[project.category];
            return (
              <li
                key={project.name}
                className="group relative bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-orange-500/30"
              >
                {/* Project Image */}
                <img
                  src={project.imageUrl}
                  alt={`${project.name} screenshot`}
                  className="w-full h-auto object-cover aspect-video"
                />

                {/* Sliding + blurred overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/50 backdrop-blur-sm opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                  <p className="mt-2 text-sm text-white line-clamp-4">{project.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-white/20 text-white text-xs font-medium px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-white bg-orange-600 px-3 py-1.5 rounded-full hover:bg-orange-700"
                    >
                      <EyeIcon className="h-4 w-4 mr-1" /> Live
                    </a>
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-white bg-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-800"
                    >
                      <CodeBracketIcon className="h-4 w-4 mr-1" /> Code
                    </a>
                    <Link
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-semibold text-white bg-gray-700 px-3 py-1.5 rounded-full hover:bg-gray-800"
                    >
                      <PaperClipIcon className="h-4 w-4 mr-1" /> Details
                    </Link>
                  </div>
                </div>

                {/* Badge and year (always visible) */}
                <div className="absolute left-3 top-3 inline-flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ring-1 ${meta.badge} ${meta.ring}`}
                  >
                    <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                    {meta.label}
                  </span>
                  {project.year && (
                    <span className="text-[11px] font-semibold text-white/90 bg-black/40 px-2 py-0.5 rounded-full">
                      {project.year}
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ul>


        {/* CTA below grid */}
        {/* <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 bg-white hover:bg-gray-100 ring-1 ring-gray-200 px-4 py-2 rounded-md transition-colors"
          >
            View all projects
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
