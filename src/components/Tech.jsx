"use client";

import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Image from "next/image";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">
          What i have learned so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          My Skills.
        </h2>
      </motion.div>
      <div className="grid grid-cols-3 justify-center mt-8 lg:mt-12 gap-6 lg:flex lg:flex-row lg:flex-wrap lg:gap-10">
        {technologies.map((technology,index) => (
            <motion.div
            variants={fadeIn("right", "spring", index * 0.1, 0.75)}
          >
          <div
            className="w-18 h-18 flex flex-col space-y-2 items-center"
            key={technology.name}
          >
            <div
              className={`p-2 w-16 h-16 rounded-full flex justify-center items-center ${
                technology.name === "Next JS" ? "bg-slate-300" : "bg-gray-800"
              }`}
            >
              <Image src={technology.icon} width={48} height={48} />
            </div>
            <p className="text-center">{technology.name}</p>
          </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
