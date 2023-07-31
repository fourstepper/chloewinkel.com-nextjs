"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";

export function HandsMotion() {
  const scope = useRef<HTMLDivElement>(null);
  const inView = useInView(scope, { once: true });

  const value = useMotionValue(0);
  useEffect(() => {
    if (!inView) return;

    let stopAnimation: any;
    (async () => {
      const handsPrepare = animate(value, -0.1, {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      });
      stopAnimation = handsPrepare.stop;
      await handsPrepare;

      const handsHit = animate(value, 1, {
        type: "spring",
        stiffness: 100,
        onUpdate: (v) => {
          if (v >= 1) {
            handsHit.stop();
          }
        },
      });
      stopAnimation = handsHit.stop;
      await handsHit;

      const handsReset = animate(value, 0.4, {
        type: "tween",
        ease: "easeInOut",
        duration: 1,
      });

      stopAnimation = handsReset.stop;
      await handsReset;
    })();
    return () => {
      stopAnimation?.();
    };
  }, [inView, value]);

  return (
    <div className="grid grid-cols-3">
      <motion.div
        ref={scope}
        style={{
          left: useMotionTemplate`calc(${value} * 150%)`,
          translateX: useMotionTemplate`calc(${value} * -150%)`,
        }}
        className="self-center w-10 h-10 bg-indigo-500 rounded-full relative"
      />
      <div>
        <motion.p
          className="text-center text-4xl max-w-[80px] m-auto italic"
          style={{
            opacity: inView ? 1 : 0,
            transition: "all 0.9s 1.25s",
          }}
        >
          hi!
        </motion.p>
        <motion.p
          className="text-center max-w-[80px] m-auto"
          style={{
            opacity: inView ? 1 : 0,
            transition: "all 1.2s 1.25s",
          }}
        >
          about me
        </motion.p>
      </div>
      <motion.div
        ref={scope}
        style={{
          left: useMotionTemplate`calc(${value} * -150%)`,
          translateX: useMotionTemplate`calc(${value} * 150%)`,
        }}
        className="self-center place-self-end w-10 h-10 bg-indigo-500 rounded-full relative"
      />
    </div>
  );
}
