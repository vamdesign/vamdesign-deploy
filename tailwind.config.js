/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-space-grotesk)"],
        montserrat: ["var(--font-montserrat)"],
        fontSize: {
          // Fluid typography that scales based on viewport width
          'display': ['clamp(2.5rem, 8vw, 3.5rem)', { lineHeight: '1.1' }],
          'h1': ['clamp(2rem, 5vw, 3rem)', { lineHeight: '1.2' }],
          'h2': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2' }],
          'h3': ['clamp(1.25rem, 3vw, 2rem)', { lineHeight: '1.3' }],
          'lg': ['clamp(1.125rem, 2vw, 1.25rem)', { lineHeight: '1.5' }],
          'base': ['clamp(1rem, 1.5vw, 1.125rem)', { lineHeight: '1.6' }],
          'sm': ['clamp(0.875rem, 1vw, 1rem)', { lineHeight: '1.6' }],
          'xs': ['clamp(0.75rem, 0.8vw, 0.875rem)', { lineHeight: '1.6' }],
        },
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
      },
    },
  },
  plugins: [],
}

