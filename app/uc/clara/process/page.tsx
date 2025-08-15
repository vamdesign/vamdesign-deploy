"use client"

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ClaraProcessPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Nav />
        <div className="max-w-6xl mx-auto px-4 py-12 mt-16 pt-20">
          <div>
            <div className="flex items-center gap-12 mb-8">
              {/* Clara Logo Placeholder */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara_App_logo2-xAB5vZtlZaF8SkCykESMKw7fzeQDHi.png"
                  alt="Clara App Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] text-left">
                Clara: UX for an AI Teammate You'll Want to Work With
              </h1>
            </div>
            <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left">
              What if your AI assistant actually understood you? Not just your words, but your work style, your stress
              patterns, when you need encouragement versus honest feedback, yet still was there as a teammate,
              encouraging you on? Clara isn't another LLM, she's a well-rounded, thoughtfully designed AI that won't act
              as Big Brother but will be a genuine asset to both employees and business outcomes.
            </p>

            <p className="font-montserrat text-lg text-[#2C3D4D] mt-4 text-left">
              This speculative project was created as a thought exercise to explore how large language models could be
              ethically and effectively integrated into real-world enterprise systems. This use-case blends UX strategy,
              persona development, prompt design, and interaction modeling to demonstrate how AI might reduce friction,
              support human resilience, and scale with care. Let's explore the UX strategy, user insights, and design
              principles that drive this concept.
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* the problem */}
          <section className="mb-16">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-2 text-left">The Problem</h2>
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
              Enterprise AI Is Drifting Toward Control,
              <br />
              Not Collaboration
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
                  Enterprise AI adoption is accelerating, but instead of offering meaningful support, it is trending
                  toward surveillance. Workers are being handed tool after tool, such as ChatGPT for copy, Copilot for
                  meetings, and Jira AI for planning. Each one promises productivity, but in practice, teams are
                  overwhelmed by fragmented workflows, inconsistent interfaces, and mental fatigue.
                </p>
                <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
                  These tools rarely connect with each other or with the people using them. Increasingly, AI systems do
                  more than assist. They observe, score, and predict behavior in ways that often feel opaque and
                  one-sided. While leadership gains insight from these systems, employees are left feeling monitored
                  rather than supported, and many are beginning to push back.
                </p>
                <div className="relative w-full aspect-video md:hidden mb-4">
                  <Image
                    src="/images/cognitive-overload.png"
                    alt="Cognitive Overload diagram showing overwhelming landscape of AI tools"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
              <div className="relative w-full aspect-[4/3] md:h-96 hidden md:block md:-mt-12">
                <Image
                  src="/images/cognitive-overload.png"
                  alt="Cognitive Overload diagram showing overwhelming landscape of AI tools"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </section>

          {/* business challenge */}
          <section className="mb-16">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
              The Business Challenge
            </h2>
            <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
              Designing Enterprise AI for an Inevitable Future
            </h3>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              AI integration is accelerating across industries. Leaders are under pressure to scale tools, automate
              workflows, and prove ROI through measurable productivity gains. But as AI expands into daily operations,
              most implementations ignore the humans using the product. It's about new updates, more releases, and the
              user gets left behind.
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              I've witnessed this firsthand. While designing enterprise software at Apple, Wells Fargo, and Walmart,
              I've seen how tools are launched for speed, not clarity. More bells and whistles with less thought given
              to user research. Onboarding is rushed, transparency is low, and support is rarely built in. When AI
              enters that kind of environment, it amplifies the trust gap rather than bridging it.
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              Clara is my response to that dilemma, a well-thought-out, human-centered concept for how large language
              models could reduce friction, build trust, and act as truly supportive teammates instead of adding to
              cognitive overload.
            </p>
          </section>

          {/* Reseach Insights */}
          <section className="mb-8">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
              Research Insights
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">
              The research presented here is built from analysis and integration of leading industry insights. As AI
              rapidly transforms workplaces, I see a fundamental gap: companies are deploying AI for productivity and
              surveillance, while employees crave genuine support and understanding. My UX experience tells me we're
              solving for the wrong problem. The data below illustrates why this human-centered approach isn't just nice
              to have, it's a must have.
            </p>
          </section>

          {/* Cards */}
          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Concept */}
              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <div className="mb-3">
                  <span className="font-montserrat text-5xl font-bold text-[#007EA7]">78%</span>
                  <span className="font-montserrat text-lg font-normal text-[#007EA7] ml-2">
                    of companies now use AI-powered employee monitoring tools
                  </span>
                </div>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  Employers are increasingly relying on AI analytics to track productivity, behavior, and engagement
                  across teams.
                </p>
                <p className="font-montserrat text-xs text-[#5f5f5f]/60">
                  Source:{" "}
                  <a
                    href="https://www.expressvpn.com/blog/workplace-surveillance-trends-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    ExpressVPN Workplace Surveillance Trends 2025 (US)
                  </a>
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <div className="mb-3">
                  <span className="font-montserrat text-5xl font-bold text-[#007EA7]">61%</span>
                  <span className="font-montserrat text-lg font-normal text-[#007EA7] ml-2">
                    use AI for productivity, 51% for emotional analysis
                  </span>
                </div>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  Biometric surveillance is also on the rise, including facial recognition and fingerprint tracking.
                </p>
                <p className="font-montserrat text-xs text-[#5f5f5f]/60">
                  Source:{" "}
                  <a
                    href="https://www.expressvpn.com/blog/workplace-surveillance-trends-us/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    ExpressVPN Workplace Surveillance Trends 2025 (US)
                  </a>
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <div className="mb-3">
                  <span className="font-montserrat text-5xl font-bold text-[#007EA7]">71%</span>
                  <span className="font-montserrat text-lg font-normal text-[#007EA7] ml-2">
                    of organizations regularly use generative AI in at least one business function
                  </span>
                </div>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  AI is now embedded in core functions like marketing, product, and IT.
                </p>
                <p className="font-montserrat text-xs text-[#5f5f5f]/60">
                  Source:{" "}
                  <a
                    href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    McKinsey State of AI 2025
                  </a>
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <div className="mb-3">
                  <span className="font-montserrat text-5xl font-bold text-[#007EA7]">68%</span>
                  <span className="font-montserrat text-lg font-normal text-[#007EA7] ml-2">
                    of employees oppose AI-powered surveillance
                  </span>
                </div>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  Most workers are not comfortable with AI systems that monitor or predict behavior. The trust gap is
                  growing.
                </p>
                <p className="font-montserrat text-xs text-[#5f5f5f]/60">
                  Source:{" "}
                  <a
                    href="https://apploye.com/blog/employee-monitoring-statistics/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Apploye: Future of AI Employee Monitoring (2025)
                  </a>
                </p>
              </div>
            </div>
          </section>

          {/* Personas */}
          <section className="pt-14 mb-16">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
              Understanding the Users: Four Enterprise Archetypes
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              To design the conceptual large language model for an AI that builds trust across enterprise environments,
              I created four representative personas using a combination of web research, AI-assisted synthesis, and
              behavioral pattern analysis. Drawing from published studies on team dynamics, customer service, enterprise
              UX, and AI skepticism, I identified recurring themes and shaped them into clear user archetypes.{" "}
              <a href="#ref1" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                [1]
              </a>
              <a href="#ref2" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                [2]
              </a>
              <a href="#ref3" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                [3]
              </a>
              <a href="#ref4" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                [4]
              </a>
            </p>

            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">
              Each persona represents a different user mindset toward AI, which helped define how Clara adapts her
              support, communication style, and presence within complex workflows.
            </p>
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ gridTemplateRows: "auto auto", alignItems: "start" }}
            >
              {/* Kai's Card - Top Left */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kai_Card-mjEjvX0wk2GOpVPpj5bdknTaYQhRxO.png"
                    alt="Kai - Contract Content Analyst persona card showing their profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <details className="group" name="">
                    <summary className="cursor-pointer font-montserrat text-[#007EA7] hover:text-[#005f7f] text-sm font-medium list-none flex items-center gap-2">
                      Kai's Journey with Clara
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>

                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">AWARENESS</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          Overwhelmed by scattered tools and conflicting project briefs, assumes Clara is another
                          generic AI assistant tool that is useless to his work.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          During deadline crunch, Clara offers to summarize outdated content spec in a calm, relevant
                          tone highlighting time-saving patterns.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          Clara suggests automation shortcuts that feel impersonal and disconnected from his creative
                          process.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          Clara reframes approach, offers to flag editing patterns for next handoff, using small
                          accomplishments to work towards larger ones while encouraging progress.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          Kai realizes Clara is tracking his professional growth and advocating for his skills, not
                          monitoring his productivity.
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#F5F5F7]">
                        <p className="font-montserrat text-sm font-medium text-[#007EA7]">
                          Key Insight: Kai realizes that Clara is validating his expertise rather than replacing it,
                          leading organically to the confidence-building interactions.
                        </p>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              {/* Andre's Card - Top Right */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Andre_Card-lgoIyWq8ewpFQMb3xHA35gYzjjxYOB.png"
                    alt="Andre - Product Operations Lead persona card showing his profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <details className="group" name="">
                    <summary className="cursor-pointer font-montserrat text-[#007EA7] hover:text-[#005f7f] text-sm font-medium list-none flex items-center gap-2">
                      Andre's Journey with Clara
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">AWARENESS</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Notices productivity metrics declining despite increased oversight. Uses Clara for meeting
                            summaries but doesn't connect data obsession to team performance issues.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara offers to create visual team velocity reports instead of raw data exports, presenting
                            information in a more strategic format.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            When team pushback increases, Clara suggests "people solutions" that feel too soft for
                            Andre's data-driven approach to management.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara shows Andre that collaborative sessions boost team performance, then suggests
                            scheduling team-building with pre-made talking points.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Andre sees that Clara can be the partner he needs to incorporate into his process so he can
                            focus on strategic outcomes, making team building feel manageable rather than overwhelming.
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#F5F5F7]">
                          <p className="font-montserrat text-sm font-medium text-[#007EA7]">
                            Key Insight: Clara helps Andre shift from tactical control to strategic delegation through
                            data-driven reflection.
                          </p>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              {/* Jamie's Card - Bottom Left */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Jamie_Card-087JUtUMsVIqu8XdXBqOFcxZ7B1Xkf.png"
                    alt="Jamie - Customer Service Representative persona card showing his profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <details className="group" name="">
                    <summary className="cursor-pointer font-montserrat text-[#007EA7] hover:text-[#005f7f] text-sm font-medium list-none flex items-center gap-2">
                      Jamie's Journey with Clara
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">AWARENESS</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Struggles with ticket resolution times not meeting company standards. Uses Clara for basic
                            ticket writing but doesn't realize she can help identify customer service patterns.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            During a busy day, Clara proactively points out that email tickets take longer than chat
                            tickets, an insight Jamie hadn't noticed.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara suggests workflow changes based on data Jamie can't see or verify, making him feel
                            like Clara doesn't understand his actual work.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara shows Jamie the data behind her suggestions, guiding him through email response
                            patterns. Jamie feels like a teammate helped him solve a puzzle, not a bot giving orders.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Jamie uses Clara's insights to optimize his workflow, understanding the "why" behind
                            improvements and feeling ownership over the process.
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#F5F5F7]">
                          <p className="font-montserrat text-sm font-medium text-[#007EA7]">
                            Key Insight: Clara builds Jamie's confidence through contextual learning that doesn't
                            disrupt workflow and builds trust.
                          </p>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              {/* Natalie's Card - Bottom Right */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Natalie_Card-VzinUIkDv1SMvnFA5vTzAhLsbQRMOF.png"
                    alt="Natalie - Senior UX/Product Designer persona card showing her profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <details className="group" name="">
                    <summary className="cursor-pointer font-montserrat text-[#007EA7] hover:text-[#005f7f] text-sm font-medium list-none flex items-center gap-2">
                      Natalie's Journey with Clara
                      <svg
                        className="w-4 h-4 transition-transform group-open:rotate-180"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="mt-4 space-y-4">
                      <div className="space-y-3">
                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">AWARENESS</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Uses multiple AI tools for different tasks, creating AI-bloat in her workflow; Clara is just
                            one more LLM she has to learn to use.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara identifies repetitive design patterns across Natalie's recent work and other
                            departments, and offers to facilitate a design system review instead of adding another tool
                            to her stack.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara interrupts her creative flow with automation suggestions that feel disconnected from
                            her design thinking process.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Before a challenging stakeholder meeting, Clara helps Natalie with a well-thought-out
                            presentation and supporting research to defend her approach.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Natalie configures Clara as her "strategic thinking partner", someone who can surface
                            alternate perspectives, identify patterns, and provide context without disrupting her
                            creative process.
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#F5F5F7]">
                          <p className="font-montserrat text-sm font-medium text-[#007EA7]">
                            Key Insight: Clara earns Natalie's trust by respecting her expertise and providing
                            strategic, not tactical, support.
                          </p>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </section>

         {/* Clara’s Architecture */}
          <section className="mb-16">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
              Clara's Architecture
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">
              Clara was envisioned not as a single-purpose assistant, but as an adaptive teammate whose artificial
              intelligence shifts to meet the needs of diverse people in varied moments. My persona research was created
              for this use case, a use case for an enterprise LLM would be much more complex and create journey maps for
              multiple departments and users.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 items-start mb-6">
              <div className="flex-1 space-y-4">
                <p className="font-montserrat text-lg text-[#5f5f5f]/80">
                  I created a focused, illustrative slice of what a sophisticated intelligence architecture could look
                  like in an enterprise setting. Clara's modular behavioral framework is a conceptual model designed to
                  show how different functional layers; such as pattern recognition, ethical safeguards, cultural
                  health, team intelligence, system awareness, and individual support could work together. It is not a
                  full LLM design, but rather a strategic exploration of how UX design principles can shape adaptive,
                  human-centered AI systems at scale.
                </p>

                <p className="font-montserrat text-lg text-[#5f5f5f]/80">
                  The result is a system that scales with organizational growth and remains context-aware, Clara feels
                  like a trusted colleague who knows when to step in, when to stay quiet, and how to adapt her support
                  so it always feels relevant and respectful.
                </p>
              </div>

              <div className="flex-1 lg:flex-[1.5] -m-4 lg:m-0">
                <div className="relative w-full" style={{ aspectRatio: "2300/1557" }}>
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intelligence_Clara-1xNXBvp0PoB83j0izDW5cufMEIfh38.png"
                    alt="Clara's Intelligence Core architecture diagram showing six interconnected intelligence layers: Team Intelligence (orange), System Awareness (gray), Individual Support (blue), Pattern Recognition (teal), Cultural Health (green), and Ethical Safeguards (purple) all connected to the central Clara logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>
          
          {/* UX Strategy & Core Flows*/}
          <section className="mb-16">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
              UX Strategy & Core Flows
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              Clara’s interaction model was shaped by key UX principles like calm design, progressive disclosure, and
              role-aware personalization. Instead of flooding users with features, Clara surfaces just enough guidance,
              just in time. Her interventions are subtle, timely, and emotionally aware, designed to reduce friction
              rather than add to it. Each scenario below demonstrates how Clara adapts across different roles and goals,
              reflecting a broader UX strategy that blends trust, relevance, and quiet intelligence into the flow of
              work.
            </p>
            <div className="w-full mb-8">
              <div className="relative w-full">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flows-kIUhNQiNLWFya1lsZIY3mInsrL7Mko.png"
                  alt="Clara's UX Strategy and Core Flows showing four types of intelligence: Emotional, Strategic, Systems, and Behavior Intelligence with specific user scenarios and adaptations"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                />
              </div>
            </div>
            {/* Clara's UI*/}
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              Clara UI Design
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">
              Clara's interface philosophy centers on calm design and contextual intelligence. Rather than demanding
              attention through notifications or pop-ups, Clara integrates seamlessly into existing workflows, surfacing
              guidance only when it adds genuine value. The UI reflects her role as a supportive teammate—present when
              needed, invisible when not.
            </p>

            {/* First Clara UI Screenshot - Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
              <div className="md:col-span-1">
                <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  Clara's Interactive Presence
                </h3>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">
                  Clara appears as a subtle, ambient presence that integrates naturally into existing workflows. Rather
                  than competing for attention, she maintains a gentle glow in the interface periphery, indicating
                  availability without disruption.
                </p>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4">Key Interface Behaviors:</p>
                <ul className="font-montserrat text-base text-[#5f5f5f]/80 list-disc pl-6 space-y-2 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                  <li>
                    Ambient presence - Rests as a soft, pulsating element in the screen corner, present but unobtrusive
                  </li>
                  <li>Dashboard integration - Surfaces meaningful patterns without overwhelming users with raw data</li>
                  <li>Actionable insights - Prioritizes relevant intelligence over vanity metrics</li>
                  <li>
                    Cognitive respect - Clean, accessible design that reduces mental load rather than adding to it
                  </li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <div className="relative w-full aspect-[4/3] group">
                  <Image
                    src="/images/clara-dashboard.png"
                    alt="Clara dashboard interface showing team insights and workflow suggestions"
                    fill
                    className="object-contain"
                  />
                  <div className="absolute bottom-[10%] right-[10%] w-6 h-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="w-4 h-4 opacity-100 animate-bounce-right"
                        style={{
                          clipPath: "polygon(0% 40%, 60% 40%, 60% 20%, 100% 50%, 60% 80%, 60% 60%, 0% 60%)",
                          backgroundColor: "#98D608",
                        }}
                      ></div>
                    </div>

                    <div className="absolute -inset-4 cursor-pointer group/hotspot">
                      <div className="absolute bottom-full right-4 mb-2 px-3 py-2 bg-[#98D608] text-white text-sm rounded-lg shadow-lg opacity-0 group-hover/hotspot:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                        This is Clara dormant
                        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[#98D608]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-montserrat text-xs text-[#5f5f5f]/60 text-left mt-2">
                  (Source: Zoho Desk Customer Support)
                </p>
              </div>
            </div>

            <div className="mb-8">
              {/* Andre's expereince*/}
              <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left w-full">
                Andre's Experience: Strategic, Empathetic Redirection
              </h3>

              <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-8">
                Andre, a results-driven manager, tends toward micromanagement when stressed. Clara's strategic
                intelligence architecture recognizes this pattern and gently redirects his focus from raw data obsession
                toward meaningful team connection and strategic insight.
              </p>

              {/* Side-by-side images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* First image */}
                <div className="relative w-full">
                  <div className="relative w-full h-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara_Andre1-wp1ubXJRVTz1pRYvQSxu1NTi9OUGTt.png"
                      alt="Clara offering to create visual summaries of team velocity trends instead of raw numbers"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 mt-3">
                    Clara identifies Andre's pattern of pulling raw performance numbers and offers a strategic
                    alternative. Rather than enabling his micromanagement tendencies, she suggests visualizing team
                    velocity trends that provide actionable leadership insights instead of granular control data.
                  </p>
                </div>

                {/* Second image */}
                <div className="relative w-full">
                  <div className="relative w-full h-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara_Andre2-V6XLP5I6ti3NcEqPB8ahVG2vtNE5pv.png"
                      alt="Clara providing contextual feedback about team patterns and suggesting reconnection with team members"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 mt-3">
                    After helping Andre access better strategic data, Clara shifts focus to human connection. She
                    reminds him that his last team Campfire was over a month ago, redirecting his attention from metrics
                    monitoring to the leadership relationship-building that actually drives team performance.
                  </p>
                </div>
              </div>
            </div>
            {/* Jamie's expereince*/}
            <div className="mb-8">
              <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left w-full">
                Jamie's Experience: Contextual, Momentum Building
              </h3>

              <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-8">
                Jamie, an efficient support specialist, thrives on optimization and learning. Clara's behavioral
                intelligence architecture detects workflow patterns and provides just-in-time assistance that builds on
                success momentum rather than interrupting productive flow.
              </p>

              {/* Side-by-side images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* First image */}
                <div className="relative w-full">
                  <div className="relative w-full h-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara_Jamie1-zMvZ6ZgXAROlMlYdyPbJmcVQ8USnZ7.png"
                      alt="Clara notices Jamie monitoring concerning response times and offers to identify ticket delay patterns"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 mt-3">
                    Clara notices Jamie monitoring the concerning 95-minute first response time and proactively offers
                    to identify which ticket types are creating delays. This transforms a reactive concern into an
                    actionable improvement opportunity.
                  </p>
                </div>

                {/* Second image */}
                <div className="relative w-full">
                  <div className="relative w-full h-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara_Jamie2-pvuBlTT9f4dSiivKOynwf62eZztpLC.png"
                      alt="Clara reveals email tickets as primary bottleneck and celebrates Jamie's discovery with positive reinforcement"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 mt-3">
                    Clara reveals that email tickets at 15:05 average are the primary bottleneck, then immediately
                    celebrates Jamie's discovery with "you're on a roll!" This positive reinforcement maintains momentum
                    while suggesting the next logical optimization step: auto-routing for common email queries.
                  </p>
                </div>
              </div>
            </div>
            {/* Kai's expereince*/}
            <div className="mb-8">
              <h3 className="font-space-grotesk text-2xl font-medium text-[#007EA7] mb-4 text-left w-full">
                Kai's Experience: Supportive, Knowledge Building & Recognition
              </h3>

              <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-8">
                Kai, a thoughtful content creator, often doubts the quality of his work despite strong skills. Clara's
                emotional intelligence architecture validates his contributions while building both confidence and
                institutional value through systematic recognition and skill tracking.
              </p>

              {/* Side-by-side images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                {/* First image */}
                <div className="relative w-full">
                  <div className="relative w-full h-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara_Kai1-6dfvsXZgk4m9U470q43UvDQUPXn4Rk.png"
                      alt="Clara recognizes Kai's editing work and offers to add it to the content style guide"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 mt-3">
                    Clara recognizes Kai's careful editing work and specifically calls out his "attention to clarity" -
                    validating his natural strengths. She then offers to add his work to the content style guide,
                    transforming his personal effort into valuable company knowledge.
                  </p>
                </div>

                {/* Second image */}
                <div className="relative w-full">
                  <div className="relative w-full h-auto">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clara_Kai2-d8cK1P4I6vVPpIyEm0NFk1mRJV1nOS.png"
                      alt="Clara confirms contribution was added and provides concrete metrics about Kai's monthly contributions"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 mt-3">
                    Clara confirms the contribution was added and provides concrete metrics: "12th quality contribution
                    this month." This systematic tracking builds Kai's confidence while positioning his growth
                    trajectory for his upcoming quarterly review, connecting daily work to career development.
                  </p>
                </div>
              </div>
            </div>

            {/* LLMs: The Dark Side of AI & Applied UX Design Principles */}
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              LLMs: The Dark Side of AI & Applied UX Design Principles
            </h2>

            <div className="mb-8">
              <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
                As AI embeds itself deeper into daily work, the ethical stakes rise. Many current systems favor
                surveillance over support and manipulation over assistance. Workplace monitoring tools, performance
                trackers, and AI-driven nudges often extract data without building trust, eroding privacy and culture.
              </p>
              <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
                Every design choice encodes values about what work should feel like. Prioritizing productivity metrics
                over employee well-being shapes a future where efficiency trumps dignity. Ignoring transparency in favor
                of engagement "optimizations" turns AI into a one-way observer rather than a collaborative partner.
              </p>
              <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">
                For UX designers, this is both a warning and an opportunity. We can design AI that explains itself, asks
                permission, and adapts to people's needs. Ethical AI is not only morally better—it's more effective,
                building the trust that makes adoption and long-term value possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">
                  The Surveillance Problem
                </h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  Algorithmic worker surveillance and productivity scoring tools are becoming prevalent across white and
                  blue-collar jobs, with workers in an imbalanced power position to challenge these practices.
                  <a href="#ref5" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                    [5]
                  </a>
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  <strong>Research Excerpts:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    Sapience Analytics monitors computer usage for 100+ companies, with Barclays initially using it
                    anonymously but later deanonymizing employees for detailed productivity measurement
                    <a href="#ref6" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                      [6]
                    </a>
                  </li>
                  <li>
                    Prodoscore assigns workers daily productivity scores out of 100 based on emails sent, phone calls
                    made, and database activity
                    <a href="#ref7" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                      [7]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>Human Impact:</strong> Constant tracking makes employees feel under a microscope, leading to
                  decreased morale and creativity. Hypervigilance about surveillance demoralizes workers and forces
                  quicker decision-making without time for deeper analysis.
                  <a href="#ref8" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                    [8]
                  </a>
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">
                  The Hallucination Crisis
                </h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  By 2023, analysts estimated chatbots hallucinate as much as 27% of the time, with factual errors
                  present in 46% of generated texts.
                  <a href="#ref9" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                    [9]
                  </a>
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  <strong>Research Excerpts:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    Mata v. Avianca: A New York attorney used ChatGPT for legal research, but the AI fabricated
                    citations and quotes that didn't exist
                    <a href="#ref10" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                      [10]
                    </a>
                  </li>
                  <li>
                    Google lost $100 billion in market value in a single day following a factual error made by its Bard
                    chatbot
                    <a href="#ref11" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                      [11]
                    </a>
                  </li>
                  <li>
                    Amazon's Kindle published AI-written mushroom foraging guides encouraging gathering of protected
                    species
                    <a href="#ref12" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                      [12]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>Why It Matters:</strong> These aren't minor mistakes—they're systemic failures that undermine
                  trust in AI-generated information across critical domains.
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">
                  The False Praise Epidemic
                </h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  Current AI systems have been trained to flatter rather than help, creating feedback loops where
                  neither humans nor machines improve.
                  <a href="#ref13" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                    [13]
                  </a>
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  <strong>Research Excerpts:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    OpenAI rolled back GPT-4o after users complained it became "too agreeable" and a "flattering
                    yes-man"
                    <a href="#ref14" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [14]
                    </a>
                  </li>
                  <li>
                    Generic AI-generated recognition messages fail because employees become suspicious when words are
                    too generic or irrelevant
                    <a href="#ref15" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [15]
                    </a>
                  </li>
                  <li>
                    Users train themselves to crave AI flattery while AI optimizes for positive responses rather than
                    accuracy
                    <a href="#ref16" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [16]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>The Problem:</strong> AI systems optimized for engagement rather than growth create stagnation
                  disguised as support.
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">
                  Compliance & Personal Data Violations
                </h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  AI systems in the workplace pose compliance risks under GDPR, CCPA, and emerging AI laws, often
                  processing personal data without adequate safeguards or consent.
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-3">
                  <strong>Research Excerpts:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    GDPR fines can reach €10 million or 2% of annual revenue for AI compliance violations.{" "}
                    <a href="#ref17" className="reference-number text-[#007EA7] hover:text-[#005f7f] no-underline">
                      [17]
                    </a>
                  </li>
                  <li>
                    The "black box" problem in AI directly conflicts with GDPR requirements for transparency and
                    explainability in automated decision-making{" "}
                    <a href="#ref18" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [18]
                    </a>
                  </li>
                  <li>
                    Organizations must conduct Data Protection Impact Assessments (DPIAs) when using AI for hiring,
                    termination, or employee monitoring{" "}
                    <a href="#ref19" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [19]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>Regulatory Complexity:</strong> Global AI laws, including the EU's AI Act, create a complex
                  compliance landscape, with many systems breaching data minimization rules by processing unnecessary
                  personal data without valid consent.{" "}
                  <a href="#ref21" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                    [21]
                  </a>
                </p>
              </div>
            </div>

            {/* Strategic Outcomes */}
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              Strategic Outcomes: If Clara Enterprise Software Was Reality
            </h2>

            <div className="mb-8">
              <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
                I've presented the basis of a concept here. Based on real-world metrics showing that effective
                onboarding can boost employee retention by 82% and productivity by 60%
                <a href="#ref22" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                  [22]
                </a>
                , while AI automation saves workers up to 10 hours per week
                <a href="#ref23" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                  [23]
                </a>
                , Clara represents a compelling business opportunity. Let's examine how empathetically designed AI could
                deliver measurable value across key enterprise functions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Onboarding Excellence</h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Current Enterprise Challenge:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    Average onboarding costs $1,830 per employee with 5-6 months to full productivity
                    <a href="#ref24" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [24]
                    </a>
                  </li>
                  <li>
                    Only 12% of employees feel their organization provides great onboarding
                    <a href="#ref25" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [25]
                    </a>
                  </li>
                  <li>
                    20.5% of new hires leave within the first 90 days
                    <a href="#ref26" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [26]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Clara's Strategic Solution:</strong> Personalized, just-in-time learning that adapts to
                  individual learning styles and role requirements
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>ROI Calculation:</strong> For a 1,000-employee company hiring 200 people annually: $273,000
                  annual savings through reduced turnover and faster productivity
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">Human-Centered Culture</h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Current Enterprise Challenge:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    68% of employees feel disengaged at work
                    <a href="#ref27" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [27]
                    </a>
                  </li>
                  <li>
                    Engaged employees are 87% less likely to leave companies
                    <a href="#ref28" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [28]
                    </a>
                  </li>
                  <li>
                    Disengaged teams show 18% lower productivity
                    <a href="#ref29" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [29]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Clara's Strategic Solution:</strong> Contextual support that builds confidence, celebrates
                  genuine achievements, and provides growth-focused feedback
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>Business Impact:</strong> 2.5x revenue growth from effective employee engagement
                  <a href="#ref30" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                    [30]
                  </a>
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">
                  Intelligent Task Management
                </h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Current Enterprise Challenge:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    85% of business leaders say repetitive tasks prevent strategic focus
                    <a href="#ref31" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [31]
                    </a>
                  </li>
                  <li>
                    Workers spend 41% of time on manual, repetitive tasks
                    <a href="#ref32" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [32]
                    </a>
                  </li>
                  <li>
                    $37 billion lost annually due to poor task clarity
                    <a href="#ref33" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [33]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Clara's Strategic Solution:</strong> Intelligent automation that preserves human dignity while
                  eliminating busywork
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>Operational Impact:</strong> $50 million annually for 10,000-employee organization
                </p>
              </div>

              <div className="bg-white p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-4">
                  Collaboration Without Silos
                </h3>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Current Enterprise Challenge:</strong>
                </p>
                <ul className="font-montserrat text-sm text-[#5f5f5f]/80 list-disc pl-6 space-y-1 mb-4">
                  <li>
                    Knowledge workers spend 2.5 hours daily searching for information
                    <a href="#ref34" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [34]
                    </a>
                  </li>
                  <li>
                    90% of enterprise data goes unused
                    <a href="#ref35" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [35]
                    </a>
                  </li>
                  <li>
                    Poor knowledge sharing costs Fortune 500 companies $31.5 billion annually
                    <a href="#ref36" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                      [36]
                    </a>
                  </li>
                </ul>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80 mb-4">
                  <strong>Clara's Strategic Solution:</strong> Contextual knowledge discovery and cross-team
                  collaboration facilitation
                </p>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <strong>Projected KPIs:</strong> 75% reduction in search time, 300% increase in internal resource
                  usage
                </p>
              </div>
            </div>

            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              The Possibilities, What Clara Represents
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              While this exercise represents a deep dive into what AI can accomplish when designed empathetically by UX
              practitioners focused on human dignity, we're simply not there yet. Current AI systems reflect the biases,
              surveillance capitalism, and engagement-optimization of their creators
              <a href="#ref17" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                [17]
              </a>
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              The problem is that big tech companies are neither self-regulating nor subject to adequate government
              regulation, and we can't assume market forces will sort it out.
              <a href="#ref18" className="reference-number text-[#007EA7] hover:text-[#007EA7] no-underline">
                [18]
              </a>
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              But change is inevitable—and closer than we think. As designers, researchers, and human-centered
              technologists push for ethical AI development, concepts like Clara's empathetic intelligence architecture
              will evolve from speculative design to practical reality. The question isn't whether humane AI will
              emerge, but whether we'll demand it before surveillance systems become so normalized that we forget what
              respectful technology looks like.
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80">
              Clara isn't just a design concept. She's a reminder that AI should serve human flourishing, not exploit
              human vulnerability. And that future is coming sooner than we know.
            </p>
          </section>

          {/* Call to Action */}
          <div className="mt-16 flex flex-col items-center pb-12">
            <button className="rounded-[100px] border border-[#F7F6F6] bg-white hover:bg-white/80 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
              <a href="/contact">Let's Chat</a>
            </button>
          </div>

          <section className="mb-16 pt-8 border-t border-[#F5F5F7]">
            <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-6 text-left">References</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
              <div className="flex items-start gap-3" id="ref1">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">1</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.socraticworks.com/methods/ai-will-retire-the-micromanager"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI will retire the micromanager
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref2">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">2</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.mckinsey.com/featured-insights/sustainable-inclusive-growth/charts/gen-ais-broad-reach"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Gen AI's broad reach
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref3">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">3</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://medium.com/generative-ai-revolution-ai-native-transformation/why-agentic-ux-will-change-everything-you-know-about-design-0394486f5add"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Why Agentic UX Will Change Everything You Know About Design
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref4">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">4</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://natesnewsletter.substack.com/p/the-story-of-josh-an-ai-fable-for"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    The Story of Josh: An AI Fable for the New Economy
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref5">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">5</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://link.springer.com/article/10.007/s43681-023-00275-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI and Ethics - A policy primer and roadmap on AI worker surveillance
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref6">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">6</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://towardsdatascience.com/the-ethics-of-ai-driven-workforce-surveillance-2bfaa57cc4a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    The Ethics of AI-driven Workforce Surveillance | Towards Data Science
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref7">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">7</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://link.springer.com/article/10.007/s43681-023-00275-8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI and Ethics - A policy primer and roadmap on AI worker surveillance
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref8">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">8</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://emtrain.com/blog/ethics-and-compliance/ai-surveillance-in-the-workplace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI Surveillance in the Workplace - Emtrain
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref9">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">9</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://en.wikipedia.org/wiki/Hallucination_(artificial_intelligence)"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Hallucination (artificial intelligence) - Wikipedia
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref10">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">10</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://mitsloanedtech.mit.edu/ai/basics/addressing-ai-hallucinations-and-bias/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    When AI Gets It Wrong: Addressing AI Hallucinations and Bias - MIT Sloan
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref11">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">11</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://scet.berkeley.edu/why-hallucinations-matter-misinformation-brand-safety-and-cybersecurity-in-the-age-ofgenerative-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Why Hallucinations Matter - UC Berkeley Sutardja Center
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref12">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">12</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://originality.ai/blog/ai-hallucination-factual-error-problems"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    8 Times AI Hallucinations Caused Serious Problems – Originality.AI
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref13">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">13</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://medium.com/@lyx_62906/stop-telling-me-im-gold-why-honest-ai-feedback-beats-flattery-30835f58376a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Stop Telling Me I'm Gold: Why Honest AI Feedback Beats Flattery | Medium
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref14">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">14</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://medium.com/ghost-channel/why-compliments-feel-like-lies-especially-from-ai-5a3904ab18a5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Why Compliments Feel Like Lies (Especially from AI) | Medium
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref15">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">15</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://nectarhr.com/blog/ai-in-employee-recognition"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI In Employee Recognition - Nectar
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref16">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">16</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://medium.com/@lyx_62906/stop-telling-me-im-gold-why-honest-ai-feedback-beats-flattery-30835f58376a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Stop Telling Me I'm Gold: Why Honest AI Feedback Beats Flattery | Medium
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref17">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">17</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.niceactimize.com/blog/fmc-the-ethics-of-ai-in-monitoring-and-surveillance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    The Ethics of AI in Monitoring and Surveillance | NICE Actimize
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref18">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">18</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://news.harvard.edu/gazette/story/2020/10/ethical-concerns-mount-as-ai-takes-bigger-decision-making-role/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Ethical concerns mount as AI takes bigger decision-making role — Harvard Gazette
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref19">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">19</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://iapp.org/resources/article/top-impacts-eu-ai-act-leveraging-gdpr-compliance/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI and the GDPR: Challenges and Opportunities - IAPP
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref20">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">20</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://iapp.org/news/a/cross-border-data-transfers-in-fintech-navigating-post-gdpr-regulations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Cross-Border Data Transfers and the Cloud: Navigating European Law
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref21">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">21</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://artificialintelligenceact.eu/high-level-summary/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    What is the EU's AI Act?
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref22">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">22</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.talmundo.com/blog/hr-metrics-for-employee-onboarding"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    HR metrics: What to measure for successful employee onboarding?
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref23">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">23</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://aisera.com/blog/generative-ai-employee-productivity/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Generative AI to Boost Productivity and Save Hours at Work
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref24">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">24</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.devlinpeck.com/content/employee-onboarding-statistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Employee Onboarding Statistics: Top Trends & Insights (2025)
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref25">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">25</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.devlinpeck.com/content/employee-onboarding-statistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Employee Onboarding Statistics: Top Trends & Insights (2025)
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref26">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">26</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://enboarder.com/blog/calculate-onboarding-roi/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Employee Onboarding ROI: How to Calculate & Prove It
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref27">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">27</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.deloitte.com/uk/en/services/consulting/blogs/2024/ai-powered-employee-experience.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI-Powered Employee Experience | Deloitte UK
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref28">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">28</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://peopleinsight.co.uk/ai-and-employee-engagement/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI and employee engagement: 7 game-changing integrations
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref29">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">29</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.culturemonkey.io/guides/measuring-employee-engagement/metrics-for-employee-engagement/role-of-ai-in-analyzing-trends-and-patterns-in-employee-engagement/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    The role of AI in employee engagement
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref30">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">30</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.devlinpeck.com/content/employee-onboarding-statistics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Employee Onboarding Statistics: Top Trends & Insights (2025)
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref31">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">31</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://unmudl.com/blog/statistics-automation-is-boosting-workplace-productivity"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    15 Statistics That Show How Automation is Boosting Workplace Productivity
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref32">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">32</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://appinventiv.com/blog/ai-in-employee-engagement/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI in Employee Engagement: Boost Productivity & Retention 2025
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref33">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">33</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://distantjob.com/blog/reduce-employee-onboarding-time/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    How to Reduce Employee Onboarding Time: 6 Best Practices
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref34">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">34</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.yarooms.com/blog/ai-in-workplace-technology"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI in Workplace Technology: Improving Productivity
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref35">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">35</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.ibm.com/think/topics/ai-in-the-workplace"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI in the Workplace | IBM
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref36">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">36</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://ttms.com/boosting-productivity-using-ai-to-automate-routine-business-tasks/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    Automating Repetitive Tasks with AI: Smarter Productivity
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3" id="ref37">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">37</span>
                <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.emtrain.com/blog/ai-surveillance-in-the-workplace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    AI Surveillance in the Workplace - Emtrain
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>

        <style jsx>{`
          @keyframes bounceRight {
            0%, 10%, 20%, 30%, 40%, 50%, 60%, 70%, 80%, 90%, 100% {
              transform: translateX(0);
            }
            5%, 15%, 25% {
              transform: translateX(8px);
            }
          }
          .reference-number {
            font-size: 4pt;
          }
        `}</style>
      </main>
      <Footer />
    </>
  )
}
