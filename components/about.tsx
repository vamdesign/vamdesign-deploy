import { motion } from "framer-motion"

const skills = ["UX Design", "UI Design", "Prototyping", "User Research", "Wireframing", "Interaction Design"]

export default function About() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">About Me</h2>
        <p className="text-lg mb-8 text-center">
          I'm a passionate UX designer with a keen eye for detail and a love for creating intuitive, user-centered
          designs. With years of experience in the field, I've honed my skills in various aspects of UX design.
        </p>
        <h3 className="text-2xl font-bold mb-4 text-center">My Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

