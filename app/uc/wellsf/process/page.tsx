"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"

export default function WellsFargoProcessPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  return (
    <main className="min-h-screen bg-white">
      <Nav />

      <div className="sticky top-16 mt-0 z-20 w-full bg-white/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link
            href="/uc/wellsf/details"
            className="text-[#B31E30] hover:text-[#76131F] text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Let’s simplify, back to the summary page.
          </Link>
        </div>
      </div>

      {/* Content Section - Moved up to replace hero */}
      <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
        <div>
          <div className="flex items-center gap-12 mb-8">
            {/* Wells Fargo Logo */}
            <div className="relative w-32 h-32 flex-shrink-0">
              <Image
                src="/images/wellsfargo/Logo_WellsFargo.svg"
                alt="Wells Fargo Logo"
                fill
                className="object-contain"
              />
            </div>
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-left">
              Migrating Small Business Banking Legacy Tools to Salesforce
            </h1>
          </div>
          <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left">
            As a Senior Product Designer, my role focused on understanding existing legacy software and ensuring a
            seamless transition by optimizing usability into Salesforce CRM by working closely with the stakeholders.
          </p>
          <ul className="font-montserrat text-sm text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-[90%]">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Refined workflows to reduce friction and improve task efficiency</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Integrated legacy banking tools into Salesforce CRM while maintaining usability</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Validated adoption metrics by contributing to prototype development and participating in internal user
                testing to measure usability and effectiveness
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>
                Improved user performance by customizing Salesforce components to align with stakeholder requirements
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-4">
        {/* Use Case */}
        <section className="mb-16 mt-8">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-2 text-left">Use Case</h2>
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
            Modernizing Small Business CRM
          </h3>
          <div className="w-full">
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              Wells Fargo's small business bankers relied on outdated applications with disconnected tools, making
              client relationship management inefficient and time-consuming.
            </p>
            <div className="relative w-full aspect-video md:hidden mb-4 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Placeholder Image</span>
            </div>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80">
              Collaborating with stakeholders, the Salesforce architect, and UX researchers, my challenge as a Senior
              Product Designer was to create a Salesforce solution that streamlined workflows, reduced errors, and
              improved data accuracy. By integrating existing components that met banker requirements and developing a
              custom solution, we enhanced efficiency and scaled the design across Wells Fargo's CRM.
            </p>
          </div>
        </section>

        {/* UX Process */}
        <section className="mb-16 mt-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">The UX Process</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            The transition from Wells Fargo's legacy CRM tools to Salesforce represented a significant improvement in
            usability, efficiency, and system integration. The legacy system required bankers to navigate outdated and
            complicated applications that integrated several applications resulting in fragmented workflows and
            inconsistent data entry. The new Salesforce solution consolidated these tools into a unified experience,
            reducing errors and streamlining client management.
          </p>
          {/*Navigation Section */}
          <div className="mt-8">
            <h4 className="font-space-grotesk text-xl font-medium text-[#007EA7] mb-3 text-left">
              Navigation & Information Architecture
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Before */}
              <div>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                  <span className="font-bold">Before:</span> Bankers had to navigate multiple disjointed screens to
                  locate client portfolios, increasing cognitive load and reducing efficiency. The lack of an integrated
                  search forced users to exit their primary workflow, disrupting task continuity and making portfolio
                  management more time-consuming. 
                </p>
              </div>

              {/* Right column - After */}
              <div>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                  <span className="font-bold">After:</span> A consolidated Client Groups View with collapsible
                  relationships and enhanced multi-criteria search (name, ECN, revenue) significantly reduces search
                  time and improves task completion.
                </p>
              </div>

              {/* Images row - will be aligned at the same level */}
              <div className="relative w-full h-auto p-4 mb-8 shadow-md">
                <Image
                  src="/images/wellsfargo/nav_and_information_before.png"
                  alt="Wells Fargo legacy navigation system showing complex menu structure and dense information display"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/nav_and_information_before.png"
                    )
                  }
                />
              </div>

              <div className="relative w-full h-auto p-4 mb-8 shadow-md">
                <Image
                  src="/images/wellsfargo/nav_and_info_after.png"
                  alt="Wells Fargo's modernized Salesforce navigation showing streamlined interface and improved information architecture"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/nav_and_info_after.png"
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/* Portfolio client mang. */}
          <div className="mt-16">
            <h4 className="font-space-grotesk text-xl font-medium text-[#007EA7] mb-3 text-left">
              Portfolio & Client Relationship Management
            </h4>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Before */}
              <div>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                  <span className="font-bold">Before:</span> Relationship managers struggled to efficiently track and
                  manage client interactions across fragmented screens. Adding new clients was a complex, multi-step
                  process.
                </p>
              </div>

              {/* Right column - After */}
              <div>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                  <span className="font-bold">After:</span> The Portfolio View centralizes client management, improving
                  visibility and relationship tracking. A new Add New Client Group feature simplifies the onboarding
                  process, making it more intuitive and reducing cognitive load.
                </p>
              </div>

              {/* Images row - will be aligned at the same level */}
              <div className="relative w-full h-auto p-4 mb-8 shadow-md">
                <Image
                  src="/images/wellsfargo/Portfolio_Relationship_Management_before.png"
                  alt="Legacy Wells Fargo relationship management interface showing complex dropdown menus and associations"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/Portfolio_Relationship_Management_before.png"
                    )
                  }
                />
              </div>

              <div className="relative w-full h-auto p-4 mb-8 shadow-md">
                <Image
                  src="/images/wellsfargo/Portfolio_Relationship_Management_after.png"
                  alt="Modernized Wells Fargo portfolio management interface with streamlined client group view"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/Portfolio_Relationship_Management_after.png"
                    )
                  }
                />
              </div>
            </div>
          </div>

          {/*Navigation Section */}
          <div className="mt-8">
            <h4 className="font-space-grotesk text-xl font-medium text-[#007EA7] mb-3 text-left">
              Customer 360 View Enhancements
            </h4>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Left column - Before */}
              <div>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                  <span className="font-bold">Before:</span> Customer data was difficult to interpret due to fragmented
                  screens and inconsistent layouts, requiring extensive navigation and increasing cognitive load for
                  bankers. 
                </p>
              </div>

              {/* Right column - After */}
              <div>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                  <span className="font-bold">After:</span> The new customer dashboard consolidates all relevant client
                  information into a single, easy-to-navigate view, improving efficiency and reducing the need for
                  context switching.
                </p>
              </div>

              {/* Images row - will be aligned at the same level */}
              <div className="relative w-full h-auto p-4 mb-8 shadow-md">
                <Image
                  src="/images/wellsfargo/Customer_360_View_Enhancements_before.png"
                  alt="Legacy Wells Fargo client details interface with complex form fields"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/Customer_360_View_Enhancements_before.png"
                    )
                  }
                />
              </div>

              <div className="relative w-full h-auto p-4 mb-8 shadow-md">
                <Image
                  src="/images/wellsfargo/Customer_360_View_Enhancements_after.png"
                  alt="Modern Wells Fargo Customer 360 view with tabbed interface and clear data organization"
                  width={600}
                  height={300}
                  className="object-contain w-full h-auto cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/Customer_360_View_Enhancements_after.png"
                    )
                  }
                />
              </div>
            </div>
          </div>

          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mt-8 mb-4">
            By addressing these challenges, the transition to Salesforce created a more intuitive, scalable, and
            efficient CRM experience for small business bankers.
          </p>
        </section>

        {/* My Role & Key Contributions */}
        <section className="mb-16 mt-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Research & Insights
          </h2>
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 mt-8">Understanding User Needs</h3>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            Understanding the daily workflows of small business bankers was essential for a successful transition to
            Salesforce. Partnering with the UX research department, I participated in interviews to document banker pain
            points, workflow inefficiencies, and desired improvements.
          </p>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            Working alongside the UX researcher, we developed a structured plan to conduct in-depth interviews with
            bankers, documenting their workflows, pain points, and areas for improvement. Using these insights, I
            created an interactive prototype that allowed users to navigate key processes, identify inefficiencies, and
            validate expectations. This ensured our solution aligned with their daily operations while integrating
            seamlessly into Salesforce.
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>Mapping the end-to-end banking experience through prototyping to identify friction points</li>
            <li>Using research findings to validate design decisions and ensure alignment with banker needs</li>
            <li>Identifying essential possible pain points and using the reserach to justify design decisions</li>
            <li>
              Collaborating with the Salesforce solutions architect to assess whether out-of-the-box features were
              sufficient or required customization
            </li>
          </ul>

          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 mt-8">
            Collaboration & Business Alignment
          </h3>

          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Working directly with stakeholders, collaboration ensured business goals were met by integrating feedback
              from banking leadership.
            </li>
            <li>
              Partnering with the Salesforce architect, I aligned custom component development with Salesforce best
              practices to ensure scalability and functionality.
            </li>
            <li>
              Participating in usability testing and iterative design sprints allowed us to refine the final product,
              ensuring it met both user and business requirements.
            </li>
          </ul>
        </section>

        {/* Outcome & Impact */}
        <section className="mb-16 mt-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">Outcome & Impact</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
           The integration of the legacy CRM into Salesforce resulted in measurable improvements in efficiency, usability, and data accuracy for small business bankers. By aligning user needs with business goals, we streamlined workflows, minimized friction, and delivered a scalable system that expanded across other banking departments.
          </p>
          <ul className="space-y-4 list-disc pl-6 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
             Successfully launched with strong internal support, and the UX team was acknowledged as a key contributor to the platform’s evolution.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Estimated 25–35% increase in adoption of the new Salesforce CRM tool among small business bankers.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Reduction in user-reported errors by approximately 15–25%, improving accuracy and efficiency.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
             Custom Salesforce components, originally built for this use case, were later rolled out to additional business units for broader impact.
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="mb-16 mt-16 text-center">
          <button className="rounded-[100px] border border-[#F7F6F6] white bg-white/30 hover:bg-white/60 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
            <a href="/contact">Let's Chat</a>
          </button>
        </section>
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
              <DialogClose className="absolute top-2 right-2 bg-[#007EA7]/80 hover:bg-[#007EA7] text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors" aria-label="Close">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

