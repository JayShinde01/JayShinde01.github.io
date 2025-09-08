// src/pages/Home.jsx
import { Button } from "antd";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  const roles = ["Full Stack Developer", "React Enthusiast", "Node.js + MySQL"];
  const [currentRole, setCurrentRole] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const navigate = useNavigate();

  // Rotate roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Show welcome screen for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // --- Welcome Screen ---
if (showWelcome) {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      
      {/* Animated Gradient Background Circles */}
      <motion.div
        className="absolute rounded-full w-60 h-60 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-40 blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, -60, 0], scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full w-72 h-72 bg-gradient-to-br from-pink-500 to-indigo-500 opacity-30 blur-3xl"
        animate={{ x: [0, -100, 0], y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />

      {/* Typing Effect Text */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-center"
      >
        {`Welcome to My Portfolio`}
        <span className="animate-pulse text-blue-400">|</span>
      </motion.h1>

      {/* Subtext with fade-in */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.5 }}
        className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-md"
      >
        I'm Jay Shinde, a passionate Full Stack Developer. <br />
        Let’s explore my work and projects.
      </motion.p>

      {/* Animated Down Arrow */}
      <motion.div
        className="absolute bottom-10 text-blue-400 text-3xl animate-bounce"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        ⬇
      </motion.div>
    </div>
  );
}


  // --- Main Home content after 5 seconds ---
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Neon floating circles */}
      <motion.div 
        className="absolute rounded-full bg-blue-500 opacity-20 w-48 h-48 -top-20 -left-20 blur-3xl"
        animate={{ x: [0, 100, 0], y: [0, 80, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute rounded-full bg-purple-500 opacity-20 w-72 h-72 -bottom-32 -right-24 blur-3xl"
        animate={{ x: [0, -120, 0], y: [0, -60, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 text-center md:text-left space-y-6 z-10"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Hi, I’m{" "}
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Jay Shinde
          </span>
        </h1>

        {/* Animated Role */}
        <motion.p
          key={currentRole}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-2xl font-medium text-gray-300 h-8"
        >
          {roles[currentRole]}
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start mt-6">
          <Button
            type="primary"
            size="large"
            className="rounded-xl px-6 py-2 bg-blue-500 hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all transform hover:scale-105"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/jay_shinde_fs.pdf";
              link.download = "JayShinde_Resume.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            Download Resume
          </Button>

          <Button
            size="large"
            ghost
            className="rounded-xl px-6 py-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all transform hover:scale-105"
            onClick={() => navigate("/contact")}
          >
            Contact Me
          </Button>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 justify-center md:justify-start">
          <a href="https://github.com/JayShinde01" target="_blank" className="text-gray-300 hover:text-white transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/jayshinde03" target="_blank" className="text-gray-300 hover:text-blue-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:jay554261@gmail.com" className="text-gray-300 hover:text-red-500 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </motion.div>

      {/* Right Profile Photo */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 flex justify-center mt-10 md:mt-0 z-10"
      >
        <motion.img
          src="/jay.jpg"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-[0_0_30px_rgba(22,119,255,0.6)]"
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 45px rgba(22,119,255,0.9)",
          }}
        />
      </motion.div>

      {/* Footer */}
      <motion.p
        className="absolute bottom-4 w-full text-center text-gray-400 text-sm md:text-base select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        Developed by <span className="text-blue-400 font-semibold">Jay Shinde</span> © 2025
      </motion.p>
    </div>
  );
}
