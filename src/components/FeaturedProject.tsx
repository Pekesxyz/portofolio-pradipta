"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { featuredProject } from "../data/projects";
import Image from "next/image";

export function FeaturedProject() {
  return (
    <section id="projects" className="pt-24 pb-12 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12">
            <span className="text-sm font-semibold tracking-wider text-secondary uppercase block mb-2">
              03 / Karya
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Proyek Utama
            </h2>
          </div>

          <div className="bg-card border border-border rounded-2xl overflow-hidden group">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center bg-card z-10 relative">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  {featuredProject.title}
                </h3>
                <p className="text-secondary text-lg mb-8 leading-relaxed">
                  {featuredProject.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Fitur Utama
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
                    {featuredProject.features?.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-secondary text-sm"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-secondary text-xs font-medium rounded-full border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-foreground bg-muted px-4 py-2 rounded-md hover:bg-border transition-colors border border-border"
                    >
                      <Github className="w-4 h-4" />
                      Kode Sumber
                    </a>
                  )}
                  {featuredProject.demo && (
                    <a
                      href={featuredProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo Langsung
                    </a>
                  )}
                  {(!featuredProject.github && !featuredProject.demo) && (
                    <span className="text-sm font-medium text-secondary italic">
                      Proyek Sedang Dikembangkan / Private Repository
                    </span>
                  )}
                </div>
              </div>

              <div className="relative h-64 lg:h-auto bg-muted overflow-hidden border-t lg:border-t-0 lg:border-l border-border">
                {featuredProject.image ? (
                  <Image
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-border)_2px,_transparent_2px)] bg-size-[16px_16px] opacity-30"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-secondary/50">
                      <span>[PROJECT SCREENSHOT]</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
