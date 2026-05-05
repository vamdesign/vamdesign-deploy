"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="h-[70svh] min-h-[70svh] flex items-start relative bg-transparent">
      <div className="site-container w-full px-4 sm:px-6 pt-[11svh] sm:pt-[13svh] md:pt-[15svh] pb-4 sm:pb-6 relative z-10">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 sm:mb-6">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#007EA7] leading-snug sm:leading-tight font-light">
              Hello, I&apos;m Vicki. I make complex software usable, and design AI and Agentic Experiences &#40;AX&#41;* with clarity, trust, and human
              control built in.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#007EA7] leading-snug sm:leading-tight font-semibold">
            Senior UX &amp; Product Designer
          </p>
        </motion.div>
      </div>
    </section>
  )
}
