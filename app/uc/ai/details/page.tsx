"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"

export default function AIDetailsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const portfolioDesigns = [
    {
      src: "/images/vam_ai/WebPage_1.png",
      alt: "Dark themed minimalist portfolio with John Doe centered on the page",
      version: "Version 1",
    },
    {
      src: "/images/vam_ai/WebPage_2.png",
      alt: "Dark blue portfolio with 'Elevating Design & Success for:' heading and grid layout",
      version: "Version 3",
    },
    {
      src: "/images/vam_ai/WebPage_3.png",
      alt: "Light blue portfolio with 'Nice to meet you, I'm Vicki' heading",
      version: "Version 9",
    },
    {
      src: "/images/vam_ai/WebPage_4.png",
      alt: "Orange themed portfolio with 'Hello, I'm Vicki' heading",
      version: "Version 61",
    },
    {
      src: "/images/vam_ai/WebPage_5.png",
      alt: "Clean white portfolio with 'Hello, I'm Vicki, Transforming Complex Opportunities' heading",
      version: "Forked, Version 32",
    },
    {
      src: "/images/vam_ai/WebPage_6.png",
      alt: "White portfolio with teal text 'Hello, I'm Vicki, I design Intuitive UX'",
      version: "Version 84",
    },
    {
      src: "/images/vam_ai/WebPage_7.png",
      alt: "Portfolio with gradient background and 'Hello, I'm Vicki, I design Intuitive UX' heading",
      version: "Version 89 and beyond",
    },
  ]

  const nextSlide = () => {
    if (carouselRef.current) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioDesigns.length)
    }
  }

  const prevSlide = () => {
    if (carouselRef.current) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioDesigns.length) % portfolioDesigns.length)
    }
  }

  // Helper function to get index with wrapping
  const getIndexWithWrap = (index: number) => {
    return (index + portfolioDesigns.length) % portfolioDesigns.length
  }

  return (
    <main className="min-h-screen bg-white pb-16">
      <Nav />
      <div className="sticky top-16 mt-0 z-20 w-full bg-white/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link href="/uc/ai/process" className="text-[#7209B7] hover:text-[#470672] text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Deep dive the UX process that shaped this project.
          </Link>
        </div>
      </div>

      {/* Content Section - Moved up to replace hero */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] mb-8 text-left">
          Building, Learning & Innovating with AI UX
        </h1>
        <h3 className="font-montserrat text-xl text-[#2C3D4D] mt-8 mb-12 text-left">
          As a Senior UX Designer, I integrate AI tools into my design process to enhance creativity, improve
          efficiency, and create more intuitive user experiences.
        </h3>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Background</h2>
          <div>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 text-left">
              Creating a UX portfolio requires strategic problem-solving, user-centered workflows, and efficiency in
              execution. By leveraging AI tools like ChatGPT, Claude, and MidJourney, I enhanced productivity,
              streamlined iteration cycles, and refined content and visuals while maintaining full creative control.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
              Traditional UX design processes can be time-consuming and resource-intensive. User research, ideation,
              prototyping, and testing all require significant effort, and there's always a risk of cognitive biases
              influencing design decisions. The challenge was to identify where AI could enhance the design process
              without replacing the human-centered approach that is essential to good UX design. I needed to find the
              right balance between leveraging AI capabilities and maintaining the empathy and creativity that comes
              from human designers.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">What I Did</h2>

            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-[60%]">
                <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 text-left">
                  AI-Assisted Design & Development
                </h3>
                <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
                  <li>
                    Developed a structured process to refine AI-generated designs, ensuring usability and consistency.
                  </li>

                  <li>
                    Used AI-driven content generation while maintaining manual oversight to refine clarity and
                    structure.
                  </li>
                </ul>
                <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 text-left">
                  Problem-Solving & Key Challenges
                </h3>
                <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
                  <li>
                    Resolved code optimization challenges in Claude, debugging AI-generated inefficiencies to enhance
                    performance.
                  </li>
                  <li>
                    Used ChatGPT for content structuring, refining AI drafts with UX writing principles to ensure
                    clarity and coherence.
                  </li>
                </ul>

                <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 text-left">
                  Human-Centered AI Integration
                </h3>
                <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
                  <li>
                    Applied iterative problem-solving to enhance AI's role as a supporting tool rather than a
                    decision-maker.
                  </li>
                  <li>
                    Balanced automation with manual UX adjustments to create an intuitive, user-friendly experience.
                  </li>
                </ul>
              </div>

              <div className="md:w-[60%] relative">
                <div>
                  <Image
                    src="/images/vam_ai/AI_Ven_Diagram.png"
                    alt="AI-Enhanced UX Design Process Diagram showing the interconnection between Vercel, Claude, ChatGPT, Figma, and Midjourney"
                    width={600}
                    height={250}
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Portfolio Development Through Problem-Solving & Iteration */}
          <div className="mt-8 mb-8">
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-8 text-left">
              Portfolio Development Through Problem-Solving & Iteration
            </h3>

            {/* Product-style Carousel with Sliding Animations */}
            <div className="relative w-full p-8 bg-white rounded-lg shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] mb-8">
              <div ref={carouselRef} className="relative h-[350px] md:h-[400px] overflow-hidden">
                {portfolioDesigns.map((design, index) => {
                  // Calculate position relative to current index
                  let position = index - currentIndex

                  // Handle wrapping for infinite carousel
                  if (position < -1) position += portfolioDesigns.length
                  if (position > 1) position -= portfolioDesigns.length

                  // Skip rendering items that are not in view (-1, 0, 1 positions)
                  if (position < -1 || position > 1) return null

                  // Determine CSS classes based on position
                  const positionClass =
                    position === -1
                      ? "left-[5%] w-[25%] opacity-70 z-10"
                      : position === 0
                        ? "left-[27.5%] w-[45%] z-20"
                        : "left-[70%] w-[25%] opacity-70 z-10"

                  return (
                    <div
                      key={index}
                      className={`absolute top-0 overflow-hidden transition-all duration-500 ease-in-out ${positionClass}`}
                      style={{
                        transform: `translateY(${position === 0 ? "0" : "10%"}) scale(${position === 0 ? 1 : 0.9})`,
                        height: position === 0 ? "100%" : "80%",
                      }}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={design.src || "/placeholder.svg"}
                          alt={design.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-white text-[#007EA7] text-center py-1">
                        {design.version}
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Navigation arrows centered below */}
              <div className="flex justify-center mt-6 space-x-12">
                <button
                  className="text-[#007EA7] hover:text-[#005f7f] transition-colors"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M5 12L11 6M5 12L11 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  className="text-[#007EA7] hover:text-[#005f7f] transition-colors"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M19 12H5M19 12L13 6M19 12L13 18"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Problem Solving & Iteration Paragraph*/}
            <div className="w-full mt-6">
              <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-6">
                Building this AI-powered portfolio required continuous iteration, testing, and problem-solving to refine
                both design and functionality. By combining AI-generated layouts with hands-on UX adjustments, I
                streamlined integration across platforms while troubleshooting AI limitations, optimizing workflows, and
                enhancing usability.
              </p>
              <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
                <li>
                  Iterated through numerous design and code versions, refining AI-assisted layouts for usability and
                  consistency.
                </li>

                <li>
                  Resolved machine learning inconsistencies, version control conflicts, and AI-driven design challenges.
                </li>
                <li>
                  Applied UX best practices to enhance performance, maintain accessibility, and ensure a user-centered
                  final product.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-16 pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Role</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 text-left">
            Senior UX Designer, AI Integration, AI-Enhanced Content Structuring, and UX Workflow Optimization
          </p>
        </section>

        <div className="mt-16 text-center pb-12">
          <a
            href="/contact"
            className="rounded-[100px] border border-[#F7F6F6] bg-white hover:bg-white/80 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Let's Chat
          </a>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
              />
              <DialogClose
                className="absolute top-2 right-2 bg-[#007EA7]/80 hover:bg-[#007EA7] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </DialogClose>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}

