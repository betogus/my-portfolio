import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

// Certificados
import ReactNativeCertificate from "../assets/certificates/Desarrollo de Aplicaciones (English).png";
import WebDevelopmentCertificate from "../assets/certificates/Desarrollo Web (ingles).png";
import DevInFormationCertificate from "../assets/certificates/dev en formacion.jpg";
import EFSETCertificate from "../assets/certificates/EF SET Certificate.jpg";
import JavaAndDatabaseCertificate from "../assets/certificates/Java con Base de datos.jpg";
import JavaObjectCertificate from "../assets/certificates/Java Orientado a Objetos.jpg";
import JavascriptCertificate from "../assets/certificates/Javascript (English).png";
import NoCountryCertificate from "../assets/certificates/No Country.jpg";
import BackendCertificate from "../assets/certificates/Programacion Backend (English).png";
import FullStackCertificate from "../assets/certificates/Programacion Full Stack.png";
import ReactCertificate from "../assets/certificates/React Js (English).png";
import JavaJREJDKCertificate from "../assets/certificates/Java JRE y JDK.jpg";

const certificates = [
  ReactNativeCertificate,
  WebDevelopmentCertificate,
  DevInFormationCertificate,
  EFSETCertificate,
  JavaAndDatabaseCertificate,
  JavaObjectCertificate,
  JavascriptCertificate,
  NoCountryCertificate,
  BackendCertificate,
  FullStackCertificate,
  ReactCertificate,
  JavaJREJDKCertificate
];

const Certificates = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  
  return (
    <div ref={ref} className="w-full h-screen flex flex-col  justify-center overflow-hidden">
      <motion.h2
        className="text-white text-4xl mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
        transition={{ duration: 0.6 }}
      >
        Certificates
      </motion.h2>

      <motion.div
        className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl w-full mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}

        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {certificates.map((src, i) => (
          <motion.div
            key={i}
            className="bg-[#2b2c40] rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            onClick={() => setSelected(src)}
          >
            <img
              src={src}
              alt={`Certificate ${i}`}
              className="w-full h-[200px] object-contain p-4"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal con imagen ampliada */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.img
              src={selected}
              alt="Certificado ampliado"
              className="max-w-[90%] max-h-[90%] rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;
