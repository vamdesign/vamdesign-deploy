import { motion } from "framer-motion"
import Link from "next/link"
import { Logo } from "./logo"
import { LinkedInIcon } from "./linkedin-icon"
import { UseCasesDropdown } from "./use-cases-dropdown"

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed w-full z-50 bg-white/70 backdrop-blur-md shadow-md"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link href="/">
          <Logo className="h-8 w-auto text-[#007EA7]" />
        </Link>
        <div className="flex items-center space-x-8">
          <UseCasesDropdown />
          <Link
            href="/about"
            className="text-[#007EA7] hover:text-[#005f7f] hover:underline transition-colors font-medium"
          >
            About
          </Link>
          <div className="flex items-center space-x-[30px]">
            <Link
              href="/contact"
              className="text-[#007EA7] hover:text-[#005f7f] hover:underline transition-colors font-medium"
            >
              Let's Chat
            </Link>
            <a
              href="https://www.linkedin.com/in/vickimorawietz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007EA7] hover:text-[#005f7f] transition-colors flex items-center"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

