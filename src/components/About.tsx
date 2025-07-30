import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const About = () => {
  interface Rec {
    description: string;
    value: number;
    postValue: string;
  }

  const initialRec: Rec[] = [
    { description: "years experience", value: 1, postValue: "+" },
    { description: "simulations", value: 3, postValue: "" },
    { description: "projects", value: 7, postValue: "" },
    { description: "certificates", value: 12, postValue: "" },
    { description: "years of study", value: 3, postValue: "" },
    { description: "languages", value: 2, postValue: "" },
  ];

  const [rec, setRec] = useState<Rec[]>(
    initialRec.map((item) => ({ ...item, value: 0 }))
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      initialRec.forEach((item, index) => {
        let start = 0;
        const end = item.value;
        const duration = 1000;
        const increment = end / (duration / 100);

        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setRec((prevRec) => {
            const newRec = [...prevRec];
            newRec[index].value = Math.floor(start);
            return newRec;
          });
        }, 100);
      });
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col items-center gap-10 px-4 py-10"
      style={{ minHeight: "calc(100vh - 6rem)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-white text-3xl sm:text-4xl mb-6 self-start"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About
      </motion.h1>

      {/* Stats boxes */}
      <motion.div
        className="w-full max-w-screen-lg flex justify-center flex-wrap gap-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {rec.map((item) => (
          <motion.div
            key={item.description}
            className="bg-button w-40 h-36 sm:w-44 sm:h-40 rounded-3xl flex flex-col items-center justify-center p-4 min-w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-4xl sm:text-5xl text-white">
              {item.value} {item.postValue}
            </p>
            <p className="text-sm sm:text-base text-gray-400 text-center">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Traits */}
      <motion.div
        className="w-full max-w-screen-md flex justify-center items-center flex-wrap gap-x-4 gap-y-3 mt-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[
          "Passionate",
          "Collaborative",
          "Independent",
          "Self-motivated",
          "Continuous learner",
          "Initiative-taker",
          "Communicative",
          "Leadership-oriented",
          "Responsible",
          "Problem-solver",
          "Proactive",
        ].map((trait, i) => (
          <motion.p
            key={trait}
            className={`text-base sm:text-lg md:text-xl font-medium ${
              i % 2 === 0 ? "text-white" : "text-gray-400"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
            transition={{ duration: 0.3, delay: 0.7 + i * 0.1 }}
          >
            {trait}
          </motion.p>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default About;
