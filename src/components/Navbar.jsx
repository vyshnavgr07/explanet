"use client";

import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { motion } from "framer-motion";
import { navLinks } from "../config/sidebar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="w-full flex justify-between items-center px-6 md:px-10 py-4 bg-whi backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm "
    >
      {/* Logo */}
      <div className="flex items-center gap-3 group cursor-pointer">
        <img
          src="https://mentrictraining.com/explenet/uploads/system/logo_explenet.png"
          alt="logo"
          className="h-8 transition-transform duration-300 group-hover:scale-105"
        />
        <span className="text-lg font-bold text-purple-700 group-hover:text-purple-900 transition">
          Explenet
        </span>
      </div>

      {/* Hamburger (Mobile) */}
      <div className="md:hidden text-xl text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 ">
        {navLinks.map((link) => (
          <li className="relative group" key={link.label}>
            <a
              href={link.href}
              className="text-base font-medium text-gray-700 hover:text-purple-700 flex items-center transition-all duration-300"
            >
              {link.label}
              {link.submenu && <MdArrowDropDown className="ml-1 text-lg" />}
            </a>
            {link.submenu && (
              <ul className="absolute hidden group-hover:block top-full mt-3 bg-white/90 backdrop-blur-lg shadow-2xl rounded-xl z-20 min-w-[180px] border border-purple-100 overflow-hidden transition-all duration-300">
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
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Icons */}
      <div className="hidden md:flex items-center gap-5">
        <FaSearch className="text-gray-600 hover:text-purple-600 cursor-pointer text-lg transition-transform duration-300 hover:scale-110" />
        <div className="bg-purple-600 p-2 rounded-full text-white hover:scale-110 transition-transform duration-300 shadow-md">
          <FaShoppingCart />
        </div>
        <img
          src="/pro.jpg"
          alt="profile"
          className="w-10 h-10 rounded-full object-cover border-2 border-purple-500 shadow-sm hover:scale-105 transition-transform duration-300"
        />
      </div>




      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <motion.ul
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-3 py-4 px-6 md:hidden z-40"
        >
          {navLinks.map((link) => (
            <li key={link.label} className="text-gray-800 font-medium">
              <a href={link.href} className="block py-2 hover:text-purple-700 transition">
                {link.label}
              </a>
              {link.submenu && (
                <ul className="ml-4 mt-1 border-l pl-2 border-purple-200">
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
                </ul>
              )}
            </li>
          ))}
          <div className="flex items-center gap-4 mt-4 border-t pt-4">
            <FaSearch className="text-gray-600 hover:text-purple-600 cursor-pointer text-lg" />
            <FaShoppingCart className="text-purple-600 text-lg" />
            <img
              src="/pro.jpg"
              alt="profile"
              className="w-8 h-8 rounded-full object-cover border-2 border-purple-500"
            />
          </div>
        </motion.ul>
      )}
    </motion.nav>
  );
};

export default Navbar;
