import { Input } from 'vamdesign-portfolio'

// Mirrors the contact page form (app/contact/page.tsx): teal Montserrat labels,
// font-montserrat inputs on the page's pale blue background.
const Page = ({ children }: { children: React.ReactNode }) => (
  <div className="w-[420px] bg-gradient-to-b from-[#E0F0F7] to-[#F0F6F9] p-6">{children}</div>
)

export const ContactField = () => (
  <Page>
    <label htmlFor="name" className="mb-1 block font-montserrat text-sm font-medium text-[#007EA7]">Name*</label>
    <Input id="name" placeholder="Identify" className="w-full font-montserrat" />
  </Page>
)

export const Filled = () => (
  <Page>
    <label htmlFor="email" className="mb-1 block font-montserrat text-sm font-medium text-[#007EA7]">Email*</label>
    <Input id="email" type="email" defaultValue="jordan@company.com" className="w-full font-montserrat" />
  </Page>
)

export const Error = () => (
  <Page>
    <label htmlFor="email2" className="mb-1 block font-montserrat text-sm font-medium text-[#007EA7]">Email*</label>
    <Input id="email2" type="email" placeholder="Initializing connection" className="w-full border-red-500 font-montserrat focus:border-red-500" />
    <div className="mt-1 text-sm text-red-500">Please enter a valid email</div>
  </Page>
)
