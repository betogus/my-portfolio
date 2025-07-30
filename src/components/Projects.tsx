import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Argumento from "../assets/projects/Argumento.webp";
import JamGlass from "../assets/projects/Jam Glass.webp";
import ReHouse from "../assets/projects/rehouse.webp";
import LlantenAlmacen from "../assets/projects/Llanten almacen.webp";
import RenovaTuVestidor from "../assets/projects/renovatuvestidor.webp";
import Backend from "../assets/projects/backend.webp";
import StefEstudioCreativo from "../assets/projects/stefestudiocreativo.webp";
import GreenTech from "../assets/projects/greentech.webp";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  repo?: string;
  demo?: string;
}

const projects: ProjectData[] = [
  {
    title: "Stef Estudio Creativo",
    description: "React Js",
    image: StefEstudioCreativo,
    repo: "https://github.com/betogus/stefestudiocreativo",
    demo: "https://stefestudiocreativo.netlify.app/",
  },
  {
    title: "Green Tech",
    description: "Wordpress",
    image: GreenTech,
    demo: "https://green-tech.free.nf/",
  },
  {
    title: "Argumento Restaurante",
    description: "HTML / CSS / Javascript",
    image: Argumento,
    repo: "https://github.com/betogus/argumentoBar",
    demo: "https://coderback.web.app/",
  },
  {
    title: "Jam Glass - Jazz Band",
    description: "HTML / CSS",
    image: JamGlass,
    repo: "https://github.com/betogus/coderHouse",
    demo: "https://betogus.github.io/coderHouse/",
  },
  {
    title: "Re House",
    description: "React Js / Java - Spring Boot",
    image: ReHouse,
    repo: "https://github.com/No-Country/c12-g21-m-java-react",
    demo: "https://rehouseweb.onrender.com/",
  },
  {
    title: "Llanten Almacen",
    description: "HTML / CSS / Javascript",
    image: LlantenAlmacen,
    repo: "https://github.com/betogus/llantenAlmacen",
    demo: "https://betogus.github.io/llantenAlmacen/",
  },
  {
    title: "Renova Tu Vestidor",
    description: "React Js",
    image: RenovaTuVestidor,
    repo: "https://github.com/betogus/renovaTuVestidor/",
  },
  {
    title: "Backend - Coderhouse",
    description: "Node Js / Express",
    image: Backend,
    repo: "https://github.com/betogus/Backend-Coderhouse",
  },
];

const Project = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 1 }}
      className="w-full max-w-7xl mx-auto px-4 py-12"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10 text-center md:text-left">
        Projects
      </h2>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Project List */}
        <div className="md:w-1/3 flex flex-col gap-3">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm sm:text-base font-medium border border-[#00DF70] transition-all shadow-md hover:shadow-lg ${
                selectedIndex === index
                  ? "bg-[#00DF70] text-black"
                  : "text-[#00DF70] bg-transparent"
              }`}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Project Detail */}
        <div className="md:w-2/3 w-full">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-[#00DF70] shadow-inner px-5 py-4"
              >
                <p className="text-[#00DF70] mb-4 text-sm sm:text-base">
                  {selectedProject.description}
                </p>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg mb-4 max-h-64 sm:max-h-72 object-contain"
                />
                <div className="flex flex-wrap gap-4">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      See Demo
                    </a>
                  )}
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-sm bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                    >
                      See on Github
                    </a>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
