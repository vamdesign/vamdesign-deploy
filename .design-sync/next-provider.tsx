// Outside a Next.js app, usePathname() returns null and LabDropdown /
// UseCasesDropdown (and so Nav) throw when their menus open. This supplies the
// pathname context Next's router would, so active-item highlighting works too.
import * as React from "react"
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"

export function SiteRouteProvider({ pathname = "/", children }: { pathname?: string; children?: React.ReactNode }) {
  return <PathnameContext.Provider value={pathname}>{children}</PathnameContext.Provider>
}
