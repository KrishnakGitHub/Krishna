"use client";

import React, { useState } from "react";
import { 
  Search, SlidersHorizontal, BookOpen, Compass, 
  Clock, Heart, LibrarySquare, Bell, User, Star, 
  MoreHorizontal, ChevronRight, Bookmark
} from "lucide-react";

// --- MOCK DATA ---
const CATEGORIES = ["All", "Science Fiction", "History", "Design", "Psychology", "Technology", "Biography"];

const BOOKS = [
  { id: 1, title: "The Design of Everyday Things", author: "Don Norman", rating: 4.8, category: "Design", status: "Available", coverUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" },
  { id: 2, title: "Dune", author: "Frank Herbert", rating: 4.9, category: "Science Fiction", status: "Borrowed", coverUrl: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&w=2488&auto=format&fit=crop" },
  { id: 3, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", rating: 4.7, category: "Psychology", status: "Waitlist", coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=2712&auto=format&fit=crop" },
  { id: 4, title: "Sapiens: A Brief History", author: "Yuval Noah Harari", rating: 4.8, category: "History", status: "Available", coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2574&auto=format&fit=crop" },
  { id: 5, title: "Clean Code", author: "Robert C. Martin", rating: 4.6, category: "Technology", status: "Available", coverUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2670&auto=format&fit=crop" },
];

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter Logic
  const filteredBooks = BOOKS.filter((book) => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === "All" || book.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="flex h-screen w-full bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans overflow-hidden">
      
      {/* SIDEBAR NAVIGATION */}
      <aside className="w-64 border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hidden md:flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-10 text-indigo-600 dark:text-indigo-400">
            <LibrarySquare className="w-8 h-8" strokeWidth={2} />
            <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">Alexandria</span>
          </div>

          <nav className="space-y-2">
            <NavItem icon={<Compass />} label="Discover" active />
            <NavItem icon={<BookOpen />} label="My Books" />
            <NavItem icon={<Clock />} label="Reading History" />
            <NavItem icon={<Heart />} label="Favorites" />
          </nav>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800/50 cursor-pointer transition-colors">
          <div className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center overflow-hidden">
            <User className="w-5 h-5 text-zinc-500" />
          </div>
          <div>
            <p className="text-sm font-semibold">Jane Doe</p>
            <p className="text-xs text-zinc-500">Premium Member</p>
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col h-full relative overflow-y-auto">
        
        {/* TOP HEADER */}
        <header className="sticky top-0 z-30 flex items-center justify-between px-8 py-5 bg-zinc-50/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
          <div className="relative w-full max-w-lg group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-zinc-400 group-focus-within:text-indigo-500 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search books, authors, or ISBN... (Press ⌘K)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-4 py-2.5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-full text-sm placeholder-zinc-500 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all outline-none"
            />
            <div className="absolute inset-y-0 right-2 flex items-center">
              <button className="p-1.5 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-300 transition-colors">
                <SlidersHorizontal className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white dark:border-zinc-950"></span>
            </button>
          </div>
        </header>

        {/* HERO SECTION */}
        <div className="px-8 py-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">Good morning, Jane</h1>
              <p className="text-zinc-500 dark:text-zinc-400">You have 2 books due this week. Keep up the great pace!</p>
            </div>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all active:scale-95 ${
                  activeCategory === category
                    ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 shadow-md"
                    : "bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 hover:bg-zinc-50 dark:hover:border-zinc-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* RESULTS GRID */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {searchQuery ? "Search Results" : "Trending Now"}
              </h2>
              <button className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:underline flex items-center">
                View all <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 px-4 text-center border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-2xl">
                <Search className="w-12 h-12 text-zinc-300 dark:text-zinc-700 mb-4" />
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">No books found</h3>
                <p className="text-zinc-500 max-w-sm">We couldn't find any books matching "{searchQuery}" in the {activeCategory} category.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function NavItem({ icon, label, active = false }: { icon: React.ReactElement<{ className?: string }>; label: string; active?: boolean }) {
  return (
    <button
      className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all ${
        active
          ? "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-medium"
          : "text-zinc-500 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 hover:text-zinc-900 dark:hover:text-zinc-100"
      }`}
    >
      <div className={`${active ? "text-indigo-600 dark:text-indigo-400" : "text-zinc-400"}`}>
        {React.cloneElement(icon, { className: "w-5 h-5" })}
      </div>
      <span>{label}</span>
    </button>
  );
}

function BookCard({ book }: { book: any }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "Borrowed": return "bg-amber-500/10 text-amber-600 border-amber-500/20";
      case "Waitlist": return "bg-rose-500/10 text-rose-600 border-rose-500/20";
      default: return "bg-zinc-500/10 text-zinc-600 border-zinc-500/20";
    }
  };

  return (
    <div className="group cursor-pointer flex flex-col h-full">
      {/* Cover Image Container */}
      <div className="relative aspect-[2/3] w-full rounded-xl overflow-hidden mb-4 shadow-sm group-hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
        <img 
          src={book.coverUrl} 
          alt={book.title}
          className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay Actions */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-start justify-end p-3">
          <button className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-zinc-900 transition-colors">
            <Bookmark className="w-4 h-4" />
          </button>
        </div>
        {/* Status Badge */}
        <div className="absolute bottom-3 left-3 right-3">
          <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border ${getStatusColor(book.status)}`}>
            {book.status}
          </span>
        </div>
      </div>

      {/* Book Metadata */}
      <div className="flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-1">
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 line-clamp-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {book.title}
          </h3>
          <button className="text-zinc-400 hover:text-zinc-900 opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-1 mb-2">
          {book.author}
        </p>
        <div className="mt-auto flex items-center gap-1">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-zinc-700 dark:text-zinc-300">{book.rating}</span>
        </div>
      </div>
    </div>
  );
}