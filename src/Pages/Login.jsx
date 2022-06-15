import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import LoginImage from "../images/loginimage.png";
import { motion } from "framer-motion";

const Login = () => {



  
  const { loginWithRedirect } = useAuth0()
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="w-full h-full relative">
         <div className="absolute bg-orange-300 w-full rounded-bl-full opacity-30 right-0 h-full loginBg" ></div>
       <div className="flex container m-auto ">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", delay: 0.5 }}
        className="flex flex-col justify-center w-1/3 "
      >
        <h1 className="text-center font-semibold text-2xl">Restauran Admin Panel</h1>
        {/* <form action="" className="flex flex-col justify-center">
          <label htmlFor="name" className="text-gray-400 my-1 ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter name"
            className="border-2 outline-0 rounded-lg px-20 py-1.5"
          />
          <label htmlFor="password" className="text-gray-400  my-1">
            Email
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="border-2  outline-0 rounded-lg px-20 py-1.5"
          />

        </form> */}
                  <button onClick={loginWithRedirect} className="rounded py-1.5 px-12  mx-auto my-4  transition-all duration-1000 ease-out bg-orange-500 hover:bg-orange-700   text-red-50 outline-none   font-semibold ">
            Daxil olun
          </button>
      </motion.div>

      <div className="items-end w-2/3 flex flex-col justify-center ">
        <motion.img
          src={LoginImage}
          alt="github user"
          className="my-4 loginImg"
          variants={variants2}
          initial="hidden"
          animate="visible"
          transition={{ type: "spring", delay: 0.5 }}
        />
      </div>
    </div>
    </div>
 
   
  );
};

export default Login;
