import { motion } from 'motion/react'

export default function Education() {
  const animation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }
  return (
    <div
      id='education-experience'
      className='text-white mx-auto flex flex-col justify-center items-center w-5/6 lg:w-2/3 gap-10 lg:gap-20 min-h-[70vh]'>
      <h2 className='text-4xl md:text-5xl lg:text-6xl text-white'>
        My Education & Work Experience
      </h2>
      <motion.div
        variants={animation}
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 0.5 }}
        className=''>
        <div className='flex flex-col md:flex-row md:gap-10'>
          {/* education */}
          <div className='flex-1'>
            <h2 className='text-2xl md:text-3xl text-white'>
              Educational Qualification
            </h2>
            <div className='relative border-l-2 border-gray-500 mt-10'>
              {/* educational experience */}
              <div className='ml-6 mb-10 '>
                <span className='absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full left-[-9px] top-1'></span>
                <h2 className='text-lg text-white font-semibold'>
                  BSC in Computer science and engineering
                </h2>
                <p className='text-gray-300 font-medium'>
                  Independent university, Bangladesh
                </p>
              </div>
              <div className='ml-6 mb-10'>
                <span className='absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full left-[-9px] top-[126px] md:top-[98px]'></span>
                <h2 className='text-lg text-white font-semibold'>
                  Higher Secondary Certificate
                </h2>
                <p className='text-gray-300 font-medium'>Milestone College</p>
              </div>
              <div className='ml-6 mb-10'>
                <span className='absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full left-[-9px] bottom-[32px]'></span>
                <h2 className='text-lg text-white font-semibold'>
                  Secondary School Certificate
                </h2>
                <p className='text-gray-300 font-medium'>
                  Kurmitola High School & College
                </p>
              </div>
            </div>
          </div>

          {/* Job Experience */}
          <div className='flex-1'>
            <h2 className='text-2xl md:text-3xl text-white'>Job Experience</h2>

            <div className='relative border-l-2 border-gray-500 mt-10'>
              {/* TestSignal */}
              <div className='relative ml-6 mb-10'>
                <span className='absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full -left-[33px] top-1'></span>

                <h2 className='text-lg text-white font-semibold'>
                  Software Engineer
                </h2>

                <p className='text-gray-200 font-semibold'>
                  TestSignal | Remote
                </p>

                <p className='text-sm text-gray-400 mt-1'>
                  Jan 2026 – Jun 2026
                </p>

                <p className='text-gray-400 mt-2'>
                  Developed and maintained features for a production A/B testing
                  SaaS platform. Built REST APIs using Node.js and Express,
                  optimized PostgreSQL queries, integrated frontend features,
                  and deployed application infrastructure using AWS EC2 and S3.
                </p>
              </div>

              {/* DevsNest */}
              <div className='relative ml-6 mb-10'>
                <span className='absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full -left-[33px] top-1'></span>

                <h2 className='text-lg text-white font-semibold'>
                  Jr. Software Engineer
                </h2>

                <p className='text-gray-200 font-semibold'>DevsNest</p>

                <p className='text-sm text-gray-400 mt-1'>
                  Mar 2025 – Dec 2025
                </p>

                <p className='text-gray-400 mt-2'>
                  Developed production frontend features using React and
                  TypeScript, built reusable UI components, integrated backend
                  APIs, and troubleshot application issues to improve frontend
                  maintainability.
                </p>
              </div>

              {/* Intelligent Image Management */}
              <div className='relative ml-6 mb-10'>
                <span className='absolute w-4 h-4 bg-[#A892FF] border-2 border-white rounded-full -left-[33px] top-1'></span>

                <h2 className='text-lg text-white font-semibold'>
                  Assistant Supervisor
                </h2>

                <p className='text-gray-200 font-semibold'>
                  Intelligent Image Management Ltd
                </p>

                <p className='text-gray-400 mt-2'>
                  Led a team of 40 members, assigned tasks, provided training,
                  resolved operational issues, managed client communication,
                  monitored performance, and ensured accuracy and efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
