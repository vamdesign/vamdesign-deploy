import Nav from "@/components/nav"
import Image from "next/image"

import type { Metadata } from "next"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "About | VAM Design Portfolio",
  description:
    "Learn more about VAM Design and Vicki Morawietz, a senior UX/UI designer specializing in innovative enterprise solutions.",
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
            <div className="relative aspect-square w-48">
              <Image
                src="/images/backgrounds/human01.jpg"
                alt="Senior UX Designer human photo"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
              Creating Seamless Experiences. No User Manual Required.
            </h1>
          </div>

          <div className="space-y-6 text-lg text-[#007EA7] bg-white/80 p-8 rounded-md shadow-2xl">
            <h2 className="text-2xl font-bold text-[#007EA7] mb-4">Why You'll Want Me on Your Team</h2>

            <p className="font-montserrat">
              I'm a Senior UX/UI Product Designer based in the San Francisco Bay Area, with experience ranging from
              startups to Fortune 500 companies. I thrive in collaborative teams as well as working independently,
              quickly adapting to new challenges. Whether it's leading a product from inception or optimizing an
              existing one, I approach each project with a strategic mindset to deliver impactful solutions.
            </p>
            <p className="font-montserrat">
              My toolbox includes scalable design, research, strategy, and design systems, all aimed at crafting
              solutions that drive engagement, improve efficiency, and directly impact revenue. I design with a purpose,
              ensuring intuitive, user-friendly experiences that not only delight users but also meet KPIs, boost
              conversions, and support business growth. I believe great design should be transparent and effortless,
              allowing people to focus on what truly matters.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
  <button className="rounded-[100px] border border-white bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300">
    <a href="/assets/VMorawietz_2025_CV.pdf" download>
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