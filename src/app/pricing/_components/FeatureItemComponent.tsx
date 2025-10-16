"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureItemComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex items-start gap-3 group"
      whileHover={{ x: 5 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-400/10 flex items-center justify-center border border-blue-500/30 group-hover:border-blue-400/60 group-hover:shadow-[0_0_10px_rgba(56,189,248,0.4)] transition-all">
        <Check className="w-3.5 h-3.5 text-blue-300 group-hover:text-blue-200 transition-colors" />
      </div>
      <span className="text-gray-300 group-hover:text-white transition-colors text-sm">
        {children}
      </span>
    </motion.div>
  );
}
