"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Lock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import Cookies from "js-cookie"

const useCases = [
  { name: "Apple – Internal Apps", href: "/uc/apple/details", isProtected: false },
  {
    name: "Wells Fargo – Legacy Integration",
    href: "/uc/wellsf/details",
    isProtected: true,
    cookieName: "auth-wellsf",
  },
  { name: "Walmart – Fulfillment App", href: "/uc/walmart/details", isProtected: false },
  { name: "Littler – Management App", href: "/uc/litman/details", isProtected: true, cookieName: "auth-litman" },
  { name: "Riverbed – B2B UX Strategies", href: "/uc/river/details", isProtected: false },
  { name: "Designing with AI - UX Portfolio", href: "/uc/ai/details", isProtected: false },
]

export function UseCasesDropdown() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const renderLink = (useCase: (typeof useCases)[0], index: number) => {
    // Check if this use case is protected
    if (useCase.isProtected) {
      // Check if user is authenticated for this specific use case
      const isAuthenticated = useCase.cookieName && Cookies.get(useCase.cookieName) === "authenticated"

      // If authenticated for this specific use case, use Link
      if (isAuthenticated) {
        return (
          <div key={`usecase-${index}`}>
            <Link
              href={useCase.href}
              className="flex items-center justify-between px-4 py-2 text-sm text-[#007EA7] hover:bg-[#007EA7]/10 hover:text-[#005f7f] transition-colors"
            >
              <span>{useCase.name}</span>
              <Lock className="h-3 w-3 ml-2 opacity-70" />
            </Link>
          </div>
        )
      }

      // Otherwise, use passcode redirect
      return (
        <div key={`usecase-${index}`}>
          <Link
            href={`/passcode?returnUrl=${useCase.href}&uc=${useCase.href.split("/")[2]}`}
            className="flex items-center justify-between px-4 py-2 text-sm text-[#007EA7] hover:bg-[#007EA7]/10 hover:text-[#005f7f] transition-colors"
          >
            <span>{useCase.name}</span>
            <Lock className="h-3 w-3 ml-2 opacity-70" />
          </Link>
        </div>
      )
    }

    // For unprotected use cases, use regular Link without lock icon
    return (
      <div key={`usecase-${index}`}>
        <Link
          href={useCase.href}
          className="flex items-center justify-between px-4 py-2 text-sm text-[#007EA7] hover:bg-[#007EA7]/10 hover:text-[#005f7f] transition-colors"
        >
          <span>{useCase.name}</span>
        </Link>
      </div>
    )
  }

  return (
    <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <button className="flex items-center text-[#007EA7] hover:text-[#005f7f] hover:underline transition-colors font-medium">
        Use Cases
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-64 rounded-md bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <div className="py-1">{useCases.map((useCase, index) => renderLink(useCase, index))}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

