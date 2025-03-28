"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function WalmartDetailsPage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      <Nav />

      {/* Navigation banner - ONLY this section has the light blue background */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#E6F0FF] backdrop-blur-sm border-y border-[#FFC220]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <Link
            href="/uc/walmart/process"
            className="text-[#FFC220] hover:text-[#C29009] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1">
            <div className="flex items-center bg-white/70 px-4 py-2 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Walk me through the full project process.</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Content Section - Plain white background, NO colored background */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          {/* Logo and title section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8">
            {/* Walmart Logo */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src="/images/walmart/Logo_Walmart.svg"
                alt="Walmart Logo"
                fill
                priority
                className="object-contain"
              />
            </div>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Walmart Fulfillment Services, the UX Journey
            </h1>
          </div>
          <h3 className="font-space-grotesk text-lg md:text-xl text-[#2C3D4D] mt-6 md:mt-8 mb-8 md:mb-12 text-center md:text-left">
            A quick look at my role in shaping the Walmart Fulfillment Services beta app as part of the design team.
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-8 md:mb-16">
          <h2 className="font-space-grotesk text-2xl md:text-3xl font-semibold text-[#007EA7] mb-4 md:mb-8 text-center md:text-left">Background</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-start">
            <p className="font-montserrat text-base md:text-lg text-[#5f5f5f]/80 text-center md:text-left">
              Walmart Fulfillment Services (WFS) was developed from the ground up to provide third-party sellers with an
              efficient fulfillment network, enabling them to store, ship, and manage inventory using Walmart's
              logistics. This initiative aimed to streamline onboarding, enhance inventory tracking, and improve seller
              transparency while competing with established fulfillment services like Amazon's Fulfillment by Amazon
              (FBA). WFS also unified fulfillment under Walmart's umbrella, allowing customers to return third-party
              purchases in-store, with Walmart managing logistics and returns on behalf of sellers.
            </p>
            <div className="relative w-full md:w-3/4 mx-auto">
              <Image
                src="/images/walmart/Walmart_WFS_image.png"
                alt="Hands placing shipping label on a Walmart.com branded box"
                width={300}
                height={300}
                loading="lazy"
                className="w-4/5 h-auto object-contain rounded-lg mx-auto"
              />
            </div>
          </div>

          <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-[#FFC220]/10">
            <h2 className="font-space-grotesk text-2xl md:text-3xl font-semibold text-[#007EA7] mb-4 md:mb-8 text-center md:text-left">The Challenge</h2>
            <p className="font-montserrat text-base md:text-lg text-[#5f5f5f]/80 mb-6 text-center md:text-left">
              The UX lead needed to present competitive findings to stakeholders to justify key decisions and align
              expectations on performance benchmarks. These insights were essential for setting initial KPIs and
              ensuring WFS could deliver a comparable seller experience to established competitors.
            </p>
            <p className="font-montserrat text-base md:text-lg text-[#5f5f5f]/80 text-center md:text-left">
              Since WFS was being developed from the ground up, there was no existing framework to build from. The goal
              was to lay broad foundations for the beta version, with refinements and optimizations to follow.
            </p>
          </div>

          <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-[#FFC220]/10">
            <h2 className="font-space-grotesk text-2xl md:text-3xl font-semibold text-[#007EA7] mb-4 md:mb-8 text-center md:text-left">What I Did</h2>

            <h3 className="font-space-grotesk text-xl md:text-2xl font-medium text-[#007EA7] mb-4 md:mb-6 text-center md:text-left">UX Research</h3>
            <p className="font-montserrat text-base md:text-lg text-[#5f5f5f]/80 mb-6 md:mb-8 text-center md:text-left">
              I was responsible for collecting data from Amazon's fulfillment processes to define the foundational UX
              needs of WFS as a new platform, identifying critical features for onboarding, tracking, and labeling. I
              compiled research findings for the lead UX to create presentations for leadership, providing key insights
              that guided early development decisions and established benchmarks for the WFS beta release.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="relative aspect-video">
                <Image
                  src="/images/walmart/WFS_Labeling_Research2_gapsinWFS_009.jpeg"
                  alt="Amazon's packaging requirements interface showing box packing instructions and compliance information"
                  fill
                  loading="lazy"
                  className="object-contain rounded-lg"
                />
              </div>
              <div className="relative aspect-video">
                <Image
                  src="/images/walmart/WFS_Labeling_Research2_gapsinWFS011.jpeg"
                  alt="Comparison of shipping label functionality gaps between WFS and Amazon FBA"
                  fill
                  loading="lazy"
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <h3 className="font-space-grotesk text-xl md:text-2xl font-medium text-[#007EA7] mb-4 md:mb-6 text-center md:text-left">Design System</h3>
            <p className="font-montserrat text-base md:text-lg text-[#5f5f5f]/80 mb-6 md:mb-8 text-center md:text-left">
              The WFS app required a new design system that was built upon the existing Seller Center design system. The
              goal was to evolve the current design system in a way that maintained alignment with established patterns
              while enhancing flexibility for future growth. I worked closely with the design system team to ensure
              consistency in naming conventions, library structures, and component usability.
            </p>

            <div className="relative aspect-video mb-8 md:mb-12">
              <Image
                src="/images/walmart/Walmart_design_system.png"
                alt="WFS Design System button component documentation showing states, variations, and specifications"
                fill
                loading="lazy"
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-8 md:mb-16 pt-8 md:pt-12 border-t border-[#FFC220]/10">
          <h2 className="font-space-grotesk text-2xl md:text-3xl font-semibold text-[#007EA7] mb-4 md:mb-8 text-center md:text-left">Role</h2>
          <p className="font-montserrat text-base md:text-lg text-[#5f5f5f]/80 text-center md:text-left">
            Senior UX Designer, UX Research, Competitive Analysis, and Design System Integration
          </p>
        </section>

        <div className="mt-12 md:mt-16 text-center pb-8 md:pb-12">
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