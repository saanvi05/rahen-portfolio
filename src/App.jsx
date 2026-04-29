import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Disciplines from "./components/Disciplines";
import Contact from "./components/Contact";
import CameraFlash from "./components/CameraFlash";

// Pages
import Photography from "./pages/Photography";
import VideoEditing from "./pages/VideoEditing";
import Videography from "./pages/Videography";
import About from "./pages/About";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Global Shutter Effect */}
      <CameraFlash />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          {/* HOME PAGE ROUTE */}
          <Route
            path="/"
            element={
              <main className="bg-[#151515] selection:bg-[#ed1d24] selection:text-white">
                <Navbar />
                <Hero />
                <Disciplines />
                <Contact />
                <footer className="p-4 text-center bg-black text-zinc-800 font-black uppercase tracking-[1em] text-[8px]">
                  Designed & Developed by © SAANVI SMAKSHI SAHOO 2026
                </footer>
              </main>
            }
          />

          {/* SUB-PAGES ROUTES */}
          <Route path="/photography" element={<Photography />} />
          <Route path="/video-editing" element={<VideoEditing />} />
          <Route path="/videography" element={<Videography />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
