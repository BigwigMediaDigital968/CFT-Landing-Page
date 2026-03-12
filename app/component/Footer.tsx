"use client";

import Link from "next/link";
import { Twitter, Linkedin, Instagram, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--cft-bg-dark)] border-t border-[var(--cft-border)] text-[var(--cft-text-muted)]">
      {/* Top Section */}
      <div className="w-11/12 md:w-5/6 mx-auto py-16 grid gap-10 md:grid-cols-3">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl text-[var(--cft-text-main)] font-bold">
            Close Friend Traders
          </h3>

          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            Empowering traders with powerful tools, real-time insights, and a
            seamless trading experience.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a
              href="#"
              className="p-2 rounded-full border border-[var(--cft-border)] hover:border-[var(--cft-primary)] hover:text-[var(--cft-primary)] transition"
            >
              <Twitter size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full border border-[var(--cft-border)] hover:border-[var(--cft-primary)] hover:text-[var(--cft-primary)] transition"
            >
              <Linkedin size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full border border-[var(--cft-border)] hover:border-[var(--cft-primary)] hover:text-[var(--cft-primary)] transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              className="p-2 rounded-full border border-[var(--cft-border)] hover:border-[var(--cft-primary)] hover:text-[var(--cft-primary)] transition"
            >
              <Send size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[var(--cft-text-main)] font-semibold mb-4">
            Quick Links
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-[var(--cft-text-main)] font-semibold mb-4">
            Legal
          </h4>

          <ul className="space-y-3 text-sm">
            <li>
              <Link
                href="/privacy-policy"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                href="/refund-policy"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Refund Policy
              </Link>
            </li>
            <li>
              <Link
                href="/disclaimer"
                className="hover:text-[var(--cft-primary)] transition"
              >
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[var(--cft-border)] py-6 text-center text-sm">
        © {new Date().getFullYear()} Close Friend Traders. All rights reserved.
      </div>
    </footer>
  );
}
