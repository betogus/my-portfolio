import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Experience {
  year: string;
  list: string[];
}

const experiences: Experience[] = [
  {
    year: "2021",
    list: [
      "Argentina Programa course (1ºlevel) - Languages: Ruby / Javascript",
      "ConoSur Tech course - Curso introductorio de Internet, la Web y la Programación",
      "Soy Dalto course - autodidact - Languages: HTML / CSS / Javascript",
    ],
  },
  {
    year: "2022",
    list: [
      "Web Development - Coderhouse - HTML / CSS",
      "Javascript course - Coderhouse",
      "React Js course - Coderhouse",
    ],
  },
  {
    year: "2023",
    list: [
      "App Development - Coderhouse - React Native",
      "Backend - Coderhouse - Node / Express / MongoDB",
      "Project simulation - No Country - React / Node",
      "XAcademy - Santex - Angular / Node",
      "Oracle Next Education - Java / Spring Boot",
    ],
  },
  {
    year: "2024 - 2025",
    list: ["Software Engineer - Ensolvers company"],
  },
];

const Experience = () => {
  const [openYear, setOpenYear] = useState<string | null>(null);
  const ref = useRef(null);

  const toggleYear = (year: string) => {
    setOpenYear(prev => (prev === year ? null : year));
  };

  return (
    <div  ref={ref} className="w-full flex flex-col gap-4 px-4 h-full justify-center">
      <motion.h1
  className="text-white text-4xl mb-10 self-start mt-8"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  variants={{
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }}
>
          Experience
        </motion.h1>
        <motion.div
        initial="hidden"
        className="flex flex-col gap-6 w-full px-8 py-6"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 },
        }}>
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="bg-button rounded-xl overflow-hidden shadow-lg"
        >
          <button
            onClick={() => toggleYear(exp.year)}
            className="w-full flex justify-between items-center px-6 py-4 text-white text-xl font-bold hover:bg-[#2d2d45] transition-all"
          >
            {exp.year}
            <span className="text-white text-2xl">
              {openYear === exp.year ? "−" : "+"}
            </span>
          </button>

          <AnimatePresence>
            {openYear === exp.year && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden bg-[#191924] px-6 pb-4 pt-2"
              >
                {exp.list.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-gray-200 text-base mt-2 list-disc ml-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
          
        </div>
      ))}
      </motion.div>
    </div>
  );
};

export default Experience;
