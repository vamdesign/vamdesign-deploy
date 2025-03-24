"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function LittlerProcessPage() {
  return (
    <main className="min-h-screen bg-white pb-8">
      <Nav />

      <div className="sticky top-16 mt-0 z-20 w-full bg-white/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link
            href="/uc/litman/details"
            className="text-[#6BC04B] hover:text-[#2E870D] text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            See the project at a glance.
          </Link>
        </div>
      </div>

     {/* Content Section - Moved up to replace hero */}
     <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          <div className="flex items-center gap-12 mb-8">
            {/* Littler Logo */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src="/images/littler/Logo_Littler.svg"
                alt="Littler Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] text-left">
              Streamlining Legal Case Management for Littler Mendelson
            </h1>
          </div>
          <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left">
            As the Senior Product Designer, I led the design and development of Littler Mendelson's Virtual Binder and
            Companion iOS App, and key components of Littler CaseSmart® web based application. This legal technology
            platform transformed how attorneys handled litigation, compliance, and client management.
          </p>
          <ul className="font-montserrat text-sm text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-[90%]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Designed and implemented UX strategies, integrating structured workflows for improved
                efficiency
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Enhanced case tracking, enhanced billable hour transparency for clients, and improved resource
                allocation through interactive dashboards and data visualization
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Developed an intuitive interface and UI style guide, ensuring a smooth progression 
                 from desktop-to-mobile.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Gathered stakeholder insights, conducted heuristic evaluations, assessed scalability, and collaborated
                with stakehoders, developers and PMs to define project scope and sprint management
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-2">
        {/* Use Case */}
        <section className="mb-8 mt-8">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-2 text-left">Use Case</h2>
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-2 text-left">
            Designing the Legal Management Experience for Virtual Binder
          </h3>
          <div className="w-full">
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              Littler Mendelson, a leading international law firm specializing in employment law, expanded its internal
              case management platform, CaseSmart, by developing Virtual Binder, a companion application designed to
              support attorneys through every stage of litigation, from initial assessment to trial. The structure and
              design principles I established for Virtual Binder remain in use today, demonstrating its longevity and
              ability to scale as CaseSmart evolved into a marketable product.
            </p>
            <div className="relative w-full aspect-video md:hidden mb-4">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Attorney using the Littler Management App"
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80">
              As the sole UX designer, I created a data-driven interface that seamlessly incorporated these
              requirements, ensuring a frictionless user experience. Collaborating closely with stakeholders,
              developers, and PMs, I designed an intuitive application that could adapt to the firm's evolving
              needs. The structure of the application remains in use today, demonstrating the longevity of its design
              and its ability to scale as CaseSmart evolved into a marketable product.
            </p>
          </div>
        </section>

        {/* Context & Business Challenge */}
        <section className="mb-8 mt-16 pt-8 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Context & Business Challenge
          </h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            The legal team needed an all-in-one solution throughout the litigation process that could centralize case
            details, manage involved parties, track budgets and key dates, store legal documents, and facilitate
            collaboration. To enhance efficiency, they also required task management, integrated chat, and email
            functionality to streamline communication among team members.
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Littler needed a digital solution to eliminate paper-based processes and centralize case information.
            </li>
            <li>
              The new desktop application required a single repository for case documents, deadlines, and team
              communication.
            </li>
            <li>
              Attorneys needed a structured system to quickly access case details without searching across multiple
              sources.
            </li>
            <li>
              The platform had to improve attorney efficiency by providing clear and transparent time tracking for
              accurate billing and workload management.
            </li>
            <li>
              Billing transparency was a critical requirement, ensuring attorneys could log hours accurately for client
              reporting and compliance.
            </li>
          </ul>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mt-8 mb-4">
            To address these challenges, I focused on:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Conducting a heuristic evaluation of CaseSmart to assess usability and align the new interface with user
              expectations.
            </li>
            <li>
              Collaborating with stakeholders, product managers, and developers to create a journey map that defined key
              user touchpoints.
            </li>
            <li>
              Initiating user research interviews to uncover potential pain points and validate design decisions with
              real user insights.
            </li>
            <li>
              Establishing a foundation for future scalability, ensuring the design could support a companion iOS app to
              extend accessibility beyond the desktop experience.
            </li>
          </ul>
        </section>
      </div>

      {/* UX Process */}
      <section className="mb-0 mt-8 max-w-6xl mx-auto px-8 border-t border-[#007EA7]/10 pb-8">
        <div className="flex justify-center mb-8">
          <Image
            src="/images/littler/LM_ux_process.svg"
            alt="UX Process Diagram"
            width={800}
            height={400}
            className="w-full max-w-4xl"
          />
        </div>
        <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-2">
          Part of <span className="font-bold text-[#771BD2]">Research & Discovery</span> was understanding attorney
          operational flows through interviews and analyzing existing paper-based processes to identify inefficiencies and align
          with business goals. In the <span className="font-bold text-[#072FA9]">Design & Strategy</span> phase, I
          focused on structuring information architecture, defining user flows, and developing UI components to create
          an intuitive experience. <span className="font-bold text-[#07CC9E]">Validation & Iteration</span>{" "}
          involved usability testing with legal teams and gathering feedback while ensuring
          accessibility compliance. Once validated,{" "}
          <span className="font-bold text-[#FFAA2A]">Implementation & Delivery</span> required close collaboration with
          engineers to refine UI components, maintain consistency, and provide detailed design documentation for
          development handoff. After launch,{" "}
          <span className="font-bold text-[#EF036C]">Post-Launch & Mobile Expansion</span> allowed us to gather
          real-world feedback, improve adoption, and set the foundation for a future mobile companion app to enhance
          accessibility beyond desktop use.
        </p>

        {/* SOLUTIONS AND IMPACT - FIRST IMAGE SECTION*/}
        <div className="mt-4">
          <section className="mb-10 mt-16 pt-8 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-2 text-left">
              Solutions & Impact
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              This project was an extensive, multi-faceted initiative that involved deep collaboration across teams.
              While many aspects of the Virtual Binder application contributed to its success, I am highlighting a few
              key solutions that best demonstrate my strengths in UX strategy, interaction design, and problem-solving.
            </p>
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
              Navigation & Case Organization
            </h3>

            <div className="w-full">
              <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                Attorneys needed to navigate multiple stages of the litigation process, often working on one phase while
                preparing for the next. I designed a structured, non-linear navigation system that allowed easy
                transitions between case phases while maintaining hierarchy within CaseSmart. A tab-based navigation
                system provided clear visual cues, ensuring attorneys always knew their position in the process and
                could efficiently manage their workload.
              </p>
            </div>

            {/* Images row - will be aligned at the same level */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative w-full h-auto pt-8 mb-8 shadow-md">
                <Image
                  src="/images/littler/Littler_nav_bar.png"
                  alt="Littler CaseSmart navigation interface showing improved case phase navigation with clear visual hierarchy and numbered indicators"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto"
                />
              </div>

              <div className="relative w-full h-auto p-2 mb-8 shadow-md">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_01.jpg"
                          alt="Littler CaseSmart dashboard showing task list, document management, and budget tracking"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_02.jpg"
                          alt="Littler CaseSmart navigation system with phase indicators and menu structure"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>

                  <CarouselPrevious className="left-2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full" />
                  <CarouselNext className="right-2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full" />
                  <div className="flex justify-center w-full gap-1 mt-2">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300 focus:bg-primary"
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </div>

        {/* INTEGRATED MESSAGING Section */}
        <div className="mt-4">
          <section className="mb-8 mt-8">
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
              Integrated Messaging & Collaboration
            </h3>

            <div className="w-full">
              <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                Legal teams needed a secure, compliant way to communicate within case phases. Inspired by
                Slack, I designed a dedicated message center that consolidated case-related conversations, emails, and
                task assignments into a single, organized space. Role-based permissions ensured attorneys could track
                communication history without relying on fragmented email chains. The system also allowed for flexible
                team management, enabling attorneys to add or remove internal team members and external consultants as
                needed. This created a powerful, centralized messaging hub tailored to the complexities of legal
                collaboration.
              </p>
            </div>

            {/* Images row - will be aligned at the same level */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative w-full h-auto pt-8 mb-8 shadow-md">
                <Image
                  src="/images/littler/Littler_message_Center.png"
                  alt="Littler CaseSmart Message Center interface with numbered annotations explaining key features like user identification, team collaboration, and phase-based organization"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto"
                />
              </div>

              <div className="relative w-full h-auto p-2 mb-8 shadow-md">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_03.jpg"
                          alt="Message Center showing team conversation thread and document sharing"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_04.jpg"
                          alt="Message actions menu showing email and task creation options"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_05.jpg"
                          alt="Message thread view with team discussion and document attachments"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_08.jpg"
                          alt="Case inbox view showing organized communications and updates"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_09.jpg"
                          alt="Email composition interface for case-related communications"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_12.jpg"
                          alt="Task scheduling interface with calendar date picker"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/VirtualBinderTemplatev11_aProjectA_Page_13.jpg"
                          alt="Task creation interface with phase selection dropdown"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full" />
                  <CarouselNext className="right-2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full" />
                  <div className="flex justify-center w-full gap-1 mt-2">
                    {[0, 1, 2, 3, 4, 5, 6].map((index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300 focus:bg-primary"
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </div>

        {/* Mobile App Section */}
        <div className="mt-4">
          <section className="mb-8 mt-8">
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
              Mobile Application Development
            </h3>

            <div className="w-full">
              <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                Following launch, research revealed that attorneys often needed to work between court appearances or while in transit, with limited access to laptops or reliable internet. This prompted us to design a moible companion app to provide attorneys with secure access to
                case details, documents, and communication tools. A responsive, friendly
                interface maintained desktop familiarity while adapting the same expereince for smaller screens. Simplified
                navigation provided quick access to case details, an optimized hierarchy enhanced usability on smaller
                screens, and seamless integration ensured a consistent cross-device experience. 
              </p>
            </div>

            {/* Images row - will be aligned at the same level */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative w-full h-auto p-2 mb-8 shadow-md">
                <Image
                  src="/images/littler/Littler_wireframe.png"
                  alt="Mobile app wireframe showing task management workflow with annotations explaining key features like task list view, task creation, and detailed task view"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto"
                />
              </div>

              <div className="relative w-full h-auto p-2 mb-8 shadow-md">
                <Carousel className="w-full">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/Littler_Mobile_Task_01.png"
                          alt="Mobile app task management workflow showing task list, creation form, and task details views"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <Image
                          src="/images/littler/Littler_Mobile_Case_02.png"
                          alt="Mobile app case management workflow showing client list, case selection, and team chat interfaces"
                          width={600}
                          height={300}
                          className="object-contain w-full h-auto rounded-md"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full" />
                  <CarouselNext className="right-2 bg-[#007EA7] hover:bg-[#005f7f] text-white !border-0 !shadow-md !rounded-full" />
                  <div className="flex justify-center w-full gap-1 mt-2">
                    {[0, 1].map((index) => (
                      <button
                        key={index}
                        className="w-2 h-2 rounded-full bg-gray-300 focus:bg-primary"
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </Carousel>
              </div>
            </div>
          </section>
        </div>

        {/* Outcome & Impact */}
        <section className="mb-10 mt-16 pt-8 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">Outcome & Impact</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
            The launch of Virtual Binder transformed how Littler's attorneys managed litigation. By digitizing
            workflows, centralizing information, and integrating communication tools, the platform reduced
            inefficiencies, improved team collaboration, and supported the firm's long-term goal of paperless legal
            operations. Built-in billable hour tracking enhanced transparency, giving clients clear insight into how
            time was allocated to their cases., allowing attorneys to accurately log time spent on cases and provide
            clients with clear, itemized billing statements.
          </p>
          <ul className="space-y-4 list-disc pl-6 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Increased efficiency by reducing time spent searching for case details, allowing attorneys to focus on
              case strategy rather than administrative tasks, while also ensuring accurate tracking of billable hours.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Strengthened collaboration by integrating messaging, task management, and document sharing, reducing
              reliance on external tools.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Built a scalable design system that evolved with CaseSmart, ensuring adaptability for future enhancements,
              including the mobile expansion.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Delivered an intuitive interface that streamlined case management, improved accessibility, and provided
              measurable transparency in client billing, ensuring compliance and financial accountability.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mb-0 mt-8 text-center bg-white py-8">
          <button className="rounded-[100px] border border-[#F7F6F6] white bg-white/30 hover:bg-white/60 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
            <a href="/contact">Let's Chat</a>
          </button>
        </section>
      </section>
      <Footer />  
    </main>
  )
}

