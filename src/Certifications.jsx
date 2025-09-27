const certs = [
    { title: "Python Programming", org: "Finessefleet Foundation", link: "https://cs1010.finessefleet.com/certificates-spring2025/2025CSMOOC0674.pdf" },
    { title: "Security Analyst Training", org: "Reliance Foundation", link: "https://www.linkedin.com/posts/tushartandekar_security-analyst-certificate-activity-7287525091821690880-oUmQ" },
    { title: "Problem Solving (Basic)", org: "HackerRank", link: "https://www.hackerrank.com/certificates/iframe/50cf975eb8b6" },
];

const Certifications = () => {
    return (
        <section id="certifications" className="py-16 px-6 bg-white">
            <h2 className="text-3xl font-bold mb-10 text-center">Certifications</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {certs.map((c, idx) => (
                    <div key={idx} className="p-6 bg-gray-50 border rounded-lg shadow hover:shadow-lg transition">
                        <h3 className="font-semibold">{c.title}</h3>
                        <p className="text-sm text-gray-500">{c.org}</p>
                        <a href={c.link} className="text-blue-600 underline mt-2 inline-block">View Certificate</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
