// src/components/Navbar.jsx
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo with animation */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/"
            className="text-2xl font-bold text-blue-600 tracking-wide"
          >
            MyPortfolio
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`relative font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-blue-600"
                      : "text-gray-600 hover:text-blue-600"
                  }`}
                >
                  {link.name}
                  {/* Active underline effect */}
                  {isActive && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded"
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
    
<button
  aria-label="Toggle Menu"
  className="md:hidden text-2xl text-black focus:outline-none" // <-- added text-black
  onClick={() => setOpen(!open)}
>
  {open ? <CloseOutlined /> : <MenuOutlined />}
</button>

      </div>

      {/* Mobile Menu with animation */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-grey shadow-md flex flex-col items-center space-y-4 py-4"
          >
            {links.map((link, index) => {
              const isActive = location.pathname === link.path;
              return (
                <li key={index}>
                  <Link
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`font-medium text-lg transition-colors duration-300 ${
                      isActive
                        ? "text-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}
