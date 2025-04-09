"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "apple",
    title: "Apple Internal Tools",
    description:
      "Leading UX design for Apple's internal customer support tools, optimizing for efficiency and usability. Designed and enhanced internal applications to improve customer support interactions and agent productivity.",
    achievement: "Increased agent task efficiency through intuitive design and clear interaction patterns.",
    image: "/images/landing/AppleInternApps.png",
  },
  {
    id: "wells-fargo",
    title: "Wells Fargo CRM",
    description:
      "Transforming legacy systems into modern Salesforce solutions. Led UX strategy, ensuring an intuitive experience for business users.",
    achievement: "Decreased user error rates and simplified task execution for business users.",
    image: "/images/landing/WellsFargoCRM.png",
  },
  {
    id: "walmart",
    title: "Walmart Labs",
    description:
      "Advanced Walmart Fulfillment Service UX with research, prototyping, and design systems. Conducted comparative analysis, identified key opportunities, and developed an atomic design system to enhance third-party seller integration and usability.",
    achievement: "Defined foundational UX architecture and delivered a design system that improved seller clarity and adoption.",
    image: "/images/landing/WalmartFulfillment.png",
  },
  {
    id: "ai-design",
    title: "Designing with AI",
    description:
      "This portfolio is the result of an exploration into AI-powered design, blending human imagination with AI-assisted tools. From initial concepts to final execution, I leveraged AI for ideation, prototyping, and visual storytelling, pushing the boundaries of UX/UI design.",
    achievement: "Enhanced design efficiency by incorporating AI-assisted content and structure, enabling faster iteration and a refined user experience.",
    image: "/images/landing/Portfolio.png",
  },
]

export default function Portfolio() {
  return (
    <section
      className="pt-12 pb-12 px-6 text-[#007EA7]"
      id="ux-portfolio"
      style={{
        backgroundColor: "#D5DCE1",
        backgroundImage: "linear-gradient(135deg, rgba(213, 220, 225, 0.9), rgba(213, 220, 225, 0.9))",
        backgroundSize: "200% 200%",
        animation: "gradientAnimation 15s ease infinite",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-bold text-4xl mb-4">Innovative UX Design Showcase</h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <h3 className="font-bold text-2xl md:text-3xl">{project.title}</h3>
                  <p className="text-[#5f5f5f] text-base md:text-lg font-montserrat font-light">
                    {project.description}
                  </p>
                  <p className="text-[#5f5f5f] text-sm md:text-base font-montserrat font-light">
                    <span className="font-medium">Key Achievement:</span> {project.achievement}
                  </p>
                  <div className="text-right">
                    <Link 
                      href={`/uc/${
                        project.id === "apple" 
                          ? "apple/details/" 
                          : project.id === "wells-fargo" 
                          ? "wellsf/details/" 
                          : project.id === "walmart" 
                          ? "walmart/details/" 
                          : "ai/details/"
                      }`}
                      className="text-lg md:text-xl font-medium text-[#007EA7] hover:text-[#005f7f] transition-colors inline-block"
                    >
                      View Case Study
                    </Link>
                  </div>

                  {project.id === "ai-design" && (
                    <div className="flex items-center gap-3 mt-3">
                      <div className="relative w-12 h-12 flex-shrink-0">
                        <Image
                          src="/images/landing/Vicki-Morawietz-ea17.png"
                          alt="The Upgrade Badge"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <p className="text-sm text-[#2C3D4D] font-medium">
                        <a
                          href="https://www.theupgrade.ai/blog/breaking-the-template-ai-assisted-portfolio"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#007EA7] font-semibold hover:underline"
                        >
                          Featured by The Upgrade blog
                        </a>{" "}
                        for creating an innovative UX Porfolio using AI.
                      </p>
                    </div>
                  )}
                </div>

                <Link
                  href={`/uc/${
                    project.id === "apple" 
                      ? "apple/details/" 
                      : project.id === "wells-fargo" 
                      ? "wellsf/details/" 
                      : project.id === "walmart" 
                      ? "walmart/details/" 
                      : "ai/details/"
                  }`}
                  className="relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2"
                >
                  <Image 
                    src={project.image || "/placeholder.svg"} 
                    alt={project.title} 
                    fill 
                    className="object-cover" 
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
