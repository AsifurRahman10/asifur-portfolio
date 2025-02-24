import mountains from "../../assets/other/mountains.png";
import planets from "../../assets/other/planets.png";
import stars from "../../assets/other/stars.png";
import { motion, useScroll } from "motion/react";

export const Parallax = () => {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center text-white">
      <h2 className="text-5xl font-semibold">My Projects</h2>
      <motion.div
        style={{
          backgroundImage: `url(${mountains})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full absolute z-30"
      ></motion.div>

      <motion.div
        style={{
          backgroundImage: `url(${planets})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full absolute z-20"
      ></motion.div>
      <motion.div
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full absolute z-10"
      ></motion.div>
    </div>
  );
};
