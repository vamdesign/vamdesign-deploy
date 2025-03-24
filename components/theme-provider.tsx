// components/theme-provider.tsx
"use client"

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "light", setTheme: (theme: string) => {} })

export function ThemeProvider({ 
  children, 
  attribute = "data-theme",
  defaultTheme = "light",
  enableSystem = false
}: { 
  children: React.ReactNode;
  attribute?: string;
  defaultTheme?: string;
  enableSystem?: boolean;
}) {
  const [theme, setTheme] = useState(defaultTheme)
  
  useEffect(() => {
    document.documentElement.setAttribute(attribute, theme)
  }, [theme, attribute])
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}