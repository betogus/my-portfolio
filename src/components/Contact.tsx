import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="w-full h-screen flex flex-col  justify-start px-4 py-8 overflow-hidden">
    <motion.h2
      className="text-white text-4xl mb-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Contact
    </motion.h2>
    </div>
  )
}

export default Contact