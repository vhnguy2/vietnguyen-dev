"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-cyan-500/3 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-6"
        >
          Software Engineer · AI Agentic Systems
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-mono tracking-tight"
        >
          Viet Nguyen
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl mb-3 max-w-xl mx-auto font-light"
        >
          I build AI-powered products — agentic systems, multi-modal pipelines, and production software that puts AI to work.
        </motion.p>

        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
          className="text-cyan-400/70 text-sm mb-10 font-mono"
        >
          Seeking Software Engineer / AI Engineer roles
        </motion.p>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3.5 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition-colors duration-200 text-sm tracking-wide"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border border-zinc-700 text-zinc-300 rounded-lg hover:border-cyan-500/50 hover:text-cyan-400 transition-colors duration-200 text-sm tracking-wide"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-zinc-600 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-zinc-500 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
