// src/pages/Skills.jsx
import { useEffect, useState } from "react";
import skillsData from "../data/skills.json"; // local JSON
import { motion } from "framer-motion";

export default function Skills() {
  const [skills, setSkills] = useState(null);

  useEffect(() => {
    setSkills(skillsData.skills);
  }, []);

  if (!skills) return <p className="text-white">Loading...</p>;

  const categories = [
    { title: "Languages", items: skills.languages },
    { title: "Frameworks & Libraries", items: skills.frameworks },
    { title: "Databases", items: skills.databases },
    { title: "Tools & Others", items: skills.tools },
  ];

  return (
    <div className="min-h-screen px-6 py-16 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white flex flex-col items-center">
      <motion.h2
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 mb-12 drop-shadow-lg text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        💻 My Skills
      </motion.h2>

      <div className="flex flex-col gap-12 w-full max-w-6xl">
        {categories.map((cat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.3 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-pink-400 text-center">
              {cat.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {cat.items.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05, type: "spring", stiffness: 200 }}
                  whileHover={{
                    scale: 1.15,
                    rotate: 5,
                    boxShadow: "0 0 25px rgba(99,102,241,0.7)",
                  }}
                  className="w-28 h-28 rounded-full flex items-center justify-center
                             bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600
                             text-white font-semibold text-center text-sm shadow-lg
                             cursor-pointer transition-all duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
