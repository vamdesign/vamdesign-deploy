"use client"

import { useState } from "react"
import Cookies from "js-cookie"
import { Trash2 } from 'lucide-react'

export function CookieReset() {
  const [isVisible, setIsVisible] = useState(false)
  const [message, setMessage] = useState("")

  const resetAllCookies = () => {
    // Get all cookies
    const allCookies = Cookies.get()

    // Remove each cookie
    Object.keys(allCookies).forEach((cookieName) => {
      Cookies.remove(cookieName)
    })

    setMessage(`Reset ${Object.keys(allCookies).length} cookies. You may need to refresh the page.`)

    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage("")
    }, 3000)
  }

  if (!isVisible) {
    return (
      <button
        onClick={() => setIsVisible(true)}
        className="fixed bottom-4 right-4 bg-gray-200 p-2 rounded-full shadow-md hover:bg-gray-300 transition-colors z-50"
        aria-label="Cookie settings"
      >
        <Trash2 size={16} className="text-gray-700" />
      </button>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg z-50 border border-gray-200 w-64">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium">Testing Tools</h3>
        <button onClick={() => setIsVisible(false)} className="text-gray-500 hover:text-gray-700">
          ×
        </button>
      </div>
      <button
        onClick={resetAllCookies}
        className="w-full px-3 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors text-sm"
      >
        Reset All Cookies
      </button>
      {message && <p className="mt-2 text-xs text-gray-600">{message}</p>}
    </div>
  )
}