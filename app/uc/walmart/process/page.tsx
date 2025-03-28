"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import Head from "next/head" // Added for resource hints

export default function WalmartFulfillmentAppPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Added Head component with resource hints */}
      <Head>
        {/* Preload critical images that appear above the fold */}
        <link 
          rel="preload" 
          href="/images/walmart/Logo_Walmart.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Prefetch other important images that will be needed soon */}
        <link 
          rel="prefetch" 
          href="/images/walmart/Walmart_WFS_image.png" 
          as="image"
        />
      </Head>
      
      <Nav />

      {/* Updated navigation banner with improved styling */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#E6F0FF]/50 backdrop-blur-sm border-y border-[#FFC220]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <Link
            href="/uc/walmart/details"
            className="text-[#FFC220] hover:text-[#C29009] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1"
          >
            <div className="flex items-center bg-white/70 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>I only want the highlights.</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Section - Main heading and intro */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          {/* Made logo responsive with different sizes based on screen width */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8">
            {/* Walmart Logo - Added responsive sizing and loading priority */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src="/images/walmart/Logo_Walmart.svg"
                alt="Walmart Logo"
                fill
                className="object-contain"
                priority // Critical above-the-fold image
              />
            </div>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Walmart Fulfillment Services, the UX Journey
            </h1>
          </div>
          
          {/* Improved text responsiveness */}
          <p className="font-montserrat text-base sm:text-lg text-[#2C3D4D] mt-4 sm:mt-8 text-center md:text-left">
            At Walmart Labs, I was brought on to help design and refine the Walmart Fulfillment Services (WFS) platform.
            This initiative was Walmart's effort to enable third-party sellers to store, ship, and manage inventory
            through Walmart's logistics network, giving their customers the same seamless experience as purchasing
            directly from Walmart.
          </p>
          
          {/* Added responsive width for list container */}
          <ul className="font-montserrat text-sm sm:text-base text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-full sm:max-w-[95%] md:max-w-[90%] mx-auto md:mx-0">
            <li className="flex items-start">
              <span className="mr-2 text-[#FFC220]">•</span>
              <span>Developed UX strategies to improve seller adoption, reduce errors, and enhance usability</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#FFC220]">•</span>
              <span>
                Conducted competitor research on Amazon's Fulfillment By Amazon (FBA) model to identify usability gaps
                and opportunities
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#FFC220]">•</span>
              <span>
                Streamlined the onboarding process for new and existing sellers, making product listing and inventory
                management more intuitive
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2 text-[#FFC220]">•</span>
              <span>
                Created an atomic design system for WFS to ensure consistency and scalability across the Seller Center
                platform
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Use Case */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-2 text-center md:text-left">Use Case</h2>
          <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-center md:text-left">
            Researching Gaps and Designing Strategies for
            {/* Made subtitle responsive with linebreak only on larger screens */}
            <span className="hidden sm:inline"><br /></span>
            <span className="sm:hidden"> </span>
            the Seller Experience
          </h3>
          
          {/* Improved grid layout for better responsiveness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4 text-center md:text-left">
                Walmart's WFS initiative was designed to expand opportunities for third-party sellers by streamlining
                fulfillment services, ensuring a seamless and efficient experience that delivers the same ease and
                convenience as purchasing directly from Walmart.
              </p>
              
              {/* Improved responsive image display strategy with loading="eager" */}
              <div className="relative w-full aspect-square md:hidden mb-4">
                <Image
                  src="/images/walmart/Walmart_WFS_image.png"
                  alt="Hands placing shipping label on a Walmart.com branded box"
                  fill
                  className="object-cover rounded-md object-top"
                  loading="eager" // Load early since it appears on mobile
                />
              </div>
              <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-center md:text-left">
                As the senior UX designer, I conducted extensive research to identify usability gaps, uncover pain
                points, and improve adoption and efficiency. I also developed a scalable atomic design system.
              </p>
            </div>
            
            {/* Adjusted responsive image alignment */}
            <div className="relative w-full md:w-3/4 lg:w-2/3 aspect-square overflow-hidden rounded-md hidden md:block md:mt-0 lg:-mt-16 mx-auto">
              <Image
                src="/images/walmart/Walmart_WFS_image.png"
                alt="Hands placing shipping label on a Walmart.com branded box"
                fill
                className="object-cover rounded-md object-top"
                loading="eager" // Load early since it appears on desktop
              />
            </div>
          </div>
        </section>

        {/* Objectives and Goals - Added responsive text sizing throughout */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 text-center md:text-left">
            Context & Business Challenge
          </h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4 text-center md:text-left">
            In order for Walmart to implement a streamlined, seller-friendly fulfillment system that improved efficiency
            and competitiveness they set about to solve for these challenges:
          </p>
          <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 mb-4 [--bullet-color:#FFC220] [&>li]:marker:text-[--bullet-color]">
            <li>Sellers faced difficulty transitioning into WFS due to unclear processes and limited guidance.</li>
            <li>
              Inconsistencies in inventory tracking and shipment labeling made it harder for sellers to manage their
              stock.
            </li>
            <li>
              Amazon's Fulfillment By Amazon (FBA) set industry standards, and WFS needed to provide comparable or
              superior service.
            </li>
            <li>Sellers had limited visibility into fulfillment fees, performance metrics, and shipment tracking.</li>
          </ul>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mt-6 sm:mt-8 mb-4 text-center md:text-left">
            To address these challenges, we focused on designing a UX strategy that prioritized:
          </p>
          <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 [--bullet-color:#FFC220] [&>li]:marker:text-[--bullet-color]">
            <li>Seamless onboarding experiences with clear step-by-step guidance.</li>
            <li>An intuitive inventory management system that improved product tracking and labeling.</li>
            <li>
              Transparent seller dashboards displaying fulfillment fees, order statuses, and key performance indicators.
            </li>
            <li>A scalable design system ensuring consistency across Seller Center and WFS interfaces.</li>
          </ul>
        </section>

        {/* My Role & Key Contributions */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 text-center md:text-left">
            My Role & Key Contributions
          </h2>
          <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 md:mb-6 mt-6 md:mt-8 text-center md:text-left">
            UX Research & Competitive Analysis
          </h3>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4 text-center md:text-left">
            I was responsible for collecting and organizing UX research for WFS labeling and inventory workflows, as well as
            other critical areas of the fulfillment experience. My research informed the team lead and stakeholders,
            helping to define the early development strategy for WFS. This work supported the foundational decisions
            that shaped the beta release, ensuring we had a baseline for improvement. Key contributions included:
          </p>
          <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 mb-6 md:mb-8 [--bullet-color:#FFC220] [&>li]:marker:text-[--bullet-color]">
            <li>
              Conducted a competitive analysis of Amazon's FBA and Shopify's fulfillment services, identifying and
              usability gaps and inefficiencies.
            </li>
            <li>Gathered insights, highlighting opportunities for automation and reduced manual errors.</li>
            <li>
              Researched shipment tracking visibility issues, ensuring sellers had clearer insights into inventory
              management.
            </li>
            <li>
              Compiled research findings for UX lead to create a comprehensive presentation for upper management and
              stakeholders, providing a clear understanding of user needs, competitive gaps, and strategic improvements
              for WFS development.
            </li>
          </ul>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-8">
            <div className="relative aspect-video">
              <Image
                src="/images/walmart/WFS_Labeling_Research2_gapsinWFS_008.jpeg"
                alt="Amazon's three-step process for shipping and tracking products"
                fill
                loading="lazy"
                className="object-contain rounded-lg cursor-pointer"
                onClick={() => openImageModal("/images/walmart/WFS_Labeling_Research2_gapsinWFS_008.jpeg")}
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/walmart/WFS_Labeling_Research2_gapsinWFS_009.jpeg"
                alt="Amazon's packaging requirements interface showing how to pack boxes and compliance information"
                fill
                loading="lazy"
                className="object-contain rounded-lg cursor-pointer"
                onClick={() => openImageModal("/images/walmart/WFS_Labeling_Research2_gapsinWFS_009.jpeg")}
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/walmart/WFS_Labeling_Research2_gapsinWFS_010.jpeg"
                alt="Amazon Seller Central interface for printing shipping labels"
                fill
                loading="lazy"
                className="object-contain rounded-lg cursor-pointer"
                onClick={() => openImageModal("/images/walmart/WFS_Labeling_Research2_gapsinWFS_010.jpeg")}
              />
            </div>
            <div className="relative aspect-video">
              <Image
                src="/images/walmart/WFS_Labeling_Research2_gapsinWFS011.jpeg"
                alt="Gaps in unit shipping labels comparison between WFS and Amazon FBA"
                fill
                loading="lazy"
                className="object-contain rounded-lg cursor-pointer"
                onClick={() => openImageModal("/images/walmart/WFS_Labeling_Research2_gapsinWFS011.jpeg")}
              />
            </div>
          </div>
          <p className="font-montserrat text-xs sm:text-sm italic text-[#5f5f5f]/80 mt-4 md:mt-8 text-center md:text-left">
            Presentation used my research and findings for upper management and stakeholders, helping define the early
            development strategy for WFS, setting the foundation for the beta release, and establishing a baseline for
            future improvements.
          </p>

          <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 md:mb-6 mt-6 md:mt-8 text-center md:text-left">Atomic Design System</h3>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4 text-center md:text-left">
            The WFS app required a new design system that was built upon the existing Seller Center design system. The
            goal was to evolve the current design system in a way that maintained alignment with established patterns
            while enhancing flexibility for future growth. I worked closely with the design system team to ensure
            consistency in naming conventions, library structures, and component usability. This collaboration helped
            establish a seamless transition between the two systems, making it easier for designers and developers to
            integrate new elements while maintaining a unified experience for sellers.
          </p>
          <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 mb-6 md:mb-8 [--bullet-color:#FFC220] [&>li]:marker:text-[--bullet-color]">
            <li>
              Developed a scalable atomic design system for WFS based on evolving components and patterns, improving UI
              consistency and seller efficiency.
            </li>
            <li>
              Built the design system from the ground up, ensuring a structured component library that maintained
              consistency across all seller interactions. Developed dashboards, navigation flows, and interactive
              components that aligned with existing patterns while reducing cognitive load for sellers.
            </li>
            <li>
              Established a cohesive and scalable design framework that standardized UI elements, ensuring a seamless
              experience across Seller Center and WFS. Focused on consistency in interactions and labeling to minimize
              fulfillment mistakes and enhance seller confidence.
            </li>
          </ul>
          <div className="relative aspect-video mt-6 md:mt-8">
            <Image
              src="/images/walmart/Walmart_design_system.png"
              alt="WFS Design System button component documentation showing states, variations, and specifications"
              fill
              loading="lazy"
              className="object-contain rounded-lg cursor-pointer"
              onClick={() => openImageModal("/images/walmart/Walmart_design_system.png")}
            />
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 text-center md:text-left">Outcome & Impact</h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6 text-center md:text-left">
            While quantifiable metrics were not available at the time of completion, our UX strategies aimed to:
          </p>
          <ul className="space-y-2 sm:space-y-4 list-disc pl-4 sm:pl-6 [--bullet-color:#FFC220] [&>li]:marker:text-[--bullet-color]">
            <li className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80">
              Increase seller adoption rates by reducing onboarding friction
            </li>
            <li className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80">
              Minimize errors in inventory and shipping through automated labeling & tracking.
            </li>
            <li className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80">
              Enhance seller satisfaction by making fulfillment processes intuitive and efficient.
            </li>
            <li className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80">
              Position Walmart as a competitive fulfillment provider against Amazon FBA.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
          {/* CHANGE 11: Used Link component instead of button with nested anchor */}
          <Link 
            href="/contact"
            className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007EA7] px-6 sm:px-8 py-2 sm:py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Let&apos;s Chat
          </Link>
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