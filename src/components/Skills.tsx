"use client";

import { motion } from "framer-motion";
import { skills } from "../data/skills";

const categories = [
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "database", label: "Database" },
  { id: "programmingData", label: "Programming & Data" },
  { id: "tools", label: "Tools" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-16">
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase block mb-2">
              02 / Keahlian
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Keahlian Teknis
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-sm transition-shadow"
              >
                <h3 className="font-semibold text-lg text-foreground mb-4 pb-2 border-b border-border/50">
                  {category.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills[category.id as keyof typeof skills].map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-secondary text-sm font-medium border border-border/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
