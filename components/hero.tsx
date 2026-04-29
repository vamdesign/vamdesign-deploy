"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

interface BlobProps {
  color: string;
  initialX: string;
  initialY: string;
}

const Blob = ({ color, initialX, initialY }: BlobProps) => {
  // Define position as string values for percentage-based positioning
  const [position, setPosition] = useState<{ x: string | number, y: string | number }>({ x: initialX, y: initialY })
  
  useEffect(() => {
    let isMounted = true
    
    const updatePosition = () => {
      if (!isMounted) return
      
      setPosition({
        x: `${Math.random() * 100}%`,  // Keep within 0-100% range
        y: `${Math.random() * 100}%`,  // Keep within 0-100% range
      })
      
      // Schedule next update with a consistent but random duration
      const duration = Math.floor(Math.random() * 5000 + 8000) // 8-13 seconds
      setTimeout(updatePosition, duration)
    }
    
    // Start the animation loop with a slight delay to prevent immediate movement
    const initialDelay = Math.random() * 2000
    const timeout = setTimeout(updatePosition, initialDelay)
    
    // Clean up on unmount
    return () => {
      isMounted = false
      clearTimeout(timeout)
    }
  }, [])
  
  return (
    <motion.div
      className="absolute rounded-full mix-blend-multiply filter blur-3xl"
      style={{
        backgroundColor: color,
        width: "clamp(150px, 40vw, 500px)",  // Responsive sizing with min/max
        height: "clamp(150px, 40vw, 500px)", // Responsive sizing with min/max
        left: initialX,
        top: initialY,
        opacity: 0.18,
      }}
      animate={position}
      transition={{
        duration: 8,  // Consistent duration
        ease: "easeInOut",
      }}
    />
  )
}

interface NavItem {
  text: string;
  href: string;
}

export default function Hero() {
  return (
    <section className="h-[70svh] min-h-[70svh] flex items-start relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Reduced number of blobs on smaller screens */}
        <Blob color="#FF6700" initialX="5%" initialY="10%" />
        <Blob color="#EF036C" initialX="60%" initialY="20%" />
        <Blob color="#106EBE" initialX="70%" initialY="50%" />
        <div className="hidden md:block">
          <Blob color="#0FFCBE" initialX="30%" initialY="40%" />
          <Blob color="#FFD60A" initialX="80%" initialY="70%" />
          <Blob color="#D62828" initialX="10%" initialY="70%" />
          <Blob color="#7209B7" initialX="50%" initialY="80%" />
        </div>
      </div>
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 pt-[11svh] sm:pt-[13svh] md:pt-[15svh] pb-12 sm:pb-16 relative z-10">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-3 sm:mb-4">
            <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#007EA7] leading-snug sm:leading-tight font-light">
              Hello, I&apos;m Vicki. I make complex software usable, and design AI experiences with clarity, trust, and human
              control built in.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#007EA7] leading-snug sm:leading-tight font-semibold mb-6 sm:mb-8">
            Senior UX &amp; Product Designer
          </p>

          <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6 flex flex-col items-start">
            {[
               { text: "What I Offer", href: "ux-portfolio" },
              { text: "Selected Work", href: "ux-portfolio" },
              { text: "Impact", href: "impact" },
            ].map((item: NavItem) => (
              <motion.a
                key={item.text}
                href={`#${item.href}`}
                className="group flex items-center text-lg sm:text-xl font-medium text-[#007EA7] hover:text-[#005f7f] transition-colors"
                whileHover={{ y: 5 }}
              >
                <span>{item.text}</span>
                <ArrowDown className="ml-2 h-5 w-5 sm:h-6 sm:w-6 text-[#007EA7] group-hover:text-[#005f7f]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
