"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"

export default function RiverbedProcessPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  const [leftCurrentImage, setLeftCurrentImage] = useState(0)
  const [rightCurrentImage, setRightCurrentImage] = useState(0)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const onPremImages = [
    "/images/river/Riverbed_OnPrem1.png",
    "/images/river/Riverbed_OnPrem2.png",
  ]

  const tableImages = [
    "/images/river/Riverbed_Tables3.png",
    "/images/river/Riverbed_Tables1.png",
    "/images/river/Riverbed_Tables2.png",
  ]

  const nextLeftImage = () => {
    setLeftCurrentImage((prev) => (prev === onPremImages.length - 1 ? 0 : prev + 1))
  }

  const prevLeftImage = () => {
    setLeftCurrentImage((prev) => (prev === 0 ? onPremImages.length - 1 : prev - 1))
  }

  const nextRightImage = () => {
    setRightCurrentImage((prev) => (prev === 2 ? 0 : prev + 1))
  }

  const prevRightImage = () => {
    setRightCurrentImage((prev) => (prev === 0 ? 2 : prev - 1))
  }

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

  const [leftXirrusImage, setLeftXirrusImage] = useState(0)
  const [rightXirrusImage, setRightXirrusImage] = useState(0)

  // Add navigation functions for Xirrus carousels
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
  // You can adjust the top and left percentages to match the exact positions of your green circles
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

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="sticky top-16 mt-0 z-20 w-full bg-white/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link
            href="/uc/river/details"
            className="text-[#F2581A] hover:text-[#C04310] text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to the deconstruction.
          </Link>
        </div>
      </div>

      {/* Content Section - Moved up to replace hero */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div className="w-full">
          <div className="flex items-center gap-12 mb-8">
            {/* Riverbed Logo */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src="/images/river/Logo_Riverbed.svg"
                alt="Riverbed Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-left">
              Designing Scalable Enterprise UX for Riverbed Technology
            </h1>
          </div>
          <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left">
            As a Senior UX Designer, I developed a scalable design system, improved information architecture, and
            enhanced data visualization across multiple B2B applications. I collaborated with UX researchers,
            developers, and stakeholders to streamline the IT process and ensure a cohesive user experience.
          </p>
          <ul className="font-montserrat text-sm text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-[90%]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Built a design system with reusable components for scalability and efficiency</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Standardized UI elements, reducing inconsistencies and speeding up development</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Unified multiple tools under a cohesive, cross-product experience</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Enhanced navigation and workflows for faster user onboarding</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Designed data-driven dashboards to help IT admins make informed decisions</span>
            </li>
          </ul>
        </div>
      </div>


      <div className="max-w-6xl mx-auto px-4 pt-4 pb-0">
        {/* Use Case */}
        <section className="mb-16 mt-8">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">Use Case</h2>
          <div className="w-full">
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              Riverbed Technology provides network performance management and SD-WAN solutions to optimize IT
              infrastructure and application performance. Riverbed needed a cohesive UX strategy to unify its tools,
              improve the expereince for IT administrators, and ensure consistent UI patterns across its platform.
            </p>
            <div className="relative w-full aspect-video md:hidden mb-4">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Inconsistent UI components across Riverbed products"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              My role was to lead the UX strategy for key enterprise applications, focusing on:
            </p>
            <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-4 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Conducting a UX audit to identify inconsistencies and inefficiencies across Riverbed's applications
              </li>
              <li>Partnering with engineering, product, and UX teams to create a adaptive, reusable design system.</li>
              <li>
                Led the UX integration for Xirrus after its acquisition, ensuring a seamless transition to Riverbed's
                branding, UX principles, and design standards.
              </li>
              <li>Improving navigation and information architecture for faster, more intuitive IT workflows.</li>
            </ul>
          </div>
        </section>

        {/* The UX Process section */}
        <section className="mb-16 mt-16 pt-8 pb-8 mx-auto">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">The UX Process</h2>
          {/* sub section: Scalable desgin system */}
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
            Scalable Design System & UI Standardization
          </h3>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            Collaborating with the UX team, developers, and stakeholders, I created a design system that
            unified Riverbed's enterprise applications. By refining information architecture and establishing a new
            visual language, I ensured consistency across multiple tools. My focus was on designing reusable components,
            optimizing performance, and aligning branding to create a cohesive user experience while streamlining the
            design-to-development process.
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>
              The comprehensive design system was implemented across applications, ensuring the UI was cohesive and
              scalabile.
            </li>
            <li>
              The component-based system increased developer efficiency by reducing redundant
              design efforts.
            </li>
            <li>
              Standardizing typography, color systems, navigation patterns, and data visualization created a unified and
              recognizable branding experience.
            </li>
            <li>
              Built before modern design libraries, this system provided a reusable component structure,
              enabling developers to implement UI elements efficiently without a centralized library.
            </li>
          </ul>

          {/* Images row - will be aligned at the same level */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="relative w-full h-auto mb-8 shadow-md">
              <div className="relative">
                <Image
                  src="/images/river/Riverbed_Page1.png"
                  alt="Riverbed network management dashboard showing traffic distribution, path selection, and optimization metrics"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto"
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

            <div className="relative w-full h-auto mb-8 shadow-md">
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
                  className="object-contain w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Info arch opt */}
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 mt-12 text-left">
            Data-Driven UX & IA Optimization
          </h3>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            I collaborated with UX researchers and IT administrators to identify workflow inefficiencies, ensuring our
            Information Architecture improvements directly addressed business needs. Through usability testing and
            stakeholder input, I refined navigation and data structures, making critical insights more accessible for IT
            teams.
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Refined SCM navigation flows, improving how IT admins access system configurations and performance data.
            </li>
            <li>
              Improved SCM On-Prem workflows, simplifying provisioning and backup management to enhance IT admin
              efficiency.
            </li>
            <li>Enhanced data tables and filtering systems, making network data more actionable and intuitive.</li>
          </ul>

          {/* Images row - will be aligned at the same level */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            {/* Left side - Carousel */}
            <div className="relative w-full h-auto shadow-md">
              <div className="relative">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={onPremImages[leftCurrentImage] || "/placeholder.svg"}
                    alt={`SCM On-Prem provisioning interface ${leftCurrentImage + 1}`}
                    width={600}
                    height={250}
                    className="object-contain w-full h-full"
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
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={tableImages[rightCurrentImage] || "/placeholder.svg"}
                    alt={`SCM Actionable Tables interface ${rightCurrentImage + 1}`}
                    width={600}
                    height={250}
                    className="object-contain w-full h-full"
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

          {/* Xirrus section*/}
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 mt-12 text-left">
            Xirrus Rebranding & UX Integration
          </h3>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            After Riverbed's acquisition of Xirrus, I led the UX rebranding efforts to ensure visual consistency and
            enhance the network management experience. My role was to unify Xirrus' UI with Riverbed's ecosystem while
            improving usability and workflow efficiency.
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Redesigned Xirrus Management System (XMS) to integrate seamlessly with Riverbed's brand and design system,
              improving usability.
            </li>
            <li>
              Refined UI patterns and interaction models, ensuring a seamless transition for existing Xirrus users.
            </li>
            <li>
              Optimized configuration and network management tools, simplifying setup and daily operations for
              IT admins.
            </li>
            <li>
              Designed an updated policy management experience, streamlining how IT admins apply and manage network
              rules.
            </li>
          </ul>

          {/* Images row - will be aligned at the same level */}
          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="relative w-full h-auto shadow-md">
              <div className="relative">
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={xirrusImprovementsImages[leftXirrusImage] || "/placeholder.svg"}
                    alt={`Xirrus interface improvements and UX enhancements ${leftXirrusImage + 1}`}
                    width={600}
                    height={250}
                    className="object-contain w-full h-full"
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
                <div className="relative h-[400px] overflow-hidden">
                  <Image
                    src={xirrusPushImages[rightXirrusImage] || "/placeholder.svg"}
                    alt={`Xirrus configuration push interface ${rightXirrusImage + 1}`}
                    width={600}
                    height={250}
                    className="object-contain w-full h-full"
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
        </section>
      </div>

      {/* Outcome & Impact Section */}
      <div className="max-w-6xl mx-auto px-4 pt-4 pb-8">
        <section className="mb-8">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">Outcome & Impact</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
            This structured approach highlights my leadership in design system development, IA improvements, and UX
            integration, ensuring enterprise-grade usability across Riverbed's B2B applications. By implementing a
            scalable design system, and enhancing usability, Riverbed saw measurable improvements
            across efficiency, consistency, and product adoption:
          </p>
          <ul className="space-y-4 list-disc pl-6 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Achieved a 40% reduction in design inconsistencies, creating a seamless and intuitive experience across
              SCM, Xirrus, and other Riverbed applications.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Accelerated feature development by 25% through standardized UI components and an optimized
              design-to-development process.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Elevated data visualization and dashboard usability, allowing IT administrators to monitor network
              performance more effectively.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Led the Xirrus UX redesign, aligning it with Riverbed's design system and streamlining workflow navigation
              for IT teams.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Ensured design decisions were user-centered by validating improvements through iterative usability testing
              and feedback.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mb-0 mt-8 text-center">
          <button className="rounded-[100px] border border-[#F7F6F6] white bg-white/30 hover:bg-white/60 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
            <a href="/contact">Let's Chat</a>
          </button>
        </section>
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
  );
}

