import Nav from "@/components/nav"
import Image from "next/image"

export default function WalmartFulfillmentAppPage() {
  return (
    <main className="min-h-screen bg-white">
      <Nav />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/walmart3-fsrZ5OyPHTFiNPyfKttZVF8K2EoQSJ.png"
          alt="Walmart Fulfillment Center Visualization"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="max-w-6xl mx-auto px-4 py-12 z-10 w-full">
          <div className="max-w-[60%]">
            <h1 className="font-space-grotesk text-5xl font-bold text-white mb-8 text-left drop-shadow-sm">
              Lorem Ipsum Dolor Sit Amet
            </h1>
            <p className="font-montserrat text-lg text-white mt-8 text-left drop-shadow-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <ul className="font-montserrat text-sm text-white mt-4 text-left list-none space-y-2 max-w-[90%]">
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
              </li>
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</span>
              </li>
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</span>
              </li>
              <li className="flex items-start drop-shadow-sm">
                <span className="mr-2">•</span>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</span>
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
            Lorem Ipsum Dolor Sit Amet
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </p>
              <div className="relative w-full aspect-video md:hidden mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Walmart Fulfillment App Placeholder"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              <p className="font-montserrat text-lg text-[#5f5f5f]/80">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum.
              </p>
            </div>
            <div className="relative w-full aspect-video hidden md:block md:-mt-20">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Walmart Fulfillment App Placeholder"
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
            Our solution focused on the following key objectives:
          </p>
          <ul className="font-montserrat text-md text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua
            </li>
            <li>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </li>
            <li>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur
            </li>
            <li>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </li>
            <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</li>
          </ul>
        </section>

        {/* UX Process Graph */}
        <section className="mb-16">
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="UX Process Workflow Placeholder"
            width={800}
            height={400}
            className="w-full mb-8"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Concept */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Concept</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</li>
              </ul>
            </div>

            {/* Ideation */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Ideation</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Duis aute irure dolor in reprehenderit in voluptate velit esse</li>
                <li>Excepteur sint occaecat cupidatat non proident</li>
                <li>Sunt in culpa qui officia deserunt mollit anim id est laborum</li>
              </ul>
            </div>

            {/* Collaborate */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Collaborate</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Sed ut perspiciatis unde omnis iste natus error sit voluptatem</li>
                <li>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</li>
                <li>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet</li>
              </ul>
            </div>

            {/* Iteration */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Iteration</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Consectetur, adipisci velit, sed quia non numquam eius modi tempora</li>
                <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam</li>
                <li>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</li>
              </ul>
            </div>

            {/* Validation */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Validation</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>At vero eos et accusamus et iusto odio dignissimos ducimus</li>
                <li>Et harum quidem rerum facilis est et expedita distinctio</li>
                <li>Nam libero tempore, cum soluta nobis est eligendi optio cumque</li>
              </ul>
            </div>

            {/* Delivery */}
            <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
              <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Delivery</h3>
              <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-4 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus</li>
                <li>Itaque earum rerum hic tenetur a sapiente delectus</li>
                <li>Ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Challenges & Solutions */}
        <section className="mb-16 pt-14">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-8 text-left">
            Key Challenges & Solutions
          </h2>
          <div className="w-full">
            <Image
              src="/placeholder.svg?height=800&width=1200"
              alt="Key Challenges and Solutions Placeholder"
              width={1200}
              height={800}
              className="w-full"
            />
          </div>
        </section>

        {/* Outcome & Impact */}
        <section className="mb-16">
          <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">Outcome & Impact</h2>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
          <ul className="space-y-4 list-disc pl-6 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </li>
            <li className="font-montserrat text-md text-[#5f5f5f]/80">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
            </li>
          </ul>

          <h3 className="font-space-grotesk text-2xl font-semibold text-[#007EA7] mt-8 mb-4 text-left">Next Steps</h3>
          <p className="font-montserrat text-lg text-[#5f5f5f]/80">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
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

