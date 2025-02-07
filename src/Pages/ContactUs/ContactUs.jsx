import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactUs() {
  const variants = {
    initial: {
      y: 500,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const ref = useRef();
  const form = useRef();

  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    setSuccess(false);
    e.preventDefault();

    emailjs
      .sendForm("service_df9soqb", "template_juiv2ko", form.current, {
        publicKey: "Fc-dwL3kSHd_Bjk6m",
      })
      .then(
        () => {
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const isInView = useInView(ref);
  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="initial"
      whileInView="animate"
      className="text-white flex flex-col min-h-screen md:flex-row justify-center items-center w-5/6 lg:w-2/3 pb-10"
    >
      {/* text part */}

      <motion.div variants={variants} className="flex-1">
        <motion.h3
          variants={variants}
          className="text-6xl font-semibold w-full lg:w-1/2 pb-4 leading-[88px]"
        >
          Let's Work Together
        </motion.h3>
        <motion.div variants={variants} className="mt-4">
          <MdEmail className="text-3xl  hover:text-[#A892FF]" />
          <p className="text-gray-400 mt-2">Asifur.rahman4904@gmail.com</p>
        </motion.div>
        <motion.div variants={variants} className="mt-4">
          <FaPhoneAlt className="text-3xl  hover:text-[#A892FF]" />
          <p className="text-gray-400 mt-2">01621294904</p>
        </motion.div>
        <motion.div variants={variants} className="mt-4">
          <a
            href="https://wa.me/+8801621294904"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col"
          >
            <FaWhatsapp className="text-3xl hover:text-[#A892FF]" />
            <span className="text-gray-400 mt-2 cursor-pointer">
              Chat on WhatsApp
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* form part */}
      <div className="flex flex-col justify-center flex-1 gap-6 mt-10 relative">
        <motion.div
          initial={{ opacity: 1 }}
          whileInView={{ opacity: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="absolute w-full flex justify-center -z-1"
        >
          <svg
            width="100%"
            height="auto"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={isInView && { pathLength: 1 }}
              transition={{ duration: 3 }}
              d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
              stroke="#A892FF"
              stroke-width="0.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </motion.div>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="space-y-4"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="w-full py-[12px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A892FF] focus:border-transparent transition ease-in-out"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full py-[12px] px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A892FF] focus:border-transparent transition ease-in-out"
          />
          <textarea
            name="message"
            rows={8}
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A892FF] focus:border-transparent transition ease-in-out"
            placeholder="Message"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 bg-[#A892FF] rounded-lg text-black font-medium hover:bg-[#BBA0FF]"
          >
            Send
          </button>
        </motion.form>
        {success && (
          <p className="text-white font-medium">You email has been send.</p>
        )}
      </div>
    </motion.div>
  );
}
