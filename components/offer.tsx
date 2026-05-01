"use client"

import { motion } from "framer-motion"

const offers = [
  {
    title: "Complex Enterprise Systems",
    description:
      "I design clear flows, prototypes, and build-ready specs for internal tools, platform migrations, integrations, and data-heavy systems.",
  },
  
  {
    title: "AI-Ready Product Design",
    description:
      "I use AI as part of my daily design and development process, from research and UX writing to vibe coding, prototyping, testing flows, and refining product ideas.",
  },
  {
    title: "Agentic Experience (AX) Design",
    description:
      "I'm exploring Agentic Experience (AX)* through AI and MCP concept work: how people delegate work, understand agent behavior, approve tool actions, create trust, and stay in control.",
  },
]

export default function Offer() {
  return (
    <section
      className="scroll-mt-12 md:scroll-mt-14 pt-14 sm:pt-16 pb-20 px-6 bg-transparent relative"
      id="what-i-offer"
    >
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-bold text-3xl md:text-[2rem] mb-2 text-[#007EA7]">What I Offer</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="p-6 bg-white shadow-md h-full">
                <h3 className="text-lg font-semibold text-[#007EA7] mb-3">{offer.title}</h3>
                <p className="text-sm text-[#5f5f5f] font-montserrat font-light leading-relaxed">
                  {offer.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-transparent to-white pointer-events-none z-10" />
    </section>
  )
}
