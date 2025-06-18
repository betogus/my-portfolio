import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Argumento from "../assets/projects/Argumento.png";
import JamGlass from "../assets/projects/Jam Glass.png";
import ReHouse from "../assets/projects/rehouse.png";
import LlantenAlmacen from "../assets/projects/Llanten almacen.png";
import RenovaTuVestidor from "../assets/projects/renovatuvestidor.png";
import Backend from "../assets/projects/backend.png";
import StefEstudioCreativo from "../assets/projects/stefestudiocreativo.png";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  repo: string;
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

  const selectedProject = selectedIndex !== null ? projects[selectedIndex] : null;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 mt-10">
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Lista de botones */}
        <div className="md:w-1/3 flex flex-col gap-4">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`w-full text-left px-6 py-4 rounded-xl font-semibold border border-[#00DF70] transition-all shadow-md hover:shadow-lg 
                ${selectedIndex === index
                  ? "bg-[#00DF70] text-black"
                  : "text-[#00DF70] bg-transparent"}`}
            >
              {project.title}
            </button>
          ))}
        </div>

        <div className="md:w-2/3">
          <AnimatePresence mode="wait">
            {selectedProject && (
              <motion.div
                key={selectedProject.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="rounded-xl border border-[#00DF70] shadow-inner px-6 py-4"
              >
                <p className="text-[#00DF70] mb-4">{selectedProject.description}</p>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full rounded-lg mb-4 max-h-72 object-cover"
                />
                <div className="flex flex-wrap gap-4">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      See Demo
                    </a>
                  )}
                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
                  >
                    See on Github
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Project;
