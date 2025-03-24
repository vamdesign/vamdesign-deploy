"use client"

import { useEffect } from "react";
import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"

import SectionAuth from "@/components/SectionAuth"

export default function AppleInternalToolsPage() {
  // The debugging code needs to be inside the component body, but after any hooks
  useEffect(() => {
    console.log("Apple page loaded");
    console.log("Cookies:", document.cookie);
    
    // Try to read the specific apple auth cookie
    const cookies = document.cookie.split(';');
    const appleAuthCookie = cookies.find(cookie => cookie.trim().startsWith('auth-apple='));
    console.log("Apple auth cookie:", appleAuthCookie);
    
    // Check if we need to redirect to password page
    const needsAuth = !document.cookie.includes('auth-apple=authenticated');
    console.log("Needs authentication:", needsAuth);
    
    if (needsAuth) {
      // Redirect to password page directly
      const returnUrl = window.location.pathname;
      window.location.href = `/passcode?returnUrl=${returnUrl}&uc=apple`;
    }
  }, []);

  return (
    <SectionAuth>
      <main className="min-h-screen bg-white">
        <Nav />
        
        {/* Hero Section */}
        <section className="relative min-h-screen pt-24 flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple%20background3-x5xkagc6J8i7QtIS9b6nyPb2yVPH50.png"
            alt="Apple Abstract Background"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
            <div className="max-w-[60%]">
              <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] mb-8 text-left drop-shadow-sm">
                Driving UX Innovation in Customer Support Applications
              </h1>
              <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left drop-shadow-sm">
              Ready for a quick trailer or the full feature? Choose your viewing style:
              </p>
              
              <div className="flex gap-6 mt-12">
                <Link
                  href="/uc/apple/details"
                  className="rounded-[100px] border-2 border-[#007EA7] bg-white/10 hover:bg-white/20 text-[#007EA7] px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
                >
                  Spark Notes
                </Link>
                <Link
                  href="/uc/apple/process"
                  className="rounded-[100px] border-2 border-[#007EA7] bg-white/10 hover:bg-white/20 text-[#007EA7] px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
                >
                  Director's Cut
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

    </SectionAuth>
  )
}