import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"


export default function BuildingWithAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AI_hero2-U6Z0rtsojYY2V3JTJByZ2elbePdI9C.png"
          alt="Building with AI hero image showing abstract purple and white flowing patterns"
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
          sizes="100vw"
          className="object-center"
        />
        <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
          <div className="max-w-[60%]">
            <h1 className="font-space-grotesk text-5xl font-bold text-white mb-8 text-left drop-shadow-lg">
              Building, Learning & Innovating with AI UX
            </h1>
            <p className="font-montserrat text-lg text-white mt-8 text-left drop-shadow-lg">
              Explore how I leverage AI tools to enhance UX design processes, improve efficiency, and create more
              intuitive user experiences.
            </p>

            <div className="flex gap-6 mt-12">
              <Link
                href="/uc/ai/details"
                className="rounded-[100px] border-2 border-white bg-black/20 hover:bg-white/20 text-white px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
              >
                Quick Overview
              </Link>
              <Link
                href="/uc/ai/process"
                className="rounded-[100px] border-2 border-white bg-black/20 hover:bg-white/20 text-white px-8 py-3 transition-all duration-300 text-lg font-medium backdrop-blur-sm"
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

