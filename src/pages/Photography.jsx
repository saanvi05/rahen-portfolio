import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// IMPORT LOCAL PHOTOS
import p1 from "../assets/Portfolio/Photos/20250820-A6700599.jpg";
import p2 from "../assets/Portfolio/Photos/1760752660472.jpg";
import p3 from "../assets/Portfolio/Photos/1763568363572.jpg";
import p4 from "../assets/Portfolio/Photos/1763568847627.jpg";
import p5 from "../assets/Portfolio/Photos/A6704229.jpg";
import p6 from "../assets/Portfolio/Photos/A6704520.jpg";
import p7 from "../assets/Portfolio/Photos/A6704575.jpg";
import p8 from "../assets/Portfolio/Photos/A6704923.jpg";
import p9 from "../assets/Portfolio/Photos/A6705586 (2).jpg";
import p10 from "../assets/Portfolio/Photos/A6706454.jpg";
import p11 from "../assets/Portfolio/Photos/A6707011 (1).jpg";
import p12 from "../assets/Portfolio/Photos/A6707319.jpg";
import p13 from "../assets/Portfolio/Photos/A6707344.jpg";
import p14 from "../assets/Portfolio/Photos/A6709642.jpg";
import p15 from "../assets/Portfolio/Photos/A6709666.jpg";
import p16 from "../assets/Portfolio/Photos/A6709695.jpg";
import p17 from "../assets/Portfolio/Photos/Copy of A6705463.jpg";
import p18 from "../assets/Portfolio/Photos/Copy of A6705504.jpg";
import p19 from "../assets/Portfolio/Photos/A6700311.jpg";


const Photography = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    p9,
    p10,
    p11,
    p12,
    p13,
    p14,
    p15,
    p16,
    p17,
    p18,
    p19
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f3ece0] p-10 md:p-20"
    >
      {/* Back Button */}
      <Link
        to="/"
        className="fixed top-10 left-10 z-50 bg-[#ed1d24] text-white px-5 py-2 font-black text-[10px] tracking-widest italic uppercase hover:scale-110 transition-transform"
      >
        ← BACK
      </Link>

      <div className="mb-12">
        <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
          GALLERY <br />
          <span className="text-[#ed1d24]">ASSETS.</span>
        </h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mt-4">
          CLICK TO ENLARGE. A SELECTION OF PHOTOGRAPHY WORKS.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
        {images.map((url, i) => (
          <motion.div
            key={url}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % 5) * 0.1 }}
            onClick={() => setSelectedImg(url)}
            className="relative group overflow-hidden border border-black/10 bg-white p-2 cursor-zoom-in"
          >
            <img
              src={url}
              className="w-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
              alt={`Work ${i}`}
            />
            <div className="absolute inset-0 bg-[#ed1d24]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </motion.div>
        ))}
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
          >
            <div
              className="absolute inset-0 cursor-zoom-out"
              onClick={() => setSelectedImg(null)}
            />

            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-10 right-10 text-[#ed1d24] font-black text-2xl z-[110] hover:scale-110 transition-transform"
            >
              ✕ CLOSE
            </button>

            <motion.img
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              src={selectedImg}
              className="relative z-10 max-w-full max-h-[85vh] border-[4px] border-[#ed1d24] shadow-2xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Photography;
