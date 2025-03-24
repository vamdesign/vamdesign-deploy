"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import SectionAuth from "@/components/SectionAuth"

export default function WellsFargoLegacyIntegrationPage() {
  return (
    <SectionAuth>
      <main className="min-h-screen bg-white">
        <Nav />

        {/* Hero Section */}
        <section className="relative min-h-screen pt-24 flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WellsFargo_Hero2-HCLHGHnFPgHRgXQiMekP6SMNKSpOis.png"
            alt="Wells Fargo stagecoach illustration with four horses"
            layout="fill"
            objectFit="cover"
            priority
            quality={100}
            sizes="100vw"
            className="object-center"
          />
          <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
            <div className="max-w-[60%]">
              <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] mb-8 text-left drop-shadow-sm">
                Migrating Legacy CRM Tools to Salesforce for Small Business Banking
              </h1>
              <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left drop-shadow-sm">
                Your choice, I have a short read or a long one, choose the synopsis or the whole enchalada?
              </p>

              <div className="flex gap-6 mt-12">
                <Link 
                  href="/uc/wellsf/details" 
                  className="rounded-[100px] border-2 border-[#007EA7] bg-white/50 hover:bg-white/90 text-[#007EA7] px-8 py-3 transition-all duration-300 text-lg font-medium"
                >
                  Synopsis
                </Link>

                <Link 
                  href="/uc/wellsf/process" 
                  className="rounded-[100px] border-2 border-[#007EA7] bg-white/50 hover:bg-white/90 text-[#007EA7] px-8 py-3 transition-all duration-300 text-lg font-medium"
                >
                  Enchalada
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SectionAuth>
  )
}