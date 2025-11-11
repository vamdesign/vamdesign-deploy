"use client"

import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"

export default function ClaraProcessPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div>
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6 md:gap-12 mb-8">
              {/* Clara Logo - Added responsive sizing */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 flex-shrink-0">
                <Image
                  src="/images/clara/Clara_App_logo2.png"
                  alt="Clara App Logo"
                  width={160}
                  height={160}
                  className="object-contain"
                  priority
                />
              </div>

              {/* Title - Improved responsiveness */}
              <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] mb-4 sm:mb-8 text-center md:text-left">
                Clara: Designing AI as a Trusted Teammate, Not a Monitor
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
          <section className="mb-8 sm:mb-16">
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mb-2 text-left">The Problem</h2>
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-3 sm:mb-4 text-left">
              AI is Moving Too Fast Without Ethical Guardrails
              <br />
              Creating a Surveillance Experience
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
                  Enterprise AI adoption is accelerating while trust for it lags behind. For example, teams use separate tools like ChatGPT, Claude, and Copilot, each AI operating in isolation. This causes lack of shared context, resulting in fractured workflows, cognitive overload, and tools that feel like friction instead of help.
                </p>
                <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
                  AI is quietly shifting from assistant to observer. Systems track behavior, score productivity, and surface insights to leadership often without employee consent or transparency. What's pitched as "support" lands as surveillance. The gap between what AI promises and what people experience is eroding trust faster than adoption can build it.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/clara/AI_Bloat2.png"
                  alt="Cognitive Overload diagram showing overwhelming landscape of AI tools"
                  width={800}
                  height={600}
                  className="w-full max-w-lg rounded-lg"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </section>

          {/* Teammate Philosophy */}
          <section className="mb-8 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-3 sm:mb-4 text-left">
              The Teammate Philosophy
            </h2>
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-3 sm:mb-4 text-left">
              Why Clara Works—For Everyone
            </h3>
            
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              Most workplace AI operates at extremes: passive chatbots that wait for commands, or surveillance systems that monitor without consent. Clara represents a third path: collaborative intelligence that builds trust through boundaries, transparency, and respect for expertise.
            </p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              <strong>For employees:</strong> Context without intrusion. Clara understands your project and workflow without reading personal communications or tracking off-hours activity.
            </p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              <strong>For teams:</strong> Connection without surveillance. Clara spots redundant work across departments and surfaces knowledge gaps by understanding workflow context, not monitoring individuals.
            </p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              <strong>For leadership:</strong> Progress without micromanagement. Clara measures what matters—Are blockers resolving? Are handoffs improving?—instead of vanity metrics like clicks or time-in-seat.
            </p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              <strong>The technical foundation:</strong> Model Context Protocol (MCP) makes this buildable. MCP enables scoped, auditable AI interactions. Clara can request project context while maintaining clear boundaries. What started as a speculative design exercise now has a real-world implementation path.
            </p>
          </section>

          {/* Personas */}
          <section className="mb-8 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-2 text-left">
              Understanding the Users
            </h2>
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-3 sm:mb-4 text-left">
              Four Enterprise Archetypes
            </h3>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              To design Clara's adaptive intelligence across different workplace mindsets, I developed four enterprise archetypes. Using behavioral research on team dynamics, AI adoption patterns, and workplace stress, I created four personas representing different relationships with AI, support needs, and work styles. Each archetype shaped how Clara adjusts her communication, timing, and level of intervention.{" "}
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

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ gridTemplateRows: "auto auto", alignItems: "start" }}
            >
              {/* Kai's Card - Top Left */}
              <div className="bg-white shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] overflow-hidden self-start">
                <div className="w-full h-auto overflow-hidden">
                  <Image
                    src="/images/clara/Kai_Card.png"
                    alt="Kai - Contract Content Analyst persona card showing their profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                        <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                          Overwhelmed by scattered tools and conflicting project briefs, assumes Clara is another
                          generic AI assistant tool that is useless to his work.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                        <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                          During deadline crunch, Clara offers to summarize outdated content spec in a calm, relevant
                          tone highlighting time-saving patterns.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                        <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                          Clara suggests automation shortcuts that feel impersonal and disconnected from his creative
                          process.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                        <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                          Clara reframes approach, offers to flag editing patterns for next handoff, using small
                          accomplishments to work towards larger ones while encouraging progress.
                        </p>
                      </div>

                      <div>
                        <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                        <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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
                    src="/images/clara/Andre_Card.png"
                    alt="Andre - Product Operations Lead persona card showing his profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Notices productivity metrics declining despite increased oversight. Uses Clara for meeting
                            summaries but doesn't connect data obsession to team performance issues.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Clara offers to create visual team velocity reports instead of raw data exports, presenting
                            information in a more strategic format.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            When team pushback increases, Clara suggests "people solutions" that feel too soft for
                            Andre's data-driven approach to management.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Clara shows Andre that collaborative sessions boost team performance, then suggests
                            scheduling team-building with pre-made talking points.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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
                    src="/images/clara/Jamie_Card.png"
                    alt="Jamie - Customer Service Representative persona card showing his profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Struggles with ticket resolution times not meeting company standards. Uses Clara for basic
                            ticket writing but doesn't realize she can help identify customer service patterns.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            During a busy day, Clara proactively points out that email tickets take longer than chat
                            tickets, an insight Jamie hadn't noticed.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Clara suggests workflow changes based on data Jamie can't see or verify, making him feel
                            like Clara doesn't understand his actual work.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Clara shows Jamie the data behind her suggestions, guiding him through email response
                            patterns. Jamie feels like a teammate helped him solve a puzzle, not a bot giving orders.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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
                    src="/images/clara/Natalie_Card.png"
                    alt="Natalie - Senior UX/Product Designer persona card showing her profile, pain points, and Clara's approach"
                    width={544}
                    height={400}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Uses multiple AI tools for different tasks, creating AI-bloat in her workflow; Clara is just
                            one more LLM she has to learn to use.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EXPLORATION</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Clara identifies repetitive design patterns across Natalie's recent work and other
                            departments, and offers to facilitate a design system review instead of adding another tool
                            to her stack.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">FRICTION</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Clara interrupts her creative flow with automation suggestions that feel disconnected from
                            her design thinking process.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">BREAKTHROUGH</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                            Before a challenging stakeholder meeting, Clara helps Natalie with a well-thought-out
                            presentation and supporting research to defend her approach.
                          </p>
                        </div>

                        <div>
                          <p className="font-montserrat text-sm font-semibold text-[#007EA7]">EMPOWERMENT</p>
                          <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

          {/* Clara's Architecture */}
          <section className="mb-8 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-3 sm:mb-4 text-left">
              Clara's Architecture
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              Clara was envisioned as an adaptive teammate whose artificial intelligence shifts to meet the needs of
              diverse people in varied moments based on a self learning system model. Rather than relying on external
              guardrails, she operates through moral reasoning, continuously learning and weighing human-centered values
              through monitored checks and balances.
            </p>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              This conceptual framework demonstrates how functional layers like pattern recognition, ethical safeguards,
              and cultural health could work together. It's a strategic exploration of UX design principles shaping
              adaptive AI systems, not a technical blueprint.
            </p>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              This system scales with organizational growth while remaining context-aware as a trusted colleague who
              knows when to engage, when to listen, and how to adapt her support.
            </p>
            <div className="flex flex-col lg:flex-row gap-8 items-start mb-6">
              <div className="flex-1 space-y-4">
                <ul className="font-montserrat text-base text-[#5f5f5f]/80 space-y-2 list-disc pl-6 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                  <li>Clara makes ethical decisions, not just rule-based responses</li>
                  <li>Understands team dynamics and organizational context natrually</li>
                  <li>Personalizes approach based on individual needs and moments</li>
                  <li>Knows the difference between helpful intervention and overreach</li>
                  <li>Learns through experience while maintaining core values</li>
                  <li>Explains her thinking and maintains transparency in all decisions</li>
                </ul>

                <p className="font-montserrat text-lg text-[#5f5f5f]/80">
                  This creates a balance between the complex diagram and digestible insights, while emphasizing Clara's
                  unique moral architecture approach.
                </p>
              </div>

              <div className="flex-1 lg:flex-[2] -m-4 lg:m-0">
                <div className="relative w-full" style={{ aspectRatio: "2300/1557" }}>
                  <Image
                    src="/images/clara/Intelligence_Clara.png"
                    alt="Clara's Intelligence Core architecture diagram showing six interconnected intelligence layers: Team Intelligence (orange), System Awareness (gray), Individual Support (blue), Pattern Recognition (teal), Cultural Health (green), and Ethical Safeguards (purple) all connected to the central Clara logo with detailed feature descriptions for each layer"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* MCP Technical Foundation */}
          <section className="mb-8 sm:mb-16">
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-3 sm:mb-4 text-left">
              The Technical Foundation: Model Context Protocol
            </h3>
            
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              When I designed Clara in 2024, this adaptive intelligence felt conceptually sound but technically complex. Model Context Protocol (MCP) changed that.
            </p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              MCP is an open standard that enables AI systems to request tools and data through secure, auditable gateways. Instead of giving AI access to everything or nothing, MCP supports the scoped, permission-based interactions Clara requires.
            </p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              <strong>How MCP enables Clara's architecture:</strong>
            </p>

            <ul className="font-montserrat text-base text-[#5f5f5f]/80 space-y-2 list-disc pl-6 mb-6 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
              <li><strong>Bounded intelligence</strong> – Clara requests project context while teams control what she can access</li>
              <li><strong>Transparent actions</strong> – Every tool use and data source is logged and auditable</li>
              <li><strong>Permission-based automation</strong> – When Clara wants to act (schedule a meeting, update a doc), she requests approval through MCP</li>
              <li><strong>Team-configured scope</strong> – The people using Clara define her boundaries, not management</li>
            </ul>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80">
              MCP transforms Clara from a speculative framework into a buildable system. The teammate philosophy now has technical infrastructure to support it.
            </p>
          </section>

          {/* UX Strategy & Core Flows*/}
          <section className="mb-8 sm:mb-16">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-3 sm:mb-4 text-left">
              UX Strategy & Core Flows
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              Clara's interaction model is shaped by key UX principles: calm design, progressive disclosure, and role-aware personalization. Instead of bombarding users with features, she surfaces just enough guidance at the right moment. Her interventions are subtle, timely, and emotionally aware—designed to reduce friction rather than add to it.
            </p>

            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-4">
              In a real implementation, I would validate this adaptive approach through Wizard of Oz testing across all four personas, observing whether Clara's communication feels supportive or intrusive. Success metrics would focus on voluntary engagement rates, trust indicators, and role-based adoption patterns—proving Clara builds relationships, not dependency.
            </p>

            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-6">
              Each scenario below demonstrates how Clara adapts across different roles and goals, reflecting a broader UX strategy that blends trust, relevance, and quiet intelligence into the flow of work.
            </p>
            <div className="w-full mb-8">
              <div className="relative w-full">
                <Image
                  src="/images/clara/Flows.png"
                  alt="Clara's UX Strategy and Core Flows showing four types of intelligence: Emotional, Strategic, Systems, and Behavior Intelligence with specific user scenarios and adaptations"
                  width={1200}
                  height={900}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 800px"
                />
              </div>
            </div>
            {/* Clara's UI*/}
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              Clara UI Design
            </h2>
            <p className="font-montserrat text-lg text-[#5f5f5f]/80 mb-8">
              Clara's interface philosophy centers on quiet actions and contextual intelligence. Rather than demanding
              attention through notifications or pop-ups, the program integrates seamlessly into existing workflows,
              surfacing guidance only when it adds genuine value. The UI reflects her role as a supportive
              teammate—present when needed, invisible when not.
            </p>

            {/* First Clara UI Screenshot - Dashboard */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
              <div className="md:col-span-1">
                <h3 className="font-space-grotesk text-lg sm:text-xl font-semibold text-[#007EA7] mb-3 sm:mb-4">
                  Clara's Interactive Presence
                </h3>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-6">
                  Clara appears as a subtle, ambient presence that integrates naturally into existing workflows. Rather
                  than competing for attention, she maintains a gentle glow in the interface periphery, indicating
                  availability without disruption.
                </p>
                <p className="font-montserrat text-base text-[#5f5f5f]/80 mb-4 mt-6">Key Interface Behaviors:</p>
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
                <div className="relative w-full h-auto group">
    <Image
      src="/images/clara/Clara_1.png"
      alt="Clara dashboard interface showing team insights and workflow suggestions"
      width={1200}
      height={900}
      className="w-full h-auto"
      sizes="(max-width: 768px) 100vw, 600px"
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
            <div className="mb-6"></div>

            <div className="mb-6 sm:mb-8">
              {/* Andre's experience*/}
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
                      src="/images/clara/Clara_Andre1.png"
                      alt="Clara offering to create visual summaries of team velocity trends instead of raw numbers"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 600px"
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
                      src="/images/clara/Clara_Andre2.png"
                      alt="Clara providing contextual feedback about team patterns and suggesting reconnection with team members"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                  <p className="font-montserrat text-sm text-[#5f5f5f]/80 mt-3">
                    Clara reminds him that his last team Campfire was over a month ago, redirecting his attention from
                    metrics monitoring to the leadership relationship-building that actually drives team performance.
                  </p>
                </div>
              </div>
            </div>
            {/* Jamie's experience*/}
            <div className="mb-6 sm:mb-8">
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
                      src="/images/clara/Clara_Jamie1.png"
                      alt="Clara notices Jamie monitoring concerning response times and offers to identify ticket delay patterns"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 600px"
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
                      src="/images/clara/Clara_Jamie2.png"
                      alt="Clara reveals email tickets as primary bottleneck and celebrates Jamie's discovery with positive reinforcement"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 600px"
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
            {/* Kai's experience*/}
            <div className="mb-6 sm:mb-8">
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
                      src="/images/clara/Clara_Kai1.png"
                      alt="Clara recognizes Kai's editing work and offers to add it to the content style guide"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 600px"
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
                      src="/images/clara/Clara_Kai2.png"
                      alt="Clara confirms contribution was added and provides concrete metrics about Kai's monthly contributions"
                      width={800}
                      height={600}
                      className="w-full h-auto object-contain object-top"
                      sizes="(max-width: 768px) 100vw, 600px"
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

            {/* Strategic Outcomes */}
            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              Strategic Outcome: What If Clara Enterprise Software Was Reality
            </h2>

            <div className="flex flex-col lg:flex-row gap-8 mb-8">
              <div className="lg:w-1/2">
                <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
                This concept shows how an AI teammate could deliver measurable value when trust is designed in. Evidence already points the way: better onboarding improves retention and productivity[13]and automation returns meaningful time to teams[14]With MCP, Clara has a practical path to orchestration: scoped access to approved APIs, clear consent, and an auditable trail that teams control.</p>
                <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
                  Clara creates a continuous cycle of empowerment. Support adapts by role, so frontline work gets contextual coaching, creators get recognition and confidence building, design groups get strategic partnership and thoughtful automation, and operations gets alignment. The aim is collaboration, not control.
                </p>
              </div>

              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <img
                  src="/images/clara/Clara_Solution.png"
                  alt="Empowering Teams with Clara's Intelligence - A circular diagram showing different aspects like Confidence Building, Skill Recognition, Strategic Partnership, Thoughtful Automation, Focus Realignment, Leadership Guidance, Efficiency Coaching, and Contextual Support"
                  className="w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            </div>

           

            <h2 className="font-space-grotesk text-3xl font-semibold text-[#007EA7] mt-16 mb-4 text-left">
              The Possibilities: What Clara Represents for UX
            </h2>
            
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              This page is a senior UX thought exercise about building AI that serves people. Many systems still reflect bias, engagement optimization, and surveillance incentives, so we are not fully there yet. Progress will come from design choices and governance, not market forces alone.</p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
              MCP accelerates feasibility. It gives Clara a clean way to request the right context, connect to approved systems, and make every action explainable and reviewable. That lets UX specify consent flows, boundaries, and evaluation plans alongside the interaction model. </p>

            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 mb-4">
           Clara demonstrates a repeatable approach: define consent first, carry context across steps, design for corrections, measure trust, and orchestrate through protocols rather than monitoring. AI is arriving fast. With MCP, the path from ethical concept to production reality is clearer than ever.</p>
          </section>

          {/* Call to Action */}
          <div className="mt-16 flex flex-col items-center pb-12">
            <button className="rounded-[100px] border border-[#F7F6F6] bg-white hover:bg-white/80 text-[#007EA7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5">
              <a href="/contact">Let's Chat</a>
            </button>
          </div>
          
          {/* References */}
          <section className="mb-16 pt-8 border-t border-[#F5F5F7]">
            <h3 className="font-space-grotesk text-xl font-semibold text-[#007EA7] mb-6 text-left">References</h3>
            <div className="space-y-4">
              {/* 1 */}
              <div className="flex items-start gap-3" id="ref1">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">1</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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
              
              {/* 2 */}
              <div className="flex items-start gap-3" id="ref2">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">2</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 3 */}
              <div className="flex items-start gap-3" id="ref3">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">3</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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
              
              {/* 4 */}
              <div className="flex items-start gap-3" id="ref4">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">4</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.ibm.com/think/insights/customer-service-future"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#007EA7] hover:underline"
                  >
                    The future of AI in customer service
                  </a>
                </p>
              </div>

              {/* 5 */}
              <div className="flex items-start gap-3" id="ref5">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">5</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 6 */}
              <div className="flex items-start gap-3" id="ref6">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">6</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 7 */}
              <div className="flex items-start gap-3" id="ref7">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">7</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 8 */}
              <div className="flex items-start gap-3" id="ref8">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">8</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 9 */}
              <div className="flex items-start gap-3" id="ref9">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">9</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 10 */}
              <div className="flex items-start gap-3" id="ref10">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">10</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 11 */}
              <div className="flex items-start gap-3" id="ref11">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">11</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 12 */}
              <div className="flex items-start gap-3" id="ref12">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">12</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 13 */}
              <div className="flex items-start gap-3" id="ref13">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">13</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 14 */}
              <div className="flex items-start gap-3" id="ref14">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">14</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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

              {/* 15 */}
              <div className="flex items-start gap-3" id="ref15">
                <span className="font-verdana text-sm text-[#007EA7] font-medium">15</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
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