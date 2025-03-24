"use client"

import { motion } from "framer-motion"

const achievements = [
  {
    metric: "10+",
    label: "Enterprise Applications",
    description: "Designed and delivered for Fortune 500 and Start-ups",
  },
  {
    metric: "6+",
    label: "Design Systems",
    description: "Designed, built and implemented in Figma and Sketch",
  },
  {
    metric: "30%",
    label: "Reduction in User-Reported Errors*",
    description: "Enhanced usability and system integration",
  },
  {
    metric: "25%",
    label: "Faster Task Completion*",
    description: "Improved efficiency through UX optimizations",
  },
]

export default function Impact() {
  return (
    <section
      className="pt-24 pb-20 px-6 relative" /* Changed pt-4 to pt-40 and fixed pb-320 to pb-20 */
      id="impact"
      style={{
        backgroundColor: "#f8f9fa",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-bold text-4xl mb-4 text-[#007EA7]">Impact Through Design</h2>
          <p className="text-xl text-[#007EA7]/70">Measurable results that drive business growth</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 -mt-4 max-w-3xl mx-auto"
        >
          <p className="text-lg text-[#007EA7] text-center font-montserrat font-light">
            As a Senior UX/UI designer, I specialize in creating innovative enterprise solutions and comprehensive
            design systems. My approach combines strategic design thinking with a keen focus on user needs, resulting in
            experiences that not only delight users but also drive measurable improvements in retention and key business
            metrics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* NOTE: Removed hover:shadow-lg and transition-all duration-300 from the div below to eliminate rollover effects */}
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="flex items-start">
                  <div className="font-bold text-6xl text-[#FF6700] mr-4 leading-none">{achievement.metric}</div>
                  <div>
                    <div className="text-lg font-semibold text-[#007EA7] mb-1">{achievement.label}</div>
                    <div className="text-sm text-[#007EA7]/70 font-montserrat font-light">
                      {achievement.description}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-[7px] text-[#007EA7]/70 mt-8 max-w-3xl">
          *Due to NDA restrictions, data is based on predefined percentage ranges. Utilized usability surveys, A/B
          testing, and tools like Google Analytics, Salesforce, and Jira.
        </p>
      </div>
    </section>
  )
}