"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"
import Head from "next/head" // Added for resource hints

export default function AIDetailsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  return (
    <main className="min-h-screen bg-white pb-16">
      {/* Added Head component with resource hints */}
      <Head>
        {/* Preload critical images that appear above the fold */}
        <link 
          rel="preload" 
          href="/images/vam_ai/Logo_VAM_AI.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Prefetch other important images that will be needed soon */}
        <link 
          rel="prefetch" 
          href="/images/vam_ai/AI_Ven_Diagram.png" 
          as="image"
        />
      </Head>
      
      <Nav />
      
      {/* Updated navigation banner with AI's light purple color */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#F0E6FF]/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <Link 
            href="/uc/ai/process" 
            className="text-[#7209B7] hover:text-[#470672] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1"
          >
            <div className="flex items-center bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>Curious about AI UX? Let's explore the process.</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Added logo to title section and made it responsive */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
        <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 mb-8">
            {/* AI Logo - Added responsive sizing */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex-shrink-0">
              <Image
                src="/images/vam_ai/Logo_VAM_AI.svg"
                alt="AI Design Logo"
                fill
                className="object-contain"
                priority // Added priority to preload this important image
              />
            </div>

            {/* Title - Improved responsiveness */}
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Building, Learning & Innovating with AI UX
            </h1>
          </div>

          {/* Made subtitle responsive */}
          <h3 className="font-space-grotesk text-lg sm:text-xl text-[#2C3D4D] mt-6 sm:mt-8 mb-8 sm:mb-12 text-center md:text-left">
            As a Senior UX Designer, I explored AI-powered tools to enhance my design and development workflow,
            streamlining processes and pushing beyond conventional UX approaches.
          </h3>

          
        </div>
      </div>

      {/* Remaining content with responsive improvements */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">Background</h2>
          <div>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
              The rapid advancement of AI technologies has created new opportunities to enhance the UX design process.
              From generating initial concepts to conducting user research and testing, AI tools can augment human
              creativity and improve efficiency. As a designer who embraces innovation, I've developed a framework for
              integrating AI into the design workflow to deliver better results for clients and users.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6 text-left">
              The UX industry demands faster, data-driven, and more innovative solutions. AI offers new opportunities to
              tackle common design challenges, including processing large volumes of user data, delivering high-quality designs 
              under tight deadlines, overcoming cognitive biases, balancing innovation with usability, and working with limited 
              research and testing resources.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">What I Did</h2>
            
            {/* AI-Enhanced UX Design Process section with responsive image */}
            <div className="mb-8 sm:mb-12">
              <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 text-left">
                AI-Enhanced UX Design Process
              </h3>
              <div className="flex justify-center mb-6">
                <Image
                  src="/images/vam_ai/AI_Ven_Diagram.png"
                  alt="AI-Enhanced UX Design Process Diagram showing the interconnection between Vercel, Claude, ChatGPT, Figma, and Midjourney"
                  width={600}
                  height={300}
                  className="w-full max-w-3xl"
                  loading="eager" // Important image
                  sizes="(max-width: 768px) 100vw, 768px" // Added responsive image sizing
                />
              </div>
              
              {/* Made grid responsive */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                {/* Card 1 - Content & Layout */}
                <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                  <h4 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-3 sm:mb-4 text-center">
                    Content & Layout (ChatGPT & Vercel)
                  </h4>
                  <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                    <li>Used AI to augment content, improving hierarchy and eliminating redundancy.</li>
                    <li>
                      Utilized Vercel to refine and learn code, automate tasks, and optimize problem-solving to improve
                      efficiency and save time.
                    </li>
                    <li>
                      Refined AI-assisted content generation workflows to maintain a cohesive narrative
                      across the portfolio.
                    </li>
                  </ul>
                </div>

                {/* Card 2 - Data Research & Analysis */}
                <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                  <h4 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-3 sm:mb-4 text-center">
                    Data Research & Analysis (ChatGPT & Otter.ai)
                  </h4>
                  <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                    <li>Integrated AI-driven user research to identify patterns and enhance UX strategies.</li>
                    <li>
                      Used Otter.ai to summarize classes and conversations, extracting key insights to refine information
                      architecture and improve UX strategies.
                    </li>
                    <li>
                      Cross-referenced AI-generated research with traditional UX methodologies to ensure balanced,
                      data-driven decision-making.
                    </li>
                  </ul>
                </div>

                {/* Card 3 - UX Work Visualization */}
                <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                  <h4 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-3 sm:mb-4 text-center">
                    UX Work Visualization (Figma & ChatGPT)
                  </h4>
                  <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                    <li>
                      Designed Figma graphics and process diagrams, blending research insights for compelling UX narratives.
                    </li>
                    <li>
                      Used ChatGPT to generate content suggestions for graphs and charts, refining ideas through
                      brainstorming and visualizing insights in Figma.
                    </li>
                  </ul>
                </div>

                {/* Card 4 - Visual Enhancement */}
                <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                  <h4 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-3 sm:mb-4 text-center">
                    Visual Enhancement (MidJourney)
                  </h4>
                  <ul className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                    <li>
                      Refined AI-generated visuals using iterative prompting to align with portfolio branding and design
                      tone.
                    </li>
                    <li>
                      Overcame AI hallucinations in Midjourney by developing creative prompt strategies that allowed me to
                      guide the tool toward specific, intentional visual outcomes.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Ethical Considerations section */}
            <div className="mt-8 sm:mt-12">
              <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6 text-left">
                Ethical Considerations in AI-Assisted Design
              </h3>
              <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4 text-left">
                Throughout my work, I've focused on responsible AI use by maintaining transparency, evaluating ethical implications, 
                and ensuring AI-assisted decisions support accessibility, inclusivity, and human creativity rather than replacing 
                the creative aspects that only humans can provide.
              </p>
              <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Maintaining transparency in AI-assisted design workflows.</li>
                <li>
                  Evaluating ethical implications of AI-generated designs, ensuring they align with accessibility and
                  inclusivity.
                </li>
                <li>
                  Documenting AI-driven design choices, highlighting where human oversight refined AI output for better UX
                  outcomes.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-4 sm:mb-8 text-left">Role</h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
            Senior UX Designer, AI Integration, Portfolio Development, UI Design
          </p>
        </section>

        {/* Made CTA section responsive */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center pb-8 sm:pb-12">
          <Link 
            href="/contact"
            className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007EA7] px-6 sm:px-8 py-2 sm:py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
          >
            Let&apos;s Chat
          </Link>
        </div>
      </div>

      {/* Fixed Image Modal implementation */}
      <Dialog 
        open={selectedImage !== null} 
        onOpenChange={(isOpen) => {
          if (!isOpen) setSelectedImage(null);
        }}
      >
        <DialogContent className="max-w-[90vw] max-h-[90vh] p-0 overflow-hidden bg-transparent border-none shadow-none">
          <DialogTitle className="sr-only">Image Preview</DialogTitle>
          {selectedImage && (
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage}
                alt="Enlarged view"
                width={1200}
                height={800}
                className="max-w-full max-h-[85vh] object-contain rounded-lg"
                sizes="100vw"
              />
              <DialogClose className="absolute top-2 right-2 bg-[#007EA7]/80 hover:bg-[#007EA7] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors">
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
      <Footer />
    </main>
  )
}