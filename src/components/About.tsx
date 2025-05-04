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
    { description: "projects", value: 23, postValue: "" },
    { description: "certificates", value: 12, postValue: "" },
    { description: "years of study", value: 3, postValue: "" },
    { description: "languages", value: 2, postValue: "" },
  ];

  const [rec, setRec] = useState<Rec[]>(
    initialRec.map((item) => ({ ...item, value: 0 }))
  );

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      className="flex gap-10 justify-start w-full flex-col items-center"
      style={{ minHeight: "calc(100vh - 6rem)", maxHeight: "calc(100vh - 6rem)" }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-white text-4xl mb-10 self-start mt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        About
      </motion.h1>

      <motion.div
        className="flex justify-center items-center gap-12 flex-wrap w-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {rec.map((item) => (
          <motion.div
            key={item.description}
            className="bg-button w-48 h-40 rounded-3xl flex flex-col items-center justify-center p-5 min-w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <p className="text-6xl text-white">
              {item.value} {item.postValue}
            </p>
            <p className="text-lg text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="flex justify-center items-center flex-wrap w-1/2 gap-x-6 gap-y-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
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
            className={`text-${trait.length > 15 ? "lg" : trait.length > 10 ? "2xl" : "4xl"} text-${i % 2 === 0 ? "white" : "gray-400"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
