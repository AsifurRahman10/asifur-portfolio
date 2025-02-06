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
    <div className="text-whit flex w-full flex-col items-center justify-center mb-20">
      <motion.h1
        variants={animation}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-5xl text-white"
      >
        Technology
      </motion.h1>

      <div className="mt-6 md:mt-10 mt flex justify-center items-center flex-wrap gap-10 px-4">
        {/* fontend */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaReact className="cursor-pointer text-[90px] text-sky-500 transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <RiTailwindCssFill className="cursor-pointer text-[90px] text-[#00bcff] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <IoLogoJavascript className="cursor-pointer text-[90px] text-[#F7E02B] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={motionLogo}
            className="cursor-pointer w-[90px]
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
          <FaNodeJs className="cursor-pointer text-[90px] text-[#84BF14] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
          className="bg-white flex p-2 rounded-full overflow-hidden "
        >
          <SiExpress className="cursor-pointer text-[80px] text-black transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiMongodb className="cursor-pointer text-[90px] text-[#84BF14] transition-all duration-300 hover:translate-y-4" />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            className="cursor-pointer w-[90px] transition-all duration-300 hover:translate-y-4"
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
          <FaGithub className="cursor-pointer text-[90px] text-white transition-all duration-300 hover:translate-y-4" />
        </motion.div>
      </div>
    </div>
  );
};
