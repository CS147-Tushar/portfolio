import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import Hero from "./Hero";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
















// const App = () => {
  //   return (
//     <div className="bg-gray-50 text-gray-800 font-serif">
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full bg-white shadow-md z-50">
//         <div className="max-w-6xl mx-auto flex justify-between items-center py-3 px-6">
//           <h1 className="font-bold text-lg">Tushar Tandekar</h1>
//           <ul className="flex gap-6 text-sm font-medium">
//             <li><a href="#about" className="hover:text-blue-600 flex justify-between text-decoration-none">About</a></li>
//             <li><a href="#skills" className="hover:text-blue-600 flex justify-between ">Skills</a></li>
//             <li><a href="#projects" className="hover:text-blue-600 flex justify-between ">Projects</a></li>
//             <li><a href="#experience" className="hover:text-blue-600 flex justify-between ">Experience</a></li>
//             <li><a href="#certifications" className="hover:text-blue-600 flex justify-between ">Certifications</a></li>
//             <li><a href="#education" className="hover:text-blue-600 flex justify-between ">Education</a></li>
//             <li><a href="#contact" className="hover:text-blue-600 flex justify-between ">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-5xl font-bold"
//         >
//           Tushar Tandekar
//         </motion.h1>
//         <motion.h2
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-4 text-2xl text-gray-600"
//         >
//           Product Developer Intern | Web Developer
//         </motion.h2>
//         <p className="mt-6 max-w-xl">
//           Turning ideas into impactful products through design, prototyping, and code.
//         </p>

//         {/* Contact Icons */}
//         <div className="flex gap-6 mt-8 text-xl">
//           <a href="mailto:0112cs221147@gmail.com" className="hover:text-blue-500"><FaEnvelope /></a>
//           <a href="tel:+916261396410" className="hover:text-green-600"><FaPhone /></a>
//           <a href="https://linkedin.com/in/tushartandekar" target="_blank" rel="noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
//           <a href="https://github.com/CS147-Tushar" target="_blank" rel="noreferrer" className="hover:text-gray-900"><FaGithub /></a>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-16 px-6 bg-white shadow-sm">
//         <h2 className="text-3xl font-bold mb-6 border-b pb-2">About Me</h2>
//         <p className="max-w-3xl">
//           I am a final-year Computer Science and Engineering student from Bansal
//           Institute of Science & Technology, Bhopal. With a strong foundation in
//           programming and product development, I enjoy designing, prototyping,
//           and building features that combine functionality with great user
//           experience.
//         </p>
//       </section>

//       {/* Skills Section */}
//       <section id="skills" className="py-16 px-6">
//         <h2 className="text-3xl font-bold mb-6 border-b pb-2">Skills</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
//           {["React.js","React Native","Node.js","PHP Laravel","SQL","API Design & Integration","UI/UX Design","Java","DSA & DBMS"].map((skill, idx) => (
//             <motion.div key={idx} whileHover={{ scale: 1.05 }} className="p-3 border rounded-lg shadow-sm bg-gray-100 text-center">
//               {skill}
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-16 px-6 bg-white shadow-sm">
//         <h2 className="text-3xl font-bold mb-6 border-b pb-2">Projects</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           <motion.div whileHover={{ scale: 1.03 }} className="border rounded-lg p-6 shadow">
//             <h3 className="text-xl font-bold">Food Recipe Website</h3>
//             <p className="mt-2 text-gray-600">
//               A responsive platform to explore and search recipes with engaging UI.
//             </p>
//             <p className="text-sm mt-2 text-gray-500">Tech: HTML, CSS, JavaScript</p>
//             <a href="https://your-project-link-1.com" className="inline-block mt-3 text-blue-600 underline">Live Demo</a>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.03 }} className="border rounded-lg p-6 shadow">
//             <h3 className="text-xl font-bold">Nature Moment Recorder</h3>
//             <p className="mt-2 text-gray-600">
//               Interactive platform to record and revisit natural moments with clean UI.
//             </p>
//             <p className="text-sm mt-2 text-gray-500">Tech: React, Java (Backend)</p>
//             <a href="https://your-project-link-2.com" className="inline-block mt-3 text-blue-600 underline">Live Demo</a>
//           </motion.div>
//         </div>
//       </section>

//       {/* Experience Section */}
//       <section id="experience" className="py-16 px-6">
//         <h2 className="text-3xl font-bold mb-6 border-b pb-2">Experience</h2>
//         <div className="border rounded-lg p-6 shadow">
//           <h3 className="text-xl font-bold">MotionCut – Frontend Developer Intern</h3>
//           <p className="mt-2 text-gray-600">
//             Built responsive and visually appealing web pages during a 1-month
//             virtual internship. Tech stack: HTML, CSS, JavaScript.
//           </p>
//         </div>
//       </section>

//       {/* Certifications Section */}
//       <section id="certifications" className="py-16 px-6 bg-white shadow-sm">
//         <h2 className="text-3xl font-bold mb-6 border-b pb-2">Certifications</h2>
//         <ul className="list-disc ml-6 space-y-2">
//           <li>
//             Python Programming — Finessefleet Foundation{" "}
//             <a href="https://cs1010.finessefleet.com/certificates-spring2025/2025CSMOOC0674.pdf" className="text-blue-600 underline">Link</a>
//           </li>
//           <li>
//             Security Analyst Training — Reliance Foundation{" "}
//             <a href="https://www.linkedin.com/posts/tushartandekar_security-analyst-certificate-activity-7287525091821690880-oUmQ" className="text-blue-600 underline">Link</a>
//           </li>
//           <li>
//             Problem Solving (Basic) — HackerRank{" "}
//             <a href="https://www.hackerrank.com/certificates/iframe/50cf975eb8b6" className="text-blue-600 underline">Link</a>
//           </li>
//         </ul>
//       </section>

//       {/* Education Section */}
//       <section id="education" className="py-16 px-6">
//         <h2 className="text-3xl font-bold mb-6 border-b pb-2">Education</h2>
//         <ul className="space-y-2">
//           <li>B.Tech in CSE — Bansal Institute of Science & Technology, Bhopal (CGPA: 6.78 till 6th sem)</li>
//           <li>Class XII (2022): 85.6%</li>
//           <li>Class X (2020): 80.33%</li>
//         </ul>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-16 px-6 bg-gray-100 text-center">
//         <h2 className="text-3xl font-bold mb-6 border-b pb-2">Contact Me</h2>
//         <p>Email: <a href="mailto:0112cs221147@gmail.com" className="underline text-blue-600">0112cs221147@gmail.com</a></p>
//         <p>Phone: <a href="tel:+916261396410" className="underline text-blue-600">+91-6261396410</a></p>
//         <p>
//           <a href="https://linkedin.com/in/tushartandekar" className="underline text-blue-600">LinkedIn</a> |{" "}
//           <a href="https://github.com/CS147-Tushar" className="underline text-blue-600">GitHub</a>
//         </p>
//       </section>
//     </div>
//   );
// };

// export default App;
