export type ReferencePaper = {
  title: string;
  url: string;
  authors?: string;      
  journal?: string;      
  year?: number;         
};

export type ReferenceResource = {
  title: string;
  url: string;
  organization?: string; 
  year?: number;         
};

// Categories
export type Category = "DL" | "AI" | "Full Stack";

export type Project = {
  name: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  sourceUrl: string;
  tags: string[];
  papers: ReferencePaper[];
  resources: ReferenceResource[];
  category: Category;
  year?: number;
};

export const categoryMeta: Record<
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
export const projectData: Project[] = [

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
      { title: "Attention is All You Need",
        url: "https://arxiv.org/abs/1706.03762",
        authors: "Ashish Vaswani et al.",
        journal: "NeurIPS",
        year: 2017,
      },
      { title: "OpenAI GPT-3", 
        url: "https://arxiv.org/abs/2005.14165",
        authors: "Tom B. Brown et al.",
        journal: "arXiv",
        year: 2020, 
      }
    ],
    resources: [
      { title: "OpenAI ChatGPT blog",
        url: "https://openai.com/blog/chatgpt/",
        organization: "OpenAI",
        year: 2022, 
      }
    ],
    category: "AI",
    year: 2025,
  },
];