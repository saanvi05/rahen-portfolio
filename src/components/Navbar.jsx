import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/Portfolio/logo/Logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false); // Close menu after clicking
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full p-4 md:p-6 flex justify-between items-center z-[100] transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "bg-[#151515] border-b border-zinc-800 py-4"
            : "bg-transparent"
        }`}
      >
        {/* LOGO SECTION */}
        <Link to="/" className="flex items-center gap-3 group z-[110]">
          <div className="relative">
            <div
              className={`aspect-square flex items-center justify-center overflow-hidden rounded-full border-2 border-[#f3ece0] bg-white transition-all duration-500 ${
                isScrolled ? "w-10 h-10" : "w-12 h-12 md:w-20 md:h-20"
              }`}
            >
              <img
                src={logoImg}
                alt="Logo"
                className="w-[85%] h-[85%] object-contain"
              />
            </div>
          </div>
          <span
            className={`font-black tracking-tighter italic uppercase text-[#f3ece0] ${isScrolled ? "text-sm" : "text-base md:text-2xl"}`}
          >
            FRAMES BY RAHEN
          </span>
        </Link>

        {/* DESKTOP LINKS (Hidden on Mobile) */}
        <div className="hidden lg:flex gap-10 font-black uppercase text-[11px] tracking-widest text-[#f3ece0]">
          <Link to="/about" className="hover:text-[#ed1d24] transition-colors">
            About
          </Link>
          {/* <Link
            to="/photography"
            className="hover:text-[#ed1d24] transition-colors"
          >
            Photography
          </Link>
          <Link
            to="/videography"
            className="hover:text-[#ed1d24] transition-colors"
          >
            Videography
          </Link>
          <Link
            to="/video-editing"
            className="hover:text-[#ed1d24] transition-colors"
          >
            Editing
          </Link> */}
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-[#ed1d24] cursor-pointer"
          >
            DISCIPLINES
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#ed1d24] cursor-pointer"
          >
            CONTACT
          </button>
        </div>

        {/* MOBILE TOGGLE BUTTON (Hidden on Desktop) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden z-[110] text-[#f3ece0] p-2"
        >
          {isMobileMenuOpen ? (
            // CLOSE ICON (X)
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            // HAMBURGER ICON
            <div className="flex flex-col items-end gap-1">
              <span className="w-6 h-1 bg-[#ed1d24]"></span>
              <span className="w-4 h-1 bg-[#f3ece0]"></span>
              <span className="w-6 h-1 bg-[#f3ece0]"></span>
            </div>
          )}
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#151515] z-[90] flex flex-col justify-center items-center gap-8 transition-transform duration-700 lg:hidden ${isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-col items-center gap-6 font-black italic text-3xl uppercase tracking-tighter text-[#f3ece0]">
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/about"
            className="hover:text-[#ed1d24]"
          >
            About
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/photography"
            className="hover:text-[#ed1d24]"
          >
            Photography
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/videography"
            className="hover:text-[#ed1d24]"
          >
            Videography
          </Link>
          <Link
            onClick={() => setIsMobileMenuOpen(false)}
            to="/video-editing"
            className="hover:text-[#ed1d24]"
          >
            Editing
          </Link>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-[#ed1d24] uppercase"
          >
            Disciplines
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-[#ed1d24] uppercase"
          >
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
