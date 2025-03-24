"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function AppleDetailsPage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      <Nav />
      <div className="sticky top-16 mt-0 z-20 w-full bg-white/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link
            href="/uc/apple/process"
            className="text-[#6E6E73] hover:text-[#000000] text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Curious about the thinking behind this Use Case? Let’s walk through the process.
          </Link>
        </div>
      </div>

      {/* Content Section with Logo and Header */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          {/* Title with Logo */}
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

            {/* Title */}
            <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] text-left">
              Driving UX Innovation in Customer Support Applications
            </h1>
          </div>

          {/* Subtitle */}
          <h3 className="font-space-grotesk text-xl text-[#2C3D4D] mt-8 mb-12 text-left">
            The quick overview of my role in revolutionizing Apple's internal customer support platform.
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Background</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 text-left">
              Apple is constantly innovating to enhance customer interactions. To take their customer service experience
              to the next level, they integrated a video-guided shopping feature into their internal support platform,
              Prism. The goal was to bring the in-store Genius Bar experience online via video chat, enabling
              specialists to assist customers in real-time with product recommendations and purchasing decisions.
            </p>
            <div className="relative aspect-square w-[300px] ml-[100px]">
              <Image
                src="/images/apple/Apple300px.png"
                alt="Apple Specialist ready to provide one-on-one shopping assistance online or in store"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
              Apple's specialists needed a seamless way to adopt a new component within their existing internal
              application with minimal onboarding. Their key goals were to increase close rates, drive upsells, and
              improve user satisfaction while ensuring a frictionless experience. The challenge was to integrate an
              existing API into their current interface, enabling specialists to video chat with customers and guide
              them through online shopping. The solution also had to be adaptive across devices, scalable for future
              enhancements, and compliant with privacy and security standards.
            </p>
            <div className="relative w-full aspect-video mb-8">
              <Image
                src="/images/apple/Challnge_Solutions.svg"
                alt="Challenges and Solutions Diagram"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="mb-16 pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">What I Did</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
            I led the UX strategy and design for this initiative, ensuring a frictionless, intuitive experience by:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-4 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Designing a seamless UI that integrated video chat, guided shopping, and live customer engagement.
            </li>
            <li>
              Collaborating closely with Apple PMs, engineers, and stakeholders to iterate based on feedback and refine
              the experience.
            </li>
            <li>
              Ensuring easy adoption by leveraging Apple's existing UI patterns and minimizing new learning curves.
            </li>
            <li>
              Building scalable interactions to maintain privacy, handle customer interactions smoothly, and optimize
              purchase conversions.
            </li>
          </ul>
        </section>

        <section className="mb-16 pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Role</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
            Senior UX Designer, led UX Strategy, Interaction Design, and Design Systems
          </p>
        </section>

        <div className="mt-16 flex flex-col items-center pb-12">
          <p className="font-montserrat text-md text-[#007EA7]/80 max-w-xl mb-8 text-left">
            Interested in a behind-the-scenes look and detailed presentation?{" "}
            <Link href="/contact" className="text-[#007EA7] hover:text-[#005f7f] underline">
              Contact me
            </Link>{" "}
            to schedule a portfolio review. Due to Apple's NDA, the actual work is only available to view in person.
          </p>
          <button className="rounded-[100px] border border-[#F7F6F6] bg-white hover:bg-white/80 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
            <a href="/contact">Let's Chat</a>
          </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

