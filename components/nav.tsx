"use client"

import Link from "next/link"
import { useState } from "react"
import { Logo } from "./logo"
import { LinkedInIcon } from "./linkedin-icon" 
import { UseCasesDropdown } from "./use-cases-dropdown"

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/">
          <Logo className="h-8 w-auto text-[#007EA7]" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <UseCasesDropdown />
          <Link href="/about" className="text-[#007EA7] hover:text-[#005f7f] font-medium">
            About
          </Link>
          <Link href="/contact" className="text-[#007EA7] hover:text-[#005f7f] font-medium">
            Let's Chat
          </Link>
          <a href="https://www.linkedin.com/in/vickimorawietz" target="_blank" rel="noopener noreferrer" className="text-[#007EA7] hover:text-[#005f7f]">
            <LinkedInIcon className="h-4 w-4" />
          </a>
        </div>
        
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-[#007EA7]"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <div className="flex flex-col space-y-4">
            <UseCasesDropdown />
            <Link href="/about" className="text-[#007EA7] font-medium">
              About
            </Link>
            <Link href="/contact" className="text-[#007EA7] font-medium">
              Let's Chat
            </Link>
            <a href="https://www.linkedin.com/in/vickimorawietz" target="_blank" rel="noopener noreferrer" className="flex items-center text-[#007EA7]">
              <LinkedInIcon className="h-4 w-4 mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}