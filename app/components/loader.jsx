"use client";
import { motion } from "framer-motion";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-[9999] flex items-center justify-center bg-[#0d1224]">
      <motion.div
        className="flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <HashLoader
          color="#16f2b3"
          size={60}
          speedMultiplier={1.2}
        />
      </motion.div>
    </div>
  );
};

export default Loader;