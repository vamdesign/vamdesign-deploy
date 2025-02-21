import { motion } from "framer-motion"

const achievements = [
  {
    metric: "10+",
    label: "Enterprise Projects",
    description: "Delivered for Fortune 500 companies",
  },
  {
    metric: "40%",
    label: "Avg. Retention Increase",
    description: "Across redesigned platforms",
  },
  {
    metric: "5+",
    label: "Design Systems",
    description: "Built and implemented",
  },
  {
    metric: "30%",
    label: "Error Rate Reduction",
    description: "Through UX improvements",
  },
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Impact Through Design</h2>
          <p className="text-xl text-slate-300">Measurable results that drive business growth</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg transform transition-transform group-hover:scale-105" />
              <div className="relative p-8 text-center">
                <div className="text-4xl font-bold text-primary mb-2">{achievement.metric}</div>
                <div className="text-lg font-semibold text-slate-100 mb-2">{achievement.label}</div>
                <div className="text-sm text-slate-400">{achievement.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

