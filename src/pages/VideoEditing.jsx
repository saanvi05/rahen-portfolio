import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const VideoEditing = () => {
  const [activeEdit, setActiveEdit] = useState(null);

  const projects = [
    {
      id: "VFX-01",
      name: "CINEMATIC FLOW",
      file: "https://res.cloudinary.com/dyeqpzozb/video/upload/v1777409354/0124_hczclk.mp4",
      status: "RENDERED",
      tags: ["4K", "GRADE"]
    },
    {
      id: "VFX-02",
      name: "COLOR THEORY",
      file: "https://res.cloudinary.com/dyeqpzozb/video/upload/v1777409371/0201_4_r1xcwt.mp4",
      status: "FINAL",
      tags: ["LOG", "REC709"]
    },
    {
      id: "VFX-03",
      name: "SOUND NARRATIVE",
      file: "https://res.cloudinary.com/dyeqpzozb/video/upload/v1777411225/Document_from___1_-_CROP_-_Videobolt.net_a3mtqn.mp4",
      status: "SYNCED",
      tags: ["SFX", "FOLEY"]
    },
    {
      id: "VFX-04",
      name: "MOTION SEQUENCE",
      file: "https://res.cloudinary.com/dyeqpzozb/video/upload/v1777411000/lv_0_20251005014819_1_-_ROTATE_-_Videobolt.net_1_ndy8yu.mp4",
      status: "PROCESSING",
      tags: ["FX", "COMP"]
    },
    {
      id: "VFX-05",
      name: "TACTICAL EDIT",
      file: "https://res.cloudinary.com/dyeqpzozb/video/upload/v1777409361/lv_0_20251108132251_hoeylc.mp4",
      status: "RENDERED",
      tags: ["CUT", "PACE"]
    },
    {
      id: "VFX-06",
      name: "MISSION CUT",
      file: "https://res.cloudinary.com/dyeqpzozb/video/upload/v1777409574/lv_0_20260322205312_1_b02tem.mp4",
      status: "EXPORTED",
      tags: ["PROXIES"]
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
        className="fixed top-10 left-10 z-50 bg-[#ed1d24] text-white px-5 py-2 font-black text-[10px] tracking-widest italic uppercase"
      >
        ← BACK
      </Link>

      <div className="mb-16">
        <h2 className="text-6xl font-black italic tracking-tighter uppercase leading-none">
          POST <br />
          <span className="text-[#ed1d24]">PRODUCTION.</span>
        </h2>
        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-500 mt-4">
          Some Videos Post editing. Click to view.
        </p>
      </div>

      <div className="max-w-5xl space-y-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            onClick={() => setActiveEdit(p)}
            whileHover={{ x: 10 }}
            className="border border-zinc-800 p-6 hover:border-[#ed1d24] hover:bg-zinc-900/50 transition-all group cursor-pointer relative overflow-hidden"
          >
            <div className="flex justify-between items-start mb-6 relative z-10">
              <div className="flex gap-6 items-center">
                <span className="text-zinc-700 font-black text-xs">{p.id}</span>
                <div>
                  <span className="text-[#ed1d24] font-black text-[8px] tracking-widest">
                    {p.status}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black italic uppercase mt-1 group-hover:text-white transition-colors">
                    {p.name}
                  </h3>
                </div>
              </div>
              <div className="hidden md:flex gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[7px] border border-zinc-700 px-2 py-1 text-zinc-500 font-bold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="h-[2px] bg-zinc-800 w-full relative z-10">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{ duration: 1.5, delay: i * 0.1 }}
                className="h-full bg-[#ed1d24]"
              />
              <div className="absolute top-2 right-0 text-[8px] font-bold text-zinc-600 tracking-tighter">
                FILE_SIZE: 1.2GB // TC: 00:0{i + 1}:45:12
              </div>
            </div>

            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-8xl font-black text-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none italic">
              PLAY
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeEdit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/98 flex items-center justify-center p-4 md:p-6"
          >
            <div
              className="absolute inset-0"
              onClick={() => setActiveEdit(null)}
            />

            <button
              onClick={() => setActiveEdit(null)}
              className="absolute top-6 right-6 md:top-10 md:right-10 text-[#ed1d24] font-black text-xl md:text-3xl z-[110] hover:scale-110 transition-transform flex items-center gap-2"
            >
              <span className="text-[10px] tracking-[0.4em] hidden md:block">
                Close
              </span>{" "}
              ✕
            </button>

            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-[1400px] lg:w-[90vw] bg-black border-2 md:border-[4px] border-[#ed1d24] shadow-[0_0_100px_rgba(237,29,36,0.2)] z-10 overflow-hidden"
            >
              <video
                src={activeEdit.file}
                controls
                autoPlay
                className="w-full h-full max-h-[85vh] object-contain bg-black"
                poster="/thumbnail.jpg"
              />

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 flex justify-between items-end pointer-events-none">
                <div className="space-y-1">
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#ed1d24]">
                    Sequence: {activeEdit.name}
                  </p>
                  <p className="text-[8px] font-bold text-zinc-500 tracking-tighter">
                    ENCODING: H.264 // SOURCE: INTERNAL_STORAGE
                  </p>
                </div>
                <div className="text-[8px] font-black text-[#ed1d24] opacity-50 uppercase tracking-[0.5em]">
                  Rahen Editing Suite v1.0
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default VideoEditing;
