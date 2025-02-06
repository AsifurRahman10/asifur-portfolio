import { motion } from "motion/react";
import ownImg from "../../../public/own.png";
export const AboutMe = () => {
  return (
    <div className="text-white flex gap-10 justify-center items-center flex-col md:flex-row w-5/6 mx-auto mb-10 md:mb-0">
      {/* text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex-1"
      >
        <h2 className="text-6xl text-white">About me</h2>
        <p className="mt-4 text-gray-200 text-lg">
          <span className="italic">
            Hi, I’m <span className="font-bold text-white">Asifur Rahman</span>,
            a Front-End Developer passionate about creating intuitive websites.
          </span>{" "}
          My journey in coding began in 2021 after graduation, working across
          various sectors before immersing myself in web development in 2024,
          where I dove deep into web development, honing my skills and mastering
          modern web technologies like React, Tailwind, Node.js, and Express.
          I’m driven by problem-solving and enhancing user experiences through
          code.
        </p>
      </motion.div>

      {/* image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 50 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex-1"
      >
        <img src={ownImg} alt="asif's-photo" />
      </motion.div>

      {/* other */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex-1 flex flex-col gap-10 mt-14 md:mt-0"
      >
        {/* type of work you enjoy. */}
        <div className="w-full divide-y">
          <label
            htmlFor="accordion-toggle-work"
            className="flex w-full items-center justify-between gap-4 bg-[#0D0D0D] p-4 text-left underline-offset-2 hover:bg-[#A892FF] focus-visible:bg-[#1A1A2E] focus-visible:underline focus-visible:outline-none text-[#EAEAEA] cursor-pointer"
          >
            Type of work I enjoy.
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5 shrink-0 transition-transform duration-300 peer-checked:rotate-180"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <input
            type="checkbox"
            id="accordion-toggle-work"
            className="hidden peer"
          />
          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
            <div className="p-4 text-sm sm:text-base text-pretty">
              <ul>
                <li>
                  I enjoy building websites and learning new technologies. I
                  also enjoy traveling.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* hobbies or interests outside of programming */}
        <div className="divide-y w-full">
          {/* Hobbies & Interests Accordion */}
          <label
            htmlFor="accordion-toggle-hobbies"
            className="flex w-full items-center justify-between gap-4 bg-[#0D0D0D] p-4 text-left underline-offset-2 hover:bg-[#A892FF] focus-visible:bg-[#1A1A2E] focus-visible:underline focus-visible:outline-none text-[#EAEAEA] cursor-pointer"
          >
            Hobbies & Interests
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5 shrink-0 transition-transform duration-300 peer-checked:rotate-180"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <input
            type="checkbox"
            id="accordion-toggle-hobbies"
            className="hidden peer"
          />
          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
            <div className="p-4 text-sm sm:text-base text-pretty">
              Outside of coding, I love riding motorcycles and enjoy watching
              football games. These hobbies help me stay active and keep my mind
              sharp for problem-solving and creativity.
            </div>
          </div>
        </div>

        {/* Showcasing My Personality Accordion */}
        <div className="divide-y w-full">
          <label
            htmlFor="accordion-toggle-personality"
            className="flex w-full items-center justify-between gap-4 bg-[#0D0D0D] p-4 text-left underline-offset-2 hover:bg-[#A892FF] focus-visible:bg-[#1A1A2E] focus-visible:underline focus-visible:outline-none text-[#EAEAEA] cursor-pointer"
          >
            More about myself
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              className="size-5 shrink-0 transition-transform duration-300 peer-checked:rotate-180"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
          <input
            type="checkbox"
            id="accordion-toggle-personality"
            className="hidden peer"
          />
          <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-40">
            <div className="p-4 text-sm sm:text-base text-pretty">
              I’m a curious, driven individual who enjoys tackling challenges
              and learning new skills. I value collaboration, clear
              communication, and creating functional, enjoyable projects. Always
              open to feedback, I love working with others to build something
              great.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
