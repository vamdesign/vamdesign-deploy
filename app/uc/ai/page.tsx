import Nav from "@/components/nav"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Building with AI | VAM Design Portfolio",
  description: "Case study of Building with AI projects by VAM Design",
}

export default function BuildingWithAIPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />
      <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#007EA7] mb-8">Building with AI</h1>
        <p className="text-lg text-[#007EA7]/80 mb-8">
          This page showcases how VAM Design incorporates AI into UX/UI design processes and products. Content for this
          page is coming soon.
        </p>
        <div className="bg-[#F0F6F9] p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-[#007EA7] mb-4">What to Expect</h2>
          <ul className="list-disc pl-5 space-y-2 text-[#5f5f5f]">
            <li>Case studies of AI-enhanced UX/UI design projects</li>
            <li>Insights into AI-driven user research and data analysis</li>
            <li>Examples of AI-powered prototyping and testing</li>
            <li>Exploration of ethical considerations in AI-assisted design</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

