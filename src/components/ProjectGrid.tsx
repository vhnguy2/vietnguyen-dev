"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import ProjectDetail from "./ProjectDetail";

export default function ProjectGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-4">
            Featured Projects
          </h2>
          <p className="text-3xl md:text-4xl text-white font-light">
            Production software. Real users.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-4"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setSelectedProject}
            />
          ))}
        </motion.div>
      </div>

      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
