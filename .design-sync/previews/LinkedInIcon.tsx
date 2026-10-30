import { LinkedInIcon } from 'vamdesign-portfolio'

export const InNav = () => (
  <a href="#" className="text-[#007EA7] hover:text-[#005f7f]">
    <LinkedInIcon className="h-4 w-4" />
  </a>
)

export const WithLabel = () => (
  <a href="#" className="flex items-center text-[#007EA7]">
    <LinkedInIcon className="mr-2 h-4 w-4" />
    <span>LinkedIn</span>
  </a>
)

export const Large = () => <LinkedInIcon className="h-8 w-8 text-[#007EA7]" />
