"use client"

import type { FC } from "react"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import AllReviewsAppUntyped from "./review-aggregator-v14"

const AllReviewsApp = AllReviewsAppUntyped as FC<{ embedded?: boolean }>

function PlaceholderImage({ label }: { label: string }) {
  return (
    <div className="w-full aspect-[16/10] rounded-lg border border-dashed border-[#007EA7]/40 bg-[#007EA7]/5 flex items-center justify-center px-4">
      <p className="font-montserrat text-sm sm:text-base text-[#007EA7] text-center">{label}</p>
    </div>
  )
}

export default function AllReviewsLabPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <header className="mb-12">
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4">
              All Reviews Mobile App
            </h1>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus
              posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.
            </p>
          </header>

          <section className="mb-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4">The Problem</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at lobortis.
                  Maecenas faucibus mollis interdum. Aenean lacinia bibendum nulla sed consectetur.
                </p>
                <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80">
                  Curabitur blandit tempus porttitor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Nullam id dolor id nibh ultricies vehicula ut id elit.
                </p>
              </div>
              <PlaceholderImage label="Placeholder Image: Problem Context (mobile flows, 1200 x 750)" />
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4">Interactive prototype</h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6">
              Embedded below: the in-progress All Reviews UI (mobile-first). Use it to explore flows while the case study copy is drafted.
            </p>
            <div className="w-full max-w-[440px] mx-auto rounded-2xl overflow-hidden border border-[#2d3a55] shadow-[0_20px_50px_rgba(0,0,0,0.35)] bg-[#0e1220] h-[min(78vh,820px)] min-h-[520px]">
              <div className="h-full min-h-0 flex flex-col">
                <AllReviewsApp embedded />
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4">Approach</h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum.
              Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et.
            </p>
            <PlaceholderImage label="Placeholder Image: All Reviews interaction map (1600 x 1000)" />
          </section>

          <section className="mb-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4">Outcome</h2>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <PlaceholderImage label="Placeholder Image: iPhone app mockup (1400 x 900)" />
              <div>
                <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus
                  posuere velit aliquet. Donec sed odio dui.
                </p>
                <ul className="font-montserrat text-base text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                  <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                  <li>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</li>
                  <li>Nullam id dolor id nibh ultricies vehicula ut id elit.</li>
                </ul>
              </div>
            </div>
          </section>

          <div className="mt-16 flex flex-col items-center pb-12">
            <a
              href="/contact/"
              className="rounded-[100px] border border-[#F7F6F6] bg-white hover:bg-white/80 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
            >
              Let&apos;s Chat
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
