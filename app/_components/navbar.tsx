import React from 'react'

export default function Navbar() {
  const linkClasses = "relative text-[#f97316] transition-colors duration-300 hover:text-orange-500 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-orange-500 after:transition-transform after:duration-300 hover:after:scale-x-100";

  return (
    <nav className="w-full bg-transparent text-[#f97316] absolute top-0 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">Krishna's Resume</div>
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#about" className={linkClasses}>About</a>
          </li>
          <li>
            <a href="#experience" className={linkClasses}>Experience</a>
          </li>
          <li>
            <a href="#projects" className={linkClasses}>Projects</a>
          </li>
          <li>
            <a href="#skills" className={linkClasses}>Skills</a>
          </li>
          <li>
            <a href="#contact" className={linkClasses}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
