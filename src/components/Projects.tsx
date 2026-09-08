"use client";

import { otherProjects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Proyek Lainnya
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {otherProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
