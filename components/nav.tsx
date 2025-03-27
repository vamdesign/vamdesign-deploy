"use client"

import Link from "next/link"
import { useState } from "react"
import { Lock } from "lucide-react" // Import Lock from lucide-react
import { Logo } from "./logo"
import { LinkedInIcon } from "./linkedin-icon" 
import { UseCasesDropdown } from "./use-cases-dropdown"
import Cookies from "js-cookie" // Import Cookies to check authentication

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  // Define the use cases array just like in the dropdown
  const useCases = [
    { name: "Apple – Internal Apps", href: "/uc/apple/details", isProtected: false },
    {
      name: "Wells Fargo – Legacy Integration",
      href: "/uc/wellsf/details",
      isProtected: true,
      cookieName: "auth-wellsf",
    },
    { name: "Walmart – Fulfillment App", href: "/uc/walmart/details", isProtected: false },
    { name: "Littler – Management App", href: "/uc/litman/details", isProtected: true, cookieName: "auth-litman" },
    { name: "Riverbed – B2B UX Strategies", href: "/uc/river/details", isProtected: false },
    { name: "Designing with AI - UX Portfolio", href: "/uc/ai/details", isProtected: false },
  ]
  
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
            <div className="space-y-2">
              <h3 className="font-medium text-[#007EA7] border-b border-[#007EA7] pb-1">Use Cases</h3>
              
              {useCases.map((useCase, index) => {
                // Check if this use case is protected
                if (useCase.isProtected) {
                  // Check if user is authenticated for this specific use case
                  const isAuthenticated = useCase.cookieName && Cookies.get(useCase.cookieName) === "authenticated"
                  
                  // Determine appropriate destination
                  const destination = isAuthenticated 
                    ? useCase.href 
                    : `/passcode?returnUrl=${useCase.href}&uc=${useCase.href.split("/")[2]}`
                  
                  return (
                    <Link 
                      key={`mobile-usecase-${index}`}
                      href={destination}
                      className="flex items-center justify-between pl-3 py-2 text-[#007EA7] hover:text-[#005f7f]"
                    >
                      <span>{useCase.name}</span>
                      <Lock className="h-3 w-3 ml-2 opacity-70" />
                    </Link>
                  )
                }
                
                // For unprotected use cases
                return (
                  <Link 
                    key={`mobile-usecase-${index}`}
                    href={useCase.href}
                    className="block pl-3 py-2 text-[#007EA7] hover:text-[#005f7f]"
                  >
                    {useCase.name}
                  </Link>
                )
              })}
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