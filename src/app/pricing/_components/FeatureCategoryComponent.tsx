"use client";

import { motion } from "framer-motion";

export default function FeatureCategoryComponent({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      className="space-y-5 p-5 rounded-2xl bg-gradient-to-br from-[#0a0a0f]/60 to-[#111827]/80 shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] border border-white/10"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 12 }}
    >
      <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-widest drop-shadow-sm">
        {label}
      </h3>
      <div className="space-y-3">{children}</div>
    </motion.div>
  );
}
