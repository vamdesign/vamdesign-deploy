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
  { name: "Clara – Ethical Enterprise AI", href: "/uc/clara" }, // no /details
  { name: "Designing with AI – UX Portfolio", href: "/uc/ai/details" },
];

export function UseCasesDropdown() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const rootRef = React.useRef<HTMLDivElement | null>(null);

  // close when focus leaves
  const onBlur: React.FocusEventHandler<HTMLDivElement> = () => {
    setTimeout(() => {
      const el = rootRef.current;
      if (el && document.activeElement && !el.contains(document.activeElement)) {
        setOpen(false);
      }
    }, 0);
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={onBlur}
    >
      {/* trigger matches other links; underline on hover; arrow flips */}
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center bg-transparent p-0 rounded-none text-[#007EA7] font-medium hover:underline underline-offset-4 hover:text-[#005f7f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007EA7]/40"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="use-cases-menu"
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
        {open ? (
          <motion.div
            id="use-cases-menu"
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-80 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
          >
            <ul className="py-2">
              {useCases.map((uc, index) => {
                const authed = uc.cookieName ? Cookies.get(uc.cookieName) === "authenticated" : true;
                const href =
                  uc.isProtected && !authed
                    ? `/passcode?returnUrl=${encodeURIComponent(uc.href)}&uc=${uc.href.split("/")[2]}`
                    : uc.href;
                const active = pathname === uc.href;

                return (
                  <li key={`usecase-${index}`} role="none">
                    <Link
                      href={href}
                      role="menuitem"
                      className={`block px-4 py-2 transition-colors ${
                        active ? "bg-[#007EA7]/10" : "hover:bg-[#007EA7]/10"
                      }`}
                    >
                      {/* small text, blue; lock inline right after text */}
                      <span className="inline-flex items-center gap-2 text-sm text-[#007EA7] hover:text-[#005f7f]">
                        {uc.name}
                        {uc.isProtected ? <Lock className="h-[14px] w-[14px]" aria-hidden="true" /> : null}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
