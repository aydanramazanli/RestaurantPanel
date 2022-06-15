import React from "react";
import { Link } from "react-router-dom";
import four from "../images/four.png";
import food from "../images/errorFood.png";
import { motion } from "framer-motion";

export default function Error() {
    const variants = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
      };
      const variants2 = {
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      };
  return (
    <>
      <div
        className="flex flex-col items-center justify-center w-full bg-orange-50"
        style={{ height: "100vh" }}
      >
        <motion.div className="flex h-64 gap-9"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", delay: 0.5 }}>
          <img src={four} alt="not" className="w-full h-full" />
          <img src={food} alt="found" className="" />
          <img src={four} alt="page" className="w-full h-full" />
        </motion.div>
        <motion.h3 
          variants={variants2}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", delay: 0.5 }}
        className="font-semibold txt-2xl my-7 text-orange-500">
          Sorry, The Page You Tried Cannot Be Found
        </motion.h3>
        <Link to="/"
        >
          <motion.button
            variants={variants2}
            initial="hidden"
            animate="visible"
            transition={{ type: "spring", delay: 0.5 }}
            className="rounded py-3 px-8 transition-all duration-1000 ease-out bg-orange-500 hover:bg-orange-700   text-red-50 outline-none"
          >
            Back to home
          </motion.button>
        </Link>
      </div>
    </>
  );
}
