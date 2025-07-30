import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "recommendations", label: "Recommendations" },
  { id: "experience", label: "Experience" },
  { id: "certificates", label: "Certificates" },
  { id: "contact", label: "Contact" },
];

const Header = () => {
  const [showHeader, setShowHeader] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setShowHeader(e.clientY <= 80);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {showHeader && (
          <motion.header
            className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex justify-center items-center text-white font-medium bg-gradient-to-b from-[#1A1A22]/90 to-transparent hidden md:flex"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >

            <nav className="flex gap-10 ">
              {sections.map((section) => (
                <motion.button
                  key={section.id}
                  onClick={() => handleScroll(section.id)}
                  className="hover:text-blue-400 transition-colors duration-300 text-lg"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {section.label}
                </motion.button>
              ))}
            </nav>
          </motion.header>
        )}
      </AnimatePresence>

      <div className="fixed top-4 right-8 z-50 md:hidden">
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex flex-col justify-center items-center gap-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            key="mobile-slide-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 sm:w-2/5 bg-[#1A1A22]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-6 text-white md:hidden"
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleScroll(section.id)}
                className="text-xl hover:text-blue-400 transition-colors duration-300"
              >
                {section.label}
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
