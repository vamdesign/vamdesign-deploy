"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"

export default function AIProcessPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

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
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioDesigns.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioDesigns.length) % portfolioDesigns.length)
  }

  // Helper function to get index with wrapping
  const getIndexWithWrap = (index: number) => {
    return (index + portfolioDesigns.length) % portfolioDesigns.length
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="sticky top-16 mt-0 z-20 w-full bg-white/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link href="/uc/ai/details" className="text-[#7209B7] hover:text-[#470672] text-sm flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Done with the deep dive? Go back to the summary.
          </Link>
        </div>
      </div>

      {/* Building, Learning & Innovating with AI UX */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
      <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-left">
          Building, Learning & Innovating with AI UX
        </h1>
        <p className="font-montserrat text-lg text-[#2C3D4D] mt-6 text-left">
          As a Senior UX Designer, I explored AI-powered tools to enhance my design and development workflow,
          streamlining processes and pushing beyond conventional UX approaches.
        </p>
        <ul className="font-montserrat text-sm text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-[90%]">
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Developed this UX portfolio using AI-driven tools, integrating automation and iterative problem-solving
              while maintaining ethical AI practices
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Refined development workflows using Claude to optimize Vercel's codebase while simultaneously learning
              React and working in Github, terminal and localhost3000
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Leveraged AI for UI design and content generation, utilizing MidJourney, ChatGPT, and Claude to enhance
              efficiency
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>Built an AI-powered chatbot, experimenting with AI-assisted interactions and automation</span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Earned the AI Upgrade for Creative Pros certification, mastering AI-driven UX workflows to enhance
              creativity and adapt to AI-powered design, UX strategy, and storytelling
            </span>
          </li>
          <li className="flex items-start">
            <span className="mr-2">•</span>
            <span>
              Ensuring AI-assisted decisions support accessibility, inclusivity, and human creativity, to maintain
              ethical oversight at every stage
            </span>
          </li>
        </ul>
      </div>

      <section className="max-w-6xl mx-auto px-4">
        {/* Use Case */}
        <section className="mb-8 mt-6 max-w-[95%] mx-auto">
          <h2 id="use-case" className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Use Case
          </h2>
          <div className="w-full">
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mt-6 mb-6">
              The rapid advancement of AI technologies has created new opportunities to enhance the UX design process.
              From generating initial concepts to conducting user research and testing, AI tools can augment human
              creativity and improve efficiency. As a designer who embraces innovation, I've developed a framework for
              integrating AI into the design workflow to deliver better results for clients and users.
            </p>
            <div className="relative w-full aspect-video md:hidden mb-4">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="AI-enhanced UX design process diagram"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80">
              This case study explores how I've implemented AI tools to create this portfolio explaining the different
              stages of the design process, from research and ideation to testing and optimization. By finding the right
              balance between AI capabilities and human expertise, I've created a more efficient and effective approach
              to UX design that maintains the empathy and creativity essential to creating meaningful user experiences.
            </p>
          </div>
        </section>

        {/* Context & Challenge */}
        <section className="mb-8 mt-10 pt-6 max-w-[95%] mx-auto border-t border-[#007EA7]/10">
          <h2 id="context" className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Context & Challenge
          </h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            The UX industry demands faster, data-driven, and more innovative solutions. AI offers new opportunities to
            tackle common design challenges, including:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>Processing large volumes of user data can impact decision-making with data overload.</li>
            <li>Delivering high-quality designs under tight deadlines can create pressure and limit exploration.</li>
            <li>
              Cognitive biases can subtly influence design choices, reducing the effectiveness of user-centered
              solutions.
            </li>
            <li>
              Balancing innovation with usability is a challenge, ensuring new ideas remain intuitive and functional.
            </li>
            <li>
              Limited research and testing resources can restrict the depth of insights available for decision-making.
            </li>
          </ul>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mt-6 mb-4">
            To address these challenges, I integrated AI into my workflow to enhance creativity, speed, and
            problem-solving by focusing on:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>Leveraging ChatGPT and Otter.ai to extract key data trends and reduce bias in user research.</li>
            <li>
              Streamlined development by using Claude to refine Vercel’s codebase while learning React through
              iterative, AI-assisted problem-solving.
            </li>
            <li>
              Leveraging AI-generated design suggestions while ensuring that new ideas remain intuitive and functional
              through iterative refinement.
            </li>
            <li>
              Ensuring AI-assisted decisions support accessibility, inclusivity, and human creativity, to maintain
              ethical oversight at every stage.
            </li>
          </ul>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mt-6 mb-0">
            By embracing AI as a strategic partner, I optimized my portfolio-building process while maintaining
            thoughtful, user-centered design decisions.
          </p>
        </section>
      </section>

      {/* AI-Enhanced UX Design Process */}
      <section id="process" className="max-w-6xl mx-auto px-4">
        <div className="my-10 pt-6 max-w-[95%] mx-auto border-t border-[#007EA7]/10">
          <div className="flex flex-col items-center mb-6">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-center">
              AI-Enhanced UX Design Process
            </h2>
            <Image
              src="/images/vam_ai/AI_Ven_Diagram.png"
              alt="AI-Enhanced UX Design Process Diagram showing the interconnection between Vercel, Claude, ChatGPT, Figma, and Midjourney"
              width={600}
              height={300}
              className="w-full max-w-3xl"
            />
          </div>

          {/* AI-Enhanced UX Design Process Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-2 max-w-[95%] mx-auto">
            {/* Card 1 - Content & Layout (ChatGPT & Vercel)*/}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4 text-center">
                Content & Layout (ChatGPT & Vercel)
              </h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
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

            {/* Card 4 - Data Research & Analysis (ChatGPT & Otter.ai) */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4 text-center">
                Data Research & Analysis (ChatGPT & Otter.ai)
              </h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
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

            {/* Card 3 - UX Work Visualization (Figma & ChatGPT)*/}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4 text-center">
                UX Work Visualization (Figma & ChatGPT)
              </h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>
                  Designed Figma graphics and process diagrams, blending research insights for compelling UX narratives.
                </li>
                <li>
                  Used ChatGPT to generate content suggestions for graphs and charts, refining ideas through
                  brainstorming and visualizing insights in Figma.
                </li>
               
              </ul>
            </div>

            {/* Card 2 - Visual Enhancement (MidJourney) */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4 text-center">
                Visual Enhancement (MidJourney)
              </h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
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
      </section>
      {/* WHAT I DID */}
      <section id="what-i-did" className="max-w-6xl mx-auto px-4">
        <div className="mb-6 mt-8 pt-6 max-w-[95%] mx-auto border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">What I Did</h2>

          <div className="w-full">
            <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
              I applied an iterative UX design process to build this portfolio, integrating AI-driven tools,
              user-centered workflows, and continuous testing to refine both functionality and experience.
            </p>
          </div>
        </div>
        {/* Portfolio Development Through Problem-Solving & Iteration */}
        <div className="mt-4 mb-8 max-w-[95%] mx-auto">
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
            Portfolio Development Through Problem-Solving & Iteration
          </h3>

          {/* Product-style Carousel with Sliding Animations */}
          <div className="relative w-full p-8 bg-white rounded-lg shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] mb-8">
            <div className="relative h-[350px] md:h-[400px] overflow-hidden">
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
                      <Image src={design.src || "/placeholder.svg"} alt={design.alt} fill className="object-contain" />
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
              Developing a custom AI-powered UX portfolio in Vercel required continuous testing and refinement to
              balance AI efficiency with design integrity. I combined AI-generated outputs with hands-on UX adjustments
              to resolve limitations and ensure seamless integration. This adaptive process strengthened my ability to
              guide AI workflows, enhance usability, and push creative boundaries.
            </p>
            <ul className="font-montserrat text-base text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-6 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Iterated through hundreds of design and code versions in V0, refining AI-generated layouts for usability
                and visual consistency.
              </li>
             
              <li>
                Solved challenges with V0's machine learning, version control conflicts, and AI's handling of complex
                design inputs.
              </li>
              <li>
                Applied UX best practices to optimize performance, improve accessibility, and create a user-centered
                final product.
              </li>
            </ul>
          </div>
        </div>
        {/* Ethical Considerations in AI-Assisted Design */}
        <div className="mb-8 mt-10 pt-6 max-w-[95%] mx-auto border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Ethical Considerations in AI-Assisted Design
          </h2>

          <div className="w-full">
            <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
              AI's role in design continues to spark debate, particularly around its impact on creative integrity. While
              some view AI as a threat to originality, others, like design strategist Mia Blume, see it as a shift in
              process rather than a replacement for human creativity. AI can replicate design elements but lacks the
              conceptual depth and emotional resonance that human designers bring. I align with this perspective that AI
              is a tool that enhances efficiency and innovation. Throughout my work, I've focused on responsible AI use
              by maintaining transparency, evaluating ethical implications, and ensuring AI-assisted decisions support
              rather than replace human creativity.
            </p>
            <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
              Throughout my work, I've focused on responsible AI use by:
            </p>
            <ul className="font-montserrat text-base text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-6 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
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

        {/* Outcome & Impact */}
        <div id="outcome" className="mb-8 mt-10 pt-6 max-w-[95%] mx-auto border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">Outcome & Impact</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mt-6 mb-6">
            The integration of AI into the UX design process has yielded significant improvements across multiple
            dimensions while setting the stage for future enhancements.
          </p>
          <ul className="space-y-3 list-disc pl-6 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Increased design efficiency by allowing faster iteration and exploration of more design concepts.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Enhanced creativity and innovation by introducing novel design directions that might not have been
              considered through traditional methods.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Improved user research insights by analyzing larger datasets and identifying patterns that human
              researchers might miss.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Expanded AI-assisted workflows, refining automation processes for content generation and problem-solving.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Streamlined development cycles, ensuring AI-driven design principles can be effectively applied in future
              roles.
            </li>
          </ul>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 mt-8">
            This portfolio serves as an evolving example of AI-human collaboration in UX design, demonstrating how AI
            can complement creativity, strategy, and problem-solving to create more effective user experiences.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mb-0 mt-8 text-center max-w-[95%] mx-auto py-6">
          <button className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
            <a href="/contact">Let's Chat</a>
          </button>
        </div>

        {/* References/Footnotes Section */}
        <div className="mt-16 pt-8 max-w-[95%] mx-auto border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4 text-left">References</h2>
          <ol className="font-montserrat text-sm text-[#5f5f5f]/80 list-decimal pl-5 space-y-3">
            <li>
              Design News. (2025) "Pentagram's AI-Assisted Website Redesign"{" "}
              <a
                href="https://octet.design/journal/pentagrams-controversial-new-website/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007EA7] hover:text-[#005f7f] hover:underline"
              >
                https://octet.design/journal/pentagrams-controversial-new-website/
              </a>
            </li>
            <li>
              UX Tools. (2025) "The Designer's Guide to AI Image Tools in 2025"{" "}
              <a
                href="https://www.linkedin.com/pulse/designers-guide-ai-image-tools-2025-uxtools-ljfhc/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007EA7] hover:text-[#005f7f] hover:underline"
              >
                https://www.linkedin.com/pulse/designers-guide-ai-image-tools-2025-uxtools-ljfhc/
              </a>
            </li>
            <li>
              Nielsen Norman Group. (2025) "UX Reset 2025"{" "}
              <a
                href="https://www.nngroup.com/articles/ux-reset-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007EA7] hover:text-[#005f7f] hover:underline"
              >
                https://www.nngroup.com/articles/ux-reset-2025/
              </a>
            </li>
            <li>
              Kumar, P. (2025) "How AI is Transforming UI/UX Design in 2025"{" "}
              <a
                href="https://medium.com/@pavank0990.pk/how-ai-is-transforming-ui-ux-design-in-2025-87e2de0544e2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#007EA7] hover:text-[#005f7f] hover:underline"
              >
                https://medium.com/@pavank0990.pk/how-ai-is-transforming-ui-ux-design-in-2025-87e2de0544e2
              </a>
            </li>
          </ol>
        </div>
      </section>

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
      <Footer />
    </main>
  )
}

