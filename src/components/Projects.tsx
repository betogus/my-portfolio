import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  repo: string;
  demo: string;
}

const projects: ProjectData[] = [
  {
    title: "Portfolio",
    description: "A personal portfolio built with React and Tailwind.",
    image: "/images/portfolio.png",
    repo: "https://github.com/usuario/portfolio",
    demo: "https://portfolio.example.com",
  },
  {
    title: "Todo App",
    description: "Full-stack Todo App using MERN stack.",
    image: "/images/todo.png",
    repo: "https://github.com/usuario/todo-app",
    demo: "https://todo.example.com",
  },
  {
    title: "E-commerce",
    description: "E-commerce store with Stripe integration.",
    image: "/images/ecommerce.png",
    repo: "https://github.com/usuario/ecommerce",
    demo: "https://store.example.com",
  },
];

const pastelColors = [
  "bg-pink-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-purple-200",
  "bg-yellow-200",
];

const Project = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const toggleProject = (index: number) => {
    setSelectedIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="w-full">
      <h2 className="text-4xl font-bold text-white mb-10">Projects</h2>

      <div className="flex flex-col w-full max-w-3xl gap-4">
        {projects.map((project, index) => {
          const isOpen = selectedIndex === index;
          const bgColor = pastelColors[index % pastelColors.length];

          return (
            <div key={index} className="relative">
              <button
                onClick={() => toggleProject(index)}
                className={`w-full text-left px-6 py-4 rounded-md shadow-md border border-gray-300 font-semibold text-gray-800 transition-all ${bgColor}`}
              >
                {project.title}
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    key="details"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`overflow-hidden mt-2 rounded-md border border-gray-300 shadow-inner bg-white px-6 py-4`}
                  >
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full rounded-md mb-4 max-h-64 object-cover"
                    />
                    <div className="flex gap-4">
                      <a
                        href={project.repo}
                        target="_blank"
                        className="text-blue-600 underline"
                        rel="noopener noreferrer"
                      >
                        Repository
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        className="text-green-600 underline"
                        rel="noopener noreferrer"
                      >
                        Website
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
