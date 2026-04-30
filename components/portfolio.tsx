"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    id: "ai-design",
    title: "UX guidance for AI and the MCP Layer",
    description:
      "As AI moves from answering questions to taking action, UX becomes the layer that makes those actions visible, governable, and trustworthy. This project looks ahead to the product patterns teams will need as AI starts doing more inside the tools people already use.",
    image: "/images/MCP/policy_flow.jpg",
  },
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
]

export default function Portfolio() {
  return (
    <section
      className="pt-12 pb-12 px-6 text-[#007EA7] bg-[#ffffff]"
      id="ux-portfolio"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-bold text-3xl md:text-[2rem] mb-4">Selected Work</h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={false}
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
                  {project.achievement && (
                    <p className="text-[#5f5f5f] text-sm md:text-base font-montserrat font-light">
                      <span className="font-medium">Key Achievement:</span> {project.achievement}
                    </p>
                  )}
                  <div className="text-right">
                    <Link
                      href={
                        project.id === "ai-design"
                          ? "/uc/mcp/"
                          : project.id === "apple"
                          ? "/uc/apple/details/"
                          : project.id === "wells-fargo"
                          ? "/uc/wellsf/details/"
                          : project.id === "walmart"
                          ? "/uc/walmart/details/"
                          : "/lab/ux-portfolio/"
                      }
                      className="text-lg md:text-xl font-medium text-[#007EA7] hover:text-[#005f7f] transition-colors inline-block"
                    >
                      View Case Study
                    </Link>
                  </div>
                </div>

                <Link
                  href={
                    project.id === "ai-design"
                      ? "/uc/mcp/"
                      : project.id === "apple"
                      ? "/uc/apple/details/"
                      : project.id === "wells-fargo"
                      ? "/uc/wellsf/details/"
                      : project.id === "walmart"
                      ? "/uc/walmart/details/"
                      : "/lab/ux-portfolio/"
                  }
                  className={
                    "relative aspect-[4/3] w-full overflow-hidden rounded-lg shadow-lg order-1 md:order-2 " +
                    (project.id === "ai-design" ? "bg-white" : "")
                  }
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={project.id === "ai-design" ? "object-contain" : "object-cover"}
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
