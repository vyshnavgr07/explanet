"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes, FaUser, FaUserPlus } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../config/sidebar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submenuOpenIndex, setSubmenuOpenIndex] = useState(null);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
  const toggleSubmenu = (index) => {
    setSubmenuOpenIndex(submenuOpenIndex === index ? null : index);
  };

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  const submenuVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.25, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -8,
      scale: 0.98,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-white backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm"
    >
      {/* Logo */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src="https://mentrictraining.com/explenet/uploads/system/logo_explenet.png"
          alt="logo"
          className="h-8 transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden text-xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10">
        {navLinks.map((link, index) => (
          <li key={link.label} className="relative">
            <div
              className="flex items-center gap-1 cursor-pointer"
              onClick={() => link.submenu && toggleSubmenu(index)}
            >
              <a
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-purple-700 flex items-center transition-all duration-300"
              >
                {link.label}
              </a>
              {link.submenu && <MdArrowDropDown className="text-lg text-gray-600" />}
            </div>

            {/* Animated Submenu (Desktop) */}
            <AnimatePresence>
              {link.submenu && submenuOpenIndex === index && (
                <motion.ul
                  variants={submenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full mt-3 bg-white/95 backdrop-blur-md shadow-xl rounded-xl z-30 min-w-[200px] border border-purple-100 overflow-hidden"
                >
                  <div className="absolute -top-2 left-6 w-3 h-3 bg-white rotate-45 border-l border-t border-purple-100 shadow-sm"></div>
                  {link.submenu.map((sublink) => (
                    <li key={sublink.label}>
                      <a
                        href={sublink.href}
                        className="block px-5 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-800 transition-all duration-200"
                      >
                        {sublink.label}
                      </a>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>

      {/* Icons */}

      {/* <div className="hidden md:flex items-center gap-5">
        <FaSearch className="text-gray-600 hover:text-purple-600 cursor-pointer text-lg transition-transform duration-300 hover:scale-110" />
        <div className="bg-purple-600 p-2 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-md">
          <FaShoppingCart />
        </div>
        <img
          src="/pro.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-purple-500 shadow-sm hover:scale-105 transition-transform duration-300"
        />
      </div> */} 

<div className="hidden md:flex items-center gap-5">
        <FaSearch className="text-gray-600 hover:text-purple-600 cursor-pointer text-lg transition-transform duration-300 hover:scale-110" />

        {isLoggedIn ? (
          <>
            <div className="bg-purple-600 p-2 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-md">
              <FaShoppingCart />
            </div>
            <img
              src="/pro.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-purple-500 shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </>
        ) : (
          <>
            <button className="text-sm px-4 py-1.5 rounded-md border border-purple-600 text-purple-600 hover:bg-purple-50 transition">
              Login
            </button>
            <button className="text-sm px-4 py-1.5 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition">
              Register
            </button>
          </>
        )}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 py-4 px-6 md:hidden z-40"
        >
          {navLinks.map((link, index) => (
            <li key={link.label} className="text-gray-800 font-medium">
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => link.submenu && toggleSubmenu(index)}
              >
                {link.label}
                {link.submenu && <MdArrowDropDown />}
              </div>

              <AnimatePresence>
                {link.submenu && submenuOpenIndex === index && (
                  <motion.ul
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={submenuVariants}
                    className="ml-4 mt-1 border-l pl-2 border-purple-200"
                  >
                    {link.submenu.map((sublink) => (
                      <li key={sublink.label}>
                        <a
                          href={sublink.href}
                          className="text-sm text-gray-600 hover:text-purple-600 transition block py-1"
                        >
                          {sublink.label}
                        </a>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
          {isLoggedIn? (
          <div className="flex items-center gap-4 mt-4 border-t pt-4">
          <FaSearch className="text-gray-600 hover:text-purple-600 cursor-pointer text-lg" />
          <FaShoppingCart className="text-purple-600 text-lg" />
          <img
            src="/pro.jpg"
            alt="profile"
            className="w-8 h-8 rounded-full object-cover border-2 border-purple-500"
          />
        </div>
          ):(
            <div className="flex gap-4 items-center relative">
            {/* Login Button */}
            <div className="group relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-600 text-purple-600 font-semibold rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300">
                <FaUser />
                Login
              </button>
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-purple-700 text-white px-2 py-1 rounded shadow-md whitespace-nowrap z-10">
                Click to log in
              </span>
            </div>
      
            {/* Register Button */}
            <div className="group relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-purple-600 text-purple-600 font-semibold rounded-full shadow-md hover:bg-purple-600 hover:text-white transition-all duration-300">
                <FaUserPlus />
                Register
              </button>
              <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs bg-purple-700 text-white px-2 py-1 rounded shadow-md whitespace-nowrap z-10">
                Create an account
              </span>
            </div>
          </div>
          )}

        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
