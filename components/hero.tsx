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
  const [position, setPosition] = useState<{ x: string | number, y: string | number }>({ x: 0, y: 0 })
  
  useEffect(() => {
    let isMounted = true
    
    const updatePosition = () => {
      if (!isMounted) return
      
      setPosition({
        x: `${Math.random() * 120 - 10}%`, // Range from -10% to 110%
        y: `${Math.random() * 120 - 10}%`, // Range from -10% to 110%
      })
      
      // Schedule next update
      const duration = Math.floor((Math.random() * 10 + 5) * 0.8 * 1000) // Convert to milliseconds
      setTimeout(updatePosition, duration)
    }
    
    // Start the animation loop
    updatePosition()
    
    // Clean up on unmount
    return () => {
      isMounted = false
    }
  }, [])
  
  return (
    <motion.div
      className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-[0.18]"
      style={{
        backgroundColor: color,
        width: "40vw",
        height: "40vw",
        left: initialX,
        top: initialY,
      }}
      animate={position}
      transition={{
        duration: (Math.random() * 10 + 5) * 0.8,
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
    <section className="h-[96vh] flex items-center relative bg-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Blob color="#FF6700" initialX="-5%" initialY="-10%" />
        <Blob color="#EF036C" initialX="60%" initialY="0%" />
        <Blob color="#106EBE" initialX="90%" initialY="-20%" />
        <Blob color="#0FFCBE" initialX="30%" initialY="10%" />
        <Blob color="#FFD60A" initialX="80%" initialY="-5%" />
        <Blob color="#D62828" initialX="10%" initialY="70%" />
        <Blob color="#7209B7" initialX="50%" initialY="80%" />
      </div>
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="mb-8">
            <span className="block text-3xl md:text-4xl lg:text-5xl text-[#007EA7] leading-tight mb-2 font-light">
              Hello, I'm Vicki, I design intuitive UX<span className="text-[#007EA7]/30">*</span> that transforms
              complexity into simplicity.
            </span>
          </h1>
          <p className="text-base md:text-sm text-[#007EA7]/30 mb-8">*UX so good, users won't even notice it.</p>

          <div className="mt-12 space-y-6 flex flex-col items-start">
            {[
              { text: "Innovative UX Design", href: "ux-portfolio" },
              { text: "Measurable Impact", href: "impact" },
            ].map((item: NavItem) => (
              <motion.a
                key={item.text}
                href={`#${item.href}`}
                className="group flex items-center text-xl font-medium text-[#007EA7] hover:text-[#005f7f] transition-colors"
                whileHover={{ y: 5 }}
              >
                <span>{item.text}</span>
                <ArrowDown className="ml-2 h-6 w-6 text-[#007EA7] group-hover:text-[#005f7f]" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}