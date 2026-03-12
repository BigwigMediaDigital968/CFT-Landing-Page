"use client";

import { motion } from "framer-motion";

export default function StatusModal({
  type,
  message,
  close,
}: {
  type: "success" | "error";
  message: string;
  close: () => void;
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 px-4">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[var(--cft-bg-card)] border border-[var(--cft-border)] rounded-[var(--radius-lg)] p-8 max-w-md w-full text-center space-y-5"
      >
        {/* Icon */}
        <div className="text-5xl">{type === "success" ? "✅" : "❌"}</div>

        {/* Title */}
        <h3 className="text-xl font-semibold">
          {type === "success" ? "Success" : "Error"}
        </h3>

        {/* Message */}
        <p className="text-[var(--cft-text-muted)]">{message}</p>

        {/* Close Button */}
        <button
          onClick={close}
          className="mt-4 px-6 py-2 rounded-full cursor-pointer bg-[var(--cft-primary)] hover:bg-[var(--cft-primary-hover)]"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
}
