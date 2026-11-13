import { FaAws, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoPostgresql } from "react-icons/bi";
import {
  SiDocker,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPrisma,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import motionLogo from "../../assets/logo/motion.avif";
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
      className="text-white flex w-full flex-col items-center gap-10 lg:gap-20 justify-center min-h-[70vh] py-10"
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

      <div className="flex justify-center items-center flex-wrap gap-10 px-4 max-w-5xl">
        {/* frontend */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaReact
            title="React"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-sky-500 transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiNextdotjs
            title="Next.js"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-white transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiTypescript
            title="TypeScript"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#3178C6] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <IoLogoJavascript
            title="JavaScript"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#F7E02B] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <RiTailwindCssFill
            title="Tailwind CSS"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#00bcff] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiRedux
            title="Redux Toolkit"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#764ABC] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <img
            src={motionLogo}
            title="Framer Motion"
            className="cursor-pointer w-[70px] md:w-[80px] lg:w-[90px] transition-all duration-300 hover:translate-y-4"
            alt="Framer Motion"
          />
        </motion.div>

        {/* backend */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaNodeJs
            title="Node.js"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#84BF14] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiExpress
            title="Express.js"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-white transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <BiLogoPostgresql
            title="PostgreSQL"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#4169E1] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiMongodb
            title="MongoDB"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#47A248] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiPrisma
            title="Prisma ORM"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-white transition-all duration-300 hover:translate-y-4"
          />
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
            title="Firebase"
            alt="Firebase"
          />
        </motion.div>

        {/* tools & cloud */}
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <SiDocker
            title="Docker"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#2496ED] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaAws
            title="AWS (EC2 & S3)"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-[#FF9900] transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
        <motion.div
          variants={animation}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.5 }}
        >
          <FaGithub
            title="GitHub"
            className="cursor-pointer text-[70px] md:text-[80px] lg:text-[90px] text-white transition-all duration-300 hover:translate-y-4"
          />
        </motion.div>
      </div>
    </div>
  );
};
