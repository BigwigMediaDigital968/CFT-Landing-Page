"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 text-center noise-overlay">
      {/* Background Glow Layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{ background: "var(--cft-glow-blue)" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "var(--cft-glow-center)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--cft-border)] bg-[var(--cft-bg-surface)] text-xs text-[var(--cft-text-muted)] mb-8"
        >
          <span className="px-2 py-0.5 rounded-full bg-[var(--cft-primary)] text-white text-[10px] font-semibold">
            Prime
          </span>

          <span>Close Friend Traders — Save 50% Now!</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight"
        >
          Empower Your Financial
          <br />
          Future with{" "}
          <span className="text-gradient-blue glow-text">Smart Trading</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-6 text-lg md:text-xl text-[var(--cft-text-muted)] max-w-2xl mx-auto leading-relaxed"
        >
          Join millions of traders who trust our platform for real-time
          insights, powerful tools, and seamless trading experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          {/* Primary CTA */}
          <Link
            href="#leadform"
            className="px-8 py-3 rounded-full bg-[var(--cft-primary)] hover:bg-[var(--cft-primary-hover)] text-white font-medium transition glow-blue"
          >
            Start Trading Now →
          </Link>

          {/* Secondary CTA */}
          <button className="px-8 py-3 rounded-full border border-[var(--cft-border-bright)] text-white hover:bg-[var(--cft-bg-surface)] transition">
            Explore Features
          </button>
        </motion.div>
      </div>
    </section>
  );
}
