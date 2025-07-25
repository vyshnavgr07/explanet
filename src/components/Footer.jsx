import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

// Footer data object
const footerSections = [
  {
    title: 'Company',
    links: ['About us', 'Contact us', 'News & Blogs', 'Library', 'Careers'],
  },
  {
    title: 'Community',
    links: ['Documentation', 'FAQ', 'Forum', 'Sitemap'],
  },
  {
    title: 'Teacher',
    links: ['Become a teacher', 'How to guide', 'Terms and conditions'],
  },
  {
    title: 'Contact',
    links: [
      <span><strong className="text-gray-700">Toll free:</strong> +1234 568 963</span>,
      <span><strong className="text-gray-700">Hours:</strong> 9AM – 8PM IST</span>,
      <span><strong className="text-gray-700">Email:</strong> example@gmail.com</span>,
    ],
  },
];

// Accordion for mobile
const AccordionSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden border-b border-gray-200">
      <button
        className="w-full flex justify-between items-center py-3 text-left text-gray-800 font-semibold"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <IoIosArrowDown className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'} pl-2`}>
        <ul className="space-y-2 text-sm py-2 text-gray-600">
          {items.map((item, i) => (
            <li key={i}>
              {typeof item === 'string' ? <a href="#">{item}</a> : item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-100 text-gray-700 py-12 px-4 border-t border-gray-300">
      <div className="max-w-7xl mx-auto">
        {/* Mobile View: Accordion */}
        <div className="md:hidden space-y-4">
          <div className="space-y-4">
            <img src="/explenet.png" alt="Logo" className="w-40 h-auto" />
            <p className="text-sm text-gray-600">
              A modern education platform dedicated to engaging learners and empowering educators.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="#" className="text-gray-500 hover:text-sky-500 transition"><FaTwitter /></a>
              <a href="#" className="text-gray-500 hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition"><FaLinkedinIn /></a>
            </div>
          </div>

          {footerSections.map((section, idx) => (
            <AccordionSection key={idx} title={section.title} items={section.links} />
          ))}
        </div>

        {/* Desktop View: Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Logo Section */}
          <div className="space-y-4">
            <img src="/explenet.png" alt="Logo" className="w-48 h-auto" />
            <p className="text-sm text-gray-600">
              A modern education platform dedicated to engaging learners and empowering educators.
            </p>
            <div className="flex space-x-3 pt-2">
              <a href="#" className="text-gray-500 hover:text-blue-600 transition"><FaFacebookF /></a>
              <a href="#" className="text-gray-500 hover:text-sky-500 transition"><FaTwitter /></a>
              <a href="#" className="text-gray-500 hover:text-pink-500 transition"><FaInstagram /></a>
              <a href="#" className="text-gray-500 hover:text-blue-700 transition"><FaLinkedinIn /></a>
            </div>
          </div>

          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {section.links.map((link, i) => (
                  <li key={i}>
                    {typeof link === 'string' ? <a href="#" className="hover:text-black transition">{link}</a> : link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          <p>© 2025 Eduport. Crafted with ❤️ by StackBros.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
