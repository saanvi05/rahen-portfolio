import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CameraFlash = () => {
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      const target = e.target;
      // Detect if we clicked a link, button, or something with a pointer cursor
      const isClickable =
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        window.getComputedStyle(target).cursor === "pointer";

      if (isClickable) {
        setIsFlashing(true);
        setTimeout(() => setIsFlashing(false), 50); // Fast shutter speed
      }
    };

    window.addEventListener("mousedown", handleGlobalClick);
    return () => window.removeEventListener("mousedown", handleGlobalClick);
  }, []);

  return (
    <AnimatePresence>
      {isFlashing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.7, 0] }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "linear" }}
          className="fixed inset-0 bg-white pointer-events-none z-[9999]"
        />
      )}
    </AnimatePresence>
  );
};

export default CameraFlash;
