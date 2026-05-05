"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="flex items-start relative bg-transparent pt-[13svh] sm:pt-[15svh] md:pt-[17svh] pb-12 sm:pb-16">
      <div className="site-container w-full relative z-10">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 sm:mb-6">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#007EA7] leading-tight font-light">
              Hello, I&apos;m Vicki. I make complex software usable, and design AI and Agentic Experiences &#40;AX&#41;* with clarity, trust, and human control built in.
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-[#007EA7] font-semibold">
            Senior UX &amp; Product Designer
          </p>
        </motion.div>
      </div>
    </section>
  )
}
