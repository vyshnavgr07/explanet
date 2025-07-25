import React from "react";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import { navLinks } from "../config/sidebar";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-5 shadow-md bg-gradient-to-r from-white via-purple-50 to-white sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="https://mentrictraining.com/explenet/uploads/system/logo_explenet.png" alt="logo" className="h-7" />

      </div>

      {/* Links */}
      <ul className="flex items-center gap-8">
        {navLinks.map((link) => (
          <li className="relative group" key={link.label}>
            <a
              href={link.href}
              className="text-base font-medium text-gray-800 hover:text-purple-600 flex items-center transition-colors duration-200"
            >
              {link.label}
              {link.submenu && <MdArrowDropDown className="ml-1 text-lg" />}
            </a>
            {link.submenu && (
              <ul className="absolute hidden group-hover:block top-full mt-3 bg-white shadow-xl rounded-lg z-20 min-w-[160px] border border-gray-100">
                {link.submenu.map((sublink) => (
                  <li key={sublink.label}>
                    <a
                      href={sublink.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition duration-200"
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
      <div className="flex items-center gap-5">
        <FaSearch className="text-gray-700 hover:text-purple-600 cursor-pointer transition" />
        <div className="bg-purple-600 p-2 rounded-full text-white hover:scale-110 transition-transform duration-300">
          <FaShoppingCart />
        </div>
        <img
          src="/pro.jpg"
          alt="profile"
          className="w-9 h-9 rounded-full object-cover border-2 border-purple-500 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </nav>
  );
};

export default Navbar;
