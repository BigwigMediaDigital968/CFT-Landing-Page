"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 w-full z-50 flex justify-center px-4 pt-6"
    >
      <div className="w-full max-w-7xl flex items-center justify-between px-6 py-3 rounded-full border border-[var(--cft-border)] bg-[rgba(2,6,23,0.6)] backdrop-blur-xl">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-semibold tracking-tight">
            CFT
          </span>
          <Image
            src="/logo-cft.png"
            alt="Close Friend Traders logo"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-12 sm:h-12 object-contain"
            priority
          />
        </div>

        {/* Navigation */}
        {/* <nav className="hidden md:flex items-center gap-8 text-sm text-[var(--cft-text-muted)]">
          <Link href="#" className="hover:text-white transition">
            Home
          </Link>
          <Link href="#" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#" className="hover:text-white transition">
            Pricing
          </Link>
          <Link href="#" className="hover:text-white transition">
            Resources
          </Link>
        </nav> */}

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          {/* <button className="text-sm text-[var(--cft-text-muted)] hover:text-white transition">
            Log in
          </button> */}

          <Link
            href="#leadform"
            className="px-5 py-2 rounded-full bg-[var(--cft-primary)] hover:bg-[var(--cft-primary-hover)] text-white text-sm font-medium transition glow-blue"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-white">
          <Menu size={22} />
        </button>
      </div>
    </motion.header>
  );
}
