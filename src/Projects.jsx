import { motion } from "framer-motion";

const projects = [
    {
        title: "Food Recipe Website",
        description: "A responsive platform to explore and search recipes with engaging UI.",
        tech: "HTML, CSS, JavaScript",
        live: "https://your-project-link-1.com",
        github: "https://github.com/CS147-Tushar",
        img: "https://via.placeholder.com/400x250?text=Food+Recipe" // Replace with screenshot
    },
    {
        title: "Nature Moment Recorder",
        description: "Interactive platform to record and revisit natural moments.",
        tech: "React, Java (Backend)",
        live: "https://your-project-link-2.com",
        github: "https://github.com/CS147-Tushar",
        img: "https://via.placeholder.com/400x250?text=Nature+Recorder"
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-16 px-6 bg-gradient-to-b from-gray-100 to-white">
            <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {projects.map((p, idx) => (
                    <motion.div
                        key={idx}
                        whileHover={{ scale: 1.03 }}
                        className="border rounded-xl overflow-hidden shadow-md hover:shadow-xl transition bg-white"
                    >
                        <img src={p.img} alt={p.title} className="w-full h-48 object-cover" />
                        <div className="p-6">
                            <h3 className="text-xl font-bold">{p.title}</h3>
                            <p className="mt-2 text-gray-600">{p.description}</p>
                            <p className="text-sm mt-2 text-gray-500">Tech: {p.tech}</p>
                            <div className="mt-4 flex gap-4">
                                <a href={p.live} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Live Demo</a>
                                <a href={p.github} className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-black">GitHub</a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
