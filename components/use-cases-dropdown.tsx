"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Lock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";

export type UseCase = {
  name: string;
  href: string;
  isProtected?: boolean;
  cookieName?: string;
};

export const useCases: UseCase[] = [
  { name: "Apple – Internal Apps", href: "/uc/apple/details" },
  { name: "Wells Fargo – Legacy Integration", href: "/uc/wellsf/details", isProtected: true, cookieName: "auth-wellsf" },
  { name: "Walmart – Fulfillment App", href: "/uc/walmart/details" },
  { name: "Littler – Management App", href: "/uc/litman/details", isProtected: true, cookieName: "auth-litman" },
  { name: "Riverbed – B2B UX Strategies", href: "/uc/river/details" },
  { name: "Clara – Ethical Enterprise AI", href: "/uc/clara/details" },
  { name: "Designing with AI – UX Portfolio", href: "/uc/ai/details" },
];

export function UseCasesDropdown() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* EXACT same look/size/color as your other nav links + underline on hover */}
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center bg-transparent p-0 rounded-none text-[#007EA7] font-medium hover:underline underline-offset-4 hover:text-[#005f7f] focus:outline-none focus:ring-0"
        aria-haspopup="menu"
        aria-expanded={open}
      >
        Use Cases
        <motion.span
          className="ml-1 inline-flex"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.15 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-80 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
          >
            <ul className="py-2">
              {useCases.map((uc) => {
                const authed = uc.cookieName ? Cookies.get(uc.cookieName) === "authenticated" : true;
                const href =
                  uc.isProtected && !authed
                    ? `/passcode?returnUrl=${encodeURIComponent(uc.href)}&uc=${uc.href.split("/")[2]}`
                    : uc.href;
                const active = pathname === uc.href;

                return (
                  <li key={uc.name}>
                    <Link
                      href={href}
                      className={`flex items-center justify-between px-4 py-2 text-slate-700 hover:bg-[#007EA7]/10 hover:text-[#005f7f] ${active ? "bg-[#007EA7]/10" : ""}`}
                    >
                      <span>{uc.name}</span>
                      {uc.isProtected && <Lock className="h-3.5 w-3.5 opacity-70" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
