import Nav from "@/components/nav"
import Image from "next/image"

export default function AppleInternalToolsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/apple%20background3-x5xkagc6J8i7QtIS9b6nyPb2yVPH50.png"
          alt="Apple Abstract Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
          <div className="max-w-[60%]">
            <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] mb-8 text-left drop-shadow-sm">
              Driving UX Innovation in Customer Support Applications
            </h1>
            <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left drop-shadow-sm">
              As the Senior UX Designer for internal applications through AMP Agency, I led the UX strategy for
              their macOS-based customer service management platform. My responsibilities included:
            </p>
            <ul className="font-montserrat text-sm text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-[90%]">
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>
                  Designing and implementing new functionality to optimize user workflows and enhance task efficiency
                </span>
              </li>
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>
                  Developing holistic UX strategies to streamline processes, reduce friction, and align with internal KPIs
                </span>
              </li>
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>
                  Creating high-fidelity mockups while ensuring branding consistency and securing stakeholder buy-in
                </span>
              </li>
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>
                  Developing and implementing a scalable design system, driving 70% adoption across teams to improve UI
                  consistency and efficiency
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Use Case */}
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-2 text-left">Use Case</h2>
          <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
            Designing the Customer Support Experience
            <br />
            for a Video Shopping Platform
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
                A client set out to enhance its customer service by bridging the gap between online and in-store shopping,
                bringing the Genius Bar experience to a digital platform.
              </p>
              <div className="relative w-full aspect-video md:hidden mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple300px-DjMx2swz7yi48oFtpYg6NR3MD3BQsV.png"
                  alt="Apple Specialist offering one-on-one shopping experience online or in store"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="font-montserrat text-lg text-[#5f5f5f]/80">
                As the lead UX designer, I designed a video-guided shopping experience within the internal customer
                service platform, creating a seamless and intuitive interaction between specialists and customers.
              </p>
            </div>
            <div className="relative w-full aspect-video hidden md:block md:-mt-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Apple300px-DjMx2swz7yi48oFtpYg6NR3MD3BQsV.png"
                alt="Specialist offering one-on-one shopping experience online or in store"
                fill
                className="object-contain rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Objectives and Goals */}
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            Context & Business Challenge
          </h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            The COVID-19 pandemic significantly impacted in-store sales, requiring the client to rethink how it engaged customers remotely. Their solution was to create an online shopping experience that mirrored the in-store Genius Bar interactions. This approach allowed specialists to guide customers in real-time, assisting with product selection and purchasing while ensuring a seamless, compliant experience similar to FaceTime.
          </p>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            The client tasked us with designing a new component for their internal customer service application, enabling representatives to video chat and assist customers in live shopping experiences on the online store. This system integrated with the customer-facing platform, allowing representatives to take on the role of an in-store Genius while seamlessly managing the existing customer service interface, ensuring real-time support and operational efficiency.
          </p>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            Our solution focused on the following key objectives:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>Enable real-time, guided shopping assistance for specialists and customers</li>
            <li>Maintain a seamless user experience across both internal and customer-facing platforms</li>
            <li>Minimize onboarding time by designing an intuitive and easily adoptable interface</li>
            <li>
              Ensure minimal friction and align with key performance indicators (KPIs), including faster
              onboarding, increased customer engagement, and higher conversion rates
            </li>
          </ul>
        </section>

        {/* My Role & Key Contributions */}
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
            My Role & Key Contributions
          </h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            As a Senior UX Designer, I was responsible for:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>
              Rapidly defining the UX strategy by leveraging my deep understanding of internal applications and
              past experience, while collaborating with AMP's project managers to craft and present a comprehensive
              solution to the client's product and engineering teams
            </li>
            <li>Translating complex workflows into intuitive designs that specialists could adopt quickly</li>
            <li>Optimizing usability while ensuring compliance with security protocols</li>
            <li>
              Integrating video shopping functionality within their internal application, leveraging existing UI
              components
            </li>
            <li>Driving KPI-based results: higher close rates, increased upsells, and improved user satisfaction</li>
          </ul>
        </section>

        {/* UX Process Graph */}
        <section className="mb-16">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/UXProcessGraph-h7YiQNA87FwTpyQznKcrb8J5QZ5N37.svg"
            alt="UX Process Workflow"
            width={800}
            height={400}
            className="w-full mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Concept</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Developed UX strategy aligned with existing workflows</li>
                <li>Identified key business needs and technical constraints</li>
                <li>Defined core interactions and navigation patterns</li>
              </ul>
            </div>

            {/* Ideation */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Ideation</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Created low-fidelity sketches and wireframes</li>
                <li>Aligned concepts with design standards</li>
                <li>Prioritized usability and accessibility in interactions</li>
              </ul>
            </div>

            {/* Collaborate */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Collaborate</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Aligned with AMP and client product teams</li>
                <li>Facilitated cross-functional discussions</li>
                <li>Ensured smooth concept-to-development transition</li>
              </ul>
            </div>

            {/* Iteration */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Iteration</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Designed 80+ screens for comprehensive coverage</li>
                <li>Refined designs through feedback sessions</li>
                <li>Optimized workflows based on user testing</li>
              </ul>
            </div>

            {/* Validation */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Validation</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Evaluated API and backend constraints</li>
                <li>Tested interaction patterns for efficiency</li>
                <li>Optimized for device adaptability to ensure a seamless experience across different Mac hardware setups</li>
              </ul>
            </div>

            {/* Delivery */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Delivery</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Created comprehensive design documentation</li>
                <li>Provided detailed interaction specifications</li>
                <li>Supported seamless platform integration</li>
              </ul>
            </div>
          </div>


          {/* Key Challenges & Solutions */}
          <section className="mb-16 pt-14">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">
              Key Challenges & Solutions
            </h2>
            <div className="w-full">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Challnge_Solutions-n2dyNXQDrm7dqnlCD23BJcMC9r9Xfb.svg"
                alt="Key Challenges and Solutions"
                width={1200}
                height={800}
                className="w-full"
              />
            </div>
          </section>

          {/* Outcome & Impact */}
          <section className="mb-16">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
              Outcome & Impact
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              Apple's shift toward video-guided shopping redefined how specialists connect with customers, creating a seamless bridge between online and in-store experiences. By embedding this capability within the existing customer service platform, specialists were equipped with tools to provide real-time, expert-driven support while maintaining Apple's signature level of service. This transformation not only streamlined workflows and boosted engagement but also set the foundation for a more scalable, intelligent, and interactive future in digital customer assistance.
            </p>
            <ul className="space-y-4 list-disc pl-6 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
              <li className="font-montserrat text-md text-[#5f5f5f]/80">
                Revolutionized the online shopping experience, seamlessly bridging the gap between digital and in-store interactions, resulting in an improved and immersive customer journey.
              </li>
              <li className="font-montserrat text-md text-[#5f5f5f]/80">
                Increased specialist efficiency, significantly reducing onboarding time and enhancing workflow adoption through an intuitive and familiar interface.
              </li>
              <li className="font-montserrat text-md text-[#5f5f5f]/80">
                Drove higher conversion rates, leveraging guided product recommendations that improved purchase confidence and overall customer satisfaction.
              </li>
              <li className="font-montserrat text-md text-[#5f5f5f]/80">
                Enhanced scalability and future innovation, laying the foundation for advanced personalization, AI-assisted shopping experiences, and expanded interactivity to evolve Apple's customer service model.
              </li>
            </ul>

            <h3 className="font-space-grotesk text-2xl font-semibold text-[#007EA7] mt-8 mb-4 text-left">
              Next Steps
            </h3>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80">
              This project served as the foundation for Apple's next evolution in virtual shopping and customer engagement. Future enhancements will focus on expanding personalization, AI-assisted guidance, and improved API functionality.
            </p>
          </section>

          {/* Call to Action */}
          <section className="mb-16 text-center">
            <button className="rounded-[100px] border border-[#F7F6F6] white bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
              <a href="/contact">Let's Chat</a>
            </button>
          </section>
        </div>
    </main>
  )
}

