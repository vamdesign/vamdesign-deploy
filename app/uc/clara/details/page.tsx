"use client"

import Nav from "@/components/nav"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"

export default function ClaraDetailsPage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      <Nav />
      <div className="sticky top-16 mt-0 z-20 w-full bg-[rgba(199,246,234,0.7)] backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link
            href="/uc/clara/process"
            className="text-[#6E6E73] hover:text-[#000000] text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Curious about the thinking behind this Use Case? Let's walk through the process.
          </Link>
        </div>
      </div>

      {/* Content Section with Logo and Header */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          {/* Title with Logo */}
          <div className="flex items-center gap-12 mb-8">
            {/* Clara Logo Placeholder */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <div className="w-full h-full bg-[#F5F5F7] rounded-lg flex items-center justify-center">
                <div className="text-4xl">🤖</div>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] text-left">
              Clara: Ethical Enterprise AI Platform
            </h1>
          </div>

          {/* Subtitle */}
          <h3 className="font-space-grotesk text-xl text-[#2C3D4D] mt-8 mb-12 text-left">
            The quick overview of my role in developing an ethical AI governance platform for enterprise organizations.
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Background</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. As organizations increasingly adopt AI
              technologies, the need for ethical governance and transparency has become paramount. Clara was designed to
              provide enterprise-level AI ethics management, ensuring responsible AI deployment across large
              organizations.
            </p>
            <div className="relative aspect-square w-[300px] ml-[100px]">
              <div className="w-full h-full bg-[#F5F5F7] rounded-lg flex items-center justify-center">
                <div className="text-center text-[#6E6E73]">
                  <div className="text-6xl mb-4">⚖️</div>
                  <p>AI Ethics Visualization</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enterprise organizations needed a comprehensive
              solution to manage AI ethics, ensure compliance with emerging regulations, and maintain transparency in
              their AI decision-making processes. The challenge was to create an intuitive platform that could handle
              complex ethical frameworks while remaining accessible to non-technical stakeholders.
            </p>
            <div className="relative w-full aspect-video mb-8">
              <div className="w-full h-full bg-[#F5F5F7] rounded-lg flex items-center justify-center">
                <div className="text-center text-[#6E6E73]">
                  <div className="text-6xl mb-4">📊</div>
                  <p>Challenges and Solutions Diagram</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">What I Did</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
            I led the UX strategy and design for this initiative, ensuring a comprehensive and user-friendly experience
            by:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-4 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Designing an intuitive dashboard that simplified complex AI ethics concepts for diverse stakeholders.
            </li>
            <li>
              Collaborating closely with AI researchers, compliance teams, and enterprise clients to iterate based on
              real-world feedback and regulatory requirements.
            </li>
            <li>
              Ensuring scalable adoption by creating modular components that could adapt to different organizational
              structures and compliance needs.
            </li>
            <li>
              Building transparent reporting mechanisms to maintain trust and facilitate regulatory compliance across
              multiple jurisdictions.
            </li>
          </ul>
        </section>

        <section className="mb-16 pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Role</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
            Senior UX Designer, led UX Strategy, Information Architecture, and Design Systems
          </p>
        </section>

        <div className="mt-16 flex flex-col items-center pb-12">
          <p className="font-montserrat text-md text-[#007EA7]/80 max-w-xl mb-8 text-left">
            Interested in a behind-the-scenes look and detailed presentation?{" "}
            <Link href="/contact" className="text-[#007EA7] hover:text-[#005f7f] underline">
              Contact me
            </Link>{" "}
            to schedule a portfolio review and learn more about the Clara project.
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
