import React from "react";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mkoklyql");

  if (state.succeeded) {
    return (
      <section className="h-screen bg-[#151515] flex items-center justify-center text-center p-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="border-2 border-[#ed1d24] p-12 md:p-20"
        >
          <h2 className="text-5xl md:text-7xl font-black italic text-[#ed1d24] tracking-tighter mb-4 uppercase leading-none">
            MISSION <br /> INITIATED.
          </h2>
          <p className="text-[#f3ece0] font-bold uppercase tracking-[0.3em] text-[10px] mt-6">
            Stand by for response, Agent Rahen. <br /> Check your comms (Gmail)
            soon.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-10 text-[#ed1d24] font-black text-[10px] uppercase border-b border-[#ed1d24] hover:pb-2 transition-all"
          >
            Send another message
          </button>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="min-h-screen bg-[#151515] p-10 md:p-20 text-[#f3ece0] flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-2/5 flex flex-col justify-between py-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black italic tracking-tighter leading-[0.85] mb-8"
            >
              CONTACT <br /> <span className="text-[#ed1d24]">RAHEN.</span>
            </motion.h2>

            <div className="space-y-6">
              <div className="border-l-2 border-[#ed1d24] pl-4">
                <p className="text-[#ed1d24] font-black uppercase text-[10px] tracking-widest mb-1">
                  Contact Information
                </p>
                <p className="font-bold text-xs tracking-widest uppercase">
                  +91 7008782460
                </p>
                <p className="font-bold text-xs tracking-widest uppercase text-zinc-400">
                  sahoorahen@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Name Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="font-black uppercase text-[10px] tracking-[0.2em] text-zinc-500"
                >
                  Agent Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  placeholder="YOUR NAME"
                  className="bg-transparent border-b border-zinc-800 pb-3 focus:border-[#ed1d24] outline-none transition-colors font-bold uppercase text-xs tracking-widest placeholder:text-zinc-700"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-black uppercase text-[10px] tracking-[0.2em] text-zinc-500"
                >
                  Secure Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="EMAIL@S.H.I.E.L.D.COM"
                  className="bg-transparent border-b border-zinc-800 pb-3 focus:border-[#ed1d24] outline-none transition-colors font-bold uppercase text-xs tracking-widest placeholder:text-zinc-700"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-[#ed1d24] text-[10px] font-bold mt-1"
                />
              </div>
            </div>

            {/* Mission Type Selection */}
            <div className="flex flex-col gap-2 md:col-span-2 relative">
              <label
                htmlFor="service"
                className="font-black uppercase text-[10px] tracking-[0.2em] text-zinc-500"
              >
                Mission Type
              </label>

              <div className="relative group">
                <select
                  name="service"
                  id="service"
                  className="w-full bg-transparent border-b border-zinc-800 pb-3 focus:border-[#ed1d24] outline-none transition-colors font-bold uppercase text-xs tracking-widest appearance-none cursor-pointer text-white"
                >
                  <option value="Photography" className="bg-[#151515]">
                    Photography
                  </option>
                  <option value="Videography" className="bg-[#151515]">
                    Cinematic Videography
                  </option>
                  <option value="Video Editing" className="bg-[#151515]">
                    Precision Video Editing
                  </option>
                </select>

                {/* CUSTOM DROPDOWN ICON */}
                <div className="absolute right-0 bottom-3 pointer-events-none group-hover:text-[#ed1d24] transition-colors">
                  <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M1 1L5 5L9 1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-black uppercase text-[10px] tracking-[0.2em] text-zinc-500"
              >
                Mission Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="3"
                placeholder="DESCRIBE YOUR PROJECT..."
                className="bg-transparent border-b border-zinc-800 pb-3 focus:border-[#ed1d24] outline-none transition-colors font-bold uppercase text-xs tracking-widest placeholder:text-zinc-700 resize-none"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-[#ed1d24] text-[10px] font-bold mt-1"
              />
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={state.submitting}
              whileHover={{ x: 10 }}
              className="bg-[#ed1d24] text-white px-10 py-4 font-black uppercase text-[10px] tracking-[0.3em] flex items-center gap-4 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {state.submitting ? "SENDING..." : "INITIATE PROJECT"}
              <span className="group-hover:translate-x-2 transition-transform">
                →
              </span>
            </motion.button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
