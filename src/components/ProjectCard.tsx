"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export default function ProjectCard({ project, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={() => onSelect(project)}
      className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 cursor-pointer hover:border-cyan-500/30 hover:bg-zinc-800/50 transition-colors duration-300 flex flex-col w-full md:w-[calc(50%-0.5rem)]"
    >
      {/* Top row: name + live badge */}
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
          {project.name}
        </h3>
        {project.liveUrl && (
          <span className="flex items-center gap-1 text-[10px] text-emerald-400 uppercase tracking-wider font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </span>
        )}
      </div>

      {/* One-liner */}
      <p className="text-sm text-zinc-500 mb-auto leading-relaxed">
        {project.tagline}
      </p>

      {/* Bottom: tech as a subtle comma-separated list */}
      <div className="mt-5 pt-4 border-t border-zinc-800/60">
        <p className="text-xs text-zinc-600 font-mono truncate">
          {project.tech.join(" · ")}
        </p>
      </div>

      {/* Hover arrow */}
      <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-cyan-400"
        >
          <path
            d="M4 12L12 4M12 4H5M12 4V11"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </motion.div>
  );
}
