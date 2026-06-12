import React from "react";
import { motion } from "framer-motion";

const Online = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-7xl mb-6"
        >
          📚
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800">
          Hech qanday test topilmadi!
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Hozircha mavjud testlar yo‘q.
        </p>

        <motion.div
          className="mt-8 w-16 h-1 bg-indigo-500 mx-auto rounded-full"
          animate={{
            width: ["60px", "120px", "60px"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
      </motion.div>
    </div>
  );
};

export default Online;