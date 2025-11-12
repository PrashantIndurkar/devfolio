"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

export function OpenToWorkBadge({ className }: { className?: string }) {
  // This badge can be used for both 'Open to Work' and 'Currently Employed' states.
  // To use for 'Currently Employed', update the text and color as shown below.

  // Change the values below to switch status.
  const employed = false; // Set to true if you are employed and not looking for work.

  const color = employed ? "bg-blue-500" : "bg-green-500/90";
  const text = employed ? "Currently working" : "Open to Work";
  const pulseColor = employed ? "bg-blue-500" : "bg-green-500";
  const badgeTextColor = employed
    ? "text-blue-600 dark:text-blue-300"
    : "text-green-600 dark:text-green-400";

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex size-3 shrink-0 items-center justify-center">
        <motion.div
          className={cn("absolute inset-0 rounded-full", pulseColor)}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.7, 0.2, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className={cn("relative size-2 rounded-full", color)} />
      </div>
      <span className={cn("text-sm font-medium", badgeTextColor)}>{text}</span>
    </div>
  );
}
