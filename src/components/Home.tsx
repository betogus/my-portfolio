import { motion, useInView } from "framer-motion";
import Img from "../assets/photo.png";
import { GoDownload } from "react-icons/go";
import { useRef } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const letterAnimation = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.01,
      duration: 0.5,
    },
  }),
};

const paragraph = `I am a Web Developer who specializes in both front-end and back-end
and applications using React Js, React Native, Node Js, Express, and
MongoDB.`;

const Home = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  let letterIndex = 0;

  return (
    <motion.div
      className="min-w-screen flex flex-col justify-center items-center gap-12 px-4 py-6"
      style={{ minHeight: "calc(100vh - 6rem)" }}
      variants={fadeInUp}
      initial="hidden"
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      {/* Nombre + imagen */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-6">
        <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-2/3">
          <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Gustavo Torres
          </p>
          <h2 className="text-secondary text-xl sm:text-3xl md:text-4xl lg:text-5xl mt-2">
            Full Stack Web Developer
          </h2>
        </div>
        <div className="flex justify-center md:w-1/3">
          <img className="rounded-full w-48 sm:w-60 md:w-72" src={Img} />
        </div>
      </div>

      {/* Descripción */}
      <div className="w-full md:w-2/3 lg:w-1/2 px-2">
        <p className="text-white text-lg sm:text-xl md:text-2xl text-center leading-relaxed flex flex-wrap justify-center">
          {paragraph.split(" ").map((word, wIndex) => (
            <span key={wIndex} className="mr-2 whitespace-nowrap">
              {word.split("").map((char) => {
                const currentIndex = letterIndex++;
                return (
                  <motion.span
                    key={currentIndex}
                    custom={currentIndex}
                    initial="hidden"
                    whileInView="visible"
                    variants={letterAnimation}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </span>
          ))}
        </p>
      </div>

      {/* Botón de descarga */}
      <div className="w-full flex justify-center md:justify-start">
        <a
          href="/CV- Gustavo Torres.pdf"
          download
          className="w-48 h-12 border-secondary border-2 rounded-full flex items-center text-white justify-evenly px-4 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 hover:border-white"
        >
          <GoDownload size={24} />
          <span>Check my CV</span>
        </a>
      </div>
    </motion.div>
  );
};

export default Home;
