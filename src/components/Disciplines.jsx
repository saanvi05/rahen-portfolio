import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";


const Disciplines = () => {
  const skills = [
    {
      id: "01",
      name: "Photography",
      desc: "Capturing raw emotion through the lens.",
      path: "/photography"
    },
    {
      id: "02",
      name: "Videography",
      desc: "Cinematic storytelling and movement.",
      path: "/videography"
    },
    {
      id: "03",
      name: "Video Editing",
      desc: "Precision cutting and sound design.",
      path: "/video-editing"
    }
  ];

  return (
    <section
      id="services"
      className="min-h-[70vh] bg-[#f3ece0] py-16 px-10 md:px-20 border-t border-black"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-12 lg:gap-24">
        <div className="w-full md:w-1/3">
          <div className="md:sticky md:top-32">
            <h2 className="text-4xl md:text-5xl font-black italic text-[#151515] tracking-tighter leading-[0.85] uppercase">
              CORE <br /> <span className="text-[#ed1d24]">DISCIPLINES.</span>
            </h2>

            <p className="mt-6 mb-8 text-[9px] font-bold uppercase tracking-[0.2em] text-zinc-500 leading-relaxed max-w-[200px]">
              Visual creator toolkit. <br /> Assembling digital media.
            </p>

            
          </div>
        </div>

        {/* RIGHT SIDE: List */}
        <div className="w-full md:w-2/3 border-t border-black">
          {skills.map((skill) => (
            <Link to={skill.path} key={skill.id}>
              <motion.div
                whileHover={{ x: 10 }}
                className="group flex justify-between items-center border-b border-black py-6 md:py-8 px-2 hover:bg-[#ed1d24] transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-8 md:gap-12">
                  <span className="text-xs font-black text-zinc-400 group-hover:text-white transition-colors">
                    {skill.id}
                  </span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-black italic uppercase group-hover:text-white transition-colors leading-none">
                      {skill.name}
                    </h3>
                    <p className="text-[9px] font-bold uppercase mt-2 text-zinc-400 group-hover:text-[#f3ece0] opacity-0 group-hover:opacity-100 transition-all">
                      {skill.desc}
                    </p>
                  </div>
                </div>
                <span className="text-xl font-light group-hover:text-white transition-all">
                  →
                </span>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disciplines;
