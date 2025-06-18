import { motion } from "framer-motion";
//import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

const Contact = () => {
  //const formRef = useRef(null);
  //const [status, setStatus] = useState("");
  const ref = useRef(null);

  /* const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; */

  /* const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(serviceId, templateId, formRef.current!, publicKey).then(
      () => {
        setStatus("Message sent successfully!");
        (formRef.current as unknown as HTMLFormElement).reset();
      },
      () => setStatus("Something went wrong. Try again.")
    );
  }; */

  return (
    <div
      ref={ref}
      className="w-full h-screen flex flex-col px-12 justify-center overflow-hidden bg-gradient-to-b from-[#232432] to-[#1A1A22]"
    >
      <div className="relative z-10 w-full h-full flex flex-col md:flex-row items-center justify-center px-6 md:px-16 py-10 gap-10">
        <motion.div
          className="flex flex-col items-start text-left w-full md:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <h2 className="text-white text-4xl sm:text-5xl mb-4">Get in Touch</h2>
          <p className="text-gray-300 mb-6 text-lg max-w-md">
            I'm always looking for exciting opportunities to collaborate on new
            projects or help solve real-world problems. Whether you have a
            question, a proposal, or just want to connect—let's talk!
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00DF70] text-[#00DF70] px-6 py-2 rounded-md hover:bg-[#00DF70]/10 transition-all"
            >
              LinkedIn
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=betogus2009@gmail.com&su=Contacto%20desde%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00DF70] text-[#00DF70] px-6 py-2 rounded-md hover:bg-[#00DF70]/10 transition-all"
            >
              Email
            </a>
            <a
              href={`https://wa.me/543515505435?text=${encodeURIComponent(
                "Hola, quiero más información"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00DF70] text-[#00DF70] px-6 py-2 rounded-md hover:bg-[#00DF70]/10 transition-all flex items-center gap-2"
            >
              WhatsApp
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#00DF70] text-[#00DF70] px-6 py-2 rounded-md hover:bg-[#00DF70]/10 transition-all"
            >
              GitHub
            </a>
          </div>
        </motion.div>
        {/*        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 p-6 flex flex-col gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, x: 30 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="p-3 bg-transparent border border-[#00DF70] text-white rounded-md"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 bg-transparent border border-[#00DF70] text-white rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            className="p-3 bg-transparent border border-[#00DF70] text-white rounded-md"
          />
          <button
            type="submit"
            className="border border-[#00DF70] text-[#00DF70] py-3 rounded-md hover:bg-[#00DF70]/10 transition-all"
          >
            Send Message
          </button>
          {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
        </motion.form> */}
      </div>
    </div>
  );
};

export default Contact;
