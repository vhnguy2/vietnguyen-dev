"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 5, label: "Products Shipped", suffix: "" },
  { value: 500, label: "Weekly Active Users", suffix: "+" },
  { value: 2, label: "Live in Production", suffix: "" },
  { value: 12, label: "Technologies Used", suffix: "+" },
];

export default function Metrics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 px-6 border-y border-zinc-800" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {metrics.map((metric) => (
          <motion.div
            key={metric.label}
            variants={fadeInUp}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-white font-mono mb-2">
              <Counter target={metric.value} suffix={metric.suffix} />
            </div>
            <div className="text-sm text-zinc-500 tracking-wide">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
