import Nav from "@/components/nav"
import Image from "next/image"

import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About | VAM Design Portfolio",
  description:
    "Vicki Morawietz — senior UX and product designer turning complex enterprise systems into clear, trustworthy experiences.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen relative bg-[#ffffff]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/backgrounds/GoldenGate_5.png"
          alt="San Francisco Golden Gate Bridge Illustration"
          fill
          className="object-cover"
          priority
        />
      </div>

      <Nav />

      <section className="relative pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
  <div className="relative aspect-square w-32 sm:w-40 md:w-48">
    <Image
      src="/images/backgrounds/human01.jpg"
      alt="Senior UX Designer human photo"
      fill
      className="rounded-full object-cover"
    />
  </div>
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-white text-center md:text-left leading-tight max-w-3xl">
    I design complex systems people can actually trust
  </h1>
</div>

          <div className="space-y-6 text-lg text-[#007EA7] bg-white/80 p-8 rounded-md shadow-2xl">
            <p className="font-montserrat">
              I&apos;m Vicki Morawietz, a senior UX and product designer with a background in enterprise systems, internal
              tools, and workflow-heavy products where clarity, trust, and edge cases matter.
            </p>
            <p className="font-montserrat">
              My experience spans Apple, Wells Fargo, Walmart, Riverbed, and Littler Mendelson, where I worked on design
              systems, workflow modernization, research-led product improvements, and information-dense enterprise
              tools. At Littler Mendelson, I helped design Virtual Binder, a legal management system that is still in
              production and essentially unchanged, which is a rare kind of proof point in enterprise software.
            </p>
            <p className="font-montserrat">
              Over the last three years, I have been building independently while the industry caught up to a problem I
              already cared about. My recent work has focused on AI-assisted experiences, guardrails, latency states,
              human fallback, and the UX patterns that make powerful systems feel dependable instead of opaque.
            </p>
            <p className="font-montserrat">
              Today, I&apos;m especially interested in the UX layer around AI: the part where users need visibility,
              review, boundaries, and a clear sense of what the system is doing on their behalf.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
  <button className="rounded-[100px] border border-white bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300">
    <a href="/assets/VMorawietz_2026_CV.pdf" download>
      Download CV
    </a>
  </button>
  <button className="rounded-[100px] border border-white bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300">
    <a href="/contact/">Let's Chat</a>
  </button>
</div>
          </div>
          <p className="text-[10px] font-montserrat text-white/70 text-center mt-8">
            Image created with the aid of MidJourney AI.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}