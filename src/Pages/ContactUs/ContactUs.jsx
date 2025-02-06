import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="text-white flex flex-col min-h-screen md:flex-row justify-center items-center w-5/6 lg:w-2/3 pb-10">
      {/* text part */}

      <div className="flex-1">
        <h3 className="text-6xl font-semibold w-full lg:w-1/2 pb-4">
          Let's Work Together
        </h3>
        <div className="mt-4">
          <MdEmail className="text-3xl  hover:text-[#A892FF]" />
          <p className="text-gray-400 mt-2">Asifur.rahman4904@gmail.com</p>
        </div>
        <div className="mt-4">
          <FaPhoneAlt className="text-3xl  hover:text-[#A892FF]" />
          <p className="text-gray-400 mt-2">01621294904</p>
        </div>
        <div className="mt-4">
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
        </div>
      </div>

      {/* form part */}
      <div className="flex flex-col flex-1 gap-6 mt-10">
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A892FF] focus:border-transparent transition ease-in-out"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A892FF] focus:border-transparent transition ease-in-out"
          />
          <textarea
            name=""
            rows={6}
            className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A892FF] focus:border-transparent transition ease-in-out"
            placeholder="Message"
          ></textarea>
          <button className="w-full py-4 bg-[#A892FF] rounded-lg text-black font-medium hover:bg-[#BBA0FF]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
