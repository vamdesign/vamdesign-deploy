// components/ui/use-cases-dropdown.tsx
"use client"

import React from "react"
import Cookies from "js-cookie"
import Link from "next/link"
import { ChevronDown, Lock } from "lucide-react"

// Type for a menu item
type UseCase = {
  name: string
  href: string
  isProtected?: boolean
  cookieName?: string
}

const useCases: UseCase[] = [
  { name: "Apple – Internal Apps", href: "/uc/apple/details" },
  {
    name: "Wells Fargo – Legacy Integration",
    href: "/uc/wellsf/details",
    isProtected: true,
    cookieName: "auth-wellsf",
  },
  { name: "Walmart – Fulfillment App", href: "/uc/walmart/details" },
  {
    name: "Littler – Management App",
    href: "/uc/litman/details",
    isProtected: true,
    cookieName: "auth-litman",
  },
  { name: "Riverbed – B2B UX Strategies", href: "/uc/river/details" },
  { name: "Clara – Ethical Enterprise AI", href: "/uc/clara/" }, // Clara entry
  { name: "Designing with AI – UX Portfolio", href: "/uc/ai/details" },
]

export default function UseCasesDropdown() {
  const [open, setOpen] = React.useState(false)

  // Strongly type 'uc' to silence ts(7006)
  const handleProtectedClick = (uc: UseCase) => {
    if (uc.isProtected && uc.cookieName && !Cookies.get(uc.cookieName)) {
      window.location.href = `/passcode?returnUrl=${encodeURIComponent(uc.href)}&uc=${uc.cookieName}`
      return
    }
    window.location.href = uc.href
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Button label is visible text — not eliminated */}
      <button
        type="button"
        className="inline-flex items-center gap-1 px-3 py-2 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#007EA7]"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="use-cases-menu"
      >
        <span className="text-sm font-medium text-gray-800">Use Cases</span>
        <ChevronDown className="w-4 h-4" aria-hidden="true" />
      </button>

      {open && (
        <div
          id="use-cases-menu"
          role="menu"
          className="absolute left-0 mt-2 w-72 rounded-md bg-white shadow-lg border border-gray-200 p-1"
        >
          <ul>
            {useCases.map((uc) => {
              const isLocked = uc.isProtected && uc.cookieName && !Cookies.get(uc.cookieName)

              // Unprotected items use <Link>; protected use a button that routes via /passcode
              return (
                <li key={uc.name}>
                  {isLocked ? (
                    <button
                      onClick={() => handleProtectedClick(uc)}
                      className="flex w-full items-center gap-2 rounded px-3 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Lock className="w-4 h-4 shrink-0" />
                      <span>{uc.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={uc.href}
                      role="menuitem"
                      className="flex items-center gap-2 rounded px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <span className="w-4 h-4" />
                      <span>{uc.name}</span>
                    </Link>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
