"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Head from "next/head" // Added for resource hints

export default function AppleDetailsPage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      {/* CHANGE 1: Added Head component with resource hints */}
      <Head>
        {/* Preload critical images that appear above the fold */}
        <link 
          rel="preload" 
          href="/images/apple/Logo_Apple.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Prefetch other important images that will be needed soon */}
        <link 
          rel="prefetch" 
          href="/images/apple/Apple300px.png" 
          as="image"
        />
        
        <link 
          rel="prefetch" 
          href="/images/apple/Challnge_Solutions.svg" 
          as="image" 
          type="image/svg+xml"
        />
      </Head>
      
      <Nav />
      
      {/* CHANGE 2: Updated navigation banner with improved styling */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#C7F6EA]/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <Link 
            href="/uc/apple/process" 
            className="text-[#007EA7] hover:text-[#005f7f] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1"
          >
            <div className="flex items-center bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Curious about the thinking behind this Use Case? Let&apos;s walk through the process.</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Section with Logo and Header */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          {/* CHANGE 3: Made title and logo section responsive */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8">
            {/* Apple Logo - Added responsive sizing */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src="/images/apple/Logo_Apple.svg"
                alt="Apple Logo"
                fill
                className="object-contain"
                priority // CHANGE 4: Added priority to preload this important image
              />
            </div>

            {/* Title - Improved responsiveness */}
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Driving UX Innovation in Customer Support Applications
            </h1>
          </div>

          {/* CHANGE 5: Made subtitle responsive */}
          <h3 className="font-montserrat text-lg sm:text-xl text-[#2C3D4D] mt-6 sm:mt-8 mb-8 sm:mb-12 text-center md:text-left">
            The quick overview of my role in revolutionizing Apple&apos;s internal customer support platform.
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">Background</h2>
          
          {/* CHANGE 6: Improved responsive grid for better mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
              Apple is constantly innovating to enhance customer interactions. To take their customer service experience
              to the next level, they integrated a video-guided shopping feature into their internal support platform,
              Prism. The goal was to bring the in-store Genius Bar experience online via video chat, enabling
              specialists to assist customers in real-time with product recommendations and purchasing decisions.
            </p>
            
            {/* CHANGE 7: Made image container responsive */}
            <div className="relative aspect-square w-full max-w-[250px] sm:max-w-[300px] mx-auto md:ml-[50px] lg:ml-[100px]">
              <Image
                src="/images/apple/Apple300px.png"
                alt="Apple Specialist ready to provide one-on-one shopping assistance online or in store"
                fill
                className="object-contain"
                loading="eager" // Important image
              />
            </div>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6 text-left">
              Apple&apos;s specialists needed a seamless way to adopt a new component within their existing internal
              application with minimal onboarding. Their key goals were to increase close rates, drive upsells, and
              improve user satisfaction while ensuring a frictionless experience. The challenge was to integrate an
              existing API into their current interface, enabling specialists to video chat with customers and guide
              them through online shopping. The solution also had to be adaptive across devices, scalable for future
              enhancements, and compliant with privacy and security standards.
            </p>
            
            {/* CHANGE 8: Added responsive image attributes */}
            <div className="relative w-full aspect-video mb-6 sm:mb-8">
              <Image
                src="/images/apple/Challnge_Solutions.svg"
                alt="Challenges and Solutions Diagram"
                fill
                className="object-contain rounded-lg"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">What I Did</h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4 sm:mb-6 text-left">
            I led the UX strategy and design for this initiative, ensuring a frictionless, intuitive experience by:
          </p>
          
          {/* CHANGE 9: Made list text responsive */}
          <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-4 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Designing a seamless UI that integrated video chat, guided shopping, and live customer engagement.
            </li>
            <li>
              Collaborating closely with Apple PMs, engineers, and stakeholders to iterate based on feedback and refine
              the experience.
            </li>
            <li>
              Ensuring easy adoption by leveraging Apple&apos;s existing UI patterns and minimizing new learning curves.
            </li>
            <li>
              Building scalable interactions to maintain privacy, handle customer interactions smoothly, and optimize
              purchase conversions.
            </li>
          </ul>
        </section>

        <section className="mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 sm:mb-8 text-left">Role</h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
            Senior UX Designer, led UX Strategy, Interaction Design, and Design Systems
          </p>
        </section>

        {/* CHANGE 10: Made CTA section more responsive */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center pb-8 sm:pb-12">
          <p className="font-montserrat text-sm sm:text-md text-[#007EA7]/80 max-w-full sm:max-w-xl mb-4 sm:mb-8 text-center sm:text-left">
            Interested in a behind-the-scenes look and detailed presentation?{" "}
            <Link href="/contact" className="text-[#007EA7] hover:text-[#005f7f] underline">
              Contact me
            </Link>{" "}
            to schedule a portfolio review. Due to Apple&apos;s NDA, the actual work is only available to view in person.
          </p>
          
          {/* CHANGE 11: Used Link component instead of button with nested anchor */}
          <Link 
            href="/contact"
            className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007EA7] px-6 sm:px-8 py-2 sm:py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  )
}