"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import Head from "next/head" // Added for resource hints

export default function WellsFargoDetailsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  return (
    <main className="min-h-screen bg-white pb-16">
      {/* CHANGE 1: Added Head component with resource hints */}
      <Head>
        {/* Preload critical images that appear above the fold */}
        <link 
          rel="preload" 
          href="/images/wellsfargo/Logo_WellsFargo.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Prefetch other important images that will be needed soon */}
        <link 
          rel="prefetch" 
          href="/images/wellsfargo/nav_and_information_before.png" 
          as="image"
        />
        <link 
          rel="prefetch" 
          href="/images/wellsfargo/nav_and_info_after.png" 
          as="image"
        />
      </Head>

      <Nav />
      
      {/* CHANGE 2: Updated navigation banner with new color and improved styling */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#DE0C18]/20 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <Link 
            href="/uc/wellsf/process" 
            className="text-[#B31E30] hover:text-[#76131F] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1"
          >
            <div className="flex items-center bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Explore the full design journey.</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Section with Logo and Header */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          {/* CHANGE 3: Made title and logo section responsive */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8">
            {/* Wells Fargo Logo - Added responsive sizing */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src="/images/wellsfargo/Logo_WellsFargo.svg"
                alt="Wells Fargo Logo"
                fill
                style={{ objectFit: "contain" }}
                priority // CHANGE 4: Added priority to preload this important image
              />
            </div>
            
            {/* Title - Improved responsiveness */}
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Migrating Small Business Banking Legacy Tools to Salesforce
            </h1>
          </div>
          
          {/* CHANGE 5: Made subtitle responsive */}
          <h3 className="font-montserrat text-lg sm:text-xl text-[#2C3D4D] mt-6 sm:mt-8 mb-8 sm:mb-12 text-center md:text-left">
            As a Senior Product Designer I contributed to modernizing Wells Fargo&apos;s small business banking experience
            through the integration of a legacy CRM into Salesforce.
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">Background</h2>
          <div>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
              Wells Fargo&apos;s small business bankers previously relied on outdated applications and disconnected tools,
              making client relationship management inefficient. To modernize the experience, a legacy banking
              application was integrated into Salesforce, improving workflow efficiency, reducing errors, and enhancing
              data accuracy.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6 text-left">
              With multiple disconnected systems, bankers had to switch between screens to access client information,
              disrupting workflows and leading to redundant data entry. The goal was to transition key banking
              functionalities into Salesforce while ensuring the platform met business needs and aligned with existing
              workflows.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">What I Did</h2>
            
            {/* CHANGE 6: Made section headings responsive */}
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 text-left">Design & Workflow Analysis</h3>
            
            {/* CHANGE 7: Made list text responsive with better mobile spacing */}
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Designed a custom Client Groups View in Salesforce, reducing cognitive load and improving navigation.
              </li>
              <li>
                Worked closely with Stakeholders to understand their primary needs in order to translate the legacy
                software to Salesforce.
              </li>
              <li>
                Collaborated with the Salesforce architect to determine whether standard components or custom-built
                features were needed.
              </li>
            </ul>
            
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 text-left">User Research & Prototyping</h3>
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>Worked with the UX researcher to document banking processes and identify necessary improvements.</li>
              <li>Participated in user interviews with small business bankers to understand workflow pain points.</li>
              <li>
                Created an interactive prototype that allowed users to navigate key processes, identify inefficiencies,
                and validate expectations.
              </li>
            </ul>

            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 text-left">Collaboration & Testing</h3>
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>Partnered with stakeholders and project managers to align business objectives with UX goals.</li>
              <li>Iterated on designs based on usability testing insights gathered from bankers at various levels.</li>
              <li>Used UX benchmarking to validate that the new experience improved efficiency and met KPIs.</li>
            </ul>

            {/* CHANGE 8: Improved responsive grid for images with better mobile layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/nav_and_information_before.png"
                  alt="Legacy navigation interface showing complex menu structure and search options"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer w-full h-auto"
                  onClick={() => openImageModal("/images/wellsfargo/nav_and_information_before.png")}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/nav_and_info_after.png"
                  alt="Modern Salesforce navigation with improved filtering and organization"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer w-full h-auto"
                  onClick={() => openImageModal("/images/wellsfargo/nav_and_info_after.png")}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                />
              </div>
            </div>
            
            {/* CHANGE 9: Improved responsive grid for images with better mobile layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/Portfolio_Relationship_Management_before.png"
                  alt="Legacy relationship management interface with complex dropdown menus"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer w-full h-auto"
                  onClick={() => openImageModal("/images/wellsfargo/Portfolio_Relationship_Management_before.png")}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  loading="lazy" // Below the fold image
                />
              </div>
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/Portfolio_Relationship_Management_after.png"
                  alt="Modern Salesforce relationship management with improved data organization"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer w-full h-auto"
                  onClick={() => openImageModal("/images/wellsfargo/Portfolio_Relationship_Management_after.png")}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  loading="lazy" // Below the fold image
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 sm:mb-8 text-left">Role</h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
            Senior Product Designer, Prototyping, UX Research, Feature Mapping, and Component Rationalization for CRM
            Integration
          </p>
        </section>

        {/* CHANGE 10: Made CTA section more responsive */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center pb-8 sm:pb-12">
          {/* CHANGE 11: Used Link component instead of anchor tag */}
          <Link 
            href="/contact"
            className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007EA7] px-6 sm:px-8 py-2 sm:py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </div>

      {/* Image Modal - No changes needed, already well implemented */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <DialogClose className="absolute top-2 right-2 bg-[#007EA7]/80 hover:bg-[#007EA7] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
      <Footer />
    </main>
  )
}