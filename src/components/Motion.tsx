"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function LayoutMotion() {
  const ref = useRef(null);
  let isInView = useInView(ref);

  return (
    <div className="grid grid-cols-2">
      <div
        ref={ref}
        className={`w-600 flex bg-slate-400 items-center pt-[4px] pb-[0px] px-[6px] rounded-full ${
          isInView ? "justify-end" : "justify-start"
        }`}
      >
        <motion.div
          className="w-10 h-10 bg-indigo-500 rounded-full"
          layout
          transition={{
            type: "spring",
            stiffness: 400,
            velocity: 4,
            bounce: 0,
            damping: 40,
          }}
        />
      </div>
    </div>
  );
}
