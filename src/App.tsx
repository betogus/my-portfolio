import { useRef } from "react";
import { CiCircleChevDown } from "react-icons/ci";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";

const secondaryColor = '#00DF70';

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const scrollToNext = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="bg-primary h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
      <section className="snap-start h-screen flex flex-col justify-between items-center px-48" id="home">
        <Home />
        <div className="flex justify-center pb-4">
          <button onClick={() => scrollToNext(aboutRef)}>
            <CiCircleChevDown color={secondaryColor} size={90} />
          </button>
        </div>
      </section>

      <section className="snap-start h-screen flex flex-col justify-between items-center px-48" ref={aboutRef} id="about">
        <About />
        <div className="flex justify-center pb-4">
          <button onClick={() => scrollToNext(skillsRef)}>
            <CiCircleChevDown color={secondaryColor} size={90} />
          </button>
        </div>
      </section>

      <section className="snap-start h-screen flex justify-center items-center px-48" ref={skillsRef} id="skills">
        <Skills />
      </section>
    </div>
  );
}

export default App;
