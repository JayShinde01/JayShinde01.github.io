// src/pages/Contact.jsx
import React from "react";
import { Github, Linkedin, Mail, Book, FileText } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const contacts = [
    {
      name: "Email",
      icon: <Mail size={24} />,
      link: "mailto:jayshinde03@gmail.com",
      display: "jay554261@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      link: "https://www.linkedin.com/in/jayshinde03",
      display: "in/jayshinde03",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      link: "https://github.com/JayShinde01",
      display: "JayShinde01",
    },
    {
      name: "Portfolio",
      icon: <Book size={24} />,
      link: "https://portfoliobyjayshinde.netlify.app/",
      display: "jayportfolio.com",
    },
    {
      name: "LeetCode",
      icon: <FileText size={24} />,
      link: "https://leetcode.com/u/JayShinde01",
      display: "JayShinde01",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white px-6 py-16">
      <motion.h1
        className="text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        📫 Contact Me
      </motion.h1>
      <motion.p
        className="mb-12 text-center text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        I’m always open to collaboration, feedback, or just a friendly hello! Connect with me through any of the platforms below.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-8">
        {contacts.map((c, i) => (
          <motion.a
            key={i}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="flex items-center gap-4 p-6 rounded-xl w-80 bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 hover:from-cyan-500 hover:to-purple-600 transition-transform duration-300 shadow-lg"
          >
            <div className="text-white">{c.icon}</div>
            <div>
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="text-gray-300 hover:text-white transition">{c.display}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
