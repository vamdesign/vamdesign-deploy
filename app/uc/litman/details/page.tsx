"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Head from "next/head" // Added for resource hints

export default function LittlerDetailsPage() {
  return (
    <main className="min-h-screen bg-white pb-16">
      {/* Added Head component with resource hints */}
      <Head>
        {/* Preload critical images that appear above the fold */}
        <link 
          rel="preload" 
          href="/images/littler/Logo_Littler.svg" 
          as="image" 
          type="image/svg+xml"
        />
        
        {/* Prefetch other important images that will be needed soon */}
        <link 
          rel="prefetch" 
          href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_nav_bar-BtcRyn93GUuYRsVcoJaExXRVf4LW1t.png" 
          as="image"
        />
      </Head>
      
      <Nav />
      
      {/* Updated navigation banner with Littler's light green color */}
      <div className="sticky top-16 mt-0 z-20 w-full bg-[#E6FFEA]/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center">
          <Link 
            href="/uc/litman/process" 
            className="text-[#6BC04B] hover:text-[#2E870D] font-medium text-sm flex items-center gap-2 transition-transform hover:translate-x-1"
          >
            <div className="flex items-center bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              <ArrowLeft className="w-4 h-4 mr-1" />
              <span>View the extended thought process.</span>
            </div>
          </Link>
        </div>
      </div>

      {/* Made title and logo section responsive */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 mb-8">
            {/* Littler Logo - Added responsive sizing */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 flex-shrink-0">
              <Image
                src="/images/littler/Logo_Littler.svg"
                alt="Littler Logo"
                fill
                className="object-contain"
                priority // Added priority to preload this important image
              />
            </div>

            {/* Title - Improved responsiveness */}
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
              Streamlining Legal Case Management for Littler Mendelson
            </h1>
          </div>

          {/* Made subtitle responsive */}
          <h3 className="font-space-grotesk text-lg sm:text-xl text-[#2C3D4D] mt-6 sm:mt-8 mb-8 sm:mb-12 text-center md:text-left">
            As a Senior UX Designer, I led the redesign of Littler's case management platform to improve attorney
            efficiency and client satisfaction.
          </h3>
        </div>
      </div>
      
      {/* Background section with improved responsive text */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-12 sm:mb-16">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8">Background</h2>
          <div>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80">
              Littler Mendelson developed Virtual Binder as part of its effort to modernize case management and
              streamline legal workflows. Initially an extension of CaseSmart, the platform was designed to centralize
              litigation data, improve collaboration, and enhance transparency in billable hours. The goal was to
              eliminate paper-based processes and create a structured, scalable system that attorneys could rely on
              throughout all phases of litigation.
            </p>
          </div>
          
          {/* Challenge Section with improved responsive text */}
          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8">The Challenge</h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-6">
              Attorneys needed a seamless way to manage cases digitally, with quick access to case details, documents,
              and communication tools. Traditional case management tools were fragmented, requiring multiple systems to
              track litigation progress, assign tasks, and communicate with legal teams. The challenge was to create an
              integrated platform that allowed attorneys to transition between case phases fluidly while maintaining
              hierarchy and organization.
            </p>
          </div>

          <div className="mt-8 sm:mt-12 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8">What I Did</h2>
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6">
              UX Navigation & Case Organization
            </h3>
            
            {/* Improved list responsiveness */}
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>Conducted stakeholder interviews and UX research to identify inefficiencies in legal workflows.</li>
              <li>
                Designed a non-linear navigation system allowing attorneys to move easily between case phases.
              </li>
              <li>
                Developed a tab-based navigation system with clear visual hierarchy, ensuring attorneys always knew
                their position within the litigation process.
              </li>
            </ul>

            {/* Made image grid responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="relative w-full h-auto pt-6 sm:pt-8 mb-4 sm:mb-8 shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_nav_bar-BtcRyn93GUuYRsVcoJaExXRVf4LW1t.png"
                  alt="Littler CaseSmart navigation interface showing improved case phase navigation with clear visual hierarchy and numbered indicators"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto"
                  loading="eager" // Prioritize loading of important images
                  sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                />
              </div>

              <div className="relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_01.jpg-6rJLUbwHVgD390hfmB7EM7LcTAWgqZ.jpeg"
                          alt="Littler CaseSmart dashboard showing task list, document management, and budget tracking"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_02.jpg-dSx1GgobWTN3gKsnDgUJuVkTpStrOM.jpeg"
                          alt="Littler CaseSmart navigation system with phase indicators and menu structure"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>

                  {/* Made carousel controls responsive */}
                  <CarouselPrevious className="left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10" />
                  <CarouselNext className="right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10" />
                  <div className="flex justify-center w-full gap-1 mt-2">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300 focus:bg-primary"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => {
                          /* You would need to add state management to make this functional */
                        }}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>

            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6">
              Integrated Messaging & Collaboration
            </h3>
            
            {/* Improved list responsiveness */}
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Designed a dedicated messaging center inspired by real-time collaboration tools, reducing reliance on
                fragmented email chains.
              </li>
              <li>
                Implemented role-based permissions allowing attorneys to track communication history and manage team
                access securely.
              </li>
              <li>
                Created an easy to use integration between task management, document sharing, and legal team messaging,
                enabling contextual collaboration within case phases.
              </li>
            </ul>
{/* END SECTION 1*/}
{/* BEGIN SECTION 2*/}
            {/* Made carousel image grid responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="relative w-full h-auto pt-6 sm:pt-8 mb-4 sm:mb-8 shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_message_Center-Vsy6FNY2mu964bQLR5VykACpxCAlNk.png"
                  alt="Littler CaseSmart Message Center interface with numbered annotations explaining key features like user identification, team collaboration, and phase-based organization"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                />
              </div>

              <div className="relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_03.jpg-MQrWRLdGInHUwmpPKBQG9CJyZKgjz3.jpeg"
                          alt="Message Center showing team conversation thread and document sharing"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_04.jpg-UFtzKIvE2OTVwAh0HTgJzZvmnIMl7h.jpeg"
                          alt="Message actions menu showing email and task creation options"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_05.jpg-2Ubv3a6qrhVXSA2snxTHOrfS2T7s4Q.jpeg"
                          alt="Message thread view with team discussion and document attachments"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_08.jpg-f98aQd8pQfySBJCGG5baI6cvvLsbph.jpeg"
                          alt="Case inbox view showing organized communications and updates"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_09.jpg-PwfUHPlDdezpp3AEbWMpR9FMJsNFRB.jpeg"
                          alt="Email composition interface for case-related communications"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_12.jpg-JC4s7DkMcLt32OEDRuF9psQscuY6q4.jpeg"
                          alt="Task scheduling interface with calendar date picker"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VirtualBinderTemplatev11_aProjectA_Page_13.jpg-piNK2HjxezyepRjw330EmHCFLHs9Fq.jpeg"
                          alt="Task creation interface with phase selection dropdown"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  
                  {/* Made carousel controls responsive */}
                  <CarouselPrevious className="left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10" />
                  <CarouselNext className="right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10" />
                  <div className="flex justify-center w-full gap-1 mt-2">
                    {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300 focus:bg-primary"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => {
                          /* You would need to add state management to make this functional */
                        }}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>

            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 sm:mb-6">
              Mobile Application Development
            </h3>
            
            {/* Improved list responsiveness */}
            <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-3 mb-6 sm:mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Led the UX design for Virtual Binder's mobile expansion, ensuring feature parity with the desktop
                experience.
              </li>
              <li>
                Optimized billable hour tracking and case access for smaller screens while maintaining consistency with
                the desktop UI.
              </li>
              <li>
                Designed touch-friendly interactions that adapted workflows for mobile efficiency, allowing attorneys to
                manage cases remotely.
              </li>
            </ul>

            {/* Made mobile app image grid responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
              <div className="relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_wireframe-pYlVtxu8KiXEIenune6ej90NRtOb5T.png"
                  alt="Mobile app wireframe showing task management workflow with annotations explaining key features like task list view, task creation, and detailed task view"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                />
              </div>

              <div className="relative w-full h-auto p-2 mb-4 sm:mb-8 shadow-md">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_Mobile_Task_01-mapk7biIjqNeAaxYIh1GSmq4AAY1LK.png"
                          alt="Mobile app task management workflow showing task list, creation form, and task details views"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Littler_Mobile_Case_02-CtInz7tbikXRyqRvjqumiLFl9NcmC6.png"
                          alt="Mobile app case management workflow showing client list, case selection, and team chat interfaces"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                          sizes="(max-width: 768px) 100vw, 50vw" // Added responsive image sizing
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  
                  {/* Made carousel controls responsive */}
                  <CarouselPrevious className="left-2 sm:left-4 w-8 h-8 sm:w-10 sm:h-10" />
                  <CarouselNext className="right-2 sm:right-4 w-8 h-8 sm:w-10 sm:h-10" />
                  <div className="flex justify-center w-full gap-1 mt-2">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300 focus:bg-primary"
                        aria-label={`Go to slide ${index + 1}`}
                        onClick={() => {
                          /* You would need to add state management to make this functional */
                        }}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">Role</h2>
          <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 text-left">
            Senior UX Designer, User Workflow Strategy, Interaction Design, UI design, and Usability Testing
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
   <Footer />
    </main>
  )
}
