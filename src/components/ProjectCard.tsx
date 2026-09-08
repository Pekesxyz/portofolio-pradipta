"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Github } from "./Icons";
import { Project } from "../types/project";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-card border border-border rounded-xl overflow-hidden flex flex-col h-full hover:border-accent/50 hover:shadow-sm transition-all duration-300 translate-y-0 hover:-translate-y-1"
    >
      <div className="relative h-48 bg-muted overflow-hidden border-b border-border">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-border)_2px,_transparent_2px)] bg-size-[12px_12px] opacity-30"></div>
            <div className="absolute inset-0 flex items-center justify-center text-secondary/50">
              <span className="text-sm font-medium">[IMAGE PLACEHOLDER]</span>
            </div>
          </>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-secondary text-sm mb-6 flex-1 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-secondary bg-muted px-2 py-1 rounded-md border border-border/50"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs font-medium text-secondary bg-muted px-2 py-1 rounded-md border border-border/50">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4 pt-4 border-t border-border mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium"
            >
              <Github className="w-4 h-4" />
              Kode
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-foreground transition-colors flex items-center gap-1.5 text-sm font-medium ml-2"
            >
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
