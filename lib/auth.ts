// lib/auth.ts
// Strict authentication service that requires password for the landing page

const PASSWORD = "vamdesign"; // Your existing password

// Get section name from path (/uc/apple -> apple)
export function getSectionFromPath(path: string): string | null {
  // Extract the section after /uc/
  const match = path.match(/\/uc\/([^\/]+)/);
  return match ? match[1] : null;
}

// Check if this is a subpage path (/uc/apple/details or /uc/apple/process)
export function isSubpagePath(path: string): boolean {
  return !!path.match(/\/uc\/[^\/]+\/[^\/]+/);
}

// Get the specific subpages that should be accessible
export function getAuthorizedSubpages(): string[] {
  if (typeof window === 'undefined') return [];
  
  const subpages = sessionStorage.getItem('authorizedSubpages');
  return subpages ? JSON.parse(subpages) : [];
}

// Add subpages to the authorized list
export function authorizeSubpages(section: string): void {
  if (typeof window === 'undefined') return;
  
  // Add the details and process pages for this section
  const subpages = [
    `/uc/${section}/details`,
    `/uc/${section}/process`
  ];
  
  sessionStorage.setItem('authorizedSubpages', JSON.stringify(subpages));
}

// Check if a specific subpage is authorized
export function isSubpageAuthorized(path: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const authorizedSubpages = getAuthorizedSubpages();
  return authorizedSubpages.includes(path);
}

// Get landing pages that have been authenticated
export function getAuthenticatedLandingPages(): string[] {
  if (typeof window === 'undefined') return [];
  
  const pages = sessionStorage.getItem('authenticatedLandingPages');
  return pages ? JSON.parse(pages) : [];
}

// Check if a landing page has been authenticated
export function isLandingPageAuthenticated(path: string): boolean {
  if (typeof window === 'undefined') return false;
  
  const authenticatedLandingPages = getAuthenticatedLandingPages();
  return authenticatedLandingPages.includes(path);
}

// Authenticate a landing page and its subpages
export function authenticateLandingPage(path: string, password: string): boolean {
  if (password !== PASSWORD) return false;
  
  const section = getSectionFromPath(path);
  if (!section) return false;
  
  // Add landing page to authenticated pages
  const authenticatedLandingPages = getAuthenticatedLandingPages();
  if (!authenticatedLandingPages.includes(path)) {
    authenticatedLandingPages.push(path);
    sessionStorage.setItem('authenticatedLandingPages', JSON.stringify(authenticatedLandingPages));
  }
  
  // Authorize the subpages for this section
  authorizeSubpages(section);
  
  return true;
}

// Clear authentication for all pages
export function clearAllAuthentication(): void {
  if (typeof window === 'undefined') return;
  sessionStorage.removeItem('authenticatedLandingPages');
  sessionStorage.removeItem('authorizedSubpages');
}

// Clear authentication for a specific section
export function clearSectionAuthentication(section: string): void {
  if (typeof window === 'undefined') return;
  
  // Clear landing page authentication
  const authenticatedLandingPages = getAuthenticatedLandingPages();
  const landingPage = `/uc/${section}`;
  const filteredLandingPages = authenticatedLandingPages.filter(page => page !== landingPage);
  sessionStorage.setItem('authenticatedLandingPages', JSON.stringify(filteredLandingPages));
  
  // Clear subpage authorization
  const authorizedSubpages = getAuthorizedSubpages();
  const filteredSubpages = authorizedSubpages.filter(page => !page.startsWith(`/uc/${section}/`));
  sessionStorage.setItem('authorizedSubpages', JSON.stringify(filteredSubpages));
}