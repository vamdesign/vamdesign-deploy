"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export type LabItem = {
  name: string;
  href: string;
  /** When set, menu item is active for any path under this prefix (e.g. details + process). */
  activePathPrefix?: string;
};

/** Lab prototypes. Trailing slashes must align with next.config trailingSlash: true. */
export const labItems: LabItem[] = [
  { name: "MakerPilot — Mobile Inventory App", href: "/lab/makerpilot/", activePathPrefix: "/lab/makerpilot" },
  { name: "UX Portfolio", href: "/lab/ux-portfolio/", activePathPrefix: "/lab/ux-portfolio" },
  { name: "All Reviews – Mobile App", href: "/lab/coming-soon/" },
];

export function LabDropdown() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const rootRef = React.useRef<HTMLDivElement | null>(null);

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
      <button
        onClick={() => setOpen(v => !v)}
        className="flex items-center bg-transparent p-0 rounded-none text-[#007EA7] font-medium hover:underline underline-offset-4 hover:text-[#005f7f] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007EA7]/40"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="lab-menu"
      >
        Lab
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
            id="lab-menu"
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-80 rounded-xl bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-black/5 overflow-hidden z-50"
          >
            <ul className="py-2">
              {labItems.map((item, index) => {
                const pathNorm = pathname.replace(/\/$/, "");
                const hrefNorm = item.href.replace(/\/$/, "");
                const prefix = item.activePathPrefix?.replace(/\/$/, "");
                const active = prefix
                  ? pathNorm === prefix || pathNorm.startsWith(`${prefix}/`)
                  : pathname === item.href || pathNorm === hrefNorm;

                return (
                  <li key={`lab-${index}`} role="none">
                    <Link
                      href={item.href}
                      role="menuitem"
                      className={`block px-4 py-2 transition-colors ${
                        active ? "bg-[#007EA7]/10" : "hover:bg-[#007EA7]/10"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2 text-sm text-[#007EA7] hover:text-[#005f7f]">
                        {item.name}
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

