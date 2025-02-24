import { useEffect } from "react";
import { useState } from "react";
import { motion } from "motion/react";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <motion.div
      className="w-[50px] h-[50px] rounded-full border border-white fixed z-50"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
};
