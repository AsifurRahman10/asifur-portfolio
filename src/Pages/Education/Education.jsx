import { motion } from "motion/react";

export default function Education() {
  const animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div
      id="education-experience"
      className="text-white mx-auto flex flex-col justify-center items-center w-5/6 lg:w-2/3 gap-10 lg:gap-20 min-h-[70vh]"
    >
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-white">
        My Education & Work Experience
      </h2>
      <motion.div
        variants={animation}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className=""
      >
        <div className="flex flex-col md:flex-row md:gap-10">
          {/* education */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl text-white">
              Educational Qualification
            </h2>
            <div className="relative border-l-2 border-gray-500 mt-10">
              {/* educational experience */}
              <div className="ml-6 mb-10 ">
                <span className="absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full left-[-9px] top-1"></span>
                <h2 className="text-lg text-white font-semibold">
                  BSC in Computer science and engineering
                </h2>
                <p className="text-gray-300 font-medium">
                  Independent university, Bangladesh
                </p>
              </div>
              <div className="ml-6 mb-10">
                <span className="absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full left-[-9px] top-[126px] md:top-[98px]"></span>
                <h2 className="text-lg text-white font-semibold">
                  Higher Secondary Certificate
                </h2>
                <p className="text-gray-300 font-medium">Milestone College</p>
              </div>
              <div className="ml-6 mb-10">
                <span className="absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full left-[-9px] bottom-[32px]"></span>
                <h2 className="text-lg text-white font-semibold">
                  Secondary School Certificate
                </h2>
                <p className="text-gray-300 font-medium">
                  Kurmitola High School & College
                </p>
              </div>
            </div>
          </div>

          {/* job experience */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl text-white">Job experience</h2>
            <div className="relative border-l-2 border-gray-500 mt-10">
              {/* educational experience */}
              <div className="ml-6 mb-10 ">
                <span className="absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full left-[-9px] top-1"></span>
                <h2 className="text-lg text-white font-semibold">
                  Assistant supervisor
                </h2>
                <p className="text-gray-200 font-semibold">
                  Intelligent Image Management Ltd
                </p>
                <p className="text-gray-400 mt-2">
                  I leaded a team of 40, assigned tasks, trained members, and
                  resolved issues. Managed client communication, ensured
                  accuracy, tracked performance, and optimized efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
