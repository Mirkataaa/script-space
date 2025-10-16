"use client";

import NavigationHeaderComponent from "@/components/NavigationHeaderComponent";
import { ArrowRight, Command, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import useMounted from "@/hooks/useMounted";

export default function PremiumPlanViewComponent() {
  const mounted = useMounted();

  //   canvas confetti
  useEffect(() => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#6366f1", "#8b5cf6", "#22d3ee", "#e879f9"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#6366f1", "#8b5cf6", "#22d3ee", "#e879f9"],
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative bg-[#0a0a0f] min-h-screen overflow-hidden">
      <NavigationHeaderComponent />

      {/* floating particles*/}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-50"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* central card */}
      <div className="relative px-4 h-[80vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-xl mx-auto text-center"
        >
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl opacity-10" />

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="relative bg-[#12121a]/90 border border-gray-800/60 backdrop-blur-2xl rounded-2xl p-12 shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)] hover:shadow-[0_0_80px_-8px_rgba(168,85,247,0.4)] transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] to-purple-500/[0.05] rounded-2xl" />

            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
                className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 mb-6 ring-1 ring-gray-800/60 shadow-inner"
              >
                <Star className="w-9 h-9 text-purple-400 animate-pulse" />
              </motion.div>

              <h1 className="text-4xl font-semibold text-white mb-4 tracking-tight">
                Premium Plan Active
              </h1>
              <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                Congratulations! You’ve unlocked the full experience — advanced
                tools, and exclusive features.
              </p>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 hover:from-blue-500/20 hover:to-purple-500/20 text-white rounded-xl transition-all duration-300 border border-gray-800 hover:border-blue-500/50 group"
              >
                <Command className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Open Editor</span>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
