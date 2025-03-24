import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Impact from "@/components/impact"
import React from "react"

export default function Home() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <main className="min-h-screen">
        <Nav />
        <Hero />
        <Portfolio />
        <Impact />
      </main>
    </React.Suspense>
  )
}