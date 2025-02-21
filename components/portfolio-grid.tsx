import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  { id: 1, title: "Project 1", image: "/placeholder.svg?height=300&width=300" },
  { id: 2, title: "Project 2", image: "/placeholder.svg?height=300&width=300" },
  { id: 3, title: "Project 3", image: "/placeholder.svg?height=300&width=300" },
  { id: 4, title: "Project 4", image: "/placeholder.svg?height=300&width=300" },
]

export default function PortfolioGrid() {
  return (
    <section className="py-20 px-4">
      <h2 className="text-4xl font-bold mb-10 text-center">My Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="relative overflow-hidden rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={300}
              height={300}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-2xl font-bold">{project.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

