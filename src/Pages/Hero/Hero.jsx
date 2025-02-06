import hero from "../../../public/hero.jpg";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 100 }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        <img
          className="w-[250px] h-[250px] object-cover rounded-full scale-110 shadow-xl shadow-indigo-800 transition-all duration-300 hover:-translate-y-6 hover:scale-125 ease-in-out hover:shadow-indigo-500"
          src={hero}
          alt="hero-image"
        />
      </motion.div>
      <div className="mt-14 text-center ">
        <h1 className="bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent opacity-60 text-5xl lg:text-6xl">
          <Typewriter
            words={["Asifur Rahman"]}
            typeSpeed={60}
            cursor
            cursorStyle="|"
            cursorColor="#FF6347"
            delaySpeed={2000}
          />
        </h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 100 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <h3 className="bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent opacity-60 font-bold text-6xl lg:text-7xl mt-4">
            Web Developer
          </h3>
          <p className="mt-4 lg:mt-6 text-gray-400 lg:w-1/2 mx-auto">
            I craft beautiful, high-performance websites and web applications
            with React, Tailwind, Node.js, and Express. From sleek frontends to
            powerful backends, I create seamless, scalable, and engaging digital
            experiences. Let’s build something extraordinary together!
          </p>
          <a href="/public/CV of Asifur Rahman.pdf">
            <button className="bg-[#A892FF] px-8 py-3 mt-4 rounded-3xl hover:bg-[#BBA0FF]">
              Download Resume
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
