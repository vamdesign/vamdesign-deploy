// app/layout.tsx
import "./globals.css"
import { Space_Grotesk, Montserrat } from 'next/font/google'
import type React from "react"
import { ClientLayout } from './client-layout'
import Script from 'next/script'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
})

// app/layout.tsx
export const metadata = {
  title: "VAM Design Portfolio",
  description: "VAM Design, Vicki Morawietz's cutting-edge UX portfolio showcasing innovative designs",
  generator: 'v0.dev',
  viewport: "width=device-width, initial-scale=1, maximum-scale=5"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="bg-white">
      <body className={`${spaceGrotesk.className} ${montserrat.variable} bg-white`}>
        <ClientLayout>{children}</ClientLayout>
        
        {/* GoatCounter Analytics */}
        <Script
          data-goatcounter="https://vamdesign.goatcounter.com/count"
          src="//gc.zgo.at/count.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}