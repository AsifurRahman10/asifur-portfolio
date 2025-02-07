import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import motionLogo from "../../assets/logo/motion.avif";
import { SiExpress, SiMongodb } from "react-icons/si";
import firebase from "../../assets/logo/firebase.svg";
import { motion } from "motion/react";

export const Technology = () => {
  const animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="technology"
      className="text-white flex w-full flex-col items-center gap-10 lg:gap-20 justify-center min-h-[70vh]"
    >
      <motion.h1
        variants={animation}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl lg:text-6xl text-white"
      >
        My Skills
      </motion.h1>

      <div className="flex justify-center items-center flex-wrap gap-10 px-4">
        {/* fontend */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaReact className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-sky-500 transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <RiTailwindCssFill className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#00bcff] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <IoLogoJavascript className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#F7E02B] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={motionLogo}
            className="cursor-pointer w-[70px] md:w-[80px] lg:w-[90px]
          text-[#F7E02B] transition-all duration-300 hover:translate-y-4"
            alt=""
          />
        </motion.div>

        {/* backend */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaNodeJs className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#84BF14] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="bg-white flex p-2 rounded-full overflow-hidden "
        >
          <SiExpress className="cursor-pointer text-[60px] md:text-[70px] lg:text-[80px] text-black transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiMongodb className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#84BF14] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            className="cursor-pointer w-[70px] md:w-[80px] lg:w-[90px] transition-all duration-300 hover:translate-y-4"
            src={firebase}
            alt=""
          />
        </motion.div>

        {/* tools */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaGithub className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-white transition-all duration-300 hover:translate-y-4" />
        </motion.div>
      </div>
    </div>
  );
};
