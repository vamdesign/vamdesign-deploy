"use client"

import Nav from "@/components/nav"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog"

export default function WellsFargoDetailsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  return (
    <main className="min-h-screen bg-white pb-16">
      <Nav />
      <div className="sticky top-16 mt-0 z-20 w-full bg-white/50 backdrop-blur-sm border-y border-[#007EA7]/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
          <Link
            href="/uc/wellsf/process"
            className="text-[#B31E30] hover:text-[#76131F] text-sm flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Explore the full design journey.
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
                style={{ objectFit: "contain" }}
              />
            </div>
            <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] text-left">
              Migrating Small Business Banking Legacy Tools to Salesforce
            </h1>
          </div>
          <h3 className="font-space-grotesk text-xl text-[#2C3D4D] mt-8 mb-12 text-left">
            As a Senior Product Designer I contributed to modernizing Wells Fargo's small business banking experience
            through the integration of a legacy CRM into Salesforce.
          </h3>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Background</h2>
          <div>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 text-left">
              Wells Fargo's small business bankers previously relied on outdated applications and disconnected tools,
              making client relationship management inefficient. To modernize the experience, a legacy banking
              application was integrated into Salesforce, improving workflow efficiency, reducing errors, and enhancing
              data accuracy.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">The Challenge</h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6 text-left">
              With multiple disconnected systems, bankers had to switch between screens to access client information,
              disrupting workflows and leading to redundant data entry. The goal was to transition key banking
              functionalities into Salesforce while ensuring the platform met business needs and aligned with existing
              workflows.
            </p>
          </div>

          <div className="mt-12 pt-12 border-t border-[#007EA7]/10">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">What I Did</h2>
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 text-left">Design & Workflow Analysis</h3>
            <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>
                Designed a custom Client Groups View in Salesforce, reducing cognitive load and improving navigation.
              </li>
              <li>
                Worked closely with Stakeholders to understand their primary needs in order to translate the legacy
                software to Salesforce.
              </li>
              <li>
                Collaborated with the Salesforce architect to determine whether standard components or custom-built
                features were needed.
              </li>
            </ul>
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 text-left">User Research & Prototyping</h3>
            <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>Worked with the UX researcher to document banking processes and identify necessary improvements.</li>
              <li>Participated in user interviews with small business bankers to understand workflow pain points.</li>
              <li>
                Created an interactive prototype that allowed users to navigate key processes, identify inefficiencies,
                and validate expectations.
              </li>
            </ul>

            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-6 text-left">Collaboration & Testing</h3>
            <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 mb-8 [--bullet-color:#007EA7] [&>li]:marker:text-[--bullet-color]">
              <li>Partnered with stakeholders and project managers to align business objectives with UX goals.</li>
              <li>Iterated on designs based on usability testing insights gathered from bankers at various levels.</li>
              <li>Used UX benchmarking to validate that the new experience improved efficiency and met KPIs.</li>
            </ul>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/nav_and_information_before.png"
                  alt="Legacy navigation interface showing complex menu structure and search options"
                  layout="responsive"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/nav_and_information_before.png"
                    )
                  }
                />
              </div>
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/nav_and_info_after.png"
                  alt="Modern Salesforce navigation with improved filtering and organization"
                  layout="responsive"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/nav_and_info_after.png"
                    )
                  }
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/Portfolio_Relationship_Management_before.png"
                  alt="Legacy relationship management interface with complex dropdown menus"
                  layout="responsive"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/Portfolio_Relationship_Management_before.png"
                    )
                  }
                />
              </div>
              <div className="relative shadow-md overflow-hidden">
                <Image
                  src="/images/wellsfargo/Portfolio_Relationship_Management_after.png"
                  alt="Modern Salesforce relationship management with improved data organization"
                  layout="responsive"
                  width={600}
                  height={400}
                  style={{ objectFit: "cover" }}
                  className="cursor-pointer"
                  onClick={() =>
                    openImageModal(
                      "/images/wellsfargo/Portfolio_Relationship_Management_after.png"
                    )
                  }
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16 pt-12 border-t border-[#007EA7]/10">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">Role</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 text-left">
            Senior Product Designer, Prototyping, UX Research, Feature Mapping, and Component Rationalization for CRM
            Integration
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

