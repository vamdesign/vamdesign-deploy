"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/** Old URL; static export cannot use next.config redirects. */
export default function LegacyAIDetailsRedirect() {
  const router = useRouter()

  useEffect(() => {
    router.replace("/lab/ux-portfolio/")
  }, [router])

  return (
    <p className="min-h-screen pt-32 px-6 text-center font-montserrat text-[#007EA7]">
      Redirecting to UX Portfolio…
    </p>
  )
}
