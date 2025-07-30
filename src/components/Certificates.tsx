import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Certificados
import ReactNativeCertificate from "../assets/certificates/Desarrollo de Aplicaciones (English).webp";
import WebDevelopmentCertificate from "../assets/certificates/Desarrollo Web (ingles).webp";
import DevInFormationCertificate from "../assets/certificates/dev en formacion.webp";
import EFSETCertificate from "../assets/certificates/EF SET Certificate.webp";
import JavaAndDatabaseCertificate from "../assets/certificates/Java con Base de datos.webp";
import JavaObjectCertificate from "../assets/certificates/Java Orientado a Objetos.webp";
import JavascriptCertificate from "../assets/certificates/Javascript (English).webp";
import NoCountryCertificate from "../assets/certificates/No Country.webp";
import BackendCertificate from "../assets/certificates/Programacion Backend (English).webp";
import FullStackCertificate from "../assets/certificates/Programacion Full Stack.webp";
import ReactCertificate from "../assets/certificates/React Js (English).webp";
import JavaJREJDKCertificate from "../assets/certificates/Java JRE y JDK.webp";
import WordpressCertificate from "../assets/certificates/wordpress-certificate.webp";

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
  JavaJREJDKCertificate,
  WordpressCertificate,
];

const Certificates = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="w-full py-20">
      <motion.h2
        className="text-white text-4xl mb-10 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Certificates
      </motion.h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="max-w-7xl mx-auto"
      >
        {certificates.map((src, i) => (
          <SwiperSlide key={i}>
            <motion.div
              className="bg-[#2b2c40] rounded-xl overflow-hidden shadow-lg cursor-pointer hover:scale-[1.02] transition-transform"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(src)}
            >
              <img
                src={src}
                alt={`Certificate ${i}`}
                className="w-full h-[200px] object-contain p-4"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

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
