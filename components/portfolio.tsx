"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Cookies from "js-cookie"
import { useEffect, useLayoutEffect, useState } from "react"
import type { CSSProperties } from "react"

const IMAGE_FRAME_SIZE =
  "relative h-[380px] w-full shrink-0 sm:h-[420px] md:h-[460px] lg:h-[500px]"

const IMAGE_FRAME_INSET = "box-border py-[10px] px-2 sm:px-3"
const IMAGE_FRAME_INSET_APPLE = "box-border pt-[10px] pb-0 px-2 sm:px-3"
const IMAGE_FRAME_INSET_WALMART = "box-border p-0"

type ImageAlign = "top" | "center"

type PortfolioProject = {
  id: string
  hoverTitle: string
  href: string
  image: string
  imageBackdrop: string
  imageAlign: ImageAlign
}

const projects: PortfolioProject[] = [
  {
    id: "apple",
    hoverTitle: "Apple: Internal Support Tools",
    href: "/uc/apple/details/",
    image: "/images/landing/AppleInternApps.png",
    imageBackdrop: "#ffffff",
    imageAlign: "top",
  },
  {
    id: "wells-fargo",
    hoverTitle: "Wells Fargo: Salesforce Migration",
    href: "/uc/wellsf/details/",
    image: "/images/landing/WellsFargoCRM.png",
    imageBackdrop: "#ffffff",
    imageAlign: "center",
  },
  {
    id: "ai-design",
    hoverTitle: "UX/AX Guidance for AI Actions",
    href: "/uc/mcp/",
    image: "/images/MCP/policy_flow.jpg",
    imageBackdrop: "#fefefe",
    imageAlign: "center",
  },
  {
    id: "walmart",
    hoverTitle: "Walmart Fulfillment Services",
    href: "/uc/walmart/details/",
    image: "/images/landing/WalmartFulfillment.png",
    imageBackdrop: "#041e42",
    imageAlign: "center",
  },
]

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
      <Link
        href={cardHref}
        prefetch={false}
        className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-[#007EA7] focus-visible:ring-offset-2 rounded-2xl"
        aria-label={`View case study: ${project.hoverTitle}`}
      >
        <article className="group relative overflow-hidden rounded-2xl border border-black/[0.07] bg-white shadow-[0_4px_24px_-4px_rgba(0,62,82,0.12)] transition-[box-shadow,transform] duration-300 ease-out hover:scale-[1.02] hover:border-[#007EA7]/15 hover:shadow-[0_20px_40px_-12px_rgba(0,62,82,0.22)] motion-reduce:hover:scale-100 motion-reduce:transition-shadow">

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

            {/* Subtle base tint — always present */}
            <div
              className={
                "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#007EA7]/[0.06] via-transparent to-transparent mix-blend-multiply " +
                (project.id === "walmart" ? "opacity-35" : "opacity-80")
              }
              aria-hidden
            />

            {/* Hover: centered title, no background, strong text shadow for legibility */}
            <div className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out">
              <h3
                className="font-sans font-semibold text-xl sm:text-2xl text-white text-center px-8 leading-snug"
                style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8), 0 1px 4px rgba(0,0,0,0.95)" }}
              >
                {project.hoverTitle}
              </h3>
            </div>

          </div>
        </article>
      </Link>
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
      <div className="site-container">
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
