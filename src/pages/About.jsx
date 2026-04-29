import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import myPhoto from "../assets/Portfolio/me/Me.jpg";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#151515] text-[#f3ece0]"
    >
      <Link
        to="/"
        className="fixed top-10 left-10 z-50 bg-[#ed1d24] text-white px-5 py-2 font-black text-[10px] tracking-widest italic uppercase hover:scale-110 transition-transform"
      >
        ← BACK
      </Link>

      <div className="flex flex-col md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 h-[60vh] md:h-screen sticky top-0">
          <img
            src={myPhoto}
            className="w-full h-full object-cover grayscale contrast-125"
            alt="Rahen"
          />
          <div className="absolute inset-0 bg-[#ed1d24]/10 mix-blend-multiply" />
        </div>

        <div className="w-full md:w-1/2 p-10 md:p-20 flex flex-col justify-center bg-[#151515]">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#ed1d24] font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">
              Hi It's me! RAHEN
            </span>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none mb-10 uppercase">
              THE MAN <br /> BEHIND THE <br />{" "}
              <span className="text-[#ed1d24]">LENS.</span>
            </h2>

            <div className="space-y-6 text-zinc-400 font-bold uppercase text-[11px] leading-relaxed tracking-widest max-w-lg border-l-2 border-[#ed1d24] pl-6 mb-10">
              <p>
                I’m Rahen Shourya Sahoo where science meets storytelling.
                Currently pursuing an integrated MSc in Chemistry, I see the
                world through both logic and lens.
              </p>
              <p>
                For the past 3 years, I’ve been capturing moments, crafting
                visuals, and turning raw footage into stories that feel alive.
              </p>
              <p>
                As a photographer, videographer, and video editor, I don’t just
                create content, I frame emotions, light narratives, and edit
                experiences that stay with you.
              </p>
              <p className="text-[#f3ece0]">
                Every frame I shoot has a purpose. Every cut I make tells a
                story.
              </p>
            </div>

            {/* INSTAGRAM BUTTON USING SVG (Safest Method) */}
            <motion.a
              href="https://www.instagram.com/framesbyrahen/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ed1d24",
                color: "#fff"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#f3ece0] text-[#151515] px-6 py-4 font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl transition-colors duration-300"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              Follow Me
            </motion.a>
          </motion.div>
        </div>
      </div>

      <div className="border-t-4 border-[#ed1d24]">
        <Contact />
      </div>

      <footer className="p-4 text-center bg-black text-zinc-800 font-black uppercase tracking-[0.2rem] text-[8px]">
        Designed & Developed by © SAANVI SMAKSHI SAHOO 2026
      </footer>
    </motion.div>
  );
};

export default About;
