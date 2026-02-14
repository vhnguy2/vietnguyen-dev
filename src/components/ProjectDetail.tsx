"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { AI_LABELS, type Project } from "@/data/projects";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  // Escape key handler
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:max-w-2xl md:w-full z-50 overflow-y-auto"
          >
            <div className="relative bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors z-10"
              >
                ✕
              </button>

              {/* Header */}
              <div className="mb-8 pr-10">
                <div className="flex items-center gap-3 mb-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-white">
                    {project.name}
                  </h2>
                  {project.liveUrl && (
                    <span className="flex items-center gap-1.5 text-xs text-emerald-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-lg">{project.tagline}</p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                <span
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border ${AI_LABELS[project.aiLevel].color}`}
                >
                  {AI_LABELS[project.aiLevel].label}
                </span>
                {project.liveUrl && project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-400/30 text-emerald-400 bg-emerald-400/10 hover:bg-emerald-400/20 transition-colors"
                  >
                    Visit Site →
                  </a>
                )}
                {project.liveLabel && project.liveUrl === "#" && (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-400/30 text-emerald-400 bg-emerald-400/10">
                    {project.liveLabel}
                  </span>
                )}
              </div>

              {/* Demo Video */}
              {project.demoVideo && (
                <div className="mb-8 rounded-xl overflow-hidden border border-zinc-700 bg-black">
                  <video
                    src={project.demoVideo}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full"
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* Description */}
              <p className="text-zinc-300 leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Problem → Approach → Build → Result */}
              <div className="space-y-6 mb-8">
                {[
                  { label: "Problem", content: project.problem, color: "text-red-400" },
                  { label: "Approach", content: project.approach, color: "text-cyan-400" },
                  { label: "How I Built It", content: project.build, color: "text-purple-400" },
                  { label: "Result", content: project.result, color: "text-emerald-400" },
                ].map((section) => (
                  <div key={section.label}>
                    <h3 className={`text-sm font-mono ${section.color} tracking-widest uppercase mb-2`}>
                      {section.label}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              {/* AI Detail */}
              <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 mb-8">
                <h3 className="text-sm font-mono text-cyan-400 tracking-widest uppercase mb-2">
                  AI Integration
                </h3>
                <p className="text-zinc-300 text-sm">{project.aiDetail}</p>
              </div>

              {/* Tech Stack */}
              <div>
                <h3 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-3">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 text-sm text-zinc-300 bg-zinc-800 rounded-lg border border-zinc-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
