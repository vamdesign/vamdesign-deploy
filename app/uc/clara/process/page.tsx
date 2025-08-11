"use client"

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ClaraProcessPage() {
  return (
    <>
      <main className="min-h-screen bg-white">
        <Nav />
        <div className="sticky top-16 mt-0 z-20 w-full bg-[rgba(199,246,234,0.7)] backdrop-blur-sm border-y border-[#007EA7]/10">
          <div className="max-w-6xl mx-auto px-4 py-2 flex items-center">
            <Link
              href="/uc/clara/details"
              className="text-[#6E6E73] hover:text-[#000000] text-sm flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Prefer the highlights? Return to the summary.
            </Link>
          </div>
        </div>

        {/* Content Section - Moved up to replace hero */}
        <div className="max-w-6xl mx-auto px-4 py-12 mt-16">
          <div>
            <div className="flex items-center gap-12 mb-8">
              {/* Clara Logo Placeholder */}
              <div className="relative w-32 h-32 flex-shrink-0">
                <div className="w-full h-full bg-[#F5F5F7] rounded-lg flex items-center justify-center">
                  <div className="text-4xl">🤖</div>
                </div>
              </div>
              <h1 className="font-space-grotesk text-5xl font-bold text-[#007EA7] text-left">
                Clara: UX for an AI Teammate You'll Want to Work With
              </h1>
            </div>
            <p className="font-montserrat text-lg text-[#2C3D4D] mt-8 text-left">
              As the Senior UX Designer of Clara, I conceived of an emotionally intelligent LLM assistant that
              reimagines enterprise AI, not as a task optimizer or standalone tool, but as a trusted teammate grounded
              in empathy, adaptability, and behavioral insight.
            </p>

            <p className="font-montserrat text-lg text-[#2C3D4D] mt-4 text-left">
              This speculative project was created as a thought exercise to explore how large language models could be
              ethically and effectively integrated into real-world enterprise systems. The work blends UX strategy,
              persona development, prompt design, and interaction modeling to demonstrate how AI might reduce friction,
              support human resilience, and scale with care.
            </p>

            <ul className="font-montserrat text-sm text-[#2C3D4D] mt-4 text-left list-none space-y-2 max-w-[90%]">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Designed adaptive conversation models based on persona research, customizing tone, guidance, and
                  interaction for key enterprise roles
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Created an eight-layer support system addressing onboarding, wellness, compliance, and
                  cross-functional collaboration
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Built privacy-conscious behavioral frameworks that surface trends over time without intrusive tracking
                  or performance monitoring
                </span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>
                  Defined ethical principles around transparency, consent, and role-based escalation to support autonomy
                  and trust at scale
                </span>
              </li>
            </ul>
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
              most implementations fail to account for the human experience.
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              While designing enterprise software at Apple, Wells Fargo, and Walmart, I’ve seen how tools are often
              launched for speed, not clarity. Onboarding is rushed, transparency is low, and support is rarely built
              in. When AI enters that kind of environment, it can widen the trust gap. Clara is my response to that
              challenge, a concept for how large language models could be used to reduce friction, build trust, and act
              as a truly supportive teammate instead of adding to cognitive overload.
            </p>
          </section>

          {/* Reseach Insights */}
          <section className="mb-8">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-4 text-left">
              Research Insights
            </h2>
            <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-8">
              This research draws not from interviews, but from analysis and synthesis of leading industry insights.
              <a href="#ref1" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ¹
              </a>
              <a href="#ref2" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ²
              </a>
              <a href="#ref3" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ³
              </a>
              <a href="#ref4" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ⁴
              </a>
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
              To design the conceptual LLM for an AI that builds trust across enterprise environments, I created four
              representative personas using a combination of web research, AI-assisted synthesis, and behavioral pattern
              analysis. Drawing from published studies on team dynamics, customer service, enterprise UX, and AI
              skepticism, I identified recurring themes and shaped them into clear user archetypes.{" "}
              <a href="#ref1" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ¹
              </a>
              <a href="#ref2" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ²
              </a>
              <a href="#ref3" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ³
              </a>
              <a href="#ref4" className="text-[#007EA7] hover:text-[#005f7f] no-underline">
                ⁴
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
                    src="/images/kai-card.png"
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
                          generic AI assistant
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          During deadline crunch, Clara quietly offers to summarize outdated content spec in a calm,
                          relevant tone
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          Clara nudges him to document editing patterns, bristles at suggestion, assumes he's being
                          tracked or critiqued
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          Clara reframes: "I notice you've made similar edits across three documents. Would you like me
                          to flag this pattern for your next contract handoff?"
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                        <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                          Configures Clara for editorial planning and project context, uses her to track standards and
                          prep updates
                        </p>
                      </div>

                      <div className="pt-2 border-t border-[#F5F5F7]">
                        <p className="font-montserrat text-sm font-medium text-[#007EA7]">
                          Key Insight: Clara builds trust with contract workers by offering continuity support, not
                          performance monitoring.
                        </p>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              {/* Jamie's Card - Top Right */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto">
                  <Image
                    src="/images/marcus-card.png"
                    alt="Jamie - Customer Service persona card showing his profile, pain points, and Clara's approach"
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
                            Struggles with repetitive questions after product update, notices Clara as sidebar tool but
                            doesn't engage
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Accidentally activates Clara during ticket tagging, receives shortcut tip that saves time
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara suggests macro workflow Jamie doesn't understand, feels dumb and considers turning
                            Clara off
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara offers contextual guidance with clear examples and no jargon. Jamie tests it during
                            live tickets and sees it work, begins trusting Clara's workflow suggestions
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Creates macros with Clara's help, workflow improves, feels ownership over processes for the
                            first time
                          </p>
                        </div>

                        <div className="pt-2 border-t border-[#F5F5F7]">
                          <p className="font-montserrat text-sm font-medium text-[#007EA7]">
                            Key Insight: Clara builds Jamie's confidence through contextual learning that doesn't
                            disrupt workflow.
                          </p>
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              </div>

              {/* Andre's Card - Bottom Left */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto">
                  <Image
                    src="/images/david-card.png"
                    alt="Andre - Product Operations Lead card showing his profile, pain points, and Clara's approach"
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
                            Notices delays in reporting, assumes Clara is just another workflow bot
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Tests Clara for meeting summaries, sticks with micromanagement habits despite nudges
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Team isn't responding to detailed tracking requests, Clara surfaces low ROI data, Andre
                            doubts his system
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara prompts: "Which metrics drive team performance?" Andre engages with strategic
                            dashboard view
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Reduces micromanagement, sees improved team responsiveness, uses Clara for pre-meeting prep
                            and async strategy briefs
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

              {/* Natalie's Card - Bottom Right */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto">
                  <Image
                    src="/images/natalie-card.png"
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
                            Finds Clara intrusive during high-focus sessions, disables auto-suggestions but intrigued by
                            prompt quality
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Uses Clara selectively for brainstorming and critique validation, appreciates internal
                            design language refs
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara interrupts flow with automation suggestion, frustrated that expertise isn't respected
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            During tough stakeholder meeting, Clara surfaces alternate design argument that helps defend
                            approach
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-sm text-[#5f5f5f]/80">
                            Clara becomes personalized thinking tool, configured as 'silent strategist' for high-stakes
                            synthesis
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
              Clara’s Architecture
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              I envisioned Clara’s intelligence system as a layered support model that evolves alongside the enterprise.
              Designed to expand over time, it continuously learns and adapts, integrating new behavioral insights into
              its architecture. Each interaction is guided by modular behavioral logic that responds to user roles,
              emotional context, and team goals making Clara feel empathetic, timely, and trustworthy rather than
              overwhelming.
            </p>

            {/* Clara's Architecture Graphic */}
            <div className="w-full flex justify-center mb-8">
              <div className="relative w-full max-w-4xl aspect-video">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Intel_Clara-loXhJTitEKV0a9EpM8mrMpfzvLiI4Y.png"
                  alt="Clara's Intelligence Core architecture diagram showing six interconnected layers: Team Intelligence, System Awareness, Individual Support, Cultural Health, Pattern Recognition, and Ethical Safeguards"
                  fill
                  className="object-contain rounded-lg"
                />
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Flows-t2anzOZUqtp15PMv9CH9o5F5nUSztR.png"
                  alt="Clara's UX Strategy and Core Flows showing four types of intelligence: Emotional, Strategic, Systems, and Behavior Intelligence with specific user scenarios and adaptations"
                  width={1200}
                  height={900}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
            {/* Clara UI Design*/}
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              Clara UI Design
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              Clara's interface prioritizes calm presence over disruption. As an ambient intelligence layer, she takes
              the form of a soft, floating element that adapts its behavior and appearance based on user context. Clara
              is designed for both light and dark modes, adjusting seamlessly to enterprise environments. Her visual
              system favors subtlety and purpose, offering support through quiet cues, accessible interactions, and
              thoughtful timing. Rather than demanding attention, Clara builds trust by being where she's needed, when
              she's needed, and never in the way.
            </p>

            {/* First 2-column section */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
                  Toggle between sidebar chat, inline tips, and Campfire dashboard
                </p>
              </div>
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Clara UI sidebar chat interface showing toggle between different interaction modes"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            {/* Second 2-column section */}
            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
                  Adaptive visual tone and calm palettes for user trust. Accessible, enterprise-friendly system that
                  avoids gimmicks and focuses on meaningful interactions that support workflow rather than interrupt it.
                </p>
              </div>
              <div className="relative w-full aspect-video">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Clara's adaptive visual design system showing calm color palettes and enterprise-friendly interface elements"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            </div>

            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              Ethical Design Principles
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              Transparent interactions with user-first logic
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">Consent-aware nudges with opt-in memory</p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              Escalation only with role-based triggers and approval
            </p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">Clara isn't just helpful. She's humane.</p>

            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              Strategic Outcomes (Sample KPIs)
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">+30% onboarding success rate</p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">-45% redundant task volume</p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">+2x async contributions via Campfire</p>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">
              +25% user-reported trust, clarity, and morale
            </p>

            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              What Clara Represents
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80">
              Clara is a thought experiment in designing AI that feels like a teammate, not a tracker, monitor, or tool.
              She blends strategy, behavior modeling, ethical design, and user trust into a cohesive system ready for
              enterprise evolution.
            </p>
          </section>

          {/* Call to Action */}
          <section className="mb-16">
            <div className="flex flex-col items-center">
              <p className="font-montserrat text-md text-[#007EA7]/80 max-w-xl mb-8 text-left">
                Interested in a behind-the-scenes look and detailed presentation?{" "}
                <Link href="/contact" className="text-[#007EA7] hover:text-[#005f7f] underline">
                  Contact me
                </Link>{" "}
                to schedule a portfolio review and learn more about the Clara project.
              </p>
              <button className="rounded-[100px] border border-[#F7F6F6] white bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
                <a href="/contact">Let's Chat</a>
              </button>
            </div>
          </section>

          {/* Footnotes Section */}
          <section className="mb-16 pt-8 border-t border-[#F5F5F7]">
            <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-6 text-left">References</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3" id="ref1">
                <span className="font-montserrat text-sm text-[#007EA7] font-medium">¹</span>
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
                <span className="font-montserrat text-sm text-[#007EA7] font-medium">²</span>
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
                <span className="font-montserrat text-sm text-[#007EA7] font-medium">³</span>
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
                <span className="font-montserrat text-sm text-[#007EA7] font-medium">⁴</span>
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
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
