import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 
                 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white"
        >
            {/* Profile Image */}
            <motion.img
                src="https://via.placeholder.com/150" 
                alt="Profile"
                className="w-40 h-40 rounded-full shadow-lg border-4 border-white mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8 }}
            />

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-extrabold drop-shadow-lg"
            >
                Tushar Tande
            </motion.h1>

            {/* Typing Animation */}
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="mt-4 text-2xl font-semibold"
            >
                <Typewriter
                    words={[
                        "Product Developer Intern",
                        "Frontend Developer",
                        "UI/UX Enthusiast",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                />
            </motion.h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg">
                Passionate about turning ideas into impactful products through design,
                prototyping, and code.
            </p>

            {/* Contact Icons */}
            <div className="flex gap-6 mt-8 text-2xl">
                <a href="mailto:0112cs221147@gmail.com" className="hover:text-yellow-300">
                    <FaEnvelope />
                </a>
                <a href="tel:+916261396410" className="hover:text-green-300">
                    <FaPhone />
                </a>
                <a
                    href="https://linkedin.com/in/tushartandekar"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-blue-300"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/CS147-Tushar"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-gray-200"
                >
                    <FaGithub />
                </a>
            </div>
        </section>
    );
};

export default Hero;
