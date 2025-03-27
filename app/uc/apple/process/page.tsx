"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AppleProcessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      
      {/* Process navigation banner with new color */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#C7F6EA]/50 backdrop-blur-sm border-y border-[#007EA7]/10">
  <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
    <Link 
      href="/uc/apple/details" 
      className="text-[#007EA7] hover:text-[#005f7f] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1"
    >
      <div className="flex items-center bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
        <ArrowLeft className="w-4 h-4 mr-1" />
        <span>Prefer the highlights? Return to the summary.</span>
      </div>
    </Link>
  </div>
</div>

      {/* Content Section - Moved up to replace hero */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          <div className="flex items-center gap-12 mb-8">
            {/* Apple Logo */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src="/images/apple/Logo_Apple.svg"
                alt="Apple Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-left">
              Driving UX Innovation in Customer Support Applications
            </h1>
          </div>
          <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left">
            As the Senior UX Designer for Apple&apos;s internal application, Prism, I led the UX strategy to streamline
            customer service workflows, enhance efficiency, and elevate the specialist experience.
          </p>
          <ul className="font-montserrat text-sm text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-[90%]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Designing and implementing new functionality to optimize user workflows and enhance task efficiency
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Developing holistic UX strategies to streamline processes, reduce friction, and align with internal
                KPIs
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Creating high-fidelity mockups while ensuring branding consistency and securing stakeholder buy-in
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Implementing and creating a scalable design system, driving 70% adoption across teams to improve UI
                consistency and efficiency
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Rest of your content sections here */}
      </div>
      
      <Footer />
    </main>
  )
}