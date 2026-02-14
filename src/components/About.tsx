"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const techStack = [
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React Native", logo: "/logos/reactnative.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Supabase", logo: "/logos/supabase.svg" },
  { name: "Stripe", logo: "/logos/stripe.svg" },
  { name: "Claude API", logo: "/logos/claude.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "Plaid", logo: "/logos/plaid.svg" },
  { name: "Expo", logo: "/logos/expo.svg" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h2 className="text-sm font-mono text-cyan-400 tracking-widest uppercase">
              Approach
            </h2>
            <p className="text-2xl md:text-3xl text-zinc-200 leading-relaxed font-light">
              Engineer with deep experience in{" "}
              <span className="text-cyan-400">AI agentic systems.</span>
            </p>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-2xl">
              I build AI-powered products from the ground up — multi-agent orchestration,
              multi-modal pipelines, real-time data systems, and production applications
              that integrate Claude, Gemini, and computer vision. From designing the
              architecture to shipping to users, I work across the entire stack to bring
              AI products to life.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-6">
              Tech Stack
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05, borderColor: "rgba(0, 212, 255, 0.3)" }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors"
                >
                  <Image
                    src={tech.logo}
                    alt={tech.name}
                    width={28}
                    height={28}
                    className="h-7 w-7"
                  />
                  <span className="text-xs text-zinc-400 text-center">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
