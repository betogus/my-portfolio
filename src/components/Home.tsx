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
      className="min-w-screen flex flex-col justify-center items-center gap-20"
      style={{ minHeight: "calc(100vh - 6rem)" }}
      variants={fadeInUp}
      initial="hidden"
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
      transition={{ duration: 0.8 }}
      ref={ref}
    >
      <div className="flex justify-center items-center w-full">
        <div className="w-2/3 flex-col items-center pl-6">
          <p className="text-white text-6xl">Gustavo Torres</p>
          <h2 className="text-secondary text-5xl pl-10">
            Full Stack Web Developer
          </h2>
        </div>
        <div className="w-1/3 justify-center flex">
          <img className="rounded-full size-72" src={Img} />
        </div>
      </div>
      <div className="w-1/2">
        <p className="text-white text-3xl text-center flex flex-wrap justify-center leading-relaxed">
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
      <div className="flex justify-start w-full">
        <div className="w-44 h-12 ml-6 border-secondary border-2 rounded-full flex items-center text-white justify-evenly p-5 cursor-pointer transition-all ease-in-out duration-300 hover:scale-105 hover:border-white">
          <a
            href="/CV- Gustavo Torres.pdf"
            download
            className="flex"
          >
            <GoDownload size={24} />
            <p>Check my CV</p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
