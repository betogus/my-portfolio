import { useRef } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import { motion } from "framer-motion";
import Recommendations from "./components/Recommendations";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Project from "./components/Projects";
import Header from "./components/Header";

const secondaryColor = "#00DF70";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const recommendationsRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const certificatesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);

  const scrollToNext = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-primary h-screen snap-y snap-mandatory overflow-y-scroll">
      <Header />

      {/* Cada sección con padding responsive y flecha visible solo en desktop */}
      <section
        className="snap-start min-h-screen md:h-screen flex flex-col justify-between items-center px-4 md:px-12 lg:px-24 xl:px-48"
        id="home"
      >
        <Home />
        <div className="hidden md:flex justify-center pb-4">
          <motion.button
            onClick={() => scrollToNext(aboutRef)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CiCircleChevDown color={secondaryColor} size={90} />
          </motion.button>
        </div>
      </section>

      <section
        className="snap-start min-h-screen md:h-screen flex flex-col justify-between items-center px-4 md:px-12 lg:px-24 xl:px-48"
        ref={aboutRef}
        id="about"
      >
        <About />
        <div className="hidden md:flex justify-center pb-4">
          <motion.button
            onClick={() => scrollToNext(projectRef)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CiCircleChevDown color={secondaryColor} size={90} />
          </motion.button>
        </div>
      </section>

      <section
        className="snap-start min-h-screen md:h-screen flex flex-col justify-between items-center px-4 md:px-12 lg:px-24 xl:px-48"
        ref={projectRef}
        id="projects"
      >
        <Project />
        <div className="hidden md:flex justify-center pb-4">
          <motion.button
            onClick={() => scrollToNext(skillsRef)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CiCircleChevDown color={secondaryColor} size={90} />
          </motion.button>
        </div>
      </section>

      <section
        className="snap-start min-h-screen md:h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 xl:px-48"
        ref={skillsRef}
        id="skills"
      >
        <Skills />
        <div className="hidden md:flex justify-center pb-4">
          <motion.button
            onClick={() => scrollToNext(recommendationsRef)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CiCircleChevDown color={secondaryColor} size={90} />
          </motion.button>
        </div>
      </section>

      <section
        className="snap-start min-h-screen md:h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 xl:px-48"
        id="recommendations"
        ref={recommendationsRef}
      >
        <Recommendations />
        <div className="hidden md:flex justify-center pb-4">
          <motion.button
            onClick={() => scrollToNext(experienceRef)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CiCircleChevDown color={secondaryColor} size={90} />
          </motion.button>
        </div>
      </section>

      <section
        className="snap-start min-h-screen md:h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 xl:px-48"
        id="experience"
        ref={experienceRef}
      >
        <Experience />
        <div className="hidden md:flex justify-center pb-4">
          <motion.button
            onClick={() => scrollToNext(certificatesRef)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CiCircleChevDown color={secondaryColor} size={90} />
          </motion.button>
        </div>
      </section>

      <section
        className="snap-start min-h-screen md:h-screen flex flex-col justify-center items-center px-4 md:px-12 lg:px-24 xl:px-48"
        id="certificates"
        ref={certificatesRef}
      >
        <Certificates />
        <div className="hidden md:flex justify-center pb-4">
          <motion.button
            onClick={() => scrollToNext(contactRef)}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <CiCircleChevDown color={secondaryColor} size={90} />
          </motion.button>
        </div>
      </section>

      <section
        className="snap-start min-h-screen md:h-screen justify-center items-center "
        id="contact"
        ref={contactRef}
      >
        <Contact />
      </section>
    </div>
  );
}

export default App;
