"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"

import SectionAuth from "@/components/SectionAuth"

export default function LittlerManagementAppPage() {
  return (
    <SectionAuth>
      <main className="min-h-screen bg-white">
        <Nav />

        {/* Hero Section */}
        <section className="relative min-h-screen pt-24 flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_Hero2-lSRqWNa3lbXKPrvLRZovcSDXlkjp3Q.png"
            alt="Littler CaseSmart platform showing desktop dashboard and mobile companion app interfaces"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
            sizes="100vw"
            className="object-center opacity-50"
          />
          <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
            <div className="max-w-[60%]">
              <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] mb-8 text-left drop-shadow-sm">
                Streamlining Legal Case Management for Littler Mendelson
              </h1>
              <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left drop-shadow-sm">
                Choose how you'd like to explore this case study:
              </p>

              <div className="flex gap-6 mt-12">
                <Link
                  href="/uc/litman/details"
                  className="rounded-[100px] border-2 border-[#007EA7] bg-white/10 hover:bg-white/20 text-[#007EA7] px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
                >
                  Quick Overview
                </Link>
                <Link
                  href="/uc/litman/process"
                  className="rounded-[100px] border-2 border-[#007EA7] bg-white/10 hover:bg-white/20 text-[#007EA7] px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
                >
                  Detailed Process
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </SectionAuth>
  )
}