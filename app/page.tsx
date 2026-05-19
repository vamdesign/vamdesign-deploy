"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Nav from "@/components/nav"
import FeaturedBadge from "@/components/featured-badge"
import Hero from "@/components/hero"
import Offer from "@/components/offer"
import Portfolio from "@/components/portfolio"
import Impact from "@/components/impact"

interface BlobProps {
  color: string;
  initialX: string;
  initialY: string;
}

const Blob = ({ color, initialX, initialY }: BlobProps) => {
  const [position, setPosition] = useState<{ x: string | number, y: string | number }>({ x: initialX, y: initialY })

  useEffect(() => {
    let isMounted = true

    const updatePosition = () => {
      if (!isMounted) return
      setPosition({
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 55}%`,
      })
      const duration = Math.floor(Math.random() * 5000 + 8000)
      setTimeout(updatePosition, duration)
    }

    const initialDelay = Math.random() * 2000
    const timeout = setTimeout(updatePosition, initialDelay)

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
        width: "clamp(150px, 40vw, 500px)",
        height: "clamp(150px, 40vw, 500px)",
        left: initialX,
        top: initialY,
        opacity: 0.18,
      }}
      animate={position}
      transition={{
        duration: 8,
        ease: "easeInOut",
      }}
    />
  )
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Blob background spans hero and offer sections */}
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Blob color="#FF6700" initialX="5%" initialY="10%" />
          <Blob color="#EF036C" initialX="60%" initialY="20%" />
          <Blob color="#106EBE" initialX="70%" initialY="50%" />
          <div className="hidden md:block">
            <Blob color="#0FFCBE" initialX="30%" initialY="40%" />
            <Blob color="#FFD60A" initialX="80%" initialY="70%" />
            <Blob color="#D62828" initialX="10%" initialY="70%" />
            <Blob color="#7209B7" initialX="50%" initialY="80%" />
          </div>
          {/* fade blobs out before portfolio */}
          <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </div>

        <Nav />
        <FeaturedBadge />
        <Hero />
        <Offer />
      </div>

      <Portfolio />
      <Impact />
    </main>
  )
}
