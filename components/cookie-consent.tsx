"use client"

import { useState, useEffect } from "react"
import Cookies from "js-cookie"

interface CookieConsentProps {
  className?: string
  onAccept?: () => void
  fixedPosition?: boolean
}

export function CookieConsent({ className = "", onAccept, fixedPosition = true }: CookieConsentProps) {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = Cookies.get("cookie-consent")
    if (!hasAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    // Set cookie consent for 30 days
    Cookies.set("cookie-consent", "accepted", { expires: 30 })
    setShowBanner(false)

    // Call the onAccept callback if provided
    if (onAccept) {
      onAccept()
    }
  }

  if (!showBanner) return null

  const positionClasses = fixedPosition ? "fixed bottom-0 left-0 right-0 z-50" : ""

  return (
    <div
      className={`bg-white/95 backdrop-blur-sm shadow-lg p-4 border-t border-gray-200 ${positionClasses} ${className}`}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-sm text-gray-700 flex-1 font-['Montserrat']">
          <p>
            This website uses cookies solely to grant temporary access to password-protected pages. No personal data is collected or stored. By continuing to use this site, you consent to this use of cookies.
          </p>
        </div>
        <div className="flex gap-5 items-center">
          <button
            onClick={acceptCookies}
            className="px-6 py-2 bg-white text-[#007EA7] border border-[#007EA7] rounded-full hover:bg-[#f8f8f8] transition-colors text-sm font-['Montserrat']"
          >
            Accept
          </button>
          <button
            onClick={() => setShowBanner(false)}
            className="px-6 py-2 bg-white text-black border border-black rounded-full hover:bg-[#f8f8f8] transition-colors text-sm font-['Montserrat']"
            aria-label="Decline"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

// Helper function to check if cookies are accepted
export function areCookiesAccepted(): boolean {
  return Cookies.get("cookie-consent") === "accepted"
}