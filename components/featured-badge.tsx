import Image from "next/image"

export default function FeaturedBadge() {
  return (
    <div className="fixed top-[64px] left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto px-6 py-2">
        <div className="flex items-center justify-start gap-2">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image
              src="/images/landing/Vicki-Morawietz-ea17.png"
              alt="The Upgrade Badge"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs text-[#2C3D4D]">
            <a
              href="https://www.theupgrade.ai/blog/breaking-the-template-ai-assisted-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007EA7] font-medium hover:underline"
            >
              Featured by The Upgrade blog
            </a>{" "}
            for creating an innovative UX Portfolio using AI.
          </p>
        </div>
      </div>
    </div>
  )
}
