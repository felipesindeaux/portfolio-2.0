'use client';

import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-5 left-1/2 -translate-x-1/2 flex flex-col items-center"
      animate={{ y: [0, 5, 0], opacity: [1, 0.6, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      <p className="scroll-text mb-1">Pise fundo!</p>

      <svg
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="8 10 12 14 16 10" />
      </svg>
    </motion.div>
  );
}