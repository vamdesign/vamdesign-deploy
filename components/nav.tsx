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
        
        <div className="md:hidden flex flex-col items-center text-[#007EA7]">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col items-center"
          >
            <div className="w-8 h-0.5 bg-[#007EA7] mb-1.5"></div>
            <div className="w-8 h-0.5 bg-[#007EA7] mb-1.5"></div>
            <div className="w-8 h-0.5 bg-[#007EA7] mb-1"></div>
            <span className="text-xs font-medium">Menu</span>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white p-4">
          <div className="flex flex-col space-y-4">
            <div className="space-y-3">
              <h3 className="font-medium text-[#007EA7] border-b border-[#007EA7] pb-1">Use Cases</h3>
              <Link href="/uc/apple/details/" className="block pl-3 text-[#007EA7] hover:text-[#005f7f]">
                Apple Internal Tools
              </Link>
              <Link href="/uc/wellsf/details/" className="block pl-3 text-[#007EA7] hover:text-[#005f7f]">
                Wells Fargo CRM <span className="inline-block ml-1">🔒</span>
              </Link>
              <Link href="/uc/walmart/details/" className="block pl-3 text-[#007EA7] hover:text-[#005f7f]">
                Walmart Labs
              </Link>
              <Link href="/uc/litman/details/" className="block pl-3 text-[#007EA7] hover:text-[#005f7f]">
                Littler Mendelson <span className="inline-block ml-1">🔒</span>
              </Link>
              <Link href="/uc/river/details/" className="block pl-3 text-[#007EA7] hover:text-[#005f7f]">
                Riverbed Technology
              </Link>
              <Link href="/uc/ai/details/" className="block pl-3 text-[#007EA7] hover:text-[#005f7f]">
                Designing with AI
              </Link>
            </div>
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