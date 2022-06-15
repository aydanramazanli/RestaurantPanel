import React, {useState} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {

  const { user, isAuthenticated, logout } = useAuth0();
  const isUser = isAuthenticated && user;



  const variants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", delay: 0.5 }}
      className="shadow-lg shadow-slate-400/10 h-full w-full"
    >
      <div className="container m-auto flex items-center justify-between px-4 py-2">
        <Link to="/">
          <img src={logo} alt="logo" className="w-2/3" />
        </Link>
        <li className="list-none flex items-center gap-2 rounded-2xl text-center py-1.5 mx-auto my-4  cursor-pinter   font-semibold">
          {isUser && user.picture && (
            <img
              src={user.picture}
              alt={user.name}
              className="w-12 h-12 rounded-3xl"
            />
          )}
          {isUser && user.name && <h3>{user.name.toUpperCase()}</h3>}
        </li>
        <ul className="flex items-center  gap-2">
          <Link to="/">
         
            <li className="nav-item mx-2 cursor-pointer text-orange-500 hover:text-orange-700  font-semibold">
              Ana Səhifə
            </li>
          </Link>
          <Link to="/orders">
            <li className="nav-item mx-2 rounded-2xl  text-center  transition-all duration-1000 ease-out cursor-pointer text-orange-500 hover:text-orange-700 font-semibold">
              Sifarisler
            </li>
          </Link>
          <Link to="/step1">
            <li className="nav-item mx-2 rounded-2xl  text-center  transition-all duration-1000 ease-out cursor-pointer text-orange-500 hover:text-orange-700 font-semibold">
            Sirafis elave et
            </li>
          </Link>


       
        
          <li>
            {isUser ? (
              <button
                className="p-3 text-slate-500 font-medium nav-item"
                onClick={() => {
                  logout({ returnTo: window.location.origin });
                }}
              >
                Çıxış et
              </button>
            ) : (
              <Link to="/login">
                <button className="nav-item  font-medium">Daxil ol</button>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
