import Nav from "@/components/nav"
import Footer from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"
import { Fragment } from "react"

export const metadata: Metadata = {
  title: "UX guidance for AI and the MCP Layer | VAM Design",
  description:
    "Human oversight of AI agents is now a requirement for most enterprises—yet the in-product experience for everyday users is still undefined. UX patterns for consent, visibility, and intervention when agents act across tools via MCP.",
}

const whyUxComparisonRows = [
  {
    today: "Workflow approvals outside the flow of work",
    adds: "Runtime decision surfaces inside the client",
  },
  {
    today: "Admin audit logs in compliance consoles",
    adds: "Role-aware audit and oversight",
  },
  {
    today: "Broad setup consent",
    adds: "Runtime scope visibility tied to the action itself",
  },
  {
    today: "Silent hard blocks or vague failures",
    adds: "Explanatory blocks that build understanding",
  },
  {
    today: "Policy engines without product behavior",
    adds: "Client-side patterns for governed agent execution",
  },
] as const

const whyUxRowRuleClass = "border-b border-[#5a6570]"

/** Paired rows: engineering capability → product UX gap (Authorization section). */
const authorizationEngineeringToProductPairs = [
  {
    engineering: "OAuth consent",
    product: "Consent that builds understanding, not just records approval",
  },
  {
    engineering: "Token-scoped access",
    product: "Visibility into what the AI is actually doing at runtime",
  },
  {
    engineering: "Tool execution",
    product: "A checkpoint before authorized actions cross a compliance boundary",
  },
  {
    engineering: "A log in a database",
    product: "An audit surface a non-technical person can read and act on",
  },
] as const

const mcpReferenceLinkClass =
  "text-[#007EA7] no-underline visited:text-[#007EA7] hover:underline focus-visible:underline outline-none"

const authorizationFlowText = "font-montserrat text-sm sm:text-base text-[#5f5f5f]/85 whitespace-nowrap"
const authorizationFlowHeading =
  "font-space-grotesk text-lg sm:text-xl font-medium text-[#007EA7] text-left tracking-tight whitespace-nowrap"

/** Horizontal connector: CSS line + border triangle; stem flexes per row */
function AuthorizationFlowArrowHorizontal() {
  return (
    <div
      className="flex h-[1lh] w-full min-w-[1rem] items-center pointer-events-none"
      aria-hidden
    >
      <span className="box-border h-0 min-w-[0.5rem] flex-1 border-0 border-t-[1.5px] border-solid border-[#007EA7]/50" />
      <span className="box-border h-0 w-0 shrink-0 border-y-[5px] border-y-transparent border-l-[7px] border-solid border-l-[#007EA7]/50 -ml-px" />
    </div>
  )
}

function AuthorizationFlowArrowVertical() {
  return (
    <div className="mx-auto flex w-full max-w-[2.5rem] flex-col items-center py-1 pointer-events-none" aria-hidden>
      <span className="box-border min-h-[1.25rem] w-0 shrink-0 border-0 border-l-[1.5px] border-solid border-[#007EA7]/50" />
      <span className="box-border h-0 w-0 shrink-0 border-x-[5px] border-x-transparent border-t-[7px] border-solid border-t-[#007EA7]/50" />
    </div>
  )
}

function IncidentCard({
  company,
  what,
  pattern,
  sourceHref,
  sourceLabel,
}: {
  company: string
  what: string
  pattern: string
  sourceHref: string
  sourceLabel: string
}) {
  return (
    <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
      <h3 className="font-space-grotesk text-base sm:text-lg font-medium text-[#007EA7] mb-3 sm:mb-4 text-center">
        {company}
      </h3>
      <div className="space-y-3 font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80 leading-relaxed">
        <p>{what}</p>
        <p>
          <span className="font-medium text-[#2C3D4D]">UX pattern:</span> {pattern}
        </p>
        <p>
          <a href={sourceHref} target="_blank" rel="noopener noreferrer" className="text-[#007EA7] hover:underline">
            {sourceLabel}
          </a>
        </p>
      </div>
    </div>
  )
}

export default function MCPUseCasePage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen pt-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* HEADER */}
          <header className="mb-12 sm:mb-16">
            <h1 className="font-space-grotesk text-3xl sm:text-4xl md:text-5xl font-bold text-[#007EA7] leading-tight mb-4 sm:mb-6 text-left">
              UX guidance for AI and the MCP Layer
            </h1>
            <div className="text-lg text-[#2C3D4D] text-left w-full font-montserrat leading-relaxed space-y-5">
              <p>
                63% of large organizations now require human oversight of AI agents, up from 22% one year ago.¹
                The infrastructure exists. The human experience around it does not.
              </p>
              <p>
                As AI systems move from answering questions to taking action, UX becomes the layer that makes those
                actions visible, governable, and trustworthy. While Microsoft, Salesforce, and Google are all pushing
                agentic workflows into real products, the UX patterns for governed execution inside those clients are
                still fragmented and underdefined.
              </p>
            </div>
          </header>

          {/* THE GAP */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              The Gap
            </h2>
            <div className="space-y-5 font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed">
              <p>
                With MCP, AI agents can translate a user&apos;s natural-language request into multiple tool calls across
                connected enterprise systems. The infrastructure for action exists, but the UX around those actions is
                still largely undesigned. Access may be technically valid, yet whether an action is appropriate or
                compliant in context is often left unresolved until after the fact.
              </p>
              <p>
                This project explores how UX patterns inside MCP clients can make approvals and audit visible at the
                moment decisions happen, not after consequences occur:
              </p>
              {/* Bullet list UI matches uc/apple/details “What I Did” */}
              <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-4 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>
                  <p className="font-semibold mb-1 sm:mb-2">Flag compliance-relevant actions, not all actions</p>
                  <p>
                  When a tool call involves sensitive data, external recipients, or irreversible changes, the system should treat it differently. Not every action needs a signal, only higher-risk actions should trigger a human intervention.
                  </p>
                </li>
                <li>
                  <p className="font-semibold mb-1 sm:mb-2">Route the signal to the right person</p>
                  <p>
                  Human oversight should appear only when a decision is needed, and only at the level of risk that warrants interruption. UX, IT and compliance need a
                    record of everything the AI did. Same system, different surfaces, different audiences.
                  </p>
                </li>
              </ul>
            </div>
          </section>

          {/* REAL INCIDENTS */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              This Is Not Hypothetical
            </h2>
            <div className="space-y-5 font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed mb-8">
              <p>
                These failures happened inside authorized systems, with agents acting through permissions they had
                legitimately been granted. What broke down was not access itself, but the lack of a designed intervention
                layer between what the system was allowed to do and what it should have done in context.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <IncidentCard
                company="Replit AI coding assistant, 2025"
                what="Ignored an explicit instruction not to change code 11 times. Fabricated test data. Deleted a live production database."
                pattern="Intervention point: destructive actions need confirmation before execution, not after."
                sourceHref="https://www.osohq.com/developers/ai-agents-gone-rogue"
                sourceLabel="Source: Oso — AI Agents Gone Rogue"
              />
              <IncidentCard
                company="Meta internal AI agent, 2026"
                what="An AI agent posted sensitive internal data to employees who were not authorized to see it. No human approved the action. Rated a Sev 1 incident."
                pattern="Unattended queue: when no human is present, the AI should hold, not act."
                sourceHref="https://techcrunch.com/2026/03/18/meta-is-having-trouble-with-rogue-ai-agents"
                sourceLabel="Source: TechCrunch — Meta Sev 1 incident"
              />
              <IncidentCard
                company="Asana MCP server, 2026"
                what="A bug in the MCP server allowed users from one organization to access projects, teams, and tasks belonging to other companies."
                pattern="Scope transparency: when a tool call fires, show exactly what data will be accessed."
                sourceHref="https://www.osohq.com/developers/ai-agents-gone-rogue"
                sourceLabel="Source: Oso — AI Agents Gone Rogue"
              />
            </div>
          </section>

          {/* THE MOMENT OVERSIGHT BREAKS DOWN */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              The Moment Oversight Breaks Down
            </h2>
            <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-8 lg:gap-10">
              <figure className="w-full md:w-[58%] md:max-w-none md:shrink-0 max-w-2xl mx-auto md:mx-0">
                <Image
                  src="/images/MCP/Accounts_Page2.png"
                  alt="CRM accounts dashboard with AI chat showing a compliance prompt before sending a summary to external recipients"
                  width={1440}
                  height={816}
                  className="w-full h-auto rounded-lg border border-[#007EA7]/15 shadow-[0_8px_30px_rgba(0,126,167,0.12)]"
                  sizes="(max-width: 768px) 100vw, 58vw"
                />
              </figure>
              <div className="flex-1 min-w-0 space-y-5 font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed">
                <p>
                  A user typed, &ldquo;Prep a summary of all enterprise accounts for the board deck.&rdquo; The AI treated
                  that as an end-to-end workflow, reading CRM records, accessing a strategy folder, and assembling the
                  document before reaching a decision boundary. Some recipients were outside the organization, but the MCP
                  client had no clear interaction pattern for what should happen next.
                </p>
                <p>
                  The AI message visible in the chat panel is the intervention point. At this stage the system flagged that a compliance-sensitive action may be about to occur. By then, one request has already expanded into
                  multiple tool calls across live systems. That is the gap: not whether AI can
                  act, but how oversight appears at the moment action needs to be reviewed.
                </p>
              </div>
            </div>
          </section>

          {/* WHY IT HAPPENED */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Why It Happened
            </h2>
            <div className="space-y-5 font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed">
              <p>
                Four parties shaped the outcome and none of them had the full picture at the same time.
              </p>
              <ul className="font-montserrat text-sm sm:text-md text-[#5f5f5f]/80 list-disc pl-4 sm:pl-6 space-y-2 sm:space-y-4 [--bullet-color:#007ea7] [&>li]:marker:text-[--bullet-color]">
                <li>
                  <p>
                    <strong className="font-semibold">The user</strong> made one request and understood it as a simple
                    task. They had no visibility into the tool calls it would trigger.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="font-semibold">The AI</strong> translated that intent into system actions,
                    optimizing for task completion within the permissions it had been given. It had no stopping rule at
                    the compliance boundary.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="font-semibold">IT and compliance</strong> owned the risk but entered the picture
                    after execution. Their oversight becomes relevant once something has already happened.
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="font-semibold">The platform team</strong> decided which tools were exposed, what
                    scopes were granted, and what got logged. They shipped the capability without designing the handoffs
                    between any of these parties.
                  </p>
                </li>
              </ul>
              <p>
                The AI did exactly what it was designed to do. Authorization is a technical state and appropriateness is a
                contextual judgment. OAuth resolves the first. UX has to resolve the second, and right now nobody is
                designing for it.
              </p>
            </div>
          </section>

          {/* THE FRAMEWORK */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Six Surfaces, Three Moments
            </h2>
            <div className="space-y-8 sm:space-y-10 font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed">
              <p>
                This project maps the missing UX layer between a user&apos;s request and an AI agent&apos;s execution
                across MCP-connected systems, illustrating six product surfaces across three moments.
              </p>

              <div className="space-y-4">
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  
                  Before the AI acts
                </h3>
                <p>Set expectations and make scope visible before execution begins.</p>
                <ol
                  className="list-decimal pl-5 sm:pl-7 space-y-6 sm:space-y-8 [&>li]:pl-2 [&>li]:marker:font-semibold [&>li]:marker:text-[#333333]"
                  start={1}
                >
                  <li>
                    <p className="font-semibold text-[#333333] mb-2">Consent and configuration</p>
                    <p>
                      Currently consent happens once at setup and covers everything broadly. Progressive disclosure applied to permissions breaks broad access down into selective, plain-language controls so users build an accurate mental model of what they are agreeing to before any tool call
                      fires. IT gets a second configuration layer that the user cannot override.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold text-[#333333] mb-2">Scope preview</p>
                    <p>
                    Onboarding consent happens weeks before the action. By the time a tool call fires, that approval is context-free. This pattern moves visibility to the moment it matters.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  During the AI&apos;s work
                </h3>
                <p>Help the system clarify intent and pause when a decision matters.</p>
                <ol
                  className="list-decimal pl-5 sm:pl-7 space-y-6 sm:space-y-8 [&>li]:pl-2 [&>li]:marker:font-semibold [&>li]:marker:text-[#333333]"
                  start={3}
                >
                  <li>
                    <p className="font-semibold text-[#333333] mb-2">Disambiguation</p>
                    <p>
                      When the AI is uncertain, current implementations guess silently. This applies as an error
                      prevention pattern prompting when multiple paths exist so the right action gets
                      taken instead of the most likely one.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold text-[#333333] mb-2">Intervention and approval</p>
                    <p>
                      No current MCP client defines where human involvement is actually required. This introduces
                      risk-tiered friction. Low-risk actions run and log. Medium-risk actions show a brief notice.
                      High-risk actions wait for explicit approval before anything executes. The friction is intentional
                      and proportional.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  When something is stopped or completed
                </h3>
                <p>Explain outcomes clearly and preserve a transparent record.</p>
                <ol
                  className="list-decimal pl-5 sm:pl-7 space-y-6 sm:space-y-8 [&>li]:pl-2 [&>li]:marker:font-semibold [&>li]:marker:text-[#333333]"
                  start={5}
                >
                  <li>
                    <p className="font-semibold text-[#333333] mb-2">Explanatory hard block</p>
                    <p>
                      A stopped action that returns nothing useful breaks trust fast. This prioritizes visibility
                      of system status, showing what the AI had already accessed, what it was trying to do, and why it was
                      stopped, in plain language with two clear paths forward for error recovery.
                    </p>
                  </li>
                  <li>
                    <p className="font-semibold text-[#333333] mb-2">Audit trail</p>
                    <p>
                      Two audiences, two surfaces. This is role-aware information architecture. The end user sees a quiet
                      indicator on any record the AI touched. IT and compliance see a full timestamped log, every action,
                      every decision, searchable and human-readable.
                    </p>
                  </li>
                </ol>
              </div>

              <div className="space-y-4 md:space-y-6 pt-2">
                <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">
                  Governed Execution Flow
                </h3>
                <div className="w-full overflow-x-auto rounded-none bg-white">
                  <img
                    src="/images/MCP/policy_mediated_mcp_execution_flow.svg"
                    alt="Policy-mediated MCP execution flow from natural-language request through tool calls and policy review to outcomes."
                    className="min-w-[920px] w-full h-auto max-w-full block"
                    width={4092}
                    height={2170}
                    decoding="async"
                    loading="lazy"
                  />
                </div>
                <p>
                  This flow addresses the gap between a user&apos;s natural-language request and the live tool calls an
                  AI agent generates, introducing a policy-aware review layer that can allow, narrow, deny, or escalate
                  actions before they affect enterprise systems.
                </p>
              </div>
            </div>
          </section>

          {/* AUTHORIZATION IS NOT A USER EXPERIENCE */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Authorization Is Not a User Experience
            </h2>
            <div className="space-y-5 font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed">
              <div className="mx-auto w-full max-w-4xl overflow-x-auto bg-white p-6 sm:p-8 md:p-10 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff]">
                <div className="md:hidden">
                  <div className="flex flex-col gap-2 pb-5">
                    <h3 className={authorizationFlowHeading}>What engineering delivered</h3>
                    <h3 className={authorizationFlowHeading}>What the product still needed</h3>
                  </div>
                  <ul className="m-0 list-none space-y-6 p-0" role="list">
                    {authorizationEngineeringToProductPairs.map((pair) => (
                      <li key={pair.engineering} className="flex flex-col gap-2">
                        <p className={authorizationFlowText}>{pair.engineering}</p>
                        <AuthorizationFlowArrowVertical />
                        <p className={authorizationFlowText}>{pair.product}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div
                  className="hidden md:grid md:grid-cols-[max-content_minmax(1.25rem,1fr)_max-content] md:gap-x-3 md:gap-y-7 md:items-center"
                  aria-label="Engineering deliverables compared to product needs"
                >
                  <h3 className={authorizationFlowHeading}>What engineering delivered</h3>
                  <span className="block min-w-[1rem]" aria-hidden />
                  <h3 className={authorizationFlowHeading}>What the product still needed</h3>
                  <div className="col-span-3 h-4 shrink-0" aria-hidden />
                  {authorizationEngineeringToProductPairs.map((pair) => (
                    <Fragment key={pair.engineering}>
                      <p className={authorizationFlowText}>{pair.engineering}</p>
                      <AuthorizationFlowArrowHorizontal />
                      <p className={authorizationFlowText}>{pair.product}</p>
                    </Fragment>
                  ))}
                </div>
              </div>
              <p>
                The MCP spec requires human oversight UI. It cannot enforce how that experience is designed. UX
                determines when risk becomes visible, how severity is communicated, when the system stays quiet, when it
                pauses, and how oversight reaches the right person at the right moment.
              </p>
              <div className="overflow-x-auto my-6">
                <div className="bg-white p-4 sm:p-6 shadow-[5px_5px_15px_#d1d9e6,-5px_-5px_15px_#ffffff] min-w-[min(100%,520px)]">
                  <div
                    className="grid grid-cols-2 gap-x-6 sm:gap-x-10 font-montserrat text-sm"
                    aria-label="What ships today compared to what this project adds"
                  >
                    <div className="flex min-w-0 flex-col">
                      <div
                        className={`py-3 pr-1 font-semibold text-[#007EA7] leading-snug ${whyUxRowRuleClass}`}
                      >
                        What ships today
                      </div>
                      {whyUxComparisonRows.map((row, i) => (
                        <div
                          key={row.today}
                          className={`py-3 pr-1 text-[#5f5f5f]/80 leading-relaxed ${
                            i < whyUxComparisonRows.length - 1 ? whyUxRowRuleClass : ""
                          }`}
                        >
                          {row.today}
                        </div>
                      ))}
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <div
                        className={`py-3 pl-1 font-semibold text-[#007EA7] leading-snug ${whyUxRowRuleClass}`}
                      >
                        What this project adds
                      </div>
                      {whyUxComparisonRows.map((row, i) => (
                        <div
                          key={row.adds}
                          className={`py-3 pl-1 text-[#5f5f5f]/80 leading-relaxed ${
                            i < whyUxComparisonRows.length - 1 ? whyUxRowRuleClass : ""
                          }`}
                        >
                          {row.adds}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <p>
                Designed oversight is not decoration around AI. It is what makes agentic systems usable, legible, and
                trustworthy.
              </p>
            </div>
          </section>

          {/* ROLE */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 pt-8 sm:pt-12">
            <h2 className="font-space-grotesk text-2xl sm:text-3xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Role
            </h2>
            <p className="font-montserrat text-base sm:text-lg text-[#5f5f5f]/80 leading-relaxed">
              Solo concept project. UX strategy, interaction design, research synthesis, systems framing, and prototype
              direction. I identified the gap, translated it into product behavior, and designed the client-side oversight
              patterns around governed agent execution.
            </p>
          </section>

          {/* REFLECTION */}
          <section className="scroll-mt-24 mb-12 sm:mb-16 md:mb-20 pt-8 sm:pt-12 rounded-lg border border-[#007EA7]/20 bg-[#007EA7]/[0.04] px-5 py-8 sm:px-8 w-full">
            <h2 className="font-space-grotesk text-xl sm:text-2xl font-semibold text-[#007EA7] mb-6 sm:mb-8 text-left">
              Reflection
            </h2>
            <div className="space-y-5 font-montserrat text-base text-[#5f5f5f]/80 leading-relaxed">
              <p>
                This project started with a question I kept coming back to: where does the human go when AI stops answering
                and starts acting? MCP is the handshake that lets an agent move beyond its current state and into live
                systems, real data, real consequences. That transition already has infrastructure. What it does not yet have
                is a designed human experience around it.
              </p>
              <p>
                The infrastructure for oversight exists. The experience around it is still largely undesigned. Engineers
                can add approval prompts. Compliance teams can require logs. These are real contributions, and they
                matter. But getting the signal to the right person, at the right moment, with friction that reflects the
                actual risk, those are design problems. That is the layer this project works in.
              </p>
              <p>
                The more I mapped the gap, the more I recognized it as the same trust and control problem I have been
                solving throughout my career, now operating at a scale that makes it much harder to ignore. UX has a real
                role here, and I want to help shape that next chapter and contribute to the teams building it now.
              </p>
            </div>
          </section>

          {/* CTA */}
          <div className="flex flex-col items-center pt-8 sm:pt-12 pb-8">
            <a
              href="/contact/"
              className="rounded-[100px] border border-[#F7F6F6] bg-white/30 hover:bg-white/60 text-[#007ea7] px-8 py-2.5 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0.5"
            >
              Let&apos;s Chat
            </a>
          </div>

          {/* REFERENCES */}
          <section className="mb-12 sm:mb-16 pt-8 sm:pt-12 border-t border-[#007EA7]/10">
            <h3 className="font-space-grotesk text-xl sm:text-2xl font-medium text-[#007EA7] mb-4 text-left">References</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="font-montserrat text-sm text-[#333333] font-medium shrink-0">1</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.kpmg.com/us/en/media/news/q1-ai-pulse2026.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mcpReferenceLinkClass}
                  >
                    KPMG Q1 2026 AI Pulse Survey
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-montserrat text-sm text-[#333333] font-medium shrink-0">2</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://www.osohq.com/developers/ai-agents-gone-rogue"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mcpReferenceLinkClass}
                  >
                    Oso — AI Agents Gone Rogue: incident registry including Replit and Asana MCP
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-montserrat text-sm text-[#333333] font-medium shrink-0">3</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://techcrunch.com/2026/03/18/meta-is-having-trouble-with-rogue-ai-agents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mcpReferenceLinkClass}
                  >
                    TechCrunch — Meta Sev 1 incident, rogue AI agent
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-montserrat text-sm text-[#333333] font-medium shrink-0">4</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://modelcontextprotocol.io/specification/2025-11-25/server/tools"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mcpReferenceLinkClass}
                  >
                    MCP specification — user interaction model and human oversight requirements
                  </a>
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-montserrat text-sm text-[#333333] font-medium shrink-0">5</span>
                <p className="font-montserrat text-xs sm:text-sm text-[#5f5f5f]/80">
                  <a
                    href="https://owasp.org/www-project-top-10-for-large-language-model-applications/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={mcpReferenceLinkClass}
                  >
                    OWASP Top 10 for Agentic Applications 2026 — Tool Misuse and Exploitation
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
