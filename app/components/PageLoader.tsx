"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LETTERS = ["R", "A", "H", "U", "L"];

export default function PageLoader({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3200);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {show && (
          <motion.div
            key="loader"
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] flex items-center justify-center"
            style={{ backgroundColor: "#000" }}
          >
            {/* Subtle radial glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 70%)",
              }}
            />

            <div className="relative flex items-center">
              {/* Left line — expands rightward from text edge outward */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-28 sm:w-44 md:w-64 lg:w-80 h-px"
                style={{
                  background: "linear-gradient(to left, rgba(255,255,255,0.35), transparent)",
                  transformOrigin: "right center",
                }}
              />

              {/* Name */}
              <div className="relative flex items-center px-6 sm:px-10 overflow-hidden">
                {LETTERS.map((letter, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.12 + i * 0.09,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                    className="select-none text-white/90"
                    style={{
                      fontFamily: 'Georgia, "Times New Roman", serif',
                      fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
                      fontWeight: 300,
                      letterSpacing: "0.38em",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}

                {/* Shimmer sweep */}
                <motion.div
                  initial={{ x: "-120%" }}
                  animate={{ x: "120%" }}
                  transition={{ duration: 1.1, delay: 1.2, ease: "easeInOut" }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.18) 50%, transparent 70%)",
                  }}
                />
              </div>

              {/* Right line — expands leftward from text edge outward */}
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.1, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                className="w-28 sm:w-44 md:w-64 lg:w-80 h-px"
                style={{
                  background: "linear-gradient(to right, rgba(255,255,255,0.35), transparent)",
                  transformOrigin: "left center",
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  );
}
