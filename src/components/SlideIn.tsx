"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  i: number;
}

export function SlideIn({ children, i }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.15, duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
