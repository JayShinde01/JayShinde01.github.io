// src/pages/Projects.jsx
import { Card, Button } from "antd";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Inventory Management System",
      desc: "Full-stack MERN project with MySQL, authentication & reporting.",
      link: "https://github.com/JayShinde01/Inventory_Management_System",
      live: "https://ambika-spare-parts.netlify.app",
    },
    {
      title: "Alumni Connect",
      desc: "Platform to connect alumni & students for collaboration & mentorship.",
      link: "https://github.com/JayShinde01/Alumni-Connect",
      live: "https://nextstepcampusconnect.netlify.app",
    },
     {
      title: "Todo App",
      desc: "Minimal React CRUD app with sleek UI & state management.",
      link: "https://github.com/JayShinde01/Todo_App",
      live:"https://todo-app-jay.netlify.app"
    },
     {
      title: "Book Finder",
      desc: "React app to search & explore books with an external API.",
      link: "https://github.com/JayShinde01/book-finder",
      live: "https://BookFinderPrototype.netlify.app",
    },
    {
      title: "BloodBridge Platform",
      desc: "Smart blood donation matching app using AI + GPS integration.",
      link: "https://github.com/JayShinde01/blood",
    },
    
   
    {
      title: "Bus Scheduling Route Management",
      desc: "Automated bus scheduling & real-time tracking system.",
      link: "https://github.com/JayShinde01/Bus-Scheduling-Route-Management",
    },
    {
      title: "Machine Learning",
      desc: "Collection of ML models & experiments in Python.",
      link: "https://github.com/JayShinde01/machine_learning",
    },
   
  ];

  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-16 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white">
      <motion.h2
        className="text-5xl font-extrabold mb-14 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 drop-shadow-lg"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 Featured Projects
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.07, y: -8 }}
            transition={{ type: "spring", stiffness: 220 }}
            className="relative group w-80"
          >
            {/* Neon glow overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-60 blur-3xl transition duration-500"></div>

            <Card
              title={
                <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 to-purple-400 transition-all duration-500 group-hover:text-white">
                  {p.title}
                </span>
              }
              bordered={false}
              style={{
                background: "linear-gradient(to bottom right, #1f1b3c, #111827)",
                borderRadius: "1rem",
                border: "1px solid #4338ca",
                boxShadow: "0 10px 40px rgba(99,102,241,0.5)",
                color: "#e5e7eb",
              }}
              className="backdrop-blur-md transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(99,102,241,0.7)]"
              actions={[
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 px-5 py-2 rounded-lg font-semibold shadow-lg transition-all duration-300
                    ${p.live 
                      ? "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-500 hover:to-purple-600 hover:shadow-cyan-500/50 text-white"
                      : "bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-purple-500 hover:to-pink-500 text-white hover:shadow-pink-400/50 w-full justify-center"
                    }`}
                >
                  <Github size={18} /> GitHub
                </a>,
                p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-5 py-2 rounded-lg
                               bg-gradient-to-r from-green-400 to-teal-500
                               hover:from-teal-500 hover:to-green-400
                               text-white font-semibold shadow-lg
                               hover:shadow-green-400/50
                               transition-all duration-300"
                  >
                    <ExternalLink size={18} /> Live
                  </a>
                ),
              ]}
            >
              <p className="text-gray-300 leading-relaxed group-hover:text-white transition duration-500">
                {p.desc}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
