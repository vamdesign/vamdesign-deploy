import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: "apple",
    title: "Apple Internal Tools",
    description: "Lead designer improving and extending the internal application experience.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AppleInternApps-VW6yWy50YoH9ni7SODt4GQxkQWuYRv.png",
  },
  {
    id: "wells-fargo",
    title: "Wells Fargo CRM",
    description: "Converting legacy software to modern Salesforce implementation.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WellsFargoCRM-x8IXz4WvYzxkScu1CwxRWLZgSpRtI3.png",
  },
  {
    id: "walmart",
    title: "Walmart Labs",
    description: "Advanced Walmart Fulfillment Service UX with research, prototyping, and design systems.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WalmartFulfillment-5XPW6HA4l61PZRwTkEMdeHAGKEaLuv.png",
  },
]

export default function Portfolio() {
  return (
    <section
      className="pt-12 pb-24 px-6 text-[#007EA7]"
      id="work"
      style={{
        backgroundColor: "#D5DCE1",
        backgroundImage: "linear-gradient(135deg, rgba(213, 220, 225, 0.9), rgba(213, 220, 225, 0.9))",
        backgroundSize: "200% 200%",
        animation: "gradientAnimation 15s ease infinite",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-bold text-4xl mb-4">Innovative UX Design Showcase</h2>
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h3 className="font-bold text-3xl">{project.title}</h3>
                  <p className="text-[#5f5f5f] text-lg font-montserrat font-light">{project.description}</p>
                  <div className="text-right">
                    <motion.a
                      href={`/uc/${project.id === "apple" ? "apple" : project.id === "wells-fargo" ? "wellsf" : "walmart"}`}
                      className="text-xl font-medium text-[#007EA7] hover:text-[#005f7f] transition-colors inline-block"
                      whileHover={{ y: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      View Case Study
                    </motion.a>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg shadow-black/30 flex items-center justify-center">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

