import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaDatabase, FaFigma } from "react-icons/fa";
import { SiPhp, SiTailwindcss, SiJavascript, SiMysql } from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact className="text-sky-500" /> },
    { name: "React Native", icon: <FaReact className="text-indigo-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
    { name: "PHP Laravel", icon: <SiPhp className="text-purple-700" /> },
    { name: "SQL / MySQL", icon: <SiMysql className="text-orange-600" /> },
    { name: "Java", icon: <FaJava className="text-red-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "API Design", icon: <FaDatabase className="text-gray-700" /> },
    { name: "UI/UX Design", icon: <FaFigma className="text-pink-500" /> },
];

export default function Skills() {
    return (
        <section id="skills" className="pt-24 pb-16 px-6 bg-gradient-to-b from-white to-gray-100">
            <h2 className="text-3xl font-bold mb-10 text-center">Skills</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.1 }}
                        className="flex flex-col items-center p-6 bg-white shadow-md rounded-xl border hover:shadow-xl transition"
                    >
                        <div className="text-4xl mb-3">{skill.icon}</div>
                        <p className="text-sm font-semibold">{skill.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
