"use client";

import { motion, type MotionProps } from "motion/react";
import type { ReactNode } from "react";

export interface AnimateInProps extends MotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  duration = 0.5,
  yOffset = 24,
  ...other
}: AnimateInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...other}
    >
      {children}
    </motion.div>
  );
}
