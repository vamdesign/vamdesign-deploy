import Nav from "@/components/nav"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F0F6F9]">
      <Nav />
      <div className="pt-24 pb-16 px-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-[#007EA7] mb-12 text-center">Engage() // Ready to Collaborate</h1>
        <div className="flex flex-col md:flex-row gap-12">
          <form className="space-y-6 flex-1">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">
                Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="Identify"
                className="w-full font-montserrat bg-white border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">
                Email*
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Initializing connection"
                required
                className="w-full font-montserrat bg-white border-gray-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#007EA7] mb-1 font-montserrat">
                Message*
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Let's start this collaboration!"
                required
                className="w-full h-32 font-montserrat bg-white border-gray-300"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="rounded-[100px] border border-white bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          <div className="flex-1 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Contact Us"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </main>
  )
}

