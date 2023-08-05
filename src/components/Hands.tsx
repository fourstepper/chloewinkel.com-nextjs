"use client";

import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect, useRef } from "react";

export const Hands = () => {
  const scope = useRef<HTMLDivElement>(null);
  const inView = useInView(scope, { once: true });

  const value = useMotionValue(0);
  useEffect(() => {
    if (!inView) return undefined;

    let stopAnimation: () => void;
    (async () => {
      const handsPrepare = animate(value, -0.1, {
        duration: 0.5,
        ease: "easeInOut",
        type: "tween",
      });
      stopAnimation = handsPrepare.stop;
      await handsPrepare;

      const handsHit = animate(value, 1.85, {
        onUpdate: (value_) => {
          if (value_ >= 1) {
            handsHit.stop();
          }
        },
        stiffness: 100,
        type: "spring",
      });
      stopAnimation = handsHit.stop;
      await handsHit;

      const handsReset = animate(value, 0.4, {
        duration: 1,
        ease: "easeInOut",
        type: "tween",
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
        className="relative h-10 w-10 self-center rounded-full bg-indigo-500"
        ref={scope}
        style={{
          left: useMotionTemplate`calc(${value} * 150%)`,
          translateX: useMotionTemplate`calc(${value} * -150%)`,
        }}
      />
      <div>
        <motion.p
          className="m-auto max-w-[80px] text-center text-4xl italic"
          style={{
            opacity: inView ? 1 : 0,
            transition: "all 0.9s 1.25s",
          }}
        >
          hi!
        </motion.p>
        <motion.p
          className="m-auto max-w-[80px] text-center"
          style={{
            opacity: inView ? 1 : 0,
            transition: "all 1.2s 1.25s",
          }}
        >
          about me
        </motion.p>
      </div>
      <motion.div
        className="relative h-10 w-10 place-self-end self-center rounded-full bg-indigo-500"
        ref={scope}
        style={{
          left: useMotionTemplate`calc(${value} * -150%)`,
          translateX: useMotionTemplate`calc(${value} * 150%)`,
        }}
      />
    </div>
  );
};
