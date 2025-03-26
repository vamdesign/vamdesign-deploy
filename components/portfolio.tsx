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
    image:
      "/images/landing/WalmartFulfillment.png",
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
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="font-bold text-3xl">{project.title}</h3>
                  <p className="text-[#5f5f5f] text-lg font-montserrat font-light">{project.description}</p>
                  <p className="text-[#5f5f5f] text-base font-montserrat font-light">
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
                      className="text-xl font-medium text-[#007EA7] hover:text-[#005f7f] transition-colors inline-block transform hover:translate-y-1"
                    >
                      View Case Study
                    </Link>
                  </div>
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
                  className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg shadow-black/30 hover:shadow-xl hover:shadow-black/50 flex items-center justify-center transition-shadow duration-300"
                >
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}