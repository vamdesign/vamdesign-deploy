"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Cookies from "js-cookie"
import { useEffect, useLayoutEffect, useState } from "react"
import type { CSSProperties } from "react"

/** Unified image strip height (`overflow-*` applied in the card — Walmart avoids clipping fitted assets) */
const IMAGE_FRAME_SIZE =
  "relative h-[300px] w-full shrink-0 sm:h-[350px] md:h-[400px] lg:h-[440px]"

/** 10px top/bottom inside frame; light horizontal inset so assets read larger */
const IMAGE_FRAME_INSET = "box-border py-[10px] px-2 sm:px-3"

/** Apple: no bottom inset so the screenshot can use the full frame height like the others */
const IMAGE_FRAME_INSET_APPLE = "box-border pt-[10px] pb-0 px-2 sm:px-3"

/** Walmart: edge-to-edge (no lateral inset) so UI isn’t framed in navy; fills strip like the asset */
const IMAGE_FRAME_INSET_WALMART = "box-border p-0"

/** Short name for link accessible name (no visible title on card) */
const CASE_STUDY_ARIA: Record<string, string> = {
  "ai-design": "AI actions, approvals, and oversight",
  apple: "Apple internal support tools",
  "wells-fargo": "Salesforce CRM migration for small business bankers",
  walmart: "Walmart Fulfillment Services",
}

type ImageAlign = "top" | "center"

type PortfolioProject = {
  id: string
  tagline: string
  href: string
  image: string
  /** Letterbox / canvas color matched to artwork edges (or brand canvas for Walmart) */
  imageBackdrop: string
  imageAlign: ImageAlign
}

const projects: PortfolioProject[] = [
  {
    id: "ai-design",
    tagline:
      "Designing UX/AX guidance for AI actions, approvals, and oversight so enterprise users can see, understand, and control what happens before systems act.",
    href: "/uc/mcp/",
    image: "/images/MCP/policy_flow.jpg",
    imageBackdrop: "#fefefe",
    imageAlign: "center",
  },
  {
    id: "apple",
    tagline:
      "Improving internal Apple support tools so specialists can move through customer workflows faster, with clearer patterns and less friction.",
    href: "/uc/apple/details/",
    image: "/images/landing/AppleInternApps.png",
    imageBackdrop: "#ffffff",
    imageAlign: "top",
  },
  {
    id: "wells-fargo",
    tagline:
      "Simplifying small business banker workflows during a large-scale Salesforce migration, with clearer task flows, data views, and system states.",
    href: "/uc/wellsf/details/",
    image: "/images/landing/WellsFargoCRM.png",
    imageBackdrop: "#ffffff",
    imageAlign: "center",
  },
  {
    id: "walmart",
    tagline:
      "Helping shape Walmart Fulfillment Services through seller research, competitive analysis, scalable UX patterns, and design system work.",
    href: "/uc/walmart/details/",
    image: "/images/landing/WalmartFulfillment.png",
    imageBackdrop: "#041e42",
    imageAlign: "center",
  },
]

/**
 * Read prefers-reduced-motion only after layout so SSR + first client paint stay aligned.
 */
function usePrefersReducedMotionAfterMount() {
  const [reduced, setReduced] = useState(false)
  useLayoutEffect(() => {
    try {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
      setReduced(mq.matches)
      const onChange = () => setReduced(mq.matches)
      if (typeof mq.addEventListener === "function") {
        mq.addEventListener("change", onChange)
        return () => mq.removeEventListener("change", onChange)
      }
      mq.addListener(onChange)
      return () => mq.removeListener(onChange)
    } catch {
      setReduced(false)
    }
  }, [])
  return reduced
}

/** Matches `use-cases-dropdown`: Wells Fargo uses /passcode until `auth-wellsf` is set. */
function useWellsFargoCaseStudyHref(detailsHref: string, projectId: string) {
  const [authed, setAuthed] = useState(false)
  useEffect(() => {
    if (projectId !== "wells-fargo") return
    try {
      setAuthed(Cookies.get("auth-wellsf") === "authenticated")
    } catch {
      setAuthed(false)
    }
  }, [projectId])

  if (projectId !== "wells-fargo") return detailsHref
  if (authed) return detailsHref
  return `/passcode?returnUrl=${encodeURIComponent(detailsHref)}&uc=wellsf`
}

function ProjectCard({
  project,
  index,
  prefersReducedMotion,
}: {
  project: PortfolioProject
  index: number
  prefersReducedMotion: boolean
}) {
  const cardHref = useWellsFargoCaseStudyHref(project.href, project.id)
  const align = project.imageAlign === "top" ? "object-top" : "object-center"
  let imgClass: string
  if (project.id === "apple") {
    imgClass = "object-cover object-top"
  } else if (project.id === "walmart") {
    imgClass = "object-contain object-bottom"
  } else {
    imgClass = `${align} object-contain`
  }

  const wrapperStyle: CSSProperties = { backgroundColor: project.imageBackdrop }

  return (
    <motion.div
      className="h-full"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.09,
        ease: "easeOut",
      }}
    >
      <article
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_4px_24px_-4px_rgba(0,62,82,0.12)] outline-none transition-[box-shadow,transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-[#007EA7]/15 hover:shadow-[0_20px_40px_-12px_rgba(0,62,82,0.18)] motion-reduce:transition-shadow motion-reduce:hover:translate-y-0"
      >
        <div
          className={`${IMAGE_FRAME_SIZE} ${
            project.id === "walmart" ? "overflow-visible" : "overflow-hidden"
          } ${
            project.id === "apple"
              ? IMAGE_FRAME_INSET_APPLE
              : project.id === "walmart"
                ? IMAGE_FRAME_INSET_WALMART
                : IMAGE_FRAME_INSET
          }`}
          style={wrapperStyle}
        >
          <div className="relative h-full w-full min-h-0">
            <Image
              src={project.image || "/placeholder.svg"}
              alt=""
              fill
              sizes="(min-width: 1024px) 42vw, (min-width: 768px) 46vw, 100vw"
              className={imgClass}
            />
          </div>
          <div
            className={
              "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#007EA7]/[0.06] via-transparent to-transparent mix-blend-multiply " +
              (project.id === "walmart" ? "opacity-35" : "opacity-80")
            }
            aria-hidden
          />
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6 md:p-7">
          <p className="font-montserrat text-sm font-light leading-relaxed text-[#5f5f5f] md:text-[0.95rem]">
            {project.tagline}
          </p>
          <Link
            href={cardHref}
            prefetch={false}
            className="mt-auto inline-flex items-center justify-center self-center rounded-[100px] border border-[#007EA7] bg-white px-8 py-2.5 text-base font-semibold text-[#007EA7] transition-colors duration-300 ease-out hover:bg-[#007EA7]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#007EA7] focus-visible:ring-offset-2 motion-reduce:transition-none"
            aria-label={`View case study: ${CASE_STUDY_ARIA[project.id] ?? project.id}`}
          >
            View Case Study
          </Link>
        </div>
      </article>
    </motion.div>
  )
}

export default function Portfolio() {
  const prefersReducedMotion = usePrefersReducedMotionAfterMount()

  return (
    <section
      className="bg-[#ffffff] py-14 px-5 text-[#007EA7] sm:px-6 md:py-16"
      id="ux-portfolio"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 md:mb-14"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.45,
            ease: "easeOut",
          }}
        >
          <h2 className="font-bold text-3xl md:text-[2rem] text-[#007EA7]">Selected Work</h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              prefersReducedMotion={prefersReducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
