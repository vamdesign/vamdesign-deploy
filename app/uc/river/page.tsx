import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"

export default function RiverbedDesignSystemPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Riverbed_Hero-mwvLraYXfkvA7Qle0h4SRNMOA4wKNW.png"
          alt="Riverbed Design System hero image showing network monitoring dashboards with orange and teal data visualizations"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          sizes="100vw"
          className="object-center"
        />
        <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
          <div className="max-w-[60%]">
            <h1 className="font-space-grotesk text-5xl font-bold text-white mb-8 text-left drop-shadow-sm">
              Designing Scalable Enterprise UX for Riverbed Technology
            </h1>
            <p className="font-montserrat text-lg text-white mt-8 text-left drop-shadow-sm">
            Discover how I developed  scalable UX strategies for B2B enterprise applications, optimizing workflows, and improving user efficiency.
            </p>

            <div className="flex gap-6 mt-12">
              <Link
                href="/uc/river/details"
                className="rounded-[100px] border-2 border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
              >
                Quick Overview
              </Link>
              <Link
                href="/uc/river/process"
                className="rounded-[100px] border-2 border-white bg-white/10 hover:bg-white/20 text-white px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
              >
                Detailed Process
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

