import { motion } from "motion/react";
import ownImg from "../../../public/own.png";
export const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="text-white flex gap-10 justify-center items-center flex-col lg:flex-row w-5/6 mx-auto min-h-screen"
    >
      {/* text */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex-1"
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mt-20 lg:mt-0">
          About me
        </h2>
        <p className="mt-4 text-gray-200 text-base md:text-lg">
          <span className="italic">
            Hi, I’m <span className="font-bold text-white">Asifur Rahman</span>,
            a web developer focused on the MERN stack, passionate about creating
            intuitive websites.
          </span>{" "}
          My coding journey began in 2021 during my undergraduate studies. After
          graduation, I worked across various sectors before fully immersing
          myself in web development in 2024, where I dove deep into honing my
          skills and mastering modern web technologies like React, Tailwind,
          Node.js, and Express. I’m driven by problem-solving and enhancing user
          experiences through code.
        </p>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={ownImg}
          alt="Asif's Photo"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
               object-cover rounded-lg shadow-lg transition-transform duration-300 
               hover:scale-105"
        />
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
