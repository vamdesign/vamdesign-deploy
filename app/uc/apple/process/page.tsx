"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Head from "next/head" // Added for resource hints

export default function AppleProcessPage() {
  return (
    <main className="min-h-screen bg-white">
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
          href="/images/apple/UXProcessGraph.svg" 
          as="image" 
          type="image/svg+xml"
        />
      </Head>
      
      <Nav />
      
      {/* CHANGE 2: Updated navigation banner with improved styling */}
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

      {/* Content Section - Main heading and intro */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          {/* CHANGE 3: Made logo responsive with different sizes based on screen width */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8">
            {/* Apple Logo - Added responsive sizing and loading priority */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src="/images/apple/Logo_Apple.svg"
                alt="Apple Logo"
                fill
                className="object-contain"
                priority // Critical above-the-fold image
              />
            </div>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Driving UX Innovation in Customer Support Applications
            </h1>
          </div>
          
          {/* CHANGE 4: Improved text responsiveness */}
          <p className="font-montserrat text-base sm:text-lg text-[#2C3D4D] mt-4 sm:mt-8 text-left">
            As the Senior UX Designer for Apple&apos;s internal application, Prism, I led the UX strategy to streamline
            customer service workflows, enhance efficiency, and elevate the specialist experience.
          </p>
          
          {/* CHANGE 5: Added responsive width for list container */}
          <ul className="font-montserrat text-sm sm:text-base text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-full sm:max-w-[95%] md:max-w-[90%]">
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

      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Use Case */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-2 text-left">Use Case</h2>
          <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
            Designing the Customer Support Experience
            {/* CHANGE 6: Made subtitle responsive with linebreak only on larger screens */}
            <span className="hidden sm:inline"><br /></span>
            <span className="sm:hidden"> </span>
            for a Video Shopping Platform
          </h3>
          
          {/* CHANGE 7: Improved grid layout for better responsiveness */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
            <div>
              <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
                As part of Apple&apos;s innovative approach to customer engagement, their next step was to bring the Genius
                customer interaction to virtual shopping by integrating video-guided support into its internal platform.
              </p>
              
              {/* CHANGE 8: Improved responsive image display strategy with loading="eager" */}
              <div className="relative w-full aspect-video md:hidden mb-4">
                <Image
                  src="/images/apple/Apple300px.png"
                  alt="Apple Specialist offering one-on-one shopping experience online or in store"
                  fill
                  className="object-contain rounded-lg"
                  loading="eager" // Load early since it appears on mobile
                />
              </div>
              <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80">
                As the lead UX designer, I created an intuitive, frictionless interface that allowed specialists to
                shop with customers in real time, ensuring a seamless and superior Apple retail experience.
              </p>
            </div>
            
            {/* CHANGE 9: Adjusted responsive image alignment with loading="eager" */}
            <div className="relative w-full aspect-video hidden md:block md:mt-0 lg:-mt-20">
              <Image
                src="/images/apple/Apple300px.png"
                alt="Specialist offering one-on-one shopping experience online or in store"
                fill
                className="object-contain rounded-lg"
                loading="eager" // Load early since it appears on desktop
              />
            </div>
          </div>
        </section>

        {/* Objectives and Goals - Added responsive text sizing throughout */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Context & Business Challenge
          </h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
            The COVID-19 pandemic significantly impacted in-store sales, requiring Apple to rethink how it engaged
            customers remotely. Their solution was to create an online shopping experience that mirrored the in-store
            Genius Bar interactions. This approach allowed specialists to guide customers in real-time, assisting with
            product selection and purchasing while ensuring a seamless, compliant experience similar to FaceTime.
          </p>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
            Apple tasked us with designing a new component for their internal customer service application, enabling
            specialists to video chat and assist customers in live shopping experiences on the online store. This
            system integrated with the existing customer-facing platform, allowing specialists to take on the role of
            an in-store Genius while seamlessly managing the existing customer service interface, ensuring live
            support and operational efficiency.
          </p>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
            Our solution focused on the following key objectives:
          </p>
          
          {/* CHANGE 10: Made list text responsive */}
          <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>Enable live guided shopping assistance for specialists and customers</li>
            <li>Maintain a seamless user experience across both internal and customer-facing platforms</li>
            <li>Minimize onboarding time by designing an intuitive and easily adoptable interface</li>
            <li>
              Ensure minimal friction and align with key performance indicators (KPIs), including faster onboarding,
              increased customer engagement, and higher conversion rates
            </li>
          </ul>
        </section>

        {/* My Role & Key Contributions */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            My Role & Key Contributions
          </h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
            As a Senior UX Designer, I was responsible for:
          </p>
          
          {/* CHANGE 11: Adjusted list padding for better mobile display */}
          <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Rapidly defining the UX strategy by leveraging my deep understanding of internal applications and past
              experience, while collaborating with AMP&apos;s project managers to craft and present a comprehensive
              solution to Apple&apos;s product and engineering teams
            </li>
            <li>Translating complex workflows into intuitive designs that specialists could adopt quickly</li>
            <li>Optimizing usability while ensuring compliance with security protocols</li>
            <li>
              Integrating video shopping functionality within their internal application, leveraging existing UI
              components
            </li>
            <li>Driving KPI-based results: higher close rates, increased upsells, and improved user satisfaction</li>
          </ul>
        </section>

        {/* UX Process Graph */}
        <section className="mb-12 sm:mb-16">
          {/* CHANGE 12: Added sizes and loading attributes */}
          <Image
            src="/images/apple/UXProcessGraph.svg"
            alt="UX Process Workflow"
            width={800}
            height={400}
            className="w-full mb-6 sm:mb-8"
            sizes="(max-width: 768px) 100vw, 800px"
            loading="eager" // Important diagram that should load early
          />

          {/* CHANGE 13: Made grid more responsive for different screen sizes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {/* Concept */}
            <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-2 sm:mb-4">Concept</h3>
              <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Developed UX strategy aligned with existing workflows</li>
                <li>Identified key business needs and technical constraints</li>
                <li>Defined core interactions and navigation patterns</li>
              </ul>
            </div>

            {/* Ideation */}
            <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-2 sm:mb-4">Ideation</h3>
              <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Created low-fidelity sketches and wireframes</li>
                <li>Aligned concepts with design standards</li>
                <li>Prioritized usability and accessibility in interactions</li>
              </ul>
            </div>

            {/* Collaborate */}
            <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-2 sm:mb-4">Collaborate</h3>
              <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Aligned with AMP and Apple product teams</li>
                <li>Facilitated cross-functional discussions</li>
                <li>Ensured smooth concept-to-development transition</li>
              </ul>
            </div>

            {/* Iteration */}
            <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-2 sm:mb-4">Iteration</h3>
              <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Designed 80+ screens for comprehensive coverage</li>
                <li>Refined designs through feedback sessions</li>
                <li>Optimized workflows based on user testing</li>
              </ul>
            </div>

            {/* Validation */}
            <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-2 sm:mb-4">Validation</h3>
              <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Evaluated API and backend constraints</li>
                <li>Tested interaction patterns for efficiency</li>
                <li>
                  Optimized for device adaptability to ensure a seamless experience across different Mac hardware
                  setups
                </li>
              </ul>
            </div>

            {/* Delivery */}
            <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-2 sm:mb-4">Delivery</h3>
              <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-3 sm:pl-4 space-y-1 sm:space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Created comprehensive design documentation</li>
                <li>Provided detailed interaction specifications</li>
                <li>Supported seamless platform integration</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Challenges & Solutions */}
        <section className="pt-8 sm:pt-14 mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 sm:mb-8 text-left">
            Key Challenges & Solutions
          </h2>
          <div className="w-full">
            {/* CHANGE 14: Added sizes attribute and lazy loading for below-the-fold image */}
            <Image
              src="/images/apple/Challnge_Solutions.svg"
              alt="Key Challenges and Solutions"
              width={1200}
              height={800}
              className="w-full"
              sizes="(max-width: 1200px) 100vw, 1200px"
              loading="lazy" // Below the fold, can load lazily
            />
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Outcome & Impact
          </h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6">
            Apple&apos;s shift toward video-guided shopping redefined how specialists connect with customers, creating a
            seamless bridge between online and in-store experiences. By embedding this capability within the existing
            customer service platform, specialists were equipped with tools to provide expert-driven
            support while maintaining Apple&apos;s signature level of service. This transformation not only streamlined
            workflows and boosted engagement but also set the foundation for a more scalable, intelligent, and
            interactive future in digital customer assistance.
          </p>
          
          {/* CHANGE 15: Improved list spacing for better readability on mobile */}
          <ul className="space-y-2 sm:space-y-4 list-disc pl-4 sm:pl-6 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80">
              Revolutionized the online shopping interface, seamlessly bridging the gap between digital and in-store
              interactions, resulting in an improved and immersive customer journey.
            </li>
            <li className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80">
              Increased specialist efficiency, significantly reducing onboarding time and enhancing workflow adoption
              through an intuitive and familiar interface.
            </li>
            <li className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80">
              Drove higher conversion rates, leveraging guided product recommendations that improved purchase
              confidence and overall customer satisfaction.
            </li>
          </ul>

          <h3 className="font-space-grotesk text-xl sm:text-2xl font-semibold text-[#007EA7] mt-6 sm:mt-8 mb-2 sm:mb-4 text-left">Next Steps</h3>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80">
            This project served as the foundation for Apple&apos;s next evolution in virtual shopping and customer
            engagement. Future enhancements will focus on expanding personalization, AI-assisted guidance, and
            improved API functionality.
          </p>
        </section>

        {/* Call to Action */}
        <section className="mb-12 sm:mb-16">
          <div className="flex flex-col items-center">
            {/* CHANGE 16: Made CTA section more responsive */}
            <p className="font-montserrat text-sm sm:text-md text-[#007EA7]/80 max-w-full sm:max-w-xl mb-4 sm:mb-8 text-center sm:text-left">
              Interested in a behind-the-scenes look and detailed presentation?{" "}
              <Link href="/contact" className="text-[#007EA7] hover:text-[#005f7f] underline">
                Contact me
              </Link>{" "}
              to schedule a portfolio review. Due to Apple&apos;s NDA, the actual work is only available to view in person.
            </p>
            
            {/* CHANGE 17: Used proper Link component for button */}
            <Link 
              href="/contact"
              className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007ea7] px-6 sm:px-8 py-2 sm:py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
            >
              Let&apos;s Chat
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  )
}