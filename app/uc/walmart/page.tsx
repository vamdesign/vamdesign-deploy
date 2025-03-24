"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import SectionAuth from "@/components/SectionAuth"

export default function WalmartFulfillmentAppPage() {
  return (
    <SectionAuth>
      <main className="min-h-screen bg-white">
        <Nav />

        {/* Hero Section */}
        <section className="relative min-h-screen pt-24 flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wamart_Hero_2-1yxVTeFQ2ZRMV0ZVNFNNAqMBV7ARb7.png"
            alt="Walmart Fulfillment Center with conveyor belt and Walmart.com boxes"
            layout="fill"
            objectFit="cover"
            priority
            className="opacity-80"
          />
          <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
            <div className="max-w-[60%]">
              <h1 className="font-space-grotesk text-5xl font-bold text-white mb-8 text-left">
                Walmart Fulfillment Services
              </h1>
              <p className="font-montserrat text-lg text-white mt-8 text-left">
                At Walmart Labs, I was brought on to help design and refine the Walmart Fulfillment Services (WFS)
                platform. This initiative was Walmart's effort to enable third-party sellers to store, ship, and manage
                inventory through Walmart's logistics network.
              </p>

              <div className="flex gap-6 mt-12">
                <Link
                  href="/uc/walmart/details"
                  className="rounded-[100px] border-2 border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3 transition-all duration-300 text-lg font-medium"
                >
                  Gimme the deets
                </Link>
                <Link
                  href="/uc/walmart/process"
                  className="rounded-[100px] border-2 border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3 transition-all duration-300 text-lg font-medium"
                >
                  I'm here for the process
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SectionAuth>
  )
}