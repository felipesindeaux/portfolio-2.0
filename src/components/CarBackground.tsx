'use client';

import { motion } from 'framer-motion';

export function CarBackground() {
  return (
    <motion.div
      initial={{ scale: 1.1, filter: 'blur(4px)' }}
      animate={{ scale: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="car-bg"
    />
  );
}