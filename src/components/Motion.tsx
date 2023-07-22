"use client";

import { useRef } from "react";
import { useInView, motion, LayoutGroup } from "framer-motion";

function ClapMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <motion.div
        animate={isInView ? { justifyContent: "flex-end" } : {}}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export function Motion({ children }) {
  return (
    <>
      <LayoutGroup>
        <ClapMotion>{children}</ClapMotion>
      </LayoutGroup>
    </>
  );
}
