import Link from "next/link"
import Nav from "@/components/nav"
import Footer from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Coming soon | VAM Design Lab",
  description: "This lab project is not public yet.",
}

export default function LabComingSoonPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 bg-white">
        <div className="max-w-2xl mx-auto px-6 py-20 text-center">
          <p className="font-space-grotesk text-sm font-semibold uppercase tracking-widest text-[#007EA7]/80 mb-4">
            Lab
          </p>
          <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-6">
            Working…
          </h1>
          <p className="font-montserrat text-lg sm:text-xl text-[#5f5f5f]/85 leading-relaxed mb-10">
            Coming soon. This prototype is still in progress; check back later or explore the rest of the site.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="rounded-[100px] border border-[#007EA7] bg-[#007EA7] text-white px-8 py-2.5 font-montserrat font-medium hover:bg-[#005f7f] hover:border-[#005f7f] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/contact/"
              className="rounded-[100px] border border-[#007EA7]/30 bg-white text-[#007EA7] px-8 py-2.5 font-montserrat font-medium hover:bg-[#007EA7]/5 transition-colors"
            >
              Let&apos;s Chat
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
