"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lock } from "lucide-react"
import type React from "react" // Added import for React

export default function PasswordProtect({ children }: { children: React.ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false)
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would verify this against your backend
    if (password === "demo") {
      setIsUnlocked(true)
      setError("")
    } else {
      setError("Incorrect password")
    }
  }

  if (isUnlocked) {
    return <>{children}</>
  }

  return (
    <div className="relative p-4 border border-slate-700 rounded-lg bg-slate-800/50">
      <div className="absolute inset-0 backdrop-blur-sm flex items-center justify-center">
        <form onSubmit={handleUnlock} className="space-y-4 p-4">
          <div className="flex items-center gap-2 text-slate-300">
            <Lock className="h-4 w-4" />
            <span>Password protected</span>
          </div>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="bg-slate-900"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button type="submit" variant="outline">
            Unlock
          </Button>
        </form>
      </div>
    </div>
  )
}

