"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Eye, EyeOff, AlertCircle } from 'lucide-react'
import { useRouter, useSearchParams } from "next/navigation"
import Nav from "@/components/nav"
import Cookies from "js-cookie"

import { areCookiesAccepted } from "@/components/cookie-consent"

// Define types for our theme configuration
interface ThemeConfig {
  title: string
  description: string
  primaryColor: string
  blobColors: string[]
}

interface ThemeConfigs {
  [key: string]: ThemeConfig
}

// Props for the Blob component
interface BlobProps {
  color: string
  initialX: string
  initialY: string
}

// Custom theme configurations for each UC
const ucThemes: ThemeConfigs = {
  apple: {
    title: "Apple Case Study",
    description:
      "Protected by NDAs, because with great design comes great responsibility. Enter the password to continue.",
    primaryColor: "#007EA7",
    blobColors: ["#AE09B7", "#072FA9", "#7209B7", "#EF036C", "#FC31DD", "#520882", "#FF9AF0"],
  },
  wellsf: {
    title: "Wells Fargo Case Study",
    description: "This page is bigger on the inside… but you'll need the password to get in.",
    primaryColor: "#007EA7",
    blobColors: ["#D62828", "#FFD60A", "#FF6700", "#FFAA2A", "#990909", "#FF8282", "#FFEF0A"],
  },
  walmart: {
    title: "Walmart Case Study",
    description: "This page is so exclusive, even I have to enter a password. ",
    primaryColor: "#007EA7",
    blobColors: ["#017DC6", "#FFBE00", "#CEEDFF", "#19C077", "#005689", "#FFD678", "#78BE20"],
  },
  litman: {
    title: "Littler Mendelson Case Study",
    description: "Case Study under lock and key—because NDAs are serious business (and so is good design).",
    primaryColor: "#007EA7",
    blobColors: ["#6D9151", "#083B68", "#6FB425", "#CAE1F3", "#FFE66D", "#1A535C", "#4ECDC4"],
  },
  // Default theme as fallback
  default: {
    title: "Password Protected",
    description:
      "Protected by NDAs, because great design comes with great responsibility. Enter the password to continue.",
    primaryColor: "#007EA7",
    blobColors: ["#AE09B7", "#072FA9", "#7209B7", "#EF036C", "#FC31DD", "#520882", "#FF9AF0"],
  },
}

// Fixed Blob component with proper TypeScript types
const Blob: React.FC<BlobProps> = ({ color, initialX, initialY }) => {
  return (
    <motion.div
      className="absolute rounded-full mix-blend-multiply filter blur-3xl opacity-[0.18]"
      style={{
        backgroundColor: color,
        width: "40vw",
        height: "40vw",
        left: initialX,
        top: initialY,
      }}
      animate={{
        x: ["-10%", "20%", "5%", "25%", "-15%", "10%"],
        y: ["-15%", "10%", "20%", "-5%", "15%", "-10%"],
      }}
      transition={{
        duration: 25,
        ease: "easeInOut",
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
      }}
    />
  )
}

export default function PasswordProtect() {
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [redirecting, setRedirecting] = useState(false)
  const [cookiesAccepted, setCookiesAccepted] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const returnUrl = searchParams.get("returnUrl") || "/uc/apple"

  // Get the UC name from the URL parameters
  const ucName = searchParams.get("uc") || "default"

  // Get the theme for this UC, fallback to default if not found
  const theme = ucThemes[ucName] || ucThemes.default

  // Extract the UC name from the return URL for the cookie
  const ucCookieName = returnUrl.split("/")[2]

  // Check if cookies are accepted on component mount
  useEffect(() => {
    const cookiesAccepted = areCookiesAccepted()
    setCookiesAccepted(cookiesAccepted)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // If cookies aren't accepted, show error
    if (!cookiesAccepted) {
      setError("You must accept cookies to use password protection.")
      return
    }

    // If already redirecting, do nothing
    if (redirecting) return

    // Check if password is correct
    if (password === "vamdesign") {
      try {
        // Show redirecting state
        setRedirecting(true)

        // Set auth cookie for this specific UC
        Cookies.set(`auth-${ucCookieName}`, "authenticated", {
          expires: 1 / 12, // Expires in 2 hours (1/12 of a day)
          path: "/",
        })

        console.log("Authentication successful. Redirecting to:", returnUrl)

        // Add a small delay to ensure cookies are set before redirect
        setTimeout(() => {
          // Force a hard navigation instead of client-side routing
          window.location.replace(returnUrl)
        }, 200)
      } catch (error) {
        console.error("Redirect error:", error)
        setRedirecting(false)
        setError("Authentication successful but redirect failed. Please try again.")
      }
    } else {
      setError("Incorrect password. Please try again.")
      // Add shake animation to input
      const input = document.getElementById("password-input")
      input?.classList.add("animate-shake")
      setTimeout(() => {
        input?.classList.remove("animate-shake")
      }, 500)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  // Handle cookie acceptance
  const handleCookieAccept = () => {
    // Set cookie consent for 30 days
    Cookies.set("cookie-consent", "accepted", { expires: 30 })
    setCookiesAccepted(true)
    setError("") // Clear any error messages
  }

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Blobs */}
      <div className="absolute inset-0 z-0">
        {theme.blobColors.map((color, index) => (
          <Blob key={index} color={color} initialX={`${(index * 15) % 100}%`} initialY={`${(index * 12) % 100}%`} />
        ))}
      </div>

      <Nav />
      <main className="container mx-auto px-4 pt-24 relative z-10">
        <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center">
        <h1
  className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] leading-tight font-bold"
  style={{ color: theme.primaryColor }}
>
            {theme.title}
          </h1>
          <div className="w-full max-w-md p-8">
            <p className="mb-8 text-center text-gray-600 font-montserrat">{theme.description}</p>

            {redirecting ? (
              <div className="text-center">
                <p className="mb-4 text-green-600">Password accepted!</p>
                <p>Redirecting you now...</p>
                <div className="mt-4 w-8 h-8 border-t-2 border-b-2 border-green-500 rounded-full animate-spin mx-auto"></div>
              </div>
            ) : (
              <>
                {!cookiesAccepted && (
                  <div className="mb-6 p-6 bg-white/80 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm w-[120%] -ml-[10%]">
                    <div className="space-y-3">
                      <p className="text-sm text-gray-600 font-montserrat">
                        <strong className="font-semibold">Cookies Required:</strong> Password protection requires cookies to function. Please accept cookies to continue.
                      </p>
                      <div className="flex gap-4 justify-end">
                        <button
                          onClick={handleCookieAccept}
                          className="text-sm px-5 py-1.5 bg-white text-[#007EA7] border border-[#007EA7] rounded-full hover:bg-gray-50 transition-colors font-montserrat"
                        >
                          Accept
                        </button>
                        <button
                          onClick={() => router.push('/')}
                          className="text-sm px-5 py-1.5 bg-white text-gray-600 border border-gray-400 rounded-full hover:bg-gray-50 transition-colors font-montserrat"
                        >
                          Decline
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 flex flex-col items-center">
                  <div className="relative w-full">
                    <input
                      id="password-input"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value)
                        setError("") // Clear error when typing
                      }}
                      className={`w-full h-12 px-4 pr-12 bg-white border ${
                        error ? "border-red-500" : "border-gray-300"
                      } rounded-md focus:outline-none focus:ring-2 ${
                        error ? "focus:ring-red-500" : `focus:ring-[${theme.primaryColor}]`
                      } text-gray-800 placeholder-gray-500`}
                      required
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>

                  {error && (
                    <div className="w-full flex items-center text-red-500 text-sm">
                      <AlertCircle className="h-4 w-4 mr-2" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="mx-auto block rounded-[100px] border-2 bg-white hover:bg-white/20 px-[30px] py-2 transition-all duration-300 text-lg font-medium"
                    style={{
                      borderColor: theme.primaryColor,
                      color: theme.primaryColor,
                    }}
                  >
                    Submit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        .animate-shake {
          animation: shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
        }
      `}</style>
    </div>
  )
}