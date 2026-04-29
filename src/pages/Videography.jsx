import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Videography = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const reels = [
    {
      id: "VFX-01",
      name: "CINEMATIC FLOW",
      file: "https://player.cloudinary.com/embed/?cloud_name=dyeqpzozb&public_id=0125_1_l1pnby",
      status: "RENDERED",
      tags: ["4K", "GRADE"]
    },
    {
      id: "VFX-02",
      name: "COLOR THEORY",
      file: "https://player.cloudinary.com/embed/?cloud_name=dyeqpzozb&public_id=0124_7_aur4sw",
      status: "FINAL",
      tags: ["LOG", "REC709"]
    },
    {
      id: "VFX-03",
      name: "SOUND NARRATIVE",
      file: "https://player.cloudinary.com/embed/?cloud_name=dyeqpzozb&public_id=0124_3_synbw5",
      status: "SYNCED",
      tags: ["SFX", "FOLEY"]
    },
    {
      id: "VFX-04",
      name: "MOTION SEQUENCE",
      file: "https://player.cloudinary.com/embed/?cloud_name=dyeqpzozb&public_id=0124_5_mtkgk4",
      status: "PROCESSING",
      tags: ["FX", "COMP"]
    },
    {
      id: "VFX-05",
      name: "TACTICAL EDIT",
      file: "https://player.cloudinary.com/embed/?cloud_name=dyeqpzozb&public_id=0124_1_mmdiai",
      status: "RENDERED",
      tags: ["CUT", "PACE"]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#151515] p-10 md:p-20 text-[#f3ece0]"
    >
      <Link
        to="/"
        className="fixed top-10 left-10 z-50 bg-[#ed1d24] text-white px-5 py-2 font-black text-[10px] italic uppercase tracking-widest"
      >
        ← BACK
      </Link>
      <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase mb-12">
        VIDEO <br />
        <span className="text-[#ed1d24]">DOSSIER.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reels.map((reel, i) => (
          <div
            key={i}
            onClick={() => setActiveVideo(reel)}
            className="group relative border border-zinc-800 aspect-video overflow-hidden bg-zinc-900 cursor-pointer"
          >
            <iframe
              src={reel.file}
              className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all"
              muted
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 border border-white rounded-full flex items-center justify-center group-hover:bg-[#ed1d24] transition-all">
                ▶
              </div>
            </div>
            <p className="absolute bottom-4 left-4 text-[9px] font-black tracking-widest">
              {reel.title}
            </p>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-10"
          >
            <div
              className="absolute inset-0"
              onClick={() => setActiveVideo(null)}
            />
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-10 right-10 text-[#ed1d24] font-black text-2xl z-[110]"
            >
              ✕ CLOSE
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              className="relative w-full max-w-5xl aspect-video bg-black border-4 border-[#ed1d24] z-10"
            >
              <iframe
                src={activeVideo.file}
                className="w-full h-full"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
export default Videography;
