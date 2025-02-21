import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const useCases = [
  { name: "Apple – Internal Apps", href: "/uc/apple" },
  { name: "Wells Fargo – Legacy Integration", href: "/uc/wellsf" },
  { name: "Walmart – Fulfillment App", href: "/uc/walmart" },
  { name: "Littler – Management App", href: "/uc/litman" },
  { name: "Riverbed – Design System", href: "/uc/river" },
  { name: "Building with AI", href: "/uc/ai" },
]

export function UseCasesDropdown() {
  const [isOpen, setIsOpen] = React.useState(false)

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
            className="absolute z-10 mt-2 w-64 rounded-md bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <div className="py-1">
              {useCases.map((useCase) => (
                <Link
                  key={useCase.name}
                  href={useCase.href}
                  className="block px-4 py-2 text-sm text-[#007EA7] hover:bg-[#007EA7]/10 hover:text-[#005f7f] transition-colors"
                >
                  {useCase.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

