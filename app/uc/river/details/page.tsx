"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import Head from "next/head" // Added for resource hints

export default function RiverbedDetailsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const [leftCurrentImage, setLeftCurrentImage] = useState(0)
  const [rightCurrentImage, setRightCurrentImage] = useState(0)
  const [leftXirrusImage, setLeftXirrusImage] = useState(0)
  const [rightXirrusImage, setRightXirrusImage] = useState(0)

  const onPremImages = [
    "/images/river/Riverbed_OnPrem1.png",
    "/images/river/Riverbed_OnPrem2.png",
  ]

  const tableImages = [
    "/images/river/Riverbed_Tables3.png",
    "/images/river/Riverbed_Tables1.png",
    "/images/river/Riverbed_Tables2.png",
  ]

  const xirrusImprovementsImages = [
    "/images/river/Xirrus_Improvments1.png",
    "/images/river/Xirrus_Improvments2.png",
    "/images/river/Xirrus_Improvments3.png",
  ]

  const xirrusPushImages = [
    "/images/river/Xirrus_Push1.png",
    "/images/river/Xirrus_Push2.png",
    "/images/river/Xirrus_Push3.png",
  ]

  const nextLeftImage = () => {
    setLeftCurrentImage((prev) => (prev === onPremImages.length - 1 ? 0 : prev + 1))
  }

  const prevLeftImage = () => {
    setLeftCurrentImage((prev) => (prev === 0 ? onPremImages.length - 1 : prev - 1))
  }

  const nextRightImage = () => {
    setRightCurrentImage((prev) => (prev === tableImages.length - 1 ? 0 : prev + 1))
  }

  const prevRightImage = () => {
    setRightCurrentImage((prev) => (prev === 0 ? tableImages.length - 1 : prev - 1))
  }

  const nextLeftXirrusImage = () => {
    setLeftXirrusImage((prev) => (prev === xirrusImprovementsImages.length - 1 ? 0 : prev + 1))
  }

  const prevLeftXirrusImage = () => {
    setLeftXirrusImage((prev) => (prev === 0 ? xirrusImprovementsImages.length - 1 : prev - 1))
  }

  const nextRightXirrusImage = () => {
    setRightXirrusImage((prev) => (prev === xirrusPushImages.length - 1 ? 0 : prev + 1))
  }

  const prevRightXirrusImage = () => {
    setRightXirrusImage((prev) => (prev === 0 ? xirrusPushImages.length - 1 : prev - 1))
  }

  // Define the hotspot areas and corresponding images
  const hotspots = [
    {
      id: 1,
      area: { top: "3.7%", left: "29%", width: "30px", height: "30px" },
      image:
        "/images/river/Riverbed_header.png",
      title: "Header & Navigation Components",
      description: "Standardized header layout with precise measurements and typography specifications",
    },
    {
      id: 2,
      area: { top: "24%", left: "26%", width: "30px", height: "30px" },
      image:
        "/images/river/Riverbed_timeline2.png",
      title: "Traffic Distribution Visualization",
      description: "Detailed specifications for traffic distribution charts and data visualization",
    },
    {
      id: 3,
      area: { top: "18%", left: "63%", width: "30px", height: "30px" },
      image:
        "/images/river/Riverbed_info_panel.png",
      title: "Information Panel Components",
      description: "Layout specifications for information panels and form elements",
    },
    {
      id: 4,
      area: { top: "61%", left: "80%", width: "30px", height: "30px" },
      image:
        "/images/river/Riverbed_timeline.png",
      title: "Timeline & Metrics",
      description: "Specifications for time-series charts and metric visualizations",
    },
    {
      id: 5,
      area: { top: "85%", left: "33%", width: "30px", height: "30px" },
      image:
        "/images/river/Riverbed_bullet.png",
      title: "Bullet Charts & Layout Patterns",
      description: "Detailed specifications for bullet charts and data presentation patterns",
    },
    {
      id: 6,
      area: { top: "31%", left: "82%", width: "30px", height: "30px" },
      image:
        "/images/river/Riverbed_linechart.png",
      title: "Line Chart Specifications",
      description: "Comprehensive guidelines for line chart styling and implementation",
    },
    {
      id: 7,
      area: { top: "49%", left: "55%", width: "30px", height: "30px" },
      image: "/images/river/Riverbed_font.png",
      title: "Typography System",
      description: "Font specifications and typography guidelines for consistent text styling across applications",
    },
  ]

  // Default component library image
  const defaultComponentImage =
    "/images/river/Riverbed_header.png"

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
          href="/images/river/Logo_Riverbed.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Prefetch other important images that will be needed soon */}
        <link 
          rel="prefetch" 
          href="/images/river/Riverbed_Page1.png" 
          as="image"
        />
        
        <link 
          rel="prefetch" 
          href="/images/river/Riverbed_header.png" 
          as="image"
        />
      </Head>
      
      <Nav />
      
      {/* CHANGE 2: Updated navigation banner with Riverbed's light orange color */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#FFE8CC]/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <Link 
            href="/uc/river/process" 
            className="text-[#F2581A] hover:text-[#C04310] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1"
          >
            <div className="flex items-center bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Take a closer look at how it was built.</span>
            </div>
          </Link>
        </div>
      </div>

      {/* CHANGE 3: Made title and logo section responsive */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8">
            {/* Riverbed Logo - Added responsive sizing */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src="/images/river/Logo_Riverbed.svg"
                alt="Riverbed Logo"
                fill
                className="object-contain"
                priority // CHANGE 4: Added priority to preload this important image
              />
            </div>

            {/* Title - Improved responsiveness */}
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Designing Scalable Enterprise UX for Riverbed Technology
            </h1>
          </div>

          {/* CHANGE 5: Made subtitle responsive */}
          <h3 className="font-space-grotesk text-lg sm:text-xl text-[#2C3D4D] mt-6 sm:mt-8 mb-8 sm:mb-12 text-center md:text-left">
            As a Senior UX Designer, I led UX improvements across multiple B2B applications and enhancing IT workflows
            through user-centered design solutions.
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">Background</h2>
          {/* CHANGE 6: Improved paragraph responsiveness */}
          <div>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
              Riverbed Technology provides network performance management and SD-WAN solutions to optimize IT infrastructure and application performance. Riverbed needed a cohesive UX strategy to unify its tools, improve the process for IT administrators, and ensure consistent UI patterns across its platform.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6 text-left">
              Riverbed's product suite had evolved over time with different teams creating unique UI components and
              visual styles. This resulted in an inconsistent user experience, increased design and development time,
              and challenges in maintaining the growing product ecosystem. The challenge was to create a unified design
              system that would standardize the UI while accommodating the unique needs of different products and
              ensuring scalability for future growth.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">What I Did</h2>
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 text-left">
              Scalable Design System & UI Standardization
            </h3>
        
            {/* CHANGE 7: Improved list responsiveness */}
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                The comprehensive design system was implemented across applications, ensuring UI consistency and
                scalability.
              </li>
              <li>
                The component-based system optimized workflows and increased developer efficiency by reducing redundant
                design efforts.
              </li>
              <li>
                Standardizing typography, color systems, navigation patterns, and data visualization created a unified
                and recognizable branding experience.
              </li>
              <li>
                Built before modern design libraries, this system provided a scalable, reusable component structure,
                enabling developers to implement UI elements efficiently without a centralized library.
              </li>
            </ul>

            {/* CHANGE 8: Made image grid responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
              <div className="relative w-full h-auto mb-4 sm:mb-8 shadow-md">
                <div className="relative">
                  <Image
                    src="/images/river/Riverbed_Page1.png"
                    alt="Riverbed network management dashboard showing traffic distribution, path selection, and optimization metrics"
                    width={600}
                    height={300}
                    className="object-contain w-full h-auto cursor-pointer"
                    onClick={() => openImageModal("/images/river/Riverbed_Page1.png")}
                    loading="eager" // CHANGE 9: Prioritize loading of important images
                  />

                  {/* Hotspot areas */}
                  {hotspots.map((hotspot) => (
                    <div
                      key={hotspot.id}
                      className="absolute cursor-pointer transition-all duration-300 hover:scale-110"
                      style={{
                        top: hotspot.area.top,
                        left: hotspot.area.left,
                        width: hotspot.area.width,
                        height: hotspot.area.height,
                        border: activeHotspot === hotspot.id ? "2px solid #007EA7" : "none",
                        borderRadius: "50%",
                        zIndex: 10,
                      }}
                      onClick={() => setActiveHotspot(hotspot.id)}
                      onMouseEnter={() => setActiveHotspot(hotspot.id)}
                    >
                      <div className="absolute inset-0 bg-[#00E676] opacity-50 rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="sr-only">{hotspot.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#5f5f5f]/60 mt-2 text-center">
                  Hover over or click the 7 green circles to explore detailed design system specifications
                </p>
              </div>

              <div className="relative w-full h-auto mb-4 sm:mb-8 shadow-md">
                <div className="relative">
                  <Image
                    src={
                      activeHotspot
                        ? hotspots.find((h) => h.id === activeHotspot)?.image || defaultComponentImage
                        : defaultComponentImage
                    }
                    alt={
                      activeHotspot
                        ? `${hotspots.find((h) => h.id === activeHotspot)?.title} component example`
                        : "Header and Navigation Bar specifications from the Riverbed design system"
                    }
                    width={600}
                    height={300}
                    className="object-contain w-full h-auto cursor-pointer"
                    onClick={() =>
                      openImageModal(
                        activeHotspot
                          ? hotspots.find((h) => h.id === activeHotspot)?.image || defaultComponentImage
                          : defaultComponentImage,
                      )
                    }
                  />
                </div>
              </div>
            </div>

            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 mt-8 sm:mt-12 text-left">
              Data-Driven UX & IA Optimization
            </h3>
        
            {/* CHANGE 10: Improved list responsiveness */}
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Refined SCM navigation flows, improving how IT admins access system configurations and performance data.
              </li>
              <li>
                Improved SCM On-Prem workflows, simplifying provisioning and backup management to enhance IT admin
                efficiency.
              </li>
              <li>Enhanced data tables and filtering systems, making network data more actionable and intuitive.</li>
            </ul>

            {/* CHANGE 11: Made carousel containers responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
              {/* Left side - Carousel */}
              <div className="relative w-full h-auto shadow-md">
                <div className="relative">
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                    <Image
                      src={onPremImages[leftCurrentImage] || "/placeholder.svg"}
                      alt={`SCM On-Prem provisioning interface ${leftCurrentImage + 1}`}
                      width={600}
                      height={250}
                      className="object-contain w-full h-full cursor-pointer"
                      onClick={() => openImageModal(onPremImages[leftCurrentImage])}
                      sizes="(max-width: 768px) 100vw, 50vw" // CHANGE 12: Added responsive image sizing
                    />

                    {/* Navigation arrows */}
                    <button
                      onClick={prevLeftImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextLeftImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {onPremImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setLeftCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          leftCurrentImage === index ? "bg-[#007EA7]" : "bg-gray-300"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#5f5f5f]/80 pb-5 text-center">SCM On-Prem</p>
              </div>

              <div className="relative w-full h-auto shadow-md">
                <div className="relative">
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                    <Image
                      src={tableImages[rightCurrentImage] || "/placeholder.svg"}
                      alt={`SCM Actionable Tables interface ${rightCurrentImage + 1}`}
                      width={600}
                      height={250}
                      className="object-contain w-full h-full cursor-pointer"
                      onClick={() => openImageModal(tableImages[rightCurrentImage])}
                      sizes="(max-width: 768px) 100vw, 50vw" // CHANGE 13: Added responsive image sizing
                    />

                    {/* Navigation arrows */}
                    <button
                      onClick={prevRightImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextRightImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {tableImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setRightCurrentImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          rightCurrentImage === index ? "bg-[#007EA7]" : "bg-gray-300"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#5f5f5f]/80 pb-5 text-center">SCM Actionable Tables</p>
              </div>
            </div>

            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 mt-8 sm:mt-12 text-left">
              Xirrus Rebranding & UX Integration
            </h3>
         
            {/* CHANGE 14: Improved list responsiveness */}
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Redesigned Xirrus Management System (XMS) to integrate seamlessly with Riverbed's brand and design
                system, improving usability and consistency.
              </li>
              <li>
                Refined UI patterns and interaction models, ensuring a seamless transition for existing Xirrus users.
              </li>
              <li>
                Optimized configuration workflows and network management tools, simplifying setup and daily operations
                for IT admins.
              </li>
              <li>
                Designed an updated policy management experience, streamlining how IT admins apply and manage network
                rules.
              </li>
            </ul>

            {/* CHANGE 15: Made Xirrus carousel containers responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mt-6 sm:mt-8">
              <div className="relative w-full h-auto shadow-md">
                <div className="relative">
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                    <Image
                      src={xirrusImprovementsImages[leftXirrusImage] || "/placeholder.svg"}
                      alt={`Xirrus interface improvements and UX enhancements ${leftXirrusImage + 1}`}
                      width={600}
                      height={250}
                      className="object-contain w-full h-full cursor-pointer"
                      onClick={() => openImageModal(xirrusImprovementsImages[leftXirrusImage])}
                      sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                    />

                    {/* Navigation arrows */}
                    <button
                      onClick={prevLeftXirrusImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextLeftXirrusImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {xirrusImprovementsImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setLeftXirrusImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          leftXirrusImage === index ? "bg-[#007EA7]" : "bg-gray-300"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#5f5f5f]/80 pb-5 text-center">Xirrus Scheduling for Configuration Push</p>
              </div>

              <div className="relative w-full h-auto shadow-md">
                <div className="relative">
                  <div className="relative h-[300px] sm:h-[400px] overflow-hidden">
                    <Image
                      src={xirrusPushImages[rightXirrusImage] || "/placeholder.svg"}
                      alt={`Xirrus configuration push interface ${rightXirrusImage + 1}`}
                      width={600}
                      height={250}
                      className="object-contain w-full h-full cursor-pointer"
                      onClick={() => openImageModal(xirrusPushImages[rightXirrusImage])}
                      sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                    />

                    {/* Navigation arrows */}
                    <button
                      onClick={prevRightXirrusImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>

                    <button
                      onClick={nextRightXirrusImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full w-8 h-8 flex items-center justify-center z-10"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Navigation dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {xirrusPushImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setRightXirrusImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          rightXirrusImage === index ? "bg-[#007EA7]" : "bg-gray-300"
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-xs text-[#5f5f5f]/80 pb-5 text-center">Xirrus Application/Category Rules</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">Role</h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
            Senior UX Designer, Information Architecture, Data Visualization, and Design Systems
          </p>
        </section>

       

        <div className="mt-16 text-center pb-12">
          <a
            href="/contact"
            className="rounded-[100px] border border-[#F7F6F6] bg-white hover:bg-white/80 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Let's Chat
          </a>
        </div>
      </div>

      {/* Image Modal */}
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
              <DialogClose
                className="absolute top-2 right-2 bg-[#007EA7]/80 hover:bg-[#007EA7] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
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

