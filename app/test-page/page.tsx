"use client"

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Routing Test Page</h1>
      <p>If you can see this, Next.js routing is working correctly!</p>
      <a href="/beta" className="text-blue-500 underline">Go back home</a>
    </div>
  )
}