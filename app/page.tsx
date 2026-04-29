import Nav from "@/components/nav"
import FeaturedBadge from "@/components/featured-badge"
import Hero from "@/components/hero"
import Portfolio from "@/components/portfolio"
import Impact from "@/components/impact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <FeaturedBadge />
      <Hero />
      <Portfolio />
      <Impact />
    </main>
  )
}
