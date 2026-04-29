import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-[#151515]">
      {/* 1. BACKGROUND LAYER: Split Design */}
      <div className="absolute inset-0 flex">
        {/* Marvel Red Accent Side */}
        <div className="w-[35%] bg-[#ed1d24] h-full" />

        {/* Cinematic Imagery Side */}
        <div className="w-[65%] h-full relative bg-black">
          <img
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q"
            className="w-full h-full object-cover grayscale opacity-40 contrast-125"
            alt="Photography Cinematic Background"
          />
          {/* Vignette effect for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
        </div>
      </div>

      {/* 2. CONTENT LAYER: Typography & Navigation */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Label Accent
          <span className="text-[#ed1d24] font-black tracking-[0.4em] text-[10px] md:text-xs uppercase mb-6 block">
            Visual Storyteller / Phase 01
          </span> */}

          {/* Main Headline */}
          <h1 className="font-black text-[8vw] md:text-[7vw] leading-[0.95] text-[#f3ece0] uppercase italic tracking-tighter drop-shadow-2xl">
            CAPTURING THE <br />
            <span className="text-[#ffffff]">CRAFTED MOMENT.</span>
          </h1>

          {/* Call to Action & Brief info */}
          <div className="mt-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
            <p className="max-w-xs font-bold uppercase text-[10px] leading-loose text-zinc-400 border-l border-[#ed1d24] pl-4">
              Specializing in High-End Photography, <br />
              Cinematic Videography, and Precision Video Editing.
            </p>

            {/* Navigates to the About Page */}
            <Link to="/about">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#ed1d24",
                  color: "#fff"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#f3ece0] text-[#151515] px-8 py-4 font-black text-[10px] uppercase tracking-[0.2em] shadow-2xl cursor-pointer transition-colors duration-300"
              >
                About Me
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* 3. DECORATIVE LAYER: Vertical ID Tag */}
      <div className="absolute right-10 bottom-10 hidden md:block">
        <p className="text-[#f3ece0] font-black text-[9px] uppercase tracking-[0.6em] opacity-20 [writing-mode:vertical-lr] rotate-180">
          RAHEN -- THE MAN BEHIND THE LENS
        </p>
      </div>
    </section>
  );
};

export default Hero;
