// src/pages/About.jsx
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, BookOpen, Award } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white">
      
      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        👨‍💻 About Me
      </motion.h2>

      {/* Content Container */}
      <div className="max-w-5xl bg-[rgba(20,20,20,0.85)] backdrop-blur-md border border-gray-700 rounded-2xl shadow-2xl p-10 text-gray-300 leading-relaxed hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300">

        {/* Intro */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Hi 👋, I'm <span className="text-purple-400 font-semibold">Jay Anil Shinde</span>, a passionate <span className="text-pink-400 font-semibold">Full-Stack Developer</span> from Maharashtra, India. I love building scalable web apps, solving real-world problems, and creating sleek UI/UX experiences.
        </motion.p>

        {/* Skills Summary */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">⚡ Skills & Expertise</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Frontend: React.js, HTML, CSS, JavaScript, Tailwind, Ant Design</li>
            <li>Backend: Node.js, Express, PHP, Java, Spring Boot, Hibernate</li>
            <li>Database: MySQL, MongoDB, Firebase, MariaDB</li>
            <li>Authentication & Security: JWT, Firebase Auth, bcrypt</li>
            <li>Tools: Git, Docker, Postman, Maven, Axios</li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-700 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition">
            <Mail className="text-pink-400" /> <span>Jay554261@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-700 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition">
            <Phone className="text-pink-400" /> <span>+91 8767258243</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-700 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition">
            <MapPin className="text-pink-400" /> <span>Satara, Maharashtra, India</span>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-700 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition">
            <Github className="text-pink-400" />
            <a href="https://github.com/JayShinde01" target="_blank" rel="noopener noreferrer" className="hover:text-white">github.com/JayShinde01</a>
          </div>
          <div className="flex items-center gap-3 bg-gray-900/50 border border-gray-700 rounded-xl p-4 hover:shadow-[0_0_20px_rgba(236,72,153,0.5)] transition sm:col-span-2">
            <Linkedin className="text-pink-400" />
            <a href="https://linkedin.com/in/jayshinde03" target="_blank" rel="noopener noreferrer" className="hover:text-white">linkedin.com/in/jayshinde03</a>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">🎓 Education</h3>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>B.Tech - Computer Science</strong>, KBP College of Engineering, Satara (2022-2026)</li>
            <li>Class XII, Walchand College of Arts & Science, Solapur (2021-2022)</li>
          </ul>
        </motion.div>

        {/* Projects */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">💻 Projects</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Inventory & Sales Management System</strong> | React.js, Node.js, Express.js, MySQL, Ant Design
            </li>
            <li>
              <strong>Bus Scheduling & Route Management</strong> | HTML, CSS, PHP, MySQL, HERE Maps API
            </li>
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">🏆 Achievements</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Runner-Up in Mini Project Competition, KBP College of Engineering, Satara</li>
            <li>2nd Rank in IoT-based Project Competition, KBP College of Engineering</li>
          </ul>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <h3 className="text-2xl font-semibold text-pink-400 mb-3">🎯 Hobbies & Interests</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>Coding & solving programming challenges</li>
            <li>Exploring new frameworks & libraries</li>
            <li>Web development projects</li>
            <li>Reading tech blogs and tutorials</li>
          </ul>
        </motion.div>

      </div>
    </div>
  );
}
