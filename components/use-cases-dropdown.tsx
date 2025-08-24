// components/use-cases-dropdown.tsx
"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Lock } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Cookies from "js-cookie"

export type UseCase = {
  name: string
  href: string
  isProtected?: boolean
  cookieName?: string
}

// Single source of truth
export const useCases: UseCase[] = [
  { name: "Apple – Internal Apps", href: "/uc/apple/details" },
  { name: "Wells Fargo – Legacy Integration", href: "/uc/wellsf/details", isProtected: true, cookieName: "auth-wellsf" },
  { name: "Walmart – Fulfillment App", href: "/uc/walmart/details" },
  { name: "Littler – Management App", href: "/uc/litman/details", isProtected: true, cookieName: "auth-litman" },
  { name: "Riverbed – B2B UX Strategies", href: "/uc/river/details" },
  { name: "Clara – Ethical Enterprise AI", href: "/uc/clara/details" },
  { name: "Designing with AI - UX Portfolio", href: "/uc/ai/details" },
]

export function UseCasesDropdown() {
  const [isOpen, setIsOpen] = React.useState(false)

  const renderItem = (uc: UseCase, i: number) => {
    const authed = uc.cookieName ? Cookies.get(uc.cookieName) === "authenticated" : true
    const href = uc.isProtected && !authed
      ? `/passcode?returnUrl=${encodeURIComponent(uc.href)}&uc=${uc.href.split("/")[2]}`
      : uc.href

    return (
      <Link
        key={`uc-${i}`}
        href={href}
        className="flex items-center justify-between px-4 py-2 text-sm text-[#007EA7] hover:bg-[#007EA7]/10 hover:text-[#005f7f] transition-colors"
      >
        <span>{uc.name}</span>
        {uc.isProtected && <Lock className="h-3 w-3 ml-2 opacity-70" />}
      </Link>
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
            className="absolute z-50 mt-2 w-64 rounded-md bg-white/90 backdrop-blur-sm shadow-lg ring-1 ring-black/5"
          >
            <div className="py-1">
              {useCases.map(renderItem)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
