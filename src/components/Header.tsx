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
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          className="fixed top-0 left-0 w-full z-50 px-10 py-4 flex justify-center gap-10 text-white font-medium"
          style={{
            background: "linear-gradient(to bottom, #1A1A22 30%, transparent)",
          }}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;
