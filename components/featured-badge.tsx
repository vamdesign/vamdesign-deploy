import Image from "next/image"

export default function FeaturedBadge() {
  return (
    <div className="bg-white/50 backdrop-blur-sm border-t border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8 flex-shrink-0">
            <Image
              src="/images/landing/Vicki-Morawietz-ea17.png"
              alt="The Upgrade Badge"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-xs md:text-sm text-[#2C3D4D] font-medium">
            <a
              href="https://www.theupgrade.ai/blog/breaking-the-template-ai-assisted-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007EA7] font-semibold hover:underline"
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
