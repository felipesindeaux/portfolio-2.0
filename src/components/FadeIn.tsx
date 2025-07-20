"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FadeIn({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
