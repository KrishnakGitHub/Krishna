import React from 'react'

function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white">
       <div className="container mx-auto px-4 md:px-6 py-8">
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
           <div className="text-slate-600 text-sm">
             © {new Date().getFullYear()} Krishna. All rights reserved.
           </div>
           <div className="flex items-center gap-4 text-sm">
             <a
              href="mailto:krishnakr.email@gmail.com"
              className="text-orange-600 hover:text-orange-700"
            >
              krishnakr.email@gmail.com
            </a>
            <span className="text-slate-300">|</span>
            <a
              href="https://github.com/KrishnakGitHub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/krishna-kumar-2b2121169/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-slate-900"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection