import { Input, Textarea } from 'vamdesign-portfolio'

const Label = ({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) => (
  <label htmlFor={htmlFor} className="mb-1 block font-montserrat text-sm font-medium text-[#007EA7]">{children}</label>
)

export const ContactMessage = () => (
  <div className="w-[420px] bg-gradient-to-b from-[#E0F0F7] to-[#F0F6F9] p-6">
    <Label htmlFor="message">Message*</Label>
    <Textarea id="message" placeholder="Let's start this collaboration!" className="h-32 w-full font-montserrat" />
  </div>
)

// The full contact form as composed on the site, with its pill submit button.
export const ContactForm = () => (
  <div className="w-[520px] bg-gradient-to-b from-[#E0F0F7] to-[#F0F6F9] p-8">
    <h1 className="mb-8 text-center text-2xl font-bold text-[#007EA7]">(Engage) // Ready to Collaborate</h1>
    <form className="space-y-6">
      <div>
        <Label htmlFor="f-name">Name*</Label>
        <Input id="f-name" placeholder="Identify" className="w-full font-montserrat" />
      </div>
      <div>
        <Label htmlFor="f-email">Email*</Label>
        <Input id="f-email" type="email" placeholder="Initializing connection" className="w-full font-montserrat" />
      </div>
      <div>
        <Label htmlFor="f-msg">Message*</Label>
        <Textarea id="f-msg" placeholder="Let's start this collaboration!" className="h-32 w-full font-montserrat" />
      </div>
      <div className="flex justify-center">
        <button type="button" className="rounded-[100px] border border-white bg-white/60 px-8 py-2.5 font-medium text-[#007ea7] transition-all duration-500 hover:bg-white/90">
          Send Message
        </button>
      </div>
    </form>
  </div>
)
