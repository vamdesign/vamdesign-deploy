import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const referer = request.headers.get("referer") || ""

  // For debugging
  console.log("Middleware running for path:", pathname)
  console.log("Referer:", referer)

  // Exclude specific paths from password protection
  const excludedPaths = ["/uc/river", "/uc/ai", "/uc/apple", "/uc/walmart"]

  // Also exclude their subpages
  const isExcludedSubpage = /^\/uc\/(river|ai|apple|walmart)\/(details|process)$/.test(pathname)

  // Skip middleware for excluded paths and their subpages
  if (excludedPaths.includes(pathname) || isExcludedSubpage) {
    console.log("Path excluded from password protection")
    return NextResponse.next()
  }

  // Check if this is a UC landing page (direct access to /uc/something)
  const isUcLandingPage = /^\/uc\/[^/]+$/.test(pathname)

  // Check if this is a UC subpage (details or process)
  const isUcSubpage = /^\/uc\/([^/]+)\/(details|process)$/.test(pathname)

  // Extract the UC name (e.g., "apple" from "/uc/apple" or "/uc/apple/details")
  const ucName = pathname.split("/")[2]

  // Check if coming directly from the passcode page
  const isComingFromPasscode = referer.includes("/passcode")

  // For landing pages and subpages, check authentication
  if (isUcLandingPage || isUcSubpage) {
    console.log("UC page detected:", pathname)

    // Get the auth cookie for this specific UC
    const authCookie = request.cookies.get(`auth-${ucName}`)
    console.log("Auth cookie:", authCookie?.value)

    // If coming from passcode page, allow access
    if (isComingFromPasscode) {
      console.log("Coming from passcode page, allowing access")
      return NextResponse.next()
    }

    // If authenticated for this specific UC, allow access
    if (authCookie && authCookie.value === "authenticated") {
      console.log("Authenticated for this UC, allowing access")
      return NextResponse.next()
    }

    // Otherwise, redirect to passcode
    console.log("Authentication required, redirecting to passcode")
    const url = new URL("/passcode", request.url)
    url.searchParams.set("returnUrl", pathname)
    url.searchParams.set("uc", ucName)
    return NextResponse.redirect(url)
  }

  // For all other pages, allow access
  console.log("Non-UC page, allowing access")
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

