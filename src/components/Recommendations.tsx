import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Recommendation {
  name: string;
  description: string;
  comment: string;
}

const recommendations: Recommendation[] = [
  {
    name: "Pablo Aquino (Frontend Developer Jr. | Javascript | React Js)",
    description: "Colleague at No Country",
    comment: "Con Gustavo formamos parte en un proyecto de emulación laboral de NoCountry, desarrollando un sitio web, encargándonos del área de Frontend. Desde un principio estuvo comprometido con su trabajo y siempre dispuesto a ayudar. Cuenta con sólidos conocimientos y experiencia. Demostró ser una persona resolutiva, contribuyendo siempre con ideas para alcanzar los objetivos del proyecto. Fue un placer haber formado parte del mismo equipo.",
  },
  {
    name: "Natalia Potaves (Full Stack Developer | Java | Spring Boot | SQL | Laravel | Angular)",
    description: "Colleague at No Country",
    comment: "Trabaje con Gustavo en el desarrollo de un proyecto en No Country.Es un profesional muy responsable, comprometido y con amplio conocimiento en el Desarrollo Front - End.Además de contar con una gran predisposición, siempre ayudar a los compañeros, ser colaborativo, empático y siempre contribuir al equipo para cumplir las metas y objetivos del proyecto.",
  },
  {
    name: "Sofía Allegretti (UX UI Designer)",
    description: "Colleague at No Country",
    comment: "Trabajé con Gustavo dentro de un equipo de diseño y desarrollo Web. Es un profesional comprometido y responsable, siempre estuvo dispuesto a escuchar las necesidades del quipo y a solucionar los problemas que iban surgiendo. Es una persona empática, educada y resolutiva, con conocimientos solidos de su área.",
  }  
];


const Recommendations = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  return (
      <div ref={ref} className="w-full flex flex-col items-center justify-center gap-10"> 
        <motion.h1
          className="text-white text-4xl mb-10 self-start mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Recommendations
        </motion.h1>
        <div className="flex flex-col gap-10 w-full items-center justify-center">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              className="bg-button w-48 h-40 rounded-3xl flex flex-col justify-center p-5 min-w-fit text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
              transition={{ duration: 0.4, delay: 0.6 + 0.2*index }}
            >
                <p className="text-white text-xl font-bold">{rec.name}</p>
                <p className="text-gray-300 text-lg">{rec.description}</p>
                <p className="text-gray-200 text-base mt-2">{rec.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
  );
}

export default Recommendations