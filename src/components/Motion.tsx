"use client";

import { motion } from "framer-motion";

function Motion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <h1>Hello</h1>
    </motion.div>
  );
}

export default Motion;
