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
          <h1 className="mb-4 sm:mb-5">
            <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#007EA7] leading-tight font-light">
              Hello, I&apos;m Vicki. I design the human layer of complex software.
            </span>
          </h1>

          <p className="text-3xl md:text-[2rem] text-[#007EA7] font-semibold leading-relaxed">
            From enterprise tools to AI-assisted workflows, I help teams create experiences that are clear, trustworthy, and built around how people actually work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
