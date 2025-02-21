import Nav from "@/components/nav"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Impact from "@/components/impact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <Portfolio />
      <Impact />
    </main>
  )
}

