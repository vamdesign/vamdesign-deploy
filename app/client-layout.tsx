// app/client-layout.tsx
"use client"

import { CookieConsent } from "@/components/cookie-consent"
import { CookieReset } from "@/components/cookie-reset"
import React from 'react'

export function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <CookieConsent />
      {process.env.NODE_ENV === "development" && <CookieReset />}
    </>
  )
}